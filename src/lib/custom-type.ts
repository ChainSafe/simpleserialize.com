import {
  type BasicType,
  BitListType,
  BitVectorType,
  BooleanType,
  ByteListType,
  ByteVectorType,
  type CompositeTypeAny,
  ContainerType,
  ListBasicType,
  ListCompositeType,
  type Type,
  UintBigintType,
  UintNumberType,
  VectorBasicType,
  VectorCompositeType,
  isBasicType,
} from "@chainsafe/ssz";
import * as params from "@lodestar/params";
import {forks} from "./types";

const RESOLVE_FORK = "fulu";

const PRIMITIVES: Record<string, () => Type<unknown>> = {
  uint8: () => new UintNumberType(1),
  uint16: () => new UintNumberType(2),
  uint32: () => new UintNumberType(4),
  uint64: () => new UintBigintType(8),
  uint128: () => new UintBigintType(16),
  uint256: () => new UintBigintType(32),
  boolean: () => new BooleanType(),
};

type GenArg = {kind: "num"; value: bigint} | {kind: "expr"; expr: TypeExpr};
type TypeExpr = {kind: "ident"; name: string} | {kind: "generic"; head: string; args: GenArg[]};
type ParsedField = {name: string; type: TypeExpr; line: number};
type ParsedClass = {name: string; fields: ParsedField[]; line: number};

export type CompileResult = {ok: true; types: Map<string, Type<unknown>>; order: string[]} | {ok: false; error: string};

export function compileCustomDsl(dsl: string): CompileResult {
  try {
    const classes = parseDsl(dsl);
    if (classes.length === 0) return {ok: false, error: "no classes defined"};

    const customs = new Map<string, Type<unknown>>();
    const order: string[] = [];
    const seen = new Set<string>();

    for (const c of classes) {
      if (seen.has(c.name)) {
        throw new Error(`line ${c.line}: duplicate class '${c.name}'`);
      }
      seen.add(c.name);

      const fields: Record<string, Type<unknown>> = {};
      for (const f of c.fields) {
        try {
          fields[f.name] = buildExpr(f.type, customs);
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          throw new Error(`line ${f.line}: ${msg}`);
        }
      }
      customs.set(c.name, new ContainerType(fields, {typeName: c.name}));
      order.push(c.name);
    }

    return {ok: true, types: customs, order};
  } catch (e) {
    return {ok: false, error: e instanceof Error ? e.message : String(e)};
  }
}

function parseDsl(dsl: string): ParsedClass[] {
  const lines = dsl.split("\n");
  const classes: ParsedClass[] = [];
  let current: ParsedClass | null = null;

  const classRe = /^class\s+([A-Za-z_]\w*)\s*\(\s*Container\s*\)\s*:\s*$/;
  const fieldRe = /^\s+([A-Za-z_]\w*)\s*:\s*(.+?)\s*$/;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const cmt = line.indexOf("#");
    if (cmt >= 0) line = line.slice(0, cmt);
    if (!line.trim()) continue;

    const mClass = classRe.exec(line);
    if (mClass) {
      if (current) classes.push(current);
      current = {name: mClass[1], fields: [], line: i + 1};
      continue;
    }

    if (!current) throw new Error(`line ${i + 1}: expected 'class Name(Container):' header`);

    const mField = fieldRe.exec(line);
    if (!mField) throw new Error(`line ${i + 1}: invalid field syntax`);
    current.fields.push({name: mField[1], type: parseTypeExpr(mField[2]), line: i + 1});
  }
  if (current) classes.push(current);
  return classes;
}

function parseTypeExpr(src: string): TypeExpr {
  const p = new ExprParser(src);
  const expr = p.expr();
  p.skipWs();
  if (p.i < p.src.length) throw new Error(`unexpected '${p.src.slice(p.i)}'`);
  return expr;
}

class ExprParser {
  i = 0;
  src: string;
  constructor(src: string) {
    this.src = src;
  }

  skipWs(): void {
    while (this.i < this.src.length && /\s/.test(this.src[this.i])) this.i++;
  }

