import {
  ContainerType,
  ListBasicType,
  ListCompositeType,
  type Type,
  UintBigintType,
  UintNumberType,
  VectorBasicType,
  VectorCompositeType,
} from "@chainsafe/ssz";
import {ssz} from "@lodestar/types";

const {
  phase0: _phase0,
  altair: _altair,
  bellatrix: _bellatrix,
  capella: _capella,
  deneb: _deneb,
  electra: _electra,
  fulu: _fulu,
  sszTypesFor: _sszTypesFor,
  gloas: _gloas,
  ...primitive0
} = ssz;

let phase0 = _phase0;
let altair = _altair;
let bellatrix = _bellatrix;
let capella = _capella;
let deneb = _deneb;
let electra = _electra;
let fulu = _fulu;

phase0 = patchSszTypes(phase0);
altair = patchSszTypes(altair);
bellatrix = patchSszTypes(bellatrix);
capella = patchSszTypes(capella);
deneb = patchSszTypes(deneb);
electra = patchSszTypes(electra);
fulu = patchSszTypes(fulu);
const primitive = patchSszTypes(primitive0);

export const forks = {
  phase0: {...phase0, ...primitive},
  altair: {...phase0, ...altair, ...primitive},
  bellatrix: {...phase0, ...altair, ...bellatrix, ...primitive},
  capella: {...phase0, ...altair, ...bellatrix, ...capella, ...primitive},
  deneb: {...phase0, ...altair, ...bellatrix, ...capella, ...deneb, ...primitive},
  electra: {...phase0, ...altair, ...bellatrix, ...capella, ...deneb, ...electra, ...primitive},
  fulu: {...phase0, ...altair, ...bellatrix, ...capella, ...deneb, ...electra, ...fulu, ...primitive},
} as unknown as Record<string, Record<string, Type<unknown>>>;

export type ForkName = keyof typeof forks | "custom";

export const CUSTOM_FORK = "custom";

export const forkNames = [...Object.keys(forks), CUSTOM_FORK];

export function typeNames(types: Record<string, Type<unknown>>): string[] {
  return Object.keys(types).sort();
}

/**
 * Patch SSZ types to support the full uint64 range on the website.
 * Recursively replaces all 8-byte UintNumberType with UintBigintType.
 */
function patchSszTypes<T extends Record<keyof T, Type<unknown>>>(sszTypes: T): T {
  const types = {...sszTypes};
  for (const key of Object.keys(types) as (keyof typeof types)[]) {
    types[key] = replaceUintTypeWithUintBigintType(types[key]);
  }
  return types;
}

function replaceUintTypeWithUintBigintType<T extends Type<unknown>>(type: T): T {
  if (type instanceof UintNumberType && type.byteLength === 8) {
    return new UintBigintType(type.byteLength) as unknown as T;
  }
  if (type instanceof ContainerType) {
    const fields = {...type.fields};
    for (const key of Object.keys(fields) as (keyof typeof fields)[]) {
      fields[key] = replaceUintTypeWithUintBigintType(fields[key]);
    }
    return new ContainerType(fields, type.opts) as unknown as T;
  }
  if (type instanceof ListBasicType) {
    return new ListBasicType(replaceUintTypeWithUintBigintType(type.elementType), type.limit) as unknown as T;
  }
  if (type instanceof VectorBasicType) {
    return new VectorBasicType(replaceUintTypeWithUintBigintType(type.elementType), type.length) as unknown as T;
  }
  if (type instanceof ListCompositeType) {
    return new ListCompositeType(replaceUintTypeWithUintBigintType(type.elementType), type.limit) as unknown as T;
  }
  if (type instanceof VectorCompositeType) {
    return new VectorCompositeType(replaceUintTypeWithUintBigintType(type.elementType), type.length) as unknown as T;
  }
  return type;
}
