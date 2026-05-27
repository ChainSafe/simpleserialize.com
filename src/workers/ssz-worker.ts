// Buffer polyfill MUST be set before SSZ libs load (they use Buffer.allocUnsafe).
// Comlink is safe to import statically — it doesn't touch Buffer.
import {Buffer} from "buffer";
(globalThis as Record<string, unknown>).Buffer = Buffer;

import * as Comlink from "comlink";

// Lazy-load SSZ libraries via dynamic import so they resolve
// AFTER the Buffer polyfill assignment above has executed.
const libs = (async () => {
  const [{fromHexString}, {inputFormats}, {forks}, {compileCustomDsl}] = await Promise.all([
    import("@chainsafe/ssz"),
    import("../lib/formats"),
    import("../lib/types"),
    import("../lib/custom-type"),
  ]);
  return {fromHexString, inputFormats, forks, compileCustomDsl};
})();

type Type<T> = import("@chainsafe/ssz").Type<T>;

export const CUSTOM_FORK = "custom";

let customTypes: Map<string, Type<unknown>> = new Map();

function getType(
  types: Record<string, Record<string, Type<unknown>>>,
  typeName: string,
  forkName: string
): Type<unknown> {
  if (forkName === CUSTOM_FORK) {
    const t = customTypes.get(typeName);
    if (!t) throw new Error(`custom type '${typeName}' not registered`);
    return t;
  }
  return types[forkName][typeName];
}

const worker = {
  async serialize(typeName: string, forkName: string, input: string, inputFormat: string) {
    const {inputFormats, forks} = await libs;
    const type = getType(forks, typeName, forkName);
    const parsed = inputFormats[inputFormat].parse(input, type);
    const serialized = type.serialize(parsed);
    const hashTreeRoot = type.hashTreeRoot(parsed);
    return Comlink.transfer({serialized, hashTreeRoot}, [serialized.buffer, hashTreeRoot.buffer]);
  },

  async deserialize(typeName: string, forkName: string, data: string, inputFormat: string) {
    const {fromHexString, forks} = await libs;
    const type = getType(forks, typeName, forkName);
    let bytes: Uint8Array;
    if (inputFormat === "base64") {
      const binstr = atob(data);
      bytes = Uint8Array.from(binstr, (ch) => ch.charCodeAt(0));
    } else {
      bytes = fromHexString(data);
    }
    const deserialized = type.deserialize(bytes);
    return {deserialized};
  },

  async defaultValue(typeName: string, forkName: string) {
    const {forks} = await libs;
    const type = getType(forks, typeName, forkName);
    const value = type.defaultValue();
    return {value};
  },

  async compileCustom(dsl: string): Promise<{ok: true; order: string[]} | {ok: false; error: string}> {
    const {compileCustomDsl} = await libs;
    const result = compileCustomDsl(dsl);
    if (!result.ok) return {ok: false, error: result.error};
    customTypes = result.types;
    return {ok: true, order: result.order};
  },
};

export type SszWorkerApi = {
  serialize(
    typeName: string,
    forkName: string,
    input: string,
    inputFormat: string
  ): Promise<{serialized: Uint8Array; hashTreeRoot: Uint8Array}>;
  deserialize(typeName: string, forkName: string, data: string, inputFormat: string): Promise<{deserialized: unknown}>;
  defaultValue(typeName: string, forkName: string): Promise<{value: unknown}>;
  compileCustom(dsl: string): Promise<{ok: true; order: string[]} | {ok: false; error: string}>;
};

// Expose synchronously — Comlink is statically imported so this runs immediately.
Comlink.expose(worker);