  expr(): TypeExpr {
    this.skipWs();
    const name = this.readIdent();
    this.skipWs();
    if (this.src[this.i] !== "[") return {kind: "ident", name};
    this.i++;
    const args: GenArg[] = [];
    while (true) {
      this.skipWs();
      args.push(this.readArg());
      this.skipWs();
      if (this.src[this.i] === ",") {
        this.i++;
        continue;
      }
      if (this.src[this.i] === "]") {
        this.i++;
        break;
      }
      throw new Error(`expected ',' or ']' near '${this.src.slice(this.i, this.i + 16)}'`);
    }
    return {kind: "generic", head: name, args};
  }

  readArg(): GenArg {
    this.skipWs();
    if (/\d/.test(this.src[this.i] ?? "")) {
      return {kind: "num", value: this.readNumber()};
    }
    const save = this.i;
    const id = this.readIdent();
    this.skipWs();
    if (this.src[this.i] === "[") {
      this.i = save;
      return {kind: "expr", expr: this.expr()};
    }
    return {kind: "expr", expr: {kind: "ident", name: id}};
  }

  readIdent(): string {
    const m = /^[A-Za-z_]\w*/.exec(this.src.slice(this.i));
    if (!m) throw new Error(`expected identifier at '${this.src.slice(this.i, this.i + 16)}'`);
    this.i += m[0].length;
    return m[0];
  }

  readNumber(): bigint {
    const m = /^\d+/.exec(this.src.slice(this.i));
    if (!m) throw new Error("expected number");
    this.i += m[0].length;
    return BigInt(m[0]);
  }
}

function buildExpr(expr: TypeExpr, customs: Map<string, Type<unknown>>): Type<unknown> {
  if (expr.kind === "ident") return resolveIdent(expr.name, customs);
  const {head, args} = expr;
  switch (head) {
    case "List": {
      if (args.length !== 2) throw new Error("List takes 2 args: [elemType, limit]");
      const elem = buildExpr(asExpr(args[0]), customs);
      const limit = Number(asSize(args[1]));
      return isBasicType(elem)
        ? new ListBasicType(elem as BasicType<unknown>, limit)
        : new ListCompositeType(elem as CompositeTypeAny, limit);
    }
    case "Vector": {
      if (args.length !== 2) throw new Error("Vector takes 2 args: [elemType, length]");
      const elem = buildExpr(asExpr(args[0]), customs);
      const length = Number(asSize(args[1]));
      return isBasicType(elem)
        ? new VectorBasicType(elem as BasicType<unknown>, length)
        : new VectorCompositeType(elem as CompositeTypeAny, length);
    }
    case "Bitlist": {
      if (args.length !== 1) throw new Error("Bitlist takes 1 arg: [limit]");
      return new BitListType(Number(asSize(args[0])));
    }
    case "Bitvector": {
      if (args.length !== 1) throw new Error("Bitvector takes 1 arg: [length]");
      return new BitVectorType(Number(asSize(args[0])));
    }
    case "ByteList": {
      if (args.length !== 1) throw new Error("ByteList takes 1 arg: [limit]");
      return new ByteListType(Number(asSize(args[0])));
    }
    case "ByteVector": {
      if (args.length !== 1) throw new Error("ByteVector takes 1 arg: [length]");
      return new ByteVectorType(Number(asSize(args[0])));
    }
    default:
      throw new Error(`unknown generic '${head}'`);
  }
}

function asExpr(a: GenArg): TypeExpr {
  if (a.kind === "expr") return a.expr;
  throw new Error("expected type expression, got number literal");
}

function asSize(a: GenArg): bigint {
  if (a.kind === "num") return a.value;
  if (a.expr.kind === "ident") return resolveConst(a.expr.name);
  throw new Error("expected integer literal or constant identifier");
}

function resolveIdent(name: string, customs: Map<string, Type<unknown>>): Type<unknown> {
  const c = customs.get(name);
  if (c) return c;
  const prim = PRIMITIVES[name];
  if (prim) return prim();
  const fork = forks[RESOLVE_FORK];
  if (fork?.[name]) return fork[name];
  throw new Error(`unknown type '${name}'`);
}

function resolveConst(name: string): bigint {
  const v = (params as Record<string, unknown>)[name];
  if (typeof v === "number" && Number.isFinite(v) && Number.isInteger(v) && v >= 0) return BigInt(v);
  if (typeof v === "bigint" && v >= 0n) return v;
  throw new Error(`unknown constant '${name}'`);
}
