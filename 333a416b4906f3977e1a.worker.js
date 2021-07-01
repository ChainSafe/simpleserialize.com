/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 206);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  hash: true
};
Object.defineProperty(exports, "hash", {
  enumerable: true,
  get: function get() {
    return _compat.hash;
  }
});

var _interface = __webpack_require__(158);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _types = __webpack_require__(94);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _backings = __webpack_require__(56);

Object.keys(_backings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _backings[key];
    }
  });
});

var _compat = __webpack_require__(59);

var _byteArray = __webpack_require__(17);

Object.keys(_byteArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _byteArray[key];
    }
  });
});

var _tree = __webpack_require__(97);

Object.keys(_tree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tree[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(19);
var hide = __webpack_require__(8);
var redefine = __webpack_require__(11);
var ctx = __webpack_require__(32);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(65);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypeOf = isTypeOf;
exports.Type = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/camelcase */

/**
 * Check if `type` is an instance of `typeSymbol` type
 *
 * Used by various isFooType functions
 */
function isTypeOf(type, typeSymbol) {
  return type._typeSymbols.has(typeSymbol);
}
/**
 * A Type is either a BasicType of a CompositeType
 */


class Type {
  /**
   * Symbols used to track the identity of a type
   *
   * Used by various isFooType functions
   */
  constructor() {
    _defineProperty(this, "_typeSymbols", void 0);

    this._typeSymbols = new Set();
  }

  /**
   * Valid value assertion
   */
  assertValidValue(value) {
    return this.struct_assertValidValue(value);
  }
  /**
   * Default constructor
   */


  defaultValue() {
    return this.struct_defaultValue();
  }
  /**
   * Clone / copy
   */


  clone(value) {
    return this.struct_clone(value);
  }
  /**
   * Equality
   */


  equals(value1, value2) {
    return this.struct_equals(value1, value2);
  } // Serialization / Deserialization

  /**
   * Check if type has a variable number of elements (or subelements)
   *
   * For basic types, this is always false
   */


  /**
   * Serialized byte length
   */
  size(value) {
    return this.struct_getSerializedLength(value);
  }
  /**
   * Low-level deserialization
   */


  fromBytes(data, start, end) {
    return this.struct_deserializeFromBytes(data, start, end);
  }
  /**
   * Deserialization
   */


  deserialize(data) {
    return this.fromBytes(data, 0, data.length);
  }
  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */


  toBytes(value, output, offset) {
    return this.struct_serializeToBytes(value, output, offset);
  }
  /**
   * Serialization
   */


  serialize(value) {
    const output = new Uint8Array(this.size(value));
    this.toBytes(value, output, 0);
    return output;
  }
  /**
   * Merkleization
   */


  hashTreeRoot(value) {
    return this.struct_hashTreeRoot(value);
  }
  /**
   * Convert from JSON-serializable object
   */


  fromJson(data, options) {
    return this.struct_convertFromJson(data, options);
  }
  /**
   * Convert to JSON-serializable object
   */


  toJson(value, options) {
    return this.struct_convertToJson(value, options);
  }

}

exports.Type = Type;
//# sourceMappingURL=type.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(44);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(8);
var has = __webpack_require__(12);
var SRC = __webpack_require__(16)('src');
var $toString = __webpack_require__(114);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(19).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(72);
var defined = __webpack_require__(44);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHexString = toHexString;
exports.fromHexString = fromHexString;
exports.byteArrayEquals = byteArrayEquals;
exports.getByteBits = getByteBits;
// Caching this info costs about ~1000 bytes and speeds up toHexString() by x6
const hexByByte = [];

function toHexString(bytes) {
  let hex = "0x";

  for (const byte of bytes) {
    if (!hexByByte[byte]) {
      hexByByte[byte] = byte < 16 ? "0" + byte.toString(16) : byte.toString(16);
    }

    hex += hexByByte[byte];
  }

  return hex;
}

function fromHexString(hex) {
  if (typeof hex !== "string") {
    throw new Error("Expected hex string to be a string");
  }

  if (hex.startsWith("0x")) {
    hex = hex.slice(2);
  }

  if (hex.length % 2 !== 0) {
    throw new Error("Expected an even number of characters");
  }

  const bytes = [];

  for (let i = 0, len = hex.length; i < len; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    bytes.push(byte);
  }

  return new Uint8Array(bytes);
}

function byteArrayEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function getByteBits(target, offset) {
  const byte = target[offset];

  if (!byte) {
    return [false, false, false, false, false, false, false, false];
  }

  const bits = Array.prototype.map.call(byte.toString(2).padStart(8, "0"), c => c === "1" ? true : false).reverse();
  return bits;
}
//# sourceMappingURL=byteArray.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(71);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstract = __webpack_require__(54);

Object.keys(_abstract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abstract[key];
    }
  });
});

var _boolean = __webpack_require__(95);

Object.keys(_boolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _boolean[key];
    }
  });
});

var _uint = __webpack_require__(96);

Object.keys(_uint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uint[key];
    }
  });
});

var _wellKnown = __webpack_require__(159);

Object.keys(_wellKnown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wellKnown[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.identity = exports.LeafNode = exports.BranchNode = exports.Node = void 0;
const hash_1 = __webpack_require__(98);
const ERR_INVALID_TREE = "Invalid tree";
const ERR_NOT_IMPLEMENTED = "Not implemented";
class Node {
    get root() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    isLeaf() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    get left() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    get right() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rebindLeft(left) {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rebindRight(right) {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
}
exports.Node = Node;
class BranchNode extends Node {
    constructor(_left, _right) {
        super();
        this._left = _left;
        this._right = _right;
        this._root = null;
        if (!_left || !_right)
            throw new Error(ERR_INVALID_TREE);
    }
    get root() {
        if (!this._root) {
            this._root = hash_1.hash(this.left.root, this.right.root);
        }
        return this._root;
    }
    isLeaf() {
        return false;
    }
    get left() {
        return this._left;
    }
    set left(n) {
        this._left = n;
    }
    get right() {
        return this._right;
    }
    set right(n) {
        this._right = n;
    }
    rebindLeft(left) {
        return new BranchNode(left, this.right);
    }
    rebindRight(right) {
        return new BranchNode(this.left, right);
    }
}
exports.BranchNode = BranchNode;
class LeafNode extends Node {
    constructor(_root) {
        super();
        this._root = _root;
        if (_root.length !== 32)
            throw new Error(ERR_INVALID_TREE);
    }
    get root() {
        return this._root;
    }
    isLeaf() {
        return true;
    }
}
exports.LeafNode = LeafNode;
function identity(n) {
    return n;
}
exports.identity = identity;
function compose(inner, outer) {
    return function (n) {
        return outer(inner(n));
    };
}
exports.compose = compose;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(71);
var hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(98), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(170), exports);
__exportStar(__webpack_require__(171), exports);
__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(167)
var ieee754 = __webpack_require__(168)
var isArray = __webpack_require__(169)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(166)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ssz: true
};
exports.ssz = void 0;

var _types = __webpack_require__(148);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _ssz = _interopRequireWildcard(__webpack_require__(204));

exports.ssz = _ssz;

var _StringType = __webpack_require__(205);

Object.keys(_StringType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _StringType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StringType[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(19);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(122);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(23);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(75)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=types.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(149));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(153));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTreeBacked = isTreeBacked;
exports.createTreeBacked = createTreeBacked;
exports.getTreeValueClass = getTreeValueClass;
exports.proxyWrapTreeValue = proxyWrapTreeValue;
exports.ContainerTreeValue = exports.CompositeListTreeValue = exports.BasicListTreeValue = exports.CompositeArrayTreeValue = exports.BasicArrayTreeValue = exports.TreeValue = exports.TreeProxyHandler = void 0;

var _types = __webpack_require__(94);

var _byteArray = __webpack_require__(17);

var _tree = __webpack_require__(97);

let _Symbol$iterator;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isTreeBacked(value) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return value && value.type && value.tree && (0, _tree.isTree)(value.tree);
}
/**
 * Return an ES6 Proxy-wrapped tree value (ergonomic getter/setter/iteration)
 */


function createTreeBacked(type, tree) {
  const TreeValueClass = getTreeValueClass(type);
  return proxyWrapTreeValue(new TreeValueClass(type, tree));
}

function getTreeValueClass(type) {
  if ((0, _types.isListType)(type)) {
    if ((0, _types.isBasicType)(type.elementType)) {
      return BasicListTreeValue;
    } else {
      return CompositeListTreeValue;
    }
  } else if ((0, _types.isVectorType)(type)) {
    if ((0, _types.isBasicType)(type.elementType)) {
      return BasicArrayTreeValue;
    } else {
      return CompositeArrayTreeValue;
    }
  } else if ((0, _types.isContainerType)(type)) {
    return ContainerTreeValue;
  }
}
/**
 * Wrap a TreeValue in a Proxy that adds ergonomic getter/setter
 */


function proxyWrapTreeValue(value) {
  return new Proxy(value, TreeProxyHandler);
}
/**
 * Proxy handler that adds ergonomic get/set and exposes TreeValue methods
 */


const TreeProxyHandler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return target.getProperty(property);
    }
  },

  set(target, property, value) {
    return target.setProperty(property, value);
  },

  ownKeys(target) {
    return target.getPropertyNames();
  },

  getOwnPropertyDescriptor(target, property) {
    if (target.type.getPropertyType(property)) {
      return {
        configurable: true,
        enumerable: true,
        writable: true
      };
    } else {
      return undefined;
    }
  }

};
/**
 * Convenience wrapper around a type and tree
 */

exports.TreeProxyHandler = TreeProxyHandler;
_Symbol$iterator = Symbol.iterator;

class TreeValue {
  constructor(type, tree) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "tree", void 0);

    this.type = type;
    this.tree = tree;
  }

  clone() {
    const TreeValueClass = Object.getPrototypeOf(this).constructor;
    return proxyWrapTreeValue(new TreeValueClass(this.type, this.tree.clone()));
  }

  valueOf() {
    return this.type.tree_convertToStruct(this.tree);
  }

  equals(other) {
    if (isTreeBacked(other)) {
      return (0, _byteArray.byteArrayEquals)(this.hashTreeRoot(), other.hashTreeRoot());
    } else {
      return this.type.struct_equals(this, other);
    }
  }

  size() {
    return this.type.tree_getSerializedLength(this.tree);
  }

  toStruct() {
    return this.type.tree_convertToStruct(this.tree);
  }

  toBytes(output, offset) {
    return this.type.tree_serializeToBytes(this.tree, output, offset);
  }

  serialize() {
    const output = new Uint8Array(this.type.tree_getSerializedLength(this.tree));
    this.toBytes(output, 0);
    return output;
  }

  hashTreeRoot() {
    return this.tree.root;
  }

  createProof(paths) {
    return this.type.tree_createProof(this.tree, paths);
  }

  getPropertyNames() {
    return this.type.tree_getPropertyNames(this.tree);
  }

  [_Symbol$iterator]() {
    return this.values();
  }

}

exports.TreeValue = TreeValue;

class BasicArrayTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    return this.type.tree_getProperty(this.tree, property);
  }

  setProperty(property, value) {
    return this.type.tree_setProperty(this.tree, property, value);
  }

  *keys() {
    const propNames = this.getPropertyNames(); // pop off "length"

    propNames.pop();
    yield* propNames.map(String);
  }

  values() {
    return this.type.tree_iterateValues(this.tree);
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.values()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

  readonlyValues() {
    return this.type.tree_readonlyIterateValues(this.tree);
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.readonlyValues()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

}

exports.BasicArrayTreeValue = BasicArrayTreeValue;

class CompositeArrayTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    if (property === "length") {
      return this.type.tree_getProperty(this.tree, property);
    }

    return createTreeBacked(this.type.elementType, this.type.tree_getProperty(this.tree, property));
  }

  setProperty(property, value) {
    return this.type.tree_setProperty(this.tree, property, isTreeBacked(value) ? value.tree : this.type.elementType.struct_convertToTree(value));
  }

  *keys() {
    const propNames = this.getPropertyNames(); // pop off "length"

    propNames.pop();
    yield* propNames.map(String);
  }

  *values() {
    for (const tree of this.type.tree_iterateValues(this.tree)) {
      yield createTreeBacked(this.type.elementType, tree);
    }
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.values()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

  *readonlyValues() {
    for (const tree of this.type.tree_readonlyIterateValues(this.tree)) {
      yield createTreeBacked(this.type.elementType, tree);
    }
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.readonlyValues()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

}

exports.CompositeArrayTreeValue = CompositeArrayTreeValue;

class BasicListTreeValue extends BasicArrayTreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  push(...values) {
    return this.type.tree_push(this.tree, ...values);
  }

  pop() {
    return this.type.tree_pop(this.tree);
  }

}

exports.BasicListTreeValue = BasicListTreeValue;

class CompositeListTreeValue extends CompositeArrayTreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  push(...values) {
    const convertedValues = values.map(value => isTreeBacked(value) ? value.tree : this.type.elementType.struct_convertToTree(value));
    return this.type.tree_push(this.tree, ...convertedValues);
  }

  pop() {
    return this.type.tree_pop(this.tree);
  }

}

exports.CompositeListTreeValue = CompositeListTreeValue;

class ContainerTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    if (!this.type.fields[property]) {
      return undefined;
    }

    const propType = this.type.getPropertyType(property);
    const propValue = this.type.tree_getProperty(this.tree, property);

    if ((0, _types.isCompositeType)(propType)) {
      return createTreeBacked(propType, propValue);
    } else {
      return propValue;
    }
  }

  setProperty(property, value) {
    const propType = this.type.getPropertyType(property);

    if ((0, _types.isCompositeType)(propType)) {
      if (isTreeBacked(value)) {
        return this.type.tree_setProperty(this.tree, property, value.tree);
      } else {
        return this.type.tree_setProperty(this.tree, property, propType.struct_convertToTree(value));
      }
    } else {
      return this.type.tree_setProperty(this.tree, property, value);
    }
  }

  *keys() {
    yield* this.getPropertyNames();
  }

  *values() {
    for (const [_key, value] of this.entries()) {
      yield value;
    }
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.type.tree_iterateValues(this.tree)) {
      const propName = keys[i];
      const propType = this.type.getPropertyType(propName);

      if ((0, _types.isCompositeType)(propType)) {
        yield [propName, createTreeBacked(propType, value)];
      } else {
        yield [propName, value];
      }

      i++;
    }
  }

  *readonlyValues() {
    for (const [_key, value] of this.readonlyEntries()) {
      yield value;
    }
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.type.tree_readonlyIterateValues(this.tree)) {
      const propName = keys[i];
      const propType = this.type.getPropertyType(propName);

      if ((0, _types.isCompositeType)(propType)) {
        yield [propName, createTreeBacked(propType, value)];
      } else {
        yield [propName, value];
      }

      i++;
    }
  }

}

exports.ContainerTreeValue = ContainerTreeValue;
//# sourceMappingURL=treeValue.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gindexChild = exports.gindexParent = exports.gindexSibling = exports.concatGindices = exports.gindexIterator = exports.iterateAtDepth = exports.countToDepth = exports.toGindexBitstring = exports.toGindex = exports.bitIndexBigInt = void 0;
function bitIndexBigInt(v) {
    return v.toString(2).length - 1;
}
exports.bitIndexBigInt = bitIndexBigInt;
function toGindex(depth, index) {
    const anchor = BigInt(1) << BigInt(depth);
    if (index >= anchor) {
        throw new Error("index too large for depth");
    }
    return anchor | index;
}
exports.toGindex = toGindex;
function toGindexBitstring(depth, index) {
    const str = index ? index.toString(2) : "";
    if (str.length > depth) {
        throw new Error("index too large for depth");
    }
    else {
        return "1" + str.padStart(depth, "0");
    }
}
exports.toGindexBitstring = toGindexBitstring;
// Get the depth (root starting at 0) necessary to cover a subtree of `count` elements.
// (in out): (0 0), (1 0), (2 1), (3 2), (4 2), (5 3), (6 3), (7 3), (8 3), (9 4)
function countToDepth(count) {
    if (count <= 1) {
        return 0;
    }
    return (count - BigInt(1)).toString(2).length;
}
exports.countToDepth = countToDepth;
/**
 * Iterate through Gindexes at a certain depth
 */
function iterateAtDepth(depth, startIndex, count) {
    const anchor = BigInt(1) << BigInt(depth);
    if (startIndex + count > anchor) {
        throw new Error("Too large for depth");
    }
    let i = toGindex(depth, startIndex);
    const last = i + count;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (i < last) {
                        const value = i;
                        i++;
                        return { done: false, value };
                    }
                    else {
                        return { done: true, value: undefined };
                    }
                },
            };
        },
    };
}
exports.iterateAtDepth = iterateAtDepth;
const ERR_INVALID_GINDEX = "Invalid gindex";
function gindexIterator(gindex) {
    let bitstring;
    if (typeof gindex === "string") {
        if (!gindex.length) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex;
    }
    else {
        if (gindex < 1) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex.toString(2);
    }
    let i = 1;
    const next = () => {
        if (i === bitstring.length) {
            return { done: true, value: undefined };
        }
        const bit = Number(bitstring[i]);
        i++;
        return { done: false, value: bit };
    };
    return {
        [Symbol.iterator]() {
            return { next };
        },
        remainingBitLength() {
            return bitstring.length - i;
        },
    };
}
exports.gindexIterator = gindexIterator;
/**
 * Concatenate Generalized Indices
 * Given generalized indices i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, returns
 * the generalized index for A -> Z.
 */
function concatGindices(gindices) {
    return BigInt(gindices.reduce((acc, gindex) => acc + gindex.toString(2).slice(1), "0b1"));
}
exports.concatGindices = concatGindices;
function gindexSibling(gindex) {
    return gindex ^ BigInt(1);
}
exports.gindexSibling = gindexSibling;
function gindexParent(gindex) {
    return gindex / BigInt(2);
}
exports.gindexParent = gindexParent;
function gindexChild(gindex, rightChild) {
    return gindex * BigInt(2) + BigInt(rightChild);
}
exports.gindexChild = gindexChild;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(34);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(47);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(66)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(119).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(35);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(65);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(32);
var IObject = __webpack_require__(72);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(14);
var asc = __webpack_require__(127);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBasicType = isBasicType;
exports.BasicType = exports.BASIC_TYPE = void 0;

var _type = __webpack_require__(6);

/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/no-unused-vars */
const BASIC_TYPE = Symbol.for("ssz/BasicType");
exports.BASIC_TYPE = BASIC_TYPE;

function isBasicType(type) {
  return (0, _type.isTypeOf)(type, BASIC_TYPE);
}
/**
 * A BasicType is a terminal type, which has no flexibility in its representation.
 *
 * It is serialized as, at maximum, 32 bytes and merkleized as, at maximum, a single chunk
 */


class BasicType extends _type.Type {
  constructor() {
    super();

    this._typeSymbols.add(BASIC_TYPE);
  }

  struct_clone(value) {
    return value;
  }

  struct_equals(value1, value2) {
    this.assertValidValue(value1);
    this.assertValidValue(value2);
    return value1 === value2;
  }
  /**
   * Check if type has a variable number of elements (or subelements)
   *
   * For basic types, this is always false
   */


  hasVariableSerializedLength() {
    return false;
  }

  getMaxSerializedLength() {
    return this.struct_getSerializedLength();
  }

  getMinSerializedLength() {
    return this.struct_getSerializedLength();
  }

  bytes_validate(data, offset) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }

    if (data.length === 0) {
      throw new Error("Data is empty");
    }

    const length = data.length - offset;

    if (length < this.struct_getSerializedLength()) {
      throw new Error("Data length of ".concat(length, " is too small, expect ").concat(this.struct_getSerializedLength()));
    } // accept data length > this.size()

  }

  struct_hashTreeRoot(value) {
    const output = new Uint8Array(32);
    this.struct_serializeToBytes(value, output, 0);
    return output;
  }

}

exports.BasicType = BasicType;
//# sourceMappingURL=abstract.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCompositeType = isCompositeType;
exports.CompositeType = exports.COMPOSITE_TYPE = void 0;

var _backings = __webpack_require__(56);

var _type = __webpack_require__(6);

var _persistentMerkleTree = __webpack_require__(27);

var _compat = __webpack_require__(59);

var _byteArray = __webpack_require__(17);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COMPOSITE_TYPE = Symbol.for("ssz/CompositeType");
exports.COMPOSITE_TYPE = COMPOSITE_TYPE;

function isCompositeType(type) {
  return (0, _type.isTypeOf)(type, COMPOSITE_TYPE);
}
/**
 * A CompositeType is a type containing other types, and is flexible in its representation.
 *
 */


class CompositeType extends _type.Type {
  constructor() {
    super();

    _defineProperty(this, "_chunkDepth", void 0);

    _defineProperty(this, "_defaultNode", void 0);

    this._typeSymbols.add(COMPOSITE_TYPE);
  }

  tree_equals(tree1, tree2) {
    return (0, _byteArray.byteArrayEquals)(tree1.root, tree2.root);
  }

  bytes_equals(bytes1, bytes2) {
    return (0, _byteArray.byteArrayEquals)(bytes1, bytes2);
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  tree_clone(value) {
    return value.clone();
  }

  bytes_clone(value, start = 0, end = value.length) {
    const bytes = new Uint8Array(end - start);
    value.subarray(start, end).set(bytes);
    return bytes;
  }

  struct_serialize(struct, data) {
    const output = new Uint8Array(this.struct_getSerializedLength(struct));
    return this.struct_serializeToBytes(struct, output, 0);
  }

  tree_serialize(tree, data) {
    const output = new Uint8Array(this.tree_getSerializedLength(tree));
    return this.tree_serializeToBytes(tree, output, 0);
  }

  bytes_validate(data, start, end) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }

    if (data.length === 0) {
      throw new Error("Data is empty");
    }

    if (start < 0) {
      throw new Error("Start param is negative: ".concat(start));
    }

    if (start > data.length) {
      throw new Error("Start param: ".concat(start, " is greater than length: ").concat(data.length));
    }

    if (end < 0) {
      throw new Error("End param is negative: ".concat(end));
    }

    if (end > data.length) {
      throw new Error("End param: ".concat(end, " is greater than length: ").concat(data.length));
    }

    const length = end - start;

    if (!this.hasVariableSerializedLength() && length !== this.struct_getSerializedLength(null)) {
      throw new Error("Incorrect data length ".concat(length, ", expect ").concat(this.struct_getSerializedLength(null)));
    }

    if (end - start < this.getMinSerializedLength()) {
      throw new Error("Data length ".concat(length, " is too small, expect at least ").concat(this.getMinSerializedLength()));
    }
  }

  struct_deserialize(data) {
    return this.struct_deserializeFromBytes(data, 0, data.length);
  }

  tree_deserialize(data) {
    return this.tree_deserializeFromBytes(data, 0, data.length);
  }

  struct_getChunkCount(struct) {
    return this.getMaxChunkCount();
  }

  tree_getChunkCount(target) {
    return this.getMaxChunkCount();
  }

  *struct_yieldChunkRoots(struct) {
    const chunkCount = this.struct_getChunkCount(struct);

    for (let i = 0; i < chunkCount; i++) {
      yield this.struct_getRootAtChunkIndex(struct, i);
    }
  }

  getChunkDepth() {
    if (!this._chunkDepth) {
      this._chunkDepth = (0, _persistentMerkleTree.countToDepth)(BigInt(this.getMaxChunkCount()));
    }

    return this._chunkDepth;
  }

  getGindexAtChunkIndex(index) {
    return (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(index));
  }

  tree_getSubtreeAtChunkIndex(target, index) {
    return target.getSubtree(this.getGindexAtChunkIndex(index));
  }

  tree_setSubtreeAtChunkIndex(target, index, value, expand = false) {
    target.setSubtree(this.getGindexAtChunkIndex(index), value, expand);
  }

  tree_getRootAtChunkIndex(target, index) {
    return target.getRoot(this.getGindexAtChunkIndex(index));
  }

  tree_setRootAtChunkIndex(target, index, value, expand = false) {
    target.setRoot(this.getGindexAtChunkIndex(index), value, expand);
  }

  /**
   * Navigate to a subtype & gindex using a path
   */
  getPathInfo(path) {
    const gindices = [];
    let type = this;

    for (const prop of path) {
      if (!isCompositeType(type)) {
        throw new Error("Invalid path: cannot navigate beyond a basic type");
      }

      gindices.push(type.getPropertyGindex(prop));
      type = type.getPropertyType(prop);
    }

    return {
      type,
      gindex: (0, _persistentMerkleTree.concatGindices)(gindices)
    };
  }

  getPathGindex(path) {
    return this.getPathInfo(path).gindex;
  }
  /**
   * Get leaf gindices
   *
   * Note: This is a recursively called method.
   * Subtypes recursively call this method until basic types / leaf data is hit.
   *
   * @param target Used for variable-length types.
   * @param root Used to anchor the returned gindices to a non-root gindex.
   * This is used to augment leaf gindices in recursively-called subtypes relative to the type.
   * @returns The gindices corresponding to leaf data.
   */


  tree_createProof(target, paths) {
    const gindices = paths.map(path => {
      const {
        type,
        gindex
      } = this.getPathInfo(path);

      if (!isCompositeType(type)) {
        return gindex;
      } else {
        // if the path subtype is composite, include the gindices of all the leaves
        return type.tree_getLeafGindices(type.hasVariableSerializedLength() ? target.getSubtree(gindex) : undefined, gindex);
      }
    }).flat(1);
    return target.getProof({
      type: _persistentMerkleTree.ProofType.treeOffset,
      gindices
    });
  }

  tree_createFromProof(root, proof) {
    const tree = _persistentMerkleTree.Tree.createFromProof(proof);

    if (!(0, _byteArray.byteArrayEquals)(tree.root, root)) {
      throw new Error("Proof does not match trusted root");
    }

    return tree;
  }

  tree_createFromProofUnsafe(proof) {
    return _persistentMerkleTree.Tree.createFromProof(proof);
  }

  struct_hashTreeRoot(struct) {
    return (0, _compat.merkleize)(this.struct_yieldChunkRoots(struct), this.getMaxChunkCount());
  }

  tree_hashTreeRoot(tree) {
    return tree.root;
  } // convenience

  /**
   * Valid value assertion
   */


  assertValidValue(value) {
    this.struct_assertValidValue(value);
  }
  /**
   * Equality
   */


  equals(value1, value2) {
    if ((0, _backings.isBackedValue)(value1) && (0, _backings.isBackedValue)(value2)) {
      return value1.equals(value2);
    } else {
      return this.struct_equals(value1, value2);
    }
  }
  /**
   * Default constructor
   */


  defaultValue() {
    return this.struct_defaultValue();
  }
  /**
   * Clone / copy
   */


  clone(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.clone();
    } else {
      return this.struct_clone(value);
    }
  } // Serialization / Deserialization

  /**
   * Serialized byte length
   */


  size(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.size();
    } else {
      return this.struct_getSerializedLength(value);
    }
  }
  /**
   * Maximal serialized byte length
   */


  maxSize() {
    return this.getMaxSerializedLength();
  }
  /**
   * Minimal serialized byte length
   */


  minSize() {
    return this.getMinSerializedLength();
  }
  /**
   * Low-level deserialization
   */


  fromBytes(data, start, end) {
    return this.struct_deserializeFromBytes(data, start, end);
  }
  /**
   * Deserialization
   */


  deserialize(data) {
    return this.fromBytes(data, 0, data.length);
  }
  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */


  toBytes(value, output, offset) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.toBytes(output, offset);
    } else {
      return this.struct_serializeToBytes(value, output, offset);
    }
  }
  /**
   * Serialization
   */


  serialize(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.serialize();
    } else {
      const output = new Uint8Array(this.size(value));
      this.toBytes(value, output, 0);
      return output;
    }
  } // Merkleization

  /**
   * Merkleization
   */


  hashTreeRoot(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.hashTreeRoot();
    } else {
      return this.struct_hashTreeRoot(value);
    }
  }
  /**
   * Convert from a JSON-serializable object
   */


  fromJson(data, options) {
    return this.struct_convertFromJson(data, options);
  }
  /**
   * Convert to a JSON-serializable object
   */


  toJson(value, options) {
    return this.struct_convertToJson(value, options);
  }

  createTreeBacked(tree) {
    return (0, _backings.createTreeBacked)(this, tree);
  }

  createTreeBackedFromStruct(value) {
    return this.createTreeBacked(this.struct_convertToTree(value));
  }

  createTreeBackedFromBytes(data) {
    return this.createTreeBacked(this.tree_deserialize(data));
  }

  createTreeBackedFromJson(data, options) {
    return this.createTreeBackedFromStruct(this.struct_convertFromJson(data, options));
  }

  createTreeBackedFromProof(root, proof) {
    return this.createTreeBacked(this.tree_createFromProof(root, proof));
  }

  createTreeBackedFromProofUnsafe(proof) {
    return this.createTreeBacked(this.tree_createFromProofUnsafe(proof));
  }

  defaultTreeBacked() {
    return (0, _backings.createTreeBacked)(this, this.tree_defaultValue());
  }

}

exports.CompositeType = CompositeType;
//# sourceMappingURL=abstract.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tree = __webpack_require__(57);

Object.keys(_tree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tree[key];
    }
  });
});

var _backedValue = __webpack_require__(162);

Object.keys(_backedValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _backedValue[key];
    }
  });
});

var _readonlyIterate = __webpack_require__(163);

Object.keys(_readonlyIterate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _readonlyIterate[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(161);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _treeValue = __webpack_require__(40);

Object.keys(_treeValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _treeValue[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroNode = void 0;
const node_1 = __webpack_require__(25);
const zeroes = [new node_1.LeafNode(new Uint8Array(32))];
function zeroNode(depth) {
    if (depth >= zeroes.length) {
        for (let i = zeroes.length; i <= depth; i++) {
            zeroes[i] = new node_1.BranchNode(zeroes[i - 1], zeroes[i - 1]);
        }
    }
    return zeroes[depth];
}
exports.zeroNode = zeroNode;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;
exports.merkleize = merkleize;
exports.mixInLength = mixInLength;

var _hash2 = __webpack_require__(60);

var _merkleize2 = __webpack_require__(174);

function hash(...inputs) {
  return Uint8Array.from((0, _hash2.hash)(...inputs.map(Buffer.from)));
}

function merkleize(chunks, padTo) {
  return (0, _merkleize2.merkleize)(Array.from(chunks).map(Buffer.from), padTo);
}

function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  return hash(root, lengthBuf);
}
//# sourceMappingURL=compat.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28).Buffer))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;

var _asSha = _interopRequireDefault(__webpack_require__(99));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module ssz */

/**
 * Hash used for hashTreeRoot
 */
function hash(...inputs) {
  return _asSha.default.digest(Buffer.concat(inputs));
}
//# sourceMappingURL=hash.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28).Buffer))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BYTES_PER_LENGTH_PREFIX = exports.BYTES_PER_CHUNK = void 0;

/** @module ssz */
// Number of bytes per chunk.

/** @ignore */
const BYTES_PER_CHUNK = 32; // Number of bytes per serialized length prefix.

/** @ignore */

exports.BYTES_PER_CHUNK = BYTES_PER_CHUNK;
const BYTES_PER_LENGTH_PREFIX = 4;
exports.BYTES_PER_LENGTH_PREFIX = BYTES_PER_LENGTH_PREFIX;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompositeArrayType = exports.BasicArrayType = void 0;

var _abstract = __webpack_require__(55);

var _errorPath = __webpack_require__(102);

var _persistentMerkleTree = __webpack_require__(27);

var _treeValue = __webpack_require__(40);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BasicArrayType extends _abstract.CompositeType {
  constructor(options) {
    super();

    _defineProperty(this, "elementType", void 0);

    this.elementType = options.elementType;
  }

  struct_getSerializedLength(value) {
    return this.elementType.struct_getSerializedLength() * this.struct_getLength(value);
  }

  getMaxSerializedLength() {
    return this.getMaxLength() * this.elementType.getMaxSerializedLength();
  }

  getMinSerializedLength() {
    return this.getMinLength() * this.elementType.getMinSerializedLength();
  }

  struct_assertValidValue(value) {
    for (let i = 0; i < this.struct_getLength(value); i++) {
      try {
        this.elementType.struct_assertValidValue(value[i]);
      } catch (e) {
        throw new Error("Invalid element ".concat(i, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    if (this.struct_getLength(value1) !== this.struct_getLength(value2)) {
      return false;
    }

    for (let i = 0; i < this.struct_getLength(value1); i++) {
      if (!this.elementType.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  }

  struct_clone(value) {
    const newValue = this.struct_defaultValue();

    for (let i = 0; i < this.struct_getLength(value); i++) {
      newValue[i] = this.elementType.struct_clone(value[i]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const elementSize = this.elementType.struct_getSerializedLength();
    return Array.from({
      length: (end - start) / elementSize
    }, (_, i) => this.elementType.struct_deserializeFromBytes(data, start + i * elementSize));
  }

  struct_serializeToBytes(value, output, offset) {
    const length = this.struct_getLength(value);
    let index = offset;

    for (let i = 0; i < length; i++) {
      index = this.elementType.struct_serializeToBytes(value[i], output, index);
    }

    return index;
  }

  struct_getRootAtChunkIndex(value, index) {
    const output = new Uint8Array(32);
    const itemSize = this.elementType.struct_getSerializedLength();
    const itemsInChunk = Math.floor(32 / itemSize);
    const firstIndex = index * itemsInChunk; // not inclusive

    const lastIndex = Math.min(this.struct_getLength(value), firstIndex + itemsInChunk); // i = array index, grows by 1
    // j = data offset, grows by itemSize

    for (let i = firstIndex, j = 0; i < lastIndex; i++, j += itemSize) {
      this.elementType.struct_serializeToBytes(value[i], output, j);
    }

    return output;
  }

  struct_getPropertyNames(value) {
    const length = this.struct_getLength(value);
    return Array.from({
      length
    }, (_, i) => i).concat(["length"]);
  }

  struct_convertFromJson(data) {
    return Array.from({
      length: data.length
    }, (_, i) => this.elementType.fromJson(data[i]));
  }

  struct_convertToJson(value) {
    return Array.from({
      length: this.struct_getLength(value)
    }, (_, i) => this.elementType.struct_convertToJson(value[i]));
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const contents = [];

    for (const chunk of this.struct_yieldChunkRoots(value)) {
      contents.push(new _persistentMerkleTree.LeafNode(chunk));
    }

    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(contents, this.getChunkDepth()));
  }

  tree_convertToStruct(target) {
    const value = this.struct_defaultValue();
    const length = this.tree_getLength(target);

    for (let i = 0; i < length; i++) {
      value[i] = this.tree_getValueAtIndex(target, i);
    }

    return value;
  }

  tree_getSerializedLength(target) {
    return this.elementType.struct_getSerializedLength() * this.tree_getLength(target);
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();
    const byteLength = end - start;
    const chunkCount = Math.ceil(byteLength / 32);

    for (let i = 0; i < chunkCount; i++) {
      // view of the chunk, shared buffer from `data`
      const dataChunk = new Uint8Array(data.buffer, data.byteOffset + start + i * 32, Math.min(32, byteLength - i * 32)); // copy chunk into new memory

      const chunk = new Uint8Array(32);
      chunk.set(dataChunk);
      this.tree_setRootAtChunkIndex(target, i, chunk, true // expand tree as needed
      );
    }

    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    const size = this.tree_getSerializedLength(target);
    const fullChunkCount = Math.floor(size / 32);
    const remainder = size % 32;
    let i = 0;

    if (fullChunkCount > 0) {
      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, fullChunkCount)) {
        output.set(node.root, offset + i * 32);
        i++;
      }
    }

    if (remainder) {
      output.set(this.tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
    }

    return offset + size;
  }

  getPropertyGindex(prop) {
    return this.getGindexAtChunkIndex(this.getChunkIndex(prop));
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  getPropertyType(prop) {
    return this.elementType;
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);

    if (length === 0) {
      return;
    }

    const elementSize = this.elementType.struct_getSerializedLength();

    if (32 % elementSize !== 0) {
      throw new Error("cannot handle a non-chunk-alignable elementType");
    }

    let left = length;

    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.tree_getChunkCount(target))) {
      const chunk = node.root;

      for (let offset = 0; offset < 32; offset += elementSize) {
        yield this.elementType.struct_deserializeFromBytes(chunk, offset);
        left--;

        if (left === 0) {
          return;
        }
      }
    }
  }

  *tree_readonlyIterateValues(target) {
    yield* this.tree_iterateValues(target);
  }

  getChunkOffset(index) {
    const elementSize = this.elementType.struct_getSerializedLength();
    return index % Math.ceil(32 / elementSize) * elementSize;
  }

  getChunkIndex(index) {
    return Math.floor(index / Math.ceil(32 / this.elementType.struct_getSerializedLength()));
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    return this.elementType.struct_deserializeFromBytes(chunk, this.getChunkOffset(index));
  }

  tree_setValueAtIndex(target, index, value, expand = false) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(index)); // copy data from old chunk, use new memory to set a new chunk

    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    this.elementType.struct_serializeToBytes(value, chunk, this.getChunkOffset(index));
    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  tree_getProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property === "length") {
      return length;
    }

    const index = Number(property);

    if (Number.isNaN(index)) {
      return undefined;
    }

    if (index >= length) {
      return undefined;
    }

    return this.tree_getValueAtIndex(target, index);
  }

  tree_setProperty(target, property, value, expand = false) {
    return this.tree_setValueAtIndex(target, property, value, expand);
  }

  tree_deleteProperty(target, property) {
    return this.tree_setProperty(target, property, this.elementType.struct_defaultValue());
  }

  tree_getPropertyNames(target) {
    return Array.from({
      length: this.tree_getLength(target)
    }, (_, i) => String(i)).concat("length");
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  bytes_getVariableOffsets(target) {
    return [];
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    const chunkCount = this.tree_getChunkCount(target);
    const startIndex = (0, _persistentMerkleTree.concatGindices)([root, (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(0))]);
    const gindices = [];

    for (let i = 0, gindex = startIndex; i < chunkCount; i++, gindex++) {
      gindices.push(gindex);
    }

    return gindices;
  }

}

exports.BasicArrayType = BasicArrayType;

class CompositeArrayType extends _abstract.CompositeType {
  constructor(options) {
    super();

    _defineProperty(this, "elementType", void 0);

    this.elementType = options.elementType;
  }

  struct_getSerializedLength(value) {
    if (this.elementType.hasVariableSerializedLength()) {
      let s = 0;

      for (let i = 0; i < this.struct_getLength(value); i++) {
        s += this.elementType.struct_getSerializedLength(value[i]) + 4;
      }

      return s;
    } else {
      return this.elementType.struct_getSerializedLength(null) * this.struct_getLength(value);
    }
  }

  getMaxSerializedLength() {
    if (this.elementType.hasVariableSerializedLength()) {
      return this.getMaxLength() * 4 + this.getMaxLength() * this.elementType.getMaxSerializedLength();
    } else {
      return this.getMaxLength() * this.elementType.getMaxSerializedLength();
    }
  }

  getMinSerializedLength() {
    if (this.elementType.hasVariableSerializedLength()) {
      return this.getMinLength() * 4 + this.getMinLength() * this.elementType.getMinSerializedLength();
    } else {
      return this.getMinLength() * this.elementType.getMinSerializedLength();
    }
  }

  struct_assertValidValue(value) {
    for (let i = 0; i < this.struct_getLength(value); i++) {
      try {
        this.elementType.struct_assertValidValue(value[i]);
      } catch (e) {
        throw new Error("Invalid element ".concat(i, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    if (this.struct_getLength(value1) !== this.struct_getLength(value2)) {
      return false;
    }

    for (let i = 0; i < this.struct_getLength(value1); i++) {
      if (!this.elementType.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  }

  struct_clone(value) {
    const newValue = this.struct_defaultValue();

    for (let i = 0; i < this.struct_getLength(value); i++) {
      newValue[i] = this.elementType.struct_clone(value[i]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);

    if (start === end) {
      return [];
    }

    if (this.elementType.hasVariableSerializedLength()) {
      const value = []; // all elements variable-sized
      // indices contain offsets

      let currentIndex = start;
      let nextIndex; // data exists between offsets

      const fixedSection = new DataView(data.buffer, data.byteOffset);
      const firstOffset = start + fixedSection.getUint32(start, true);
      let currentOffset = firstOffset;
      let nextOffset;

      while (currentIndex < firstOffset) {
        if (currentOffset > end) {
          throw new Error("Offset out of bounds");
        }

        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? end : start + fixedSection.getUint32(nextIndex, true);

        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }

        try {
          value.push(this.elementType.struct_deserializeFromBytes(data, currentOffset, nextOffset));
        } catch (e) {
          throw new _errorPath.SszErrorPath(e, value.length);
        }

        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }

      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }

      return value;
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      return Array.from({
        length: (end - start) / elementSize
      }, (_, i) => this.elementType.struct_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize));
    }
  }

  struct_serializeToBytes(value, output, offset) {
    const length = this.struct_getLength(value);

    if (this.elementType.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset);

      for (let i = 0; i < length; i++) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true); // write serialized element to variable section

        variableIndex = this.elementType.struct_serializeToBytes(value[i], output, variableIndex);
      }

      return variableIndex;
    } else {
      let index = offset;

      for (let i = 0; i < length; i++) {
        index = this.elementType.struct_serializeToBytes(value[i], output, index);
      }

      return index;
    }
  }

  struct_getRootAtChunkIndex(value, index) {
    return this.elementType.hashTreeRoot(value[index]);
  }

  struct_getPropertyNames(value) {
    const length = this.struct_getLength(value);
    return Array.from({
      length
    }, (_, i) => i).concat(["length"]);
  }

  struct_convertFromJson(data, options) {
    return Array.from({
      length: data.length
    }, (_, i) => this.elementType.struct_convertFromJson(data[i], options));
  }

  struct_convertToJson(value, options) {
    return Array.from({
      length: this.struct_getLength(value)
    }, (_, i) => this.elementType.struct_convertToJson(value[i], options));
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const contents = [];

    for (const element of value) {
      contents.push(this.elementType.struct_convertToTree(element).rootNode);
    }

    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(contents, this.getChunkDepth()));
  }

  tree_convertToStruct(target) {
    const value = this.struct_defaultValue();
    const length = this.tree_getLength(target);

    for (let i = 0; i < length; i++) {
      value[i] = this.elementType.tree_convertToStruct(this.tree_getSubtreeAtChunkIndex(target, i));
    }

    return value;
  }

  tree_getSerializedLength(target) {
    if (this.elementType.hasVariableSerializedLength()) {
      let s = 0;

      for (let i = 0; i < this.tree_getLength(target); i++) {
        s += this.elementType.tree_getSerializedLength(this.tree_getSubtreeAtChunkIndex(target, i)) + 4;
      }

      return s;
    } else {
      return this.elementType.tree_getSerializedLength(null) * this.tree_getLength(target);
    }
  }

  tree_serializeToBytes(target, output, offset) {
    const length = this.tree_getLength(target);

    if (this.elementType.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset, length * 4);
      let i = 0;

      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, length)) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true); // write serialized element to variable section

        variableIndex = this.elementType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, variableIndex);
        i++;
      }

      return variableIndex;
    } else {
      let index = offset;
      let i = 0;

      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, length)) {
        index = this.elementType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, index);
        i++;
      }

      return index;
    }
  }

  getPropertyGindex(prop) {
    return this.getGindexAtChunkIndex(prop);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  getPropertyType(prop) {
    return this.elementType;
  }

  tree_getProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property === "length") {
      return length;
    }

    const index = Number(property);

    if (Number.isNaN(index)) {
      return undefined;
    }

    if (index >= length) {
      return undefined;
    }

    return this.tree_getSubtreeAtChunkIndex(target, index);
  }

  tree_setProperty(target, property, value, expand = false) {
    this.tree_setSubtreeAtChunkIndex(target, property, value, expand);
    return true;
  }

  tree_deleteProperty(target, property) {
    return this.tree_setProperty(target, property, this.elementType.tree_defaultValue());
  }

  tree_getPropertyNames(target) {
    return Array.from({
      length: this.tree_getLength(target)
    }, (_, i) => i).concat(["length"]);
  }

  *tree_iterateValues(target) {
    for (const gindex of (0, _persistentMerkleTree.iterateAtDepth)(this.getChunkDepth(), BigInt(0), BigInt(this.tree_getLength(target)))) {
      yield target.getSubtree(gindex);
    }
  }

  *tree_readonlyIterateValues(target) {
    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.tree_getLength(target))) {
      yield new _persistentMerkleTree.Tree(node);
    }
  }

  bytes_getVariableOffsets(target) {
    if (this.elementType.hasVariableSerializedLength()) {
      if (target.length === 0) {
        return [];
      }

      const offsets = []; // all elements are variable-sized
      // indices contain offsets, which are indices deeper in the byte array

      const fixedSection = new DataView(target.buffer, target.byteOffset);
      const firstOffset = fixedSection.getUint32(0, true);
      let currentOffset = firstOffset;
      let nextOffset;
      let currentIndex = 0;
      let nextIndex = 0;

      while (currentIndex < firstOffset) {
        if (currentOffset > target.length) {
          throw new Error("Offset out of bounds");
        }

        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? target.length : fixedSection.getUint32(nextIndex, true);

        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }

        offsets.push([currentOffset, nextOffset]);
        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }

      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }

      return offsets;
    } else {
      return [];
    }
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    // Underlying elements exist one per chunk
    // Iterate through chunk gindices, recursively fetching leaf gindices from each chunk
    const chunkCount = this.tree_getChunkCount(target);
    const gindices = [];
    const startIndex = (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(0));
    const extendedStartIndex = (0, _persistentMerkleTree.concatGindices)([root, startIndex]);

    if (this.elementType.hasVariableSerializedLength()) {
      if (!target) {
        throw new Error("variable type requires tree argument to get leaves");
      } // variable-length elements must pass the underlying subtrees to determine the length


      for (let i = 0, gindex = startIndex, extendedGindex = extendedStartIndex; i < chunkCount; i++, gindex++, extendedGindex++) {
        gindices.push(...this.elementType.tree_getLeafGindices(target.getSubtree(gindex), extendedGindex));
      }
    } else {
      for (let i = 0, gindex = extendedStartIndex; i < chunkCount; i++, gindex++) {
        gindices.push(...this.elementType.tree_getLeafGindices(undefined, gindex));
      }
    }

    return gindices;
  }

}

exports.CompositeArrayType = CompositeArrayType;
//# sourceMappingURL=array.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVectorType = isVectorType;
exports.CompositeVectorType = exports.BasicVectorType = exports.VectorType = exports.VECTOR_TYPE = void 0;

var _array = __webpack_require__(62);

var _basic = __webpack_require__(24);

var _type = __webpack_require__(6);

var _persistentMerkleTree = __webpack_require__(27);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const VECTOR_TYPE = Symbol.for("ssz/VectorType"); // eslint-disable-next-line @typescript-eslint/no-explicit-any

exports.VECTOR_TYPE = VECTOR_TYPE;

function isVectorType(type) {
  return (0, _type.isTypeOf)(type, VECTOR_TYPE);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


// Trick typescript into treating VectorType as a constructor
const VectorType = // eslint-disable-next-line @typescript-eslint/no-explicit-any
function VectorType(options) {
  if ((0, _basic.isBasicType)(options.elementType)) {
    return new BasicVectorType(options);
  } else {
    return new CompositeVectorType(options);
  }
};

exports.VectorType = VectorType;

class BasicVectorType extends _array.BasicArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "length", void 0);

    this.length = options.length;

    this._typeSymbols.add(VECTOR_TYPE);
  }

  struct_defaultValue() {
    return Array.from({
      length: this.length
    }, () => {
      return this.elementType.struct_defaultValue();
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  }

  getMaxLength() {
    return this.length;
  }

  getMinLength() {
    return this.length;
  }

  bytes_validate(data, start, end) {
    super.bytes_validate(data, start, end);

    if (end - start !== this.size(null)) {
      throw new Error("Incorrect deserialized vector length");
    }
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    return super.struct_deserializeFromBytes(data, start, end);
  }

  struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = this.struct_getLength(value);

    if (actualLength !== expectedLength) {
      throw new Error("Invalid vector length: expected ".concat(expectedLength, ", actual ").concat(actualLength));
    }

    super.struct_assertValidValue(value);
  }

  struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }

    const expectedLength = this.length;

    if (data.length !== expectedLength) {
      throw new Error("Invalid JSON vector length: expected ".concat(expectedLength, ", actual ").concat(data.length));
    }

    return super.struct_convertFromJson(data);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToLength)((0, _persistentMerkleTree.zeroNode)(0), this.getChunkDepth(), this.getMaxChunkCount());
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  tree_getLength(target) {
    return this.length;
  }

  tree_deserializeFromBytes(data, start, end) {
    if (end - start !== this.struct_getSerializedLength(null)) {
      throw new Error("Incorrect deserialized vector length");
    }

    return super.tree_deserializeFromBytes(data, start, end);
  }

  tree_setProperty(target, property, value) {
    if (property >= this.tree_getLength(target)) {
      throw new Error("Invalid array index");
    }

    return super.tree_setProperty(target, property, value, false);
  }

  hasVariableSerializedLength() {
    return false;
  }

  getMaxChunkCount() {
    return Math.ceil(this.length * this.elementType.size() / 32);
  }

}

exports.BasicVectorType = BasicVectorType;

class CompositeVectorType extends _array.CompositeArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "length", void 0);

    this.length = options.length;

    this._typeSymbols.add(VECTOR_TYPE);
  }

  struct_defaultValue() {
    return Array.from({
      length: this.length
    }, () => {
      return this.elementType.struct_defaultValue();
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  }

  getMaxLength() {
    return this.length;
  }

  getMinLength() {
    return this.length;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = super.struct_deserializeFromBytes(data, start, end);

    if (value.length !== this.length) {
      throw new Error("Incorrect deserialized vector length");
    }

    return value;
  }

  struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = this.struct_getLength(value);

    if (actualLength !== expectedLength) {
      throw new Error("Invalid vector length: expected ".concat(expectedLength, ", actual ").concat(actualLength));
    }

    super.struct_assertValidValue(value);
  }

  struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }

    const expectedLength = this.length;

    if (data.length !== expectedLength) {
      throw new Error("Invalid JSON vector length: expected ".concat(expectedLength, ", actual ").concat(data.length));
    }

    return super.struct_convertFromJson(data);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToLength)(this.elementType.tree_defaultNode(), this.getChunkDepth(), this.length);
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  tree_getLength(target) {
    return this.length;
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();

    if (this.elementType.hasVariableSerializedLength()) {
      const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

      if (offsets.length !== this.length) {
        throw new Error("Incorrect deserialized vector length");
      }

      for (let i = 0; i < offsets.length; i++) {
        const [currentOffset, nextOffset] = offsets[i];
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;

      if (length !== this.length) {
        throw new Error("Incorrect deserialized vector length");
      }

      for (let i = 0; i < length; i++) {
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize));
      }
    }

    return target;
  }

  setProperty(target, property, value) {
    if (property >= this.tree_getLength(target)) {
      throw new Error("Invalid array index");
    }

    return super.tree_setProperty(target, property, value, false);
  }

  hasVariableSerializedLength() {
    return this.elementType.hasVariableSerializedLength();
  }

  getMaxChunkCount() {
    return this.length;
  }

}

exports.CompositeVectorType = CompositeVectorType;
//# sourceMappingURL=vector.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(196));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(201));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(66)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(9);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(19);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(69);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(11);
var META = __webpack_require__(117).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(33);
var uid = __webpack_require__(16);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(69);
var wksDefine = __webpack_require__(68);
var enumKeys = __webpack_require__(118);
var isArray = __webpack_require__(49);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(15);
var toObject = __webpack_require__(10);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(120);
var $GOPD = __webpack_require__(51);
var $GOPS = __webpack_require__(48);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(21);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(26).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(35).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(45)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(36);
var getKeys = __webpack_require__(21);
var redefine = __webpack_require__(11);
var global = __webpack_require__(3);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(23);
var wks = __webpack_require__(1);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(11);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(23);
var $iterCreate = __webpack_require__(124);
var setToStringTag = __webpack_require__(33);
var getPrototypeOf = __webpack_require__(76);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(52);
var test = {};
test[__webpack_require__(1)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(4);
var $forEach = __webpack_require__(53)(0);
var STRICT = __webpack_require__(37)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(8);
var uid = __webpack_require__(16);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(22);
var toLength = __webpack_require__(14);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(34);
var toLength = __webpack_require__(14);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(23);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(52);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(23);
module.exports = __webpack_require__(19).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(5);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=misc.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=operations.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=validator.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=api.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(154);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _preset = __webpack_require__(93);

Object.keys(_preset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _preset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _preset[key];
    }
  });
});

var _activePreset = __webpack_require__(187);

Object.keys(_activePreset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _activePreset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _activePreset[key];
    }
  });
});

var _forkName = __webpack_require__(195);

Object.keys(_forkName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forkName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _forkName[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _presetName = __webpack_require__(155);

Object.keys(_presetName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _presetName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _presetName[key];
    }
  });
});

var _interface = __webpack_require__(156);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(157);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});

var _phase = __webpack_require__(105);

Object.keys(_phase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _phase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _phase[key];
    }
  });
});

var _altair = __webpack_require__(106);

Object.keys(_altair).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _altair[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _altair[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic = __webpack_require__(24);

Object.keys(_basic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _basic[key];
    }
  });
});

var _composite = __webpack_require__(160);

Object.keys(_composite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _composite[key];
    }
  });
});

var _type = __webpack_require__(6);

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBooleanType = isBooleanType;
exports.BooleanType = exports.BOOLEAN_TYPE = void 0;

var _type = __webpack_require__(6);

var _abstract = __webpack_require__(54);

/* eslint-disable @typescript-eslint/camelcase */
const BOOLEAN_TYPE = Symbol.for("ssz/BooleanType");
exports.BOOLEAN_TYPE = BOOLEAN_TYPE;

function isBooleanType(type) {
  return (0, _type.isTypeOf)(type, BOOLEAN_TYPE);
}

class BooleanType extends _abstract.BasicType {
  constructor() {
    super();

    this._typeSymbols.add(BOOLEAN_TYPE);
  }

  struct_getSerializedLength() {
    return 1;
  }

  struct_assertValidValue(value) {
    if (value !== true && value !== false) {
      throw new Error("Boolean value must be true or false");
    }
  }

  struct_defaultValue() {
    return false;
  }

  struct_serializeToBytes(value, output, offset) {
    output[offset] = value ? 1 : 0;
    return offset + 1;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset);

    if (data[offset] === 1) {
      return true;
    } else if (data[offset] === 0) {
      return false;
    } else {
      throw new Error("Invalid boolean value");
    }
  }

  struct_convertFromJson(data) {
    this.struct_assertValidValue(data);
    return data;
  }

  struct_convertToJson(value) {
    return value;
  }

}

exports.BooleanType = BooleanType;
//# sourceMappingURL=boolean.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUintType = isUintType;
exports.isNumberUintType = isNumberUintType;
exports.isBigIntUintType = isBigIntUintType;
exports.BigIntUintType = exports.BIGINT_UINT_TYPE = exports.NumberUintType = exports.NUMBER_UINT_TYPE = exports.UintType = exports.UINT_TYPE = void 0;

var _type = __webpack_require__(6);

var _abstract = __webpack_require__(54);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UINT_TYPE = Symbol.for("ssz/UintType");
exports.UINT_TYPE = UINT_TYPE;

function isUintType(type) {
  return (0, _type.isTypeOf)(type, UINT_TYPE);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


class UintType extends _abstract.BasicType {
  constructor(options) {
    super();

    _defineProperty(this, "byteLength", void 0);

    this.byteLength = options.byteLength;

    this._typeSymbols.add(UINT_TYPE);
  }

  struct_getSerializedLength() {
    return this.byteLength;
  }

}

exports.UintType = UintType;
const NUMBER_UINT_TYPE = Symbol.for("ssz/NumberUintType");
exports.NUMBER_UINT_TYPE = NUMBER_UINT_TYPE;
const BIGINT_4_BYTES = BigInt(32);

function isNumberUintType(type) {
  return (0, _type.isTypeOf)(type, NUMBER_UINT_TYPE);
}

class NumberUintType extends UintType {
  constructor(options) {
    super(options);

    _defineProperty(this, "_maxBigInt", void 0);

    this._typeSymbols.add(NUMBER_UINT_TYPE);
  }

  struct_assertValidValue(value) {
    if (value !== Infinity && (!Number.isSafeInteger(value) || value > BigInt(2) ** (BigInt(8) * BigInt(this.byteLength)))) {
      throw new Error("Uint value is not a number");
    }

    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  struct_defaultValue() {
    return 0;
  }

  struct_getMaxBigInt() {
    if (this._maxBigInt === undefined) {
      this._maxBigInt = BigInt(2) ** BigInt(this.byteLength * 8) - BigInt(1);
    }

    return this._maxBigInt;
  }

  struct_serializeToBytes(value, output, offset) {
    if (this.byteLength > 6 && value === Infinity) {
      for (let i = offset; i < offset + this.byteLength; i++) {
        output[i] = 0xff;
      }
    } else {
      let v = value;
      const MAX_BYTE = 0xff;

      for (let i = 0; i < this.byteLength; i++) {
        output[offset + i] = v & MAX_BYTE;
        v = Math.floor(v / 256);
      }
    }

    return offset + this.byteLength;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset);
    let isInfinity = true;
    let output = 0;

    for (let i = 0; i < this.byteLength; i++) {
      output += data[offset + i] * 2 ** (8 * i);

      if (data[offset + i] !== 0xff) {
        isInfinity = false;
      }
    }

    if (this.byteLength > 6 && isInfinity) {
      return Infinity;
    }

    return Number(output);
  }

  struct_convertFromJson(data) {
    let n;
    const bigN = BigInt(data);

    if (bigN === this.struct_getMaxBigInt()) {
      n = Infinity;
    } else if (bigN < Number.MAX_SAFE_INTEGER) {
      n = Number(bigN);
    } else {
      throw new Error("Uint value unsafe");
    }

    this.assertValidValue(n);
    return n;
  }

  struct_convertToJson(value) {
    if (this.byteLength > 4) {
      if (value === Infinity) {
        return this.struct_getMaxBigInt().toString();
      }

      return String(value);
    }

    return value;
  }

}

exports.NumberUintType = NumberUintType;
const BIGINT_UINT_TYPE = Symbol.for("ssz/BigIntUintType");
exports.BIGINT_UINT_TYPE = BIGINT_UINT_TYPE;

function isBigIntUintType(type) {
  return (0, _type.isTypeOf)(type, BIGINT_UINT_TYPE);
}

class BigIntUintType extends UintType {
  constructor(options) {
    super(options);

    this._typeSymbols.add(BIGINT_UINT_TYPE);
  }

  struct_assertValidValue(value) {
    if (typeof value !== "bigint") {
      throw new Error("Uint value is not a bigint");
    }

    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  struct_defaultValue() {
    return BigInt(0);
  }

  struct_serializeToBytes(value, output, offset) {
    // Motivation
    // BigInt bit shifting and BigInt allocation is slower compared to number
    // For every 4 bytes, we extract value to groupedBytes
    // and do bit shifting on the number
    let v = value;
    let groupedBytes = Number(BigInt.asUintN(32, v));

    for (let i = 0; i < this.byteLength; i++) {
      output[offset + i] = Number(groupedBytes & 0xff);

      if ((i + 1) % 4 !== 0) {
        groupedBytes >>= 8;
      } else {
        v >>= BIGINT_4_BYTES;
        groupedBytes = Number(BigInt.asUintN(32, v));
      }
    }

    return offset + this.byteLength;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset); // Motivation:
    //   Creating BigInts and bitshifting is more expensive than
    // number bitshifting.
    // Implementation:
    //   Iterate throuth the bytearray, bitshifting the data into a 'groupOutput' number, byte by byte
    // After each 4 bytes, bitshift the groupOutput into the bigint output and clear the groupOutput out
    // After iterating through the bytearray,
    // There may be additional data in the groupOutput if the bytearray if the bytearray isn't divisible by 4

    let output = BigInt(0);
    let groupIndex = 0,
        groupOutput = 0;

    for (let i = 0; i < this.byteLength; i++) {
      groupOutput += data[offset + i] << 8 * (i % 4);

      if ((i + 1) % 4 === 0) {
        // Left shift returns a signed integer and the output may have become negative
        // In that case, the output needs to be converted to unsigned integer
        if (groupOutput < 0) {
          groupOutput >>>= 0;
        } // Optimization to set the output the first time, forgoing BigInt addition


        if (groupIndex === 0) {
          output = BigInt(groupOutput);
        } else {
          output += BigInt(groupOutput) << BigInt(32 * groupIndex);
        }

        groupIndex++;
        groupOutput = 0;
      }
    } // if this.byteLength isn't a multiple of 4, there will be additional data


    if (groupOutput) {
      output += BigInt(groupOutput >>> 0) << BigInt(32 * groupIndex);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const value = BigInt(data);
    this.assertValidValue(value);
    return value;
  }

  struct_convertToJson(value) {
    if (this.byteLength > 4) {
      return value.toString();
    } else {
      return Number(value);
    }
  }

}

exports.BigIntUintType = BigIntUintType;
//# sourceMappingURL=uint.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTree = isTree;

function isTree(value) {
  return Boolean(value.rootNode && value.rootNode.isLeaf);
}
//# sourceMappingURL=tree.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const as_sha256_1 = __webpack_require__(99);
const input = new Uint8Array(64);
/**
 * Hash two 32 byte arrays
 */
function hash(a, b) {
    input.set(a, 0);
    input.set(b, 32);
    return as_sha256_1.default.digest64(input);
}
exports.hash = hash;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wasm = __webpack_require__(164);

class SHA256 {
  constructor() {
    this.ctx = (0, _wasm.newInstance)();
  }

  init() {
    this.ctx.init();
    return this;
  }

  update(data) {
    const INPUT_LENGTH = this.ctx.INPUT_LENGTH;
    const input = new Uint8Array(this.ctx.memory.buffer, this.ctx.input.value, INPUT_LENGTH);

    if (data.length > INPUT_LENGTH) {
      for (let i = 0; i < data.length; i += INPUT_LENGTH) {
        const sliced = data.slice(i, i + INPUT_LENGTH);
        input.set(sliced);
        this.ctx.update(this.ctx.input.value, sliced.length);
      }
    } else {
      input.set(data);
      this.ctx.update(this.ctx.input.value, data.length);
    }

    return this;
  }

  final() {
    this.ctx.final(this.ctx.output.value);
    const output = new Uint8Array(32);
    output.set(new Uint8Array(this.ctx.memory.buffer, this.ctx.output.value, 32));
    return output;
  }

  static digest(data) {
    if (data.length <= staticInstance.ctx.INPUT_LENGTH) {
      const input = new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.input.value, staticInstance.ctx.INPUT_LENGTH);
      input.set(data);
      staticInstance.ctx.digest(data.length);
      const output = new Uint8Array(32);
      output.set(new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.output.value, 32));
      return output;
    }

    return staticInstance.init().update(data).final();
  }

  static digest64(data) {
    if (data.length == 64) {
      const input = new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.input.value, staticInstance.ctx.INPUT_LENGTH);
      input.set(data);
      staticInstance.ctx.digest64(staticInstance.ctx.input.value, staticInstance.ctx.output.value);
      const output = new Uint8Array(32);
      output.set(new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.output.value, 32));
      return output;
    }

    throw new Error("InvalidLengthForDigest64");
  }

}

exports.default = SHA256;
const staticInstance = new SHA256();

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeProof = exports.serializeProof = exports.createNodeFromProof = exports.createProof = exports.ProofTypeSerialized = exports.ProofType = void 0;
const single_1 = __webpack_require__(101);
const treeOffset_1 = __webpack_require__(172);
var ProofType;
(function (ProofType) {
    ProofType["single"] = "single";
    ProofType["treeOffset"] = "treeOffset";
})(ProofType = exports.ProofType || (exports.ProofType = {}));
/**
 * Serialized proofs are prepended with a single byte, denoting their type
 */
exports.ProofTypeSerialized = [
    ProofType.single,
    ProofType.treeOffset, // 1
];
function createProof(rootNode, input) {
    switch (input.type) {
        case ProofType.single: {
            const [leaf, witnesses] = single_1.createSingleProof(rootNode, input.gindex);
            return {
                type: ProofType.single,
                gindex: input.gindex,
                leaf,
                witnesses,
            };
        }
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.createTreeOffsetProof(rootNode, input.gindices);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createProof = createProof;
function createNodeFromProof(proof) {
    switch (proof.type) {
        case ProofType.single:
            return single_1.createNodeFromSingleProof(proof.gindex, proof.leaf, proof.witnesses);
        case ProofType.treeOffset:
            return treeOffset_1.createNodeFromTreeOffsetProof(proof.offsets, proof.leaves);
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createNodeFromProof = createNodeFromProof;
function serializeProof(proof) {
    switch (proof.type) {
        case ProofType.single:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const output = new Uint8Array(1 + treeOffset_1.computeTreeOffsetProofSerializedLength(proof.offsets, proof.leaves));
            output[0] = exports.ProofTypeSerialized.indexOf(ProofType.treeOffset);
            treeOffset_1.serializeTreeOffsetProof(output, 1, proof.offsets, proof.leaves);
            return output;
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.serializeProof = serializeProof;
function deserializeProof(data) {
    const proofType = exports.ProofTypeSerialized[data[0]];
    if (!proofType) {
        throw new Error("Invalid proof type");
    }
    switch (proofType) {
        case ProofType.single:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.deserializeTreeOffsetProof(data, 1);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.deserializeProof = deserializeProof;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodeFromSingleProof = exports.createSingleProof = exports.ERR_INVALID_NAV = void 0;
const node_1 = __webpack_require__(25);
const gindex_1 = __webpack_require__(41);
exports.ERR_INVALID_NAV = "Invalid tree navigation";
function createSingleProof(rootNode, index) {
    const witnesses = [];
    let node = rootNode;
    for (const i of gindex_1.gindexIterator(index)) {
        if (i) {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.left.root);
            node = node.right;
        }
        else {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.right.root);
            node = node.left;
        }
    }
    return [node.root, witnesses.reverse()];
}
exports.createSingleProof = createSingleProof;
function createNodeFromSingleProof(gindex, leaf, witnesses) {
    let node = new node_1.LeafNode(leaf);
    const w = witnesses.reverse();
    while (gindex > 1) {
        const sibling = new node_1.LeafNode(w.pop());
        if (gindex % BigInt(2) === BigInt(0)) {
            node = new node_1.BranchNode(node, sibling);
        }
        else {
            node = new node_1.BranchNode(sibling, node);
        }
        gindex = gindex / BigInt(2);
    }
    return node;
}
exports.createNodeFromSingleProof = createNodeFromSingleProof;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderJsonPath = renderJsonPath;
exports.SszErrorPath = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Tracks the JSON path location of nested errors
 */
class SszErrorPath extends Error {
  constructor(e, keyOrIndex) {
    const prevJsonPath = e instanceof SszErrorPath ? e.jsonPath : [];
    const jsonPath = [keyOrIndex, ...prevJsonPath];
    const rawMessage = e instanceof SszErrorPath ? e.rawMessage : e.message;
    super("".concat(renderJsonPath(jsonPath), ": ").concat(rawMessage));

    _defineProperty(this, "jsonPath", void 0);

    _defineProperty(this, "rawMessage", void 0);

    this.jsonPath = jsonPath;
    this.rawMessage = rawMessage;
  }

}
/**
 * Render an array of JSON path items
 * @param jsonPath ["a", 2, "n", "m"]
 * @returns "a[2].n.m"
 */


exports.SszErrorPath = SszErrorPath;

function renderJsonPath(jsonPath) {
  let path = "";

  for (const item of jsonPath) {
    switch (typeof item) {
      case "number":
        path += "[".concat(item, "]");
        break;

      case "string":
      default:
        path += path.length > 0 ? ".".concat(item) : item;
        break;
    }
  }

  return path;
}
//# sourceMappingURL=errorPath.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListType = isListType;
exports.CompositeListType = exports.BasicListType = exports.ListType = exports.LIST_TYPE = exports.LENGTH_GINDEX = void 0;

var _array = __webpack_require__(62);

var _basic = __webpack_require__(24);

var _type = __webpack_require__(6);

var _compat = __webpack_require__(59);

var _persistentMerkleTree = __webpack_require__(27);

var _treeValue = __webpack_require__(40);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SSZ Lists (variable-length arrays) include the length of the list in the tree
 * This length is always in the same index in the tree
 * ```
 *   1
 *  / \
 * 2   3 // <-here
 * ```
 */
const LENGTH_GINDEX = BigInt(3);
exports.LENGTH_GINDEX = LENGTH_GINDEX;
const LIST_TYPE = Symbol.for("ssz/ListType"); // eslint-disable-next-line @typescript-eslint/no-explicit-any

exports.LIST_TYPE = LIST_TYPE;

function isListType(type) {
  return (0, _type.isTypeOf)(type, LIST_TYPE);
} // Trick typescript into treating ListType as a constructor


const ListType = // eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListType(options) {
  if ((0, _basic.isBasicType)(options.elementType)) {
    return new BasicListType(options);
  } else {
    return new CompositeListType(options);
  }
};

exports.ListType = ListType;

class BasicListType extends _array.BasicArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "limit", void 0);

    this.limit = options.limit;

    this._typeSymbols.add(LIST_TYPE);
  }

  struct_defaultValue() {
    return [];
  }

  struct_getLength(value) {
    return value.length;
  }

  getMaxLength() {
    return this.limit;
  }

  getMinLength() {
    return 0;
  }

  bytes_validate(data, start, end) {
    super.bytes_validate(data, start, end);

    if (end - start > this.getMaxSerializedLength()) {
      throw new Error("Deserialized list length greater than limit");
    }
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    return super.struct_deserializeFromBytes(data, start, end);
  }

  struct_getChunkCount(value) {
    return Math.ceil(value.length * this.elementType.struct_getSerializedLength() / 32);
  }

  struct_hashTreeRoot(value) {
    return (0, _compat.mixInLength)(super.struct_hashTreeRoot(value), value.length);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }

    const maxLength = this.limit;

    if (data.length > maxLength) {
      throw new Error("Invalid JSON list: length ".concat(data.length, " greater than limit ").concat(maxLength));
    }

    return super.struct_convertFromJson(data);
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const tree = super.struct_convertToTree(value);
    this.tree_setLength(tree, value.length);
    return tree;
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = new _persistentMerkleTree.BranchNode((0, _persistentMerkleTree.zeroNode)(super.getChunkDepth()), (0, _persistentMerkleTree.zeroNode)(0));
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  tree_getLength(target) {
    return _basic.number32Type.struct_deserializeFromBytes(target.getRoot(LENGTH_GINDEX), 0);
  }

  tree_setLength(target, length) {
    const chunk = new Uint8Array(32);

    _basic.number32Type.toBytes(length, chunk, 0);

    target.setRoot(LENGTH_GINDEX, chunk);
  }

  tree_deserializeFromBytes(data, start, end) {
    const length = (end - start) / this.elementType.struct_getSerializedLength();

    if (!Number.isSafeInteger(length)) {
      throw new Error("Deserialized list byte length must be divisible by element size");
    }

    if (length > this.limit) {
      throw new Error("Deserialized list length greater than limit");
    }

    const value = super.tree_deserializeFromBytes(data, start, end);
    this.tree_setLength(value, length);
    return value;
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) * this.elementType.struct_getSerializedLength() / 32);
  }

  getChunkDepth() {
    return super.getChunkDepth() + 1;
  }

  tree_setProperty(target, property, value) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pushSingle(target, value);
      return true;
    } else {
      return this.tree_setValueAtIndex(target, property, value);
    }
  }

  tree_deleteProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pop(target);
      return true;
    } else {
      return super.tree_deleteProperty(target, property);
    }
  }

  tree_pushSingle(target, value) {
    const length = this.tree_getLength(target);
    const expand = this.getChunkIndex(length) != this.getChunkIndex(length + 1);
    this.tree_setValueAtIndex(target, length, value, expand);
    this.tree_setLength(target, length + 1);
    return length + 1;
  }

  tree_push(target, ...values) {
    let newLength;

    for (const value of values) newLength = this.tree_pushSingle(target, value);

    return newLength;
  }

  tree_pop(target) {
    const length = this.tree_getLength(target);
    const value = this.tree_getProperty(target, length - 1);
    super.tree_deleteProperty(target, length - 1);
    this.tree_setLength(target, length - 1);
    return value;
  }

  hasVariableSerializedLength() {
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.limit * this.elementType.size() / 32);
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }

    const gindices = super.tree_getLeafGindices(target, root); // include the length chunk

    gindices.push((0, _persistentMerkleTree.concatGindices)([root, LENGTH_GINDEX]));
    return gindices;
  }

}

exports.BasicListType = BasicListType;

class CompositeListType extends _array.CompositeArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "limit", void 0);

    this.limit = options.limit;

    this._typeSymbols.add(LIST_TYPE);
  }

  hasVariableSerializedLength() {
    return true;
  }

  getMaxChunkCount() {
    return this.limit;
  }

  struct_defaultValue() {
    return [];
  }

  struct_getLength(value) {
    return value.length;
  }

  getMaxLength() {
    return this.limit;
  }

  getMinLength() {
    return 0;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = super.struct_deserializeFromBytes(data, start, end);

    if (value.length > this.limit) {
      throw new Error("Deserialized list length greater than limit: ".concat(value.length, " ").concat(this.limit));
    }

    return value;
  }

  struct_getChunkCount(value) {
    return value.length;
  }

  struct_hashTreeRoot(value) {
    return (0, _compat.mixInLength)(super.struct_hashTreeRoot(value), value.length);
  }

  struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }

    const maxLength = this.limit;

    if (data.length > maxLength) {
      throw new Error("Invalid JSON list: length ".concat(data.length, " greater than limit ").concat(maxLength));
    }

    return super.struct_convertFromJson(data, options);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = new _persistentMerkleTree.BranchNode((0, _persistentMerkleTree.zeroNode)(super.getChunkDepth()), (0, _persistentMerkleTree.zeroNode)(0));
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const tree = super.struct_convertToTree(value);
    this.tree_setLength(tree, value.length);
    return tree;
  }

  tree_getLength(target) {
    return _basic.number32Type.struct_deserializeFromBytes(target.getRoot(LENGTH_GINDEX), 0);
  }

  tree_setLength(target, length) {
    const chunk = new Uint8Array(32);

    _basic.number32Type.struct_serializeToBytes(length, chunk, 0);

    target.setRoot(LENGTH_GINDEX, chunk);
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();

    if (this.elementType.hasVariableSerializedLength()) {
      const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

      if (offsets.length > this.limit) {
        throw new Error("Deserialized list length greater than limit");
      }

      for (let i = 0; i < offsets.length; i++) {
        const [currentOffset, nextOffset] = offsets[i];
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }

      this.tree_setLength(target, offsets.length);
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;

      if (!Number.isSafeInteger(length)) {
        throw new Error("Deserialized list byte length must be divisible by element size");
      }

      if (length > this.limit) {
        throw new Error("Deserialized list length greater than limit");
      }

      for (let i = 0; i < length; i++) {
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize), true // expand tree as needed
        );
      }

      this.tree_setLength(target, length);
    }

    return target;
  }

  tree_getChunkCount(target) {
    return this.tree_getLength(target);
  }

  getChunkDepth() {
    return super.getChunkDepth() + 1;
  }

  tree_setProperty(target, property, value) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pushSingle(target, value);
    } else {
      this.tree_setSubtreeAtChunkIndex(target, property, value);
    }

    return true;
  }

  tree_deleteProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pop(target);
      return true;
    } else {
      return super.tree_deleteProperty(target, property);
    }
  }

  tree_pushSingle(target, value) {
    const length = this.tree_getLength(target);
    this.tree_setSubtreeAtChunkIndex(target, length, value, true);
    this.tree_setLength(target, length + 1);
    return length + 1;
  }

  tree_push(target, ...values) {
    let newLength;

    for (const value of values) newLength = this.tree_pushSingle(target, value);

    return newLength;
  }

  tree_pop(target) {
    const length = this.tree_getLength(target);
    const value = this.tree_getProperty(target, length - 1);
    this.tree_setSubtreeAtChunkIndex(target, length - 1, new _persistentMerkleTree.Tree((0, _persistentMerkleTree.zeroNode)(0)));
    this.tree_setLength(target, length - 1);
    return value;
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }

    const gindices = super.tree_getLeafGindices(target, root); // include the length chunk

    gindices.push((0, _persistentMerkleTree.concatGindices)([root, LENGTH_GINDEX]));
    return gindices;
  }

}

exports.CompositeListType = CompositeListType;
//# sourceMappingURL=list.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isByteVectorType = isByteVectorType;
exports.ByteVectorType = exports.BYTEVECTOR_TYPE = void 0;

var _vector = __webpack_require__(63);

var _basic = __webpack_require__(24);

var _type = __webpack_require__(6);

var _byteArray = __webpack_require__(17);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BYTEVECTOR_TYPE = Symbol.for("ssz/ByteVectorType");
exports.BYTEVECTOR_TYPE = BYTEVECTOR_TYPE;

function isByteVectorType(type) {
  return (0, _type.isTypeOf)(type, BYTEVECTOR_TYPE);
}

class ByteVectorType extends _vector.BasicVectorType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.byteType
    }, options));

    this._typeSymbols.add(BYTEVECTOR_TYPE);
  }

  struct_defaultValue() {
    return new Uint8Array(this.length);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const length = end - start;

    if (length !== this.length) {
      throw new Error("Invalid deserialized vector length: expected ".concat(this.length, ", actual: ").concat(length));
    }

    const value = new Uint8Array(length);
    value.set(data.slice(start, end));
    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    output.set(value, offset);
    return offset + this.length;
  }

  struct_convertFromJson(data) {
    const value = (0, _byteArray.fromHexString)(data);

    if (value.length !== this.length) {
      throw new Error("Invalid JSON vector length: expected ".concat(this.length, ", actual: ").concat(value.length));
    }

    return value;
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(value);
  }

  tree_convertToStruct(target) {
    const value = new Uint8Array(this.length);
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());

    if (this.length % 32 === 0) {
      for (let i = 0; i < this.length; i += 32) {
        value.set(chunkIterator.next().value.root, i);
      }
    } else {
      let i;

      for (i = 0; i < this.length - 32; i += 32) {
        value.set(chunkIterator.next().value.root, i);
      }

      value.set(chunkIterator.next().value.root.subarray(0, this.length - i), i);
    }

    return value;
  }

}

exports.ByteVectorType = ByteVectorType;
//# sourceMappingURL=byteVector.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(183);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(184);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(185);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(186);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(38));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(108));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticipationFlags = exports.Domain = exports.BLSSignature = exports.BLSPubkey = exports.ForkDigest = exports.DomainType = exports.Version = exports.Root = exports.Gwei = exports.ValidatorIndex = exports.SubCommitteeIndex = exports.CommitteeIndex = exports.Epoch = exports.Slot = exports.Uint256 = exports.Uint128 = exports.Uint64 = exports.Number64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Bytes96 = exports.Bytes48 = exports.Bytes32 = exports.Bytes8 = exports.Bytes4 = exports.Boolean = void 0;

var _ssz = __webpack_require__(0);

const Boolean = _ssz.booleanType;
exports.Boolean = Boolean;
const Bytes4 = new _ssz.ByteVectorType({
  length: 4
});
exports.Bytes4 = Bytes4;
const Bytes8 = new _ssz.ByteVectorType({
  length: 8
});
exports.Bytes8 = Bytes8;
const Bytes32 = new _ssz.ByteVectorType({
  length: 32
});
exports.Bytes32 = Bytes32;
const Bytes48 = new _ssz.ByteVectorType({
  length: 48
});
exports.Bytes48 = Bytes48;
const Bytes96 = new _ssz.ByteVectorType({
  length: 96
});
exports.Bytes96 = Bytes96;
const Uint8 = _ssz.byteType;
exports.Uint8 = Uint8;
const Uint16 = new _ssz.NumberUintType({
  byteLength: 2
});
exports.Uint16 = Uint16;
const Uint32 = _ssz.number32Type;
exports.Uint32 = Uint32;
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
exports.Number64 = Number64;
const Uint64 = new _ssz.BigIntUintType({
  byteLength: 8
});
exports.Uint64 = Uint64;
const Uint128 = new _ssz.BigIntUintType({
  byteLength: 16
});
exports.Uint128 = Uint128;
const Uint256 = new _ssz.BigIntUintType({
  byteLength: 32
}); // Custom types, defined for type hinting and readability

exports.Uint256 = Uint256;
const Slot = Number64;
exports.Slot = Slot;
const Epoch = Number64;
exports.Epoch = Epoch;
const CommitteeIndex = Number64;
exports.CommitteeIndex = CommitteeIndex;
const SubCommitteeIndex = Number64;
exports.SubCommitteeIndex = SubCommitteeIndex;
const ValidatorIndex = Number64;
exports.ValidatorIndex = ValidatorIndex;
const Gwei = Uint64;
exports.Gwei = Gwei;
const Root = new _ssz.RootType({
  expandedType: () => {
    throw new Error("Generic Root type has no expanded type");
  }
});
exports.Root = Root;
const Version = Bytes4;
exports.Version = Version;
const DomainType = Bytes4;
exports.DomainType = DomainType;
const ForkDigest = Bytes4;
exports.ForkDigest = ForkDigest;
const BLSPubkey = Bytes48;
exports.BLSPubkey = BLSPubkey;
const BLSSignature = Bytes96;
exports.BLSSignature = BLSSignature;
const Domain = Bytes32;
exports.Domain = Domain;
const ParticipationFlags = Uint8;
exports.ParticipationFlags = ParticipationFlags;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyVariable = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LazyVariable {
  constructor() {
    _defineProperty(this, "var", {
      set: false
    });
  }

  get() {
    if (!this.var.set) throw Error("variable not set");
    return this.var.value;
  }

  set(value) {
    this.var = {
      set: true,
      value
    };
  }

}

exports.LazyVariable = LazyVariable;
//# sourceMappingURL=lazyVar.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(202));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(203));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(2) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(113);
var anObject = __webpack_require__(9);
var $flags = __webpack_require__(67);
var DESCRIPTORS = __webpack_require__(2);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(11)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(2) && /./g.flags != 'g') __webpack_require__(5).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(67)
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31)('native-function-to-string', Function.toString);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(11)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68)('asyncIterator');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(48);
var pIE = __webpack_require__(35);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(26).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(4);

$export($export.S, 'Array', { isArray: __webpack_require__(49) });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(1)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(33);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(4);
var $entries = __webpack_require__(126)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var getKeys = __webpack_require__(21);
var toIObject = __webpack_require__(13);
var isEnum = __webpack_require__(35).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(128);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var isArray = __webpack_require__(49);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(2)) {
  var LIBRARY = __webpack_require__(20);
  var global = __webpack_require__(3);
  var fails = __webpack_require__(7);
  var $export = __webpack_require__(4);
  var $typed = __webpack_require__(79);
  var $buffer = __webpack_require__(131);
  var ctx = __webpack_require__(32);
  var anInstance = __webpack_require__(81);
  var propertyDesc = __webpack_require__(18);
  var hide = __webpack_require__(8);
  var redefineAll = __webpack_require__(80);
  var toInteger = __webpack_require__(22);
  var toLength = __webpack_require__(14);
  var toIndex = __webpack_require__(82);
  var toAbsoluteIndex = __webpack_require__(34);
  var toPrimitive = __webpack_require__(30);
  var has = __webpack_require__(12);
  var classof = __webpack_require__(52);
  var isObject = __webpack_require__(15);
  var toObject = __webpack_require__(10);
  var isArrayIter = __webpack_require__(84);
  var create = __webpack_require__(50);
  var getPrototypeOf = __webpack_require__(76);
  var gOPN = __webpack_require__(26).f;
  var getIterFn = __webpack_require__(85);
  var uid = __webpack_require__(16);
  var wks = __webpack_require__(1);
  var createArrayMethod = __webpack_require__(53);
  var createArrayIncludes = __webpack_require__(45);
  var speciesConstructor = __webpack_require__(132);
  var ArrayIterators = __webpack_require__(36);
  var Iterators = __webpack_require__(23);
  var $iterDetect = __webpack_require__(86);
  var setSpecies = __webpack_require__(133);
  var arrayFill = __webpack_require__(83);
  var arrayCopyWithin = __webpack_require__(134);
  var $DP = __webpack_require__(5);
  var $GOPD = __webpack_require__(51);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(2);
var LIBRARY = __webpack_require__(20);
var $typed = __webpack_require__(79);
var hide = __webpack_require__(8);
var redefineAll = __webpack_require__(80);
var fails = __webpack_require__(7);
var anInstance = __webpack_require__(81);
var toInteger = __webpack_require__(22);
var toLength = __webpack_require__(14);
var toIndex = __webpack_require__(82);
var gOPN = __webpack_require__(26).f;
var dP = __webpack_require__(5).f;
var arrayFill = __webpack_require__(83);
var setToStringTag = __webpack_require__(33);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(42);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(2);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(34);
var toLength = __webpack_require__(14);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(136)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(75)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(44);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(32);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(10);
var call = __webpack_require__(138);
var isArrayIter = __webpack_require__(84);
var toLength = __webpack_require__(14);
var createProperty = __webpack_require__(87);
var getIterFn = __webpack_require__(85);

$export($export.S + $export.F * !__webpack_require__(86)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperties: __webpack_require__(73) });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(4);
var ownKeys = __webpack_require__(141);
var toIObject = __webpack_require__(13);
var gOPD = __webpack_require__(51);
var createProperty = __webpack_require__(87);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(26);
var gOPS = __webpack_require__(48);
var anObject = __webpack_require__(9);
var Reflect = __webpack_require__(3).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(4);
var $filter = __webpack_require__(53)(2);

$export($export.P + $export.F * !__webpack_require__(37)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(4);
var $indexOf = __webpack_require__(45)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(37)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(21);

__webpack_require__(146)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(19);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(4);
var aFunction = __webpack_require__(42);
var toObject = __webpack_require__(10);
var fails = __webpack_require__(7);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(37)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  phase0: true,
  altair: true,
  allForks: true
};
Object.defineProperty(exports, "phase0", {
  enumerable: true,
  get: function () {
    return _phase.ts;
  }
});
Object.defineProperty(exports, "altair", {
  enumerable: true,
  get: function () {
    return _altair.ts;
  }
});
Object.defineProperty(exports, "allForks", {
  enumerable: true,
  get: function () {
    return _allForks.ts;
  }
});

var _types = __webpack_require__(38);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _phase = __webpack_require__(39);

var _altair = __webpack_require__(64);

var _allForks = __webpack_require__(110);
//# sourceMappingURL=types.js.map

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misc = __webpack_require__(88);

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _operations = __webpack_require__(89);

Object.keys(_operations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _operations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _operations[key];
    }
  });
});

var _block = __webpack_require__(150);

Object.keys(_block).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _block[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _block[key];
    }
  });
});

var _state = __webpack_require__(151);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _state[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _state[key];
    }
  });
});

var _validator = __webpack_require__(90);

Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});

var _wire = __webpack_require__(152);

Object.keys(_wire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wire[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wire[key];
    }
  });
});

var _api = __webpack_require__(91);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _types = __webpack_require__(38);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=block.js.map

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=state.js.map

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=wire.js.map

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlashingProtectionAttestationLowerBound = exports.SlashingProtectionAttestation = exports.SlashingProtectionBlock = exports.Genesis = exports.BeaconBlocksByRootRequest = exports.BeaconBlocksByRangeRequest = exports.Metadata = exports.Ping = exports.Goodbye = exports.Status = exports.SignedAggregateAndProof = exports.AggregateAndProof = exports.CommitteeAssignment = exports.BeaconState = exports.EpochAttestations = exports.SignedBeaconBlock = exports.BeaconBlock = exports.BeaconBlockBody = exports.SignedVoluntaryExit = exports.VoluntaryExit = exports.ProposerSlashing = exports.Deposit = exports.AttesterSlashing = exports.Attestation = exports.SigningData = exports.PendingAttestation = exports.IndexedAttestation = exports.AttestationData = exports.Validator = exports.HistoricalBatch = exports.HistoricalStateRoots = exports.HistoricalBlockRoots = exports.ENRForkID = exports.ForkData = exports.Fork = exports.Eth1DataOrdered = exports.Eth1Data = exports.DepositEvent = exports.DepositDataRootList = exports.DepositData = exports.DepositMessage = exports.CommitteeIndices = exports.CommitteeBits = exports.Checkpoint = exports.SignedBeaconBlockHeader = exports.BeaconBlockHeader = exports.AttestationSubnets = void 0;

var _lodestarParams = __webpack_require__(92);

var _ssz = __webpack_require__(0);

var _primitive = __webpack_require__(107);

var _lazyVar = __webpack_require__(109);

const {
  Boolean,
  Bytes32,
  Number64,
  Uint64,
  Slot,
  Epoch,
  CommitteeIndex,
  ValidatorIndex,
  Gwei,
  Root,
  Version,
  ForkDigest,
  BLSPubkey,
  BLSSignature,
  Domain
} = _primitive.ssz; // So the expandedRoots can be referenced, and break the circular dependency

const typesRef = new _lazyVar.LazyVariable(); // Misc types
// ==========

const AttestationSubnets = new _ssz.BitVectorType({
  length: _lodestarParams.ATTESTATION_SUBNET_COUNT
});
exports.AttestationSubnets = AttestationSubnets;
const BeaconBlockHeader = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    parentRoot: Root,
    stateRoot: Root,
    bodyRoot: Root
  }
});
exports.BeaconBlockHeader = BeaconBlockHeader;
const SignedBeaconBlockHeader = new _ssz.ContainerType({
  fields: {
    message: BeaconBlockHeader,
    signature: BLSSignature
  }
});
exports.SignedBeaconBlockHeader = SignedBeaconBlockHeader;
const Checkpoint = new _ssz.ContainerType({
  fields: {
    epoch: Epoch,
    root: Root
  }
});
exports.Checkpoint = Checkpoint;
const CommitteeBits = new _ssz.BitListType({
  limit: _lodestarParams.MAX_VALIDATORS_PER_COMMITTEE
});
exports.CommitteeBits = CommitteeBits;
const CommitteeIndices = new _ssz.ListType({
  elementType: ValidatorIndex,
  limit: _lodestarParams.MAX_VALIDATORS_PER_COMMITTEE
});
exports.CommitteeIndices = CommitteeIndices;
const DepositMessage = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    amount: Gwei
  }
});
exports.DepositMessage = DepositMessage;
const DepositData = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    amount: Gwei,
    signature: BLSSignature
  }
});
exports.DepositData = DepositData;
const DepositDataRootList = new _ssz.ListType({
  elementType: new _ssz.RootType({
    expandedType: DepositData
  }),
  limit: 2 ** _lodestarParams.DEPOSIT_CONTRACT_TREE_DEPTH
});
exports.DepositDataRootList = DepositDataRootList;
const DepositEvent = new _ssz.ContainerType({
  fields: {
    depositData: DepositData,
    blockNumber: Number64,
    index: Number64
  }
});
exports.DepositEvent = DepositEvent;
const Eth1Data = new _ssz.ContainerType({
  fields: {
    depositRoot: Root,
    depositCount: Number64,
    blockHash: Bytes32
  }
});
exports.Eth1Data = Eth1Data;
const Eth1DataOrdered = new _ssz.ContainerType({
  fields: {
    depositRoot: Root,
    depositCount: Number64,
    blockHash: Bytes32,
    blockNumber: Number64
  }
});
exports.Eth1DataOrdered = Eth1DataOrdered;
const Fork = new _ssz.ContainerType({
  fields: {
    previousVersion: Version,
    currentVersion: Version,
    epoch: Epoch
  }
});
exports.Fork = Fork;
const ForkData = new _ssz.ContainerType({
  fields: {
    currentVersion: Version,
    genesisValidatorsRoot: Root
  }
});
exports.ForkData = ForkData;
const ENRForkID = new _ssz.ContainerType({
  fields: {
    forkDigest: ForkDigest,
    nextForkVersion: Version,
    nextForkEpoch: Epoch
  }
});
exports.ENRForkID = ENRForkID;
const HistoricalBlockRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconBlock
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalBlockRoots = HistoricalBlockRoots;
const HistoricalStateRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconState
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalStateRoots = HistoricalStateRoots;
const HistoricalBatch = new _ssz.ContainerType({
  fields: {
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots
  }
});
exports.HistoricalBatch = HistoricalBatch;
const Validator = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    effectiveBalance: Gwei,
    slashed: Boolean,
    activationEligibilityEpoch: Epoch,
    activationEpoch: Epoch,
    exitEpoch: Epoch,
    withdrawableEpoch: Epoch
  }
}); // Misc dependants

exports.Validator = Validator;
const AttestationData = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    index: CommitteeIndex,
    beaconBlockRoot: Root,
    source: Checkpoint,
    target: Checkpoint
  }
});
exports.AttestationData = AttestationData;
const IndexedAttestation = new _ssz.ContainerType({
  fields: {
    attestingIndices: CommitteeIndices,
    data: AttestationData,
    signature: BLSSignature
  }
});
exports.IndexedAttestation = IndexedAttestation;
const PendingAttestation = new _ssz.ContainerType({
  fields: {
    aggregationBits: CommitteeBits,
    data: AttestationData,
    inclusionDelay: Slot,
    proposerIndex: ValidatorIndex
  }
});
exports.PendingAttestation = PendingAttestation;
const SigningData = new _ssz.ContainerType({
  fields: {
    objectRoot: Root,
    domain: Domain
  }
}); // Operations types
// ================

exports.SigningData = SigningData;
const Attestation = new _ssz.ContainerType({
  fields: {
    aggregationBits: CommitteeBits,
    data: AttestationData,
    signature: BLSSignature
  }
});
exports.Attestation = Attestation;
const AttesterSlashing = new _ssz.ContainerType({
  fields: {
    attestation1: IndexedAttestation,
    attestation2: IndexedAttestation
  }
});
exports.AttesterSlashing = AttesterSlashing;
const Deposit = new _ssz.ContainerType({
  fields: {
    proof: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.DEPOSIT_CONTRACT_TREE_DEPTH + 1
    }),
    data: DepositData
  }
});
exports.Deposit = Deposit;
const ProposerSlashing = new _ssz.ContainerType({
  fields: {
    signedHeader1: SignedBeaconBlockHeader,
    signedHeader2: SignedBeaconBlockHeader
  }
});
exports.ProposerSlashing = ProposerSlashing;
const VoluntaryExit = new _ssz.ContainerType({
  fields: {
    epoch: Epoch,
    validatorIndex: ValidatorIndex
  }
});
exports.VoluntaryExit = VoluntaryExit;
const SignedVoluntaryExit = new _ssz.ContainerType({
  fields: {
    message: VoluntaryExit,
    signature: BLSSignature
  }
}); // Block types
// ===========

exports.SignedVoluntaryExit = SignedVoluntaryExit;
const BeaconBlockBody = new _ssz.ContainerType({
  fields: {
    randaoReveal: BLSSignature,
    eth1Data: Eth1Data,
    graffiti: Bytes32,
    proposerSlashings: new _ssz.ListType({
      elementType: ProposerSlashing,
      limit: _lodestarParams.MAX_PROPOSER_SLASHINGS
    }),
    attesterSlashings: new _ssz.ListType({
      elementType: AttesterSlashing,
      limit: _lodestarParams.MAX_ATTESTER_SLASHINGS
    }),
    attestations: new _ssz.ListType({
      elementType: Attestation,
      limit: _lodestarParams.MAX_ATTESTATIONS
    }),
    deposits: new _ssz.ListType({
      elementType: Deposit,
      limit: _lodestarParams.MAX_DEPOSITS
    }),
    voluntaryExits: new _ssz.ListType({
      elementType: SignedVoluntaryExit,
      limit: _lodestarParams.MAX_VOLUNTARY_EXITS
    })
  }
});
exports.BeaconBlockBody = BeaconBlockBody;
const BeaconBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    parentRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconBlock
    }),
    stateRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconState
    }),
    body: BeaconBlockBody
  }
});
exports.BeaconBlock = BeaconBlock;
const SignedBeaconBlock = new _ssz.ContainerType({
  fields: {
    message: BeaconBlock,
    signature: BLSSignature
  }
}); // State types
// ===========

exports.SignedBeaconBlock = SignedBeaconBlock;
const EpochAttestations = new _ssz.ListType({
  elementType: PendingAttestation,
  limit: _lodestarParams.MAX_ATTESTATIONS * _lodestarParams.SLOTS_PER_EPOCH
});
exports.EpochAttestations = EpochAttestations;
const BeaconState = new _ssz.ContainerType({
  fields: {
    // Misc
    genesisTime: Number64,
    genesisValidatorsRoot: Root,
    slot: Slot,
    fork: Fork,
    // History
    latestBlockHeader: BeaconBlockHeader,
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots,
    historicalRoots: new _ssz.ListType({
      elementType: new _ssz.RootType({
        expandedType: HistoricalBatch
      }),
      limit: _lodestarParams.HISTORICAL_ROOTS_LIMIT
    }),
    // Eth1
    eth1Data: Eth1Data,
    eth1DataVotes: new _ssz.ListType({
      elementType: Eth1Data,
      limit: _lodestarParams.EPOCHS_PER_ETH1_VOTING_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    }),
    eth1DepositIndex: Number64,
    // Registry
    validators: new _ssz.ListType({
      elementType: Validator,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    balances: new _ssz.ListType({
      elementType: Gwei,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    randaoMixes: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.EPOCHS_PER_HISTORICAL_VECTOR
    }),
    // Slashings
    slashings: new _ssz.VectorType({
      elementType: Gwei,
      length: _lodestarParams.EPOCHS_PER_SLASHINGS_VECTOR
    }),
    // Attestations
    previousEpochAttestations: EpochAttestations,
    currentEpochAttestations: EpochAttestations,
    // Finality
    justificationBits: new _ssz.BitVectorType({
      length: _lodestarParams.JUSTIFICATION_BITS_LENGTH
    }),
    previousJustifiedCheckpoint: Checkpoint,
    currentJustifiedCheckpoint: Checkpoint,
    finalizedCheckpoint: Checkpoint
  }
}); // Validator types
// ===============

exports.BeaconState = BeaconState;
const CommitteeAssignment = new _ssz.ContainerType({
  fields: {
    validators: CommitteeIndices,
    committeeIndex: CommitteeIndex,
    slot: Slot
  }
});
exports.CommitteeAssignment = CommitteeAssignment;
const AggregateAndProof = new _ssz.ContainerType({
  fields: {
    aggregatorIndex: ValidatorIndex,
    aggregate: Attestation,
    selectionProof: BLSSignature
  }
});
exports.AggregateAndProof = AggregateAndProof;
const SignedAggregateAndProof = new _ssz.ContainerType({
  fields: {
    message: AggregateAndProof,
    signature: BLSSignature
  }
}); // ReqResp types
// =============

exports.SignedAggregateAndProof = SignedAggregateAndProof;
const Status = new _ssz.ContainerType({
  fields: {
    forkDigest: ForkDigest,
    finalizedRoot: Root,
    finalizedEpoch: Epoch,
    headRoot: Root,
    headSlot: Slot
  }
});
exports.Status = Status;
const Goodbye = Uint64;
exports.Goodbye = Goodbye;
const Ping = Uint64;
exports.Ping = Ping;
const Metadata = new _ssz.ContainerType({
  fields: {
    seqNumber: Uint64,
    attnets: AttestationSubnets
  }
});
exports.Metadata = Metadata;
const BeaconBlocksByRangeRequest = new _ssz.ContainerType({
  fields: {
    startSlot: Slot,
    count: Number64,
    step: Number64
  }
});
exports.BeaconBlocksByRangeRequest = BeaconBlocksByRangeRequest;
const BeaconBlocksByRootRequest = new _ssz.ListType({
  elementType: Root,
  limit: _lodestarParams.MAX_REQUEST_BLOCKS
}); // Api types
// =========

exports.BeaconBlocksByRootRequest = BeaconBlocksByRootRequest;
const Genesis = new _ssz.ContainerType({
  fields: {
    genesisValidatorsRoot: Root,
    genesisTime: Uint64,
    genesisForkVersion: Version
  }
}); // Non-speced types
// ================

exports.Genesis = Genesis;
const SlashingProtectionBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    signingRoot: Root
  }
});
exports.SlashingProtectionBlock = SlashingProtectionBlock;
const SlashingProtectionAttestation = new _ssz.ContainerType({
  fields: {
    sourceEpoch: Epoch,
    targetEpoch: Epoch,
    signingRoot: Root
  }
});
exports.SlashingProtectionAttestation = SlashingProtectionAttestation;
const SlashingProtectionAttestationLowerBound = new _ssz.ContainerType({
  fields: {
    minSourceEpoch: Epoch,
    minTargetEpoch: Epoch
  }
}); // MUST set typesRef here, otherwise expandedType() calls will throw

exports.SlashingProtectionAttestationLowerBound = SlashingProtectionAttestationLowerBound;
typesRef.set({
  BeaconBlock,
  BeaconState
});
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = exports.NEXT_SYNC_COMMITTEE_INDEX = exports.FINALIZED_ROOT_INDEX_FLOORLOG2 = exports.FINALIZED_ROOT_INDEX = exports.MIN_SYNC_COMMITTEE_PARTICIPANTS = exports.MAX_REQUEST_BLOCKS = exports.SYNC_COMMITTEE_SUBNET_COUNT = exports.TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = exports.ATTESTATION_SUBNET_COUNT = exports.EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = exports.RANDOM_SUBNETS_PER_VALIDATOR = exports.TARGET_AGGREGATORS_PER_COMMITTEE = exports.PARTICIPATION_FLAG_WEIGHTS = exports.WEIGHT_DENOMINATOR = exports.PROPOSER_WEIGHT = exports.SYNC_REWARD_WEIGHT = exports.TIMELY_HEAD_WEIGHT = exports.TIMELY_TARGET_WEIGHT = exports.TIMELY_SOURCE_WEIGHT = exports.TIMELY_HEAD_FLAG_INDEX = exports.TIMELY_TARGET_FLAG_INDEX = exports.TIMELY_SOURCE_FLAG_INDEX = exports.DOMAIN_CONTRIBUTION_AND_PROOF = exports.DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = exports.DOMAIN_SYNC_COMMITTEE = exports.DOMAIN_AGGREGATE_AND_PROOF = exports.DOMAIN_SELECTION_PROOF = exports.DOMAIN_VOLUNTARY_EXIT = exports.DOMAIN_DEPOSIT = exports.DOMAIN_RANDAO = exports.DOMAIN_BEACON_ATTESTER = exports.DOMAIN_BEACON_PROPOSER = exports.ETH1_ADDRESS_WITHDRAWAL_PREFIX = exports.BLS_WITHDRAWAL_PREFIX = exports.JUSTIFICATION_BITS_LENGTH = exports.DEPOSIT_CONTRACT_TREE_DEPTH = exports.BASE_REWARDS_PER_EPOCH = exports.FAR_FUTURE_EPOCH = exports.GENESIS_EPOCH = exports.GENESIS_SLOT = void 0;
// Misc
const GENESIS_SLOT = 0;
exports.GENESIS_SLOT = GENESIS_SLOT;
const GENESIS_EPOCH = 0;
exports.GENESIS_EPOCH = GENESIS_EPOCH;
const FAR_FUTURE_EPOCH = Infinity;
exports.FAR_FUTURE_EPOCH = FAR_FUTURE_EPOCH;
const BASE_REWARDS_PER_EPOCH = 4;
exports.BASE_REWARDS_PER_EPOCH = BASE_REWARDS_PER_EPOCH;
const DEPOSIT_CONTRACT_TREE_DEPTH = 2 ** 5; // 32

exports.DEPOSIT_CONTRACT_TREE_DEPTH = DEPOSIT_CONTRACT_TREE_DEPTH;
const JUSTIFICATION_BITS_LENGTH = 4; // Withdrawal prefixes

exports.JUSTIFICATION_BITS_LENGTH = JUSTIFICATION_BITS_LENGTH;
const BLS_WITHDRAWAL_PREFIX = Uint8Array.from([0]);
exports.BLS_WITHDRAWAL_PREFIX = BLS_WITHDRAWAL_PREFIX;
const ETH1_ADDRESS_WITHDRAWAL_PREFIX = Uint8Array.from([0]); // Domain types

exports.ETH1_ADDRESS_WITHDRAWAL_PREFIX = ETH1_ADDRESS_WITHDRAWAL_PREFIX;
const DOMAIN_BEACON_PROPOSER = Uint8Array.from([0, 0, 0, 0]);
exports.DOMAIN_BEACON_PROPOSER = DOMAIN_BEACON_PROPOSER;
const DOMAIN_BEACON_ATTESTER = Uint8Array.from([1, 0, 0, 0]);
exports.DOMAIN_BEACON_ATTESTER = DOMAIN_BEACON_ATTESTER;
const DOMAIN_RANDAO = Uint8Array.from([2, 0, 0, 0]);
exports.DOMAIN_RANDAO = DOMAIN_RANDAO;
const DOMAIN_DEPOSIT = Uint8Array.from([3, 0, 0, 0]);
exports.DOMAIN_DEPOSIT = DOMAIN_DEPOSIT;
const DOMAIN_VOLUNTARY_EXIT = Uint8Array.from([4, 0, 0, 0]);
exports.DOMAIN_VOLUNTARY_EXIT = DOMAIN_VOLUNTARY_EXIT;
const DOMAIN_SELECTION_PROOF = Uint8Array.from([5, 0, 0, 0]);
exports.DOMAIN_SELECTION_PROOF = DOMAIN_SELECTION_PROOF;
const DOMAIN_AGGREGATE_AND_PROOF = Uint8Array.from([6, 0, 0, 0]);
exports.DOMAIN_AGGREGATE_AND_PROOF = DOMAIN_AGGREGATE_AND_PROOF;
const DOMAIN_SYNC_COMMITTEE = Uint8Array.from([7, 0, 0, 0]);
exports.DOMAIN_SYNC_COMMITTEE = DOMAIN_SYNC_COMMITTEE;
const DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = Uint8Array.from([8, 0, 0, 0]);
exports.DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF;
const DOMAIN_CONTRIBUTION_AND_PROOF = Uint8Array.from([9, 0, 0, 0]); // Participation flag indices

exports.DOMAIN_CONTRIBUTION_AND_PROOF = DOMAIN_CONTRIBUTION_AND_PROOF;
const TIMELY_SOURCE_FLAG_INDEX = 0;
exports.TIMELY_SOURCE_FLAG_INDEX = TIMELY_SOURCE_FLAG_INDEX;
const TIMELY_TARGET_FLAG_INDEX = 1;
exports.TIMELY_TARGET_FLAG_INDEX = TIMELY_TARGET_FLAG_INDEX;
const TIMELY_HEAD_FLAG_INDEX = 2; // Incentivization weights

exports.TIMELY_HEAD_FLAG_INDEX = TIMELY_HEAD_FLAG_INDEX;
const TIMELY_SOURCE_WEIGHT = BigInt(14);
exports.TIMELY_SOURCE_WEIGHT = TIMELY_SOURCE_WEIGHT;
const TIMELY_TARGET_WEIGHT = BigInt(26);
exports.TIMELY_TARGET_WEIGHT = TIMELY_TARGET_WEIGHT;
const TIMELY_HEAD_WEIGHT = BigInt(14);
exports.TIMELY_HEAD_WEIGHT = TIMELY_HEAD_WEIGHT;
const SYNC_REWARD_WEIGHT = BigInt(2);
exports.SYNC_REWARD_WEIGHT = SYNC_REWARD_WEIGHT;
const PROPOSER_WEIGHT = BigInt(8);
exports.PROPOSER_WEIGHT = PROPOSER_WEIGHT;
const WEIGHT_DENOMINATOR = BigInt(64); // altair misc

exports.WEIGHT_DENOMINATOR = WEIGHT_DENOMINATOR;
const PARTICIPATION_FLAG_WEIGHTS = [TIMELY_SOURCE_WEIGHT, TIMELY_TARGET_WEIGHT, TIMELY_HEAD_WEIGHT]; // phase0 validator

exports.PARTICIPATION_FLAG_WEIGHTS = PARTICIPATION_FLAG_WEIGHTS;
const TARGET_AGGREGATORS_PER_COMMITTEE = 16;
exports.TARGET_AGGREGATORS_PER_COMMITTEE = TARGET_AGGREGATORS_PER_COMMITTEE;
const RANDOM_SUBNETS_PER_VALIDATOR = 1;
exports.RANDOM_SUBNETS_PER_VALIDATOR = RANDOM_SUBNETS_PER_VALIDATOR;
const EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = 256;
/** Rationale: https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#why-are-there-attestation_subnet_count-attestation-subnets */

exports.EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION;
const ATTESTATION_SUBNET_COUNT = 64; // altair validator

exports.ATTESTATION_SUBNET_COUNT = ATTESTATION_SUBNET_COUNT;
const TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = 4;
exports.TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE;
const SYNC_COMMITTEE_SUBNET_COUNT = 4;
exports.SYNC_COMMITTEE_SUBNET_COUNT = SYNC_COMMITTEE_SUBNET_COUNT;
const MAX_REQUEST_BLOCKS = 2 ** 10; // 1024
//

exports.MAX_REQUEST_BLOCKS = MAX_REQUEST_BLOCKS;
const MIN_SYNC_COMMITTEE_PARTICIPANTS = 1; // Lightclient pre-computed

/**
 * ```ts
 * config.types.altair.BeaconState.getPathGindex(["finalizedCheckpoint", "root"])
 * ```
 */

exports.MIN_SYNC_COMMITTEE_PARTICIPANTS = MIN_SYNC_COMMITTEE_PARTICIPANTS;
const FINALIZED_ROOT_INDEX = 105;
/**
 * ```ts
 * Math.floor(Math.log2(FINALIZED_ROOT_INDEX))
 * ```
 */

exports.FINALIZED_ROOT_INDEX = FINALIZED_ROOT_INDEX;
const FINALIZED_ROOT_INDEX_FLOORLOG2 = 6;
/**
 * ```ts
 * config.types.altair.BeaconState.getPathGindex(["nextSyncCommittee"])
 * ```
 */

exports.FINALIZED_ROOT_INDEX_FLOORLOG2 = FINALIZED_ROOT_INDEX_FLOORLOG2;
const NEXT_SYNC_COMMITTEE_INDEX = 55;
/**
 * ```ts
 * Math.floor(Math.log2(NEXT_SYNC_COMMITTEE_INDEX))
 * ```
 */

exports.NEXT_SYNC_COMMITTEE_INDEX = NEXT_SYNC_COMMITTEE_INDEX;
const NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = 5;
exports.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetName = void 0;
let PresetName;
exports.PresetName = PresetName;

(function (PresetName) {
  PresetName["mainnet"] = "mainnet";
  PresetName["minimal"] = "minimal";
})(PresetName || (exports.PresetName = PresetName = {}));
//# sourceMappingURL=presetName.js.map

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BeaconPreset = void 0;

var _ssz = __webpack_require__(0);

var _phase = __webpack_require__(105);

var _altair = __webpack_require__(106);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BeaconPreset = new _ssz.ContainerType({
  fields: _objectSpread(_objectSpread({}, _phase.Phase0Preset.fields), _altair.AltairPreset.fields)
});
exports.BeaconPreset = BeaconPreset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanType = exports.number32Type = exports.byteType = void 0;

var _uint = __webpack_require__(96);

var _boolean = __webpack_require__(95);

const byteType = new _uint.NumberUintType({
  byteLength: 1
});
exports.byteType = byteType;
const number32Type = new _uint.NumberUintType({
  byteLength: 4
});
exports.number32Type = number32Type;
const booleanType = new _boolean.BooleanType();
exports.booleanType = booleanType;
//# sourceMappingURL=wellKnown.js.map

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstract = __webpack_require__(55);

Object.keys(_abstract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abstract[key];
    }
  });
});

var _array = __webpack_require__(62);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _vector = __webpack_require__(63);

Object.keys(_vector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vector[key];
    }
  });
});

var _list = __webpack_require__(103);

Object.keys(_list).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _list[key];
    }
  });
});

var _bitVector = __webpack_require__(177);

Object.keys(_bitVector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bitVector[key];
    }
  });
});

var _bitList = __webpack_require__(178);

Object.keys(_bitList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bitList[key];
    }
  });
});

var _byteVector = __webpack_require__(104);

Object.keys(_byteVector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _byteVector[key];
    }
  });
});

var _root = __webpack_require__(179);

Object.keys(_root).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _root[key];
    }
  });
});

var _container = __webpack_require__(180);

Object.keys(_container).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _container[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBackedValue = isBackedValue;

var _tree = __webpack_require__(57);

function isBackedValue(value) {
  return (0, _tree.isTreeBacked)(value);
}
//# sourceMappingURL=backedValue.js.map

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readonlyValues = readonlyValues;
exports.readonlyEntries = readonlyEntries;

var _tree = __webpack_require__(57);

function readonlyValues(obj) {
  if ((0, _tree.isTreeBacked)(obj) && obj.readonlyValues) {
    return obj.readonlyValues();
  } else {
    return Object.values(obj);
  }
}

function readonlyEntries(obj) {
  if ((0, _tree.isTreeBacked)(obj) && obj.readonlyEntries) {
    return obj.readonlyEntries();
  } else {
    return Object.entries(obj);
  }
}
//# sourceMappingURL=readonlyIterate.js.map

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newInstance = newInstance;

var _loader = _interopRequireDefault(__webpack_require__(165));

var _buffer = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-binary-import '../build/optimized.wasm' */
const wasmCode = "\0asm\x01\0\0\0\x01\x1F\x06`\x02\x7F\x7F\0`\0\0`\x01\x7F\0`\x01\x7F\x01\x7F`\x03\x7F\x7F\x7F\0`\x04\x7F\x7F\x7F\x7F\0\x02\r\x01\x03env\x05abort\0\x05\x03\x0F\x0E\x02\x03\0\x03\x01\x01\x04\0\0\x03\x02\x02\0\x01\x05\x03\x01\0\x01\x06\xAC\x01\"\x7F\0A\x80\x04\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x07V\t\x06memory\x02\0\fINPUT_LENGTH\x03\0\x05input\x03\x1C\x06output\x03\x1E\x04init\0\x06\x06update\0\t\x05final\0\x0B\x06digest\0\f\bdigest64\0\r\b\x01\x0E\n\xD2\f\x0EF\x01\x02\x7F \0?\0\"\x02A\x10t\"\x01K\x04@ \x02 \0 \x01kA\xFF\xFF\x03jA\x80\x80|qA\x10v\"\x01 \x02 \x01J\x1B@\0A\0H\x04@ \x01@\0A\0H\x04@\0\x0B\x0B\x0B \0$\x17\x0BR\x01\x03\x7F \0A\xF0\xFF\xFF\xFF\x03K\x04@\0\x0B#\x17A\x10j\"\x02 \0A\x0FjApq\"\x01A\x10 \x01A\x10K\x1B\"\x03j\x10\x01 \x02A\x10k\"\x01 \x036\x02\0 \x01A\x016\x02\x04 \x01A\x006\x02\b \x01 \x006\x02\f \x02\x0B%\x01\x01\x7F\x03@ \x01\x04@ \0\"\x02A\x01j!\0 \x02A\0:\0\0 \x01A\x01k!\x01\f\x01\x0B\x0B\x0B)\x01\x01\x7F \0A\xF0\xFF\xFF\xFF\x03K\x04@A\x80\x05A\xB0\x05A6A*\x10\0\0\x0B \0\x10\x02\"\x01 \0\x10\x03 \x01\x0BG\0A\xB4\x02(\x02\0$\x01A\xE4\x04(\x02\0$\x02A\xE0\x05$\x16A\xE0\x05$\x17A\xC0\0\x10\x04$\x18#\x18$\x19A\x80\x02\x10\x04$\x1A#\x1A$\x1BA\x80\x04\x10\x04$\x1C#\x1C$\x1DA \x10\x04$\x1E#\x1E$\x1F\x0BJ\0A\xE7\xCC\xA7\xD0\x06$\x03A\x85\xDD\x9E\xDB{$\x04A\xF2\xE6\xBB\xE3\x03$\x05A\xBA\xEA\xBF\xAAz$\x06A\xFF\xA4\xB9\x88\x05$\x07A\x8C\xD1\x95\xD8y$\bA\xAB\xB3\x8F\xFC\x01$\tA\x99\x9A\x83\xDF\x05$\nA\0$ A\0$!\x0Bg\x01\x02\x7F\x02@ \x02!\x03 \0 \x01F\r\0 \0 \x01I\x04@\x03@ \x03\x04@ \0\"\x02A\x01j!\0 \x01\"\x04A\x01j!\x01 \x02 \x04-\0\0:\0\0 \x03A\x01k!\x03\f\x01\x0B\x0B\x05\x03@ \x03\x04@ \x03A\x01k\"\x03 \0j \x01 \x03j-\0\0:\0\0\f\x01\x0B\x0B\x0B\x0B\x0B\xEC\x03\x01\x01\x7F#\x03$\x0B#\x04$\f#\x05$\r#\x06$\x0E#\x07$\x0F#\b$\x10#\t$\x11#\n$\x12 \x01\x04@A\0$\x13\x03@#\x13A\x10I\x04@ \0#\x13A\x02tj \x01#\x13A\x02t\"\x02j-\0\0A\x18t \x01 \x02A\x01jj-\0\0A\x10tr \x01 \x02A\x02jj-\0\0A\btr \x01 \x02A\x03jj-\0\0r6\x02\0#\x13A\x01j$\x13\f\x01\x0B\x0BA\x10$\x13\x03@#\x13A\xC0\0I\x04@ \0#\x13A\x02tj \0#\x13A\x10kA\x02tj(\x02\0 \0#\x13A\x07kA\x02tj(\x02\0 \0#\x13A\x02kA\x02tj(\x02\0\"\x01A\x11x \x01A\x13xs \x01A\nvsj \0#\x13A\x0FkA\x02tj(\x02\0\"\x01A\x07x \x01A\x12xs \x01A\x03vsjj6\x02\0#\x13A\x01j$\x13\f\x01\x0B\x0B\x0BA\0$\x13\x03@#\x13A\xC0\0I\x04@ \0#\x13A\x02tj(\x02\0#\x01#\x13A\x02tj(\x02\0#\x12#\x0F\"\x01A\x06x \x01A\x0Bxs \x01A\x19xsj#\x0F\"\x01#\x10q#\x11 \x01A\x7Fsqsjjj$\x14#\x0B\"\x01A\x02x \x01A\rxs \x01A\x16xs#\x0B\"\x01#\f\"\x02q \x01#\r\"\x01qs \x01 \x02qsj$\x15#\x11$\x12#\x10$\x11#\x0F$\x10#\x0E#\x14j$\x0F#\r$\x0E#\f$\r#\x0B$\f#\x14#\x15j$\x0B#\x13A\x01j$\x13\f\x01\x0B\x0B#\x03#\x0Bj$\x03#\x04#\fj$\x04#\x05#\rj$\x05#\x06#\x0Ej$\x06#\x07#\x0Fj$\x07#\b#\x10j$\b#\t#\x11j$\t#\n#\x12j$\n\x0B\xB1\x01\x01\x02\x7F \x01#!j$!# \x04@A\xC0\0# k \x01L\x04@#\x19# j \0A\xC0\0# k\x10\x07# A\xC0\0# kj$ A\xC0\0# k!\x02 \x01A\xC0\0# kk!\x01#\x1B#\x19\x10\bA\0$ \x05#\x19# j \0 \x01\x10\x07 \x01# j$ \x0F\x0B\x0B\x03@ \x03 \x01A\xC0\0mH\x04@#\x1B \0 \x02j\x10\b \x03A\x01j!\x03 \x02A@k!\x02\f\x01\x0B\x0B \x01A?q\x04@#\x19# j \0 \x02j \x01A?q\"\0\x10\x07 \0# j$ \x0B\x0B\x19\0 \0A\x80\xFE\x83xqA\bw \0A\xFF\x81\xFC\x07qA\bxr\x0B\xAD\x02\x01\x02\x7F#!A?qA?H\x04@#\x19# jA\x80\x01:\0\0# A\x01j$ \x0B#!A?qA8N\x04@#\x19# j\"\x01A\xC0\0# kj!\x02\x03@ \x01 \x02I\x04@ \x01A\0:\0\0 \x01A\x01j!\x01\f\x01\x0B\x0B#\x1B#\x19\x10\bA\0$ \x0B#!A?qA?N\x04@#\x19# jA\x80\x01:\0\0# A\x01j$ \x0B#\x19# j\"\x01A8# kj!\x02\x03@ \x01 \x02I\x04@ \x01A\0:\0\0 \x01A\x01j!\x01\f\x01\x0B\x0B#\x19A8j#!A\x80\x80\x80\x80\x02m\x10\n6\x02\0#\x19A<j#!A\x03t\x10\n6\x02\0#\x1B#\x19\x10\b \0#\x03\x10\n6\x02\0 \0A\x04j#\x04\x10\n6\x02\0 \0A\bj#\x05\x10\n6\x02\0 \0A\fj#\x06\x10\n6\x02\0 \0A\x10j#\x07\x10\n6\x02\0 \0A\x14j#\b\x10\n6\x02\0 \0A\x18j#\t\x10\n6\x02\0 \0A\x1Cj#\n\x10\n6\x02\0\x0B\x0E\0\x10\x06#\x1D \0\x10\t#\x1F\x10\x0B\x0Bm\0\x10\x06#\x1B \0\x10\b#\x02A\0\x10\b \x01#\x03\x10\n6\x02\0 \x01A\x04j#\x04\x10\n6\x02\0 \x01A\bj#\x05\x10\n6\x02\0 \x01A\fj#\x06\x10\n6\x02\0 \x01A\x10j#\x07\x10\n6\x02\0 \x01A\x14j#\b\x10\n6\x02\0 \x01A\x18j#\t\x10\n6\x02\0 \x01A\x1Cj#\n\x10\n6\x02\0\x0B\x04\0\x10\x05\x0B\x0B\xAB\x05\x07\0A\x11\x0B\x8F\x02\x01\0\0\x01\0\0\0\0\0\0\0\0\x01\0\0\x98/\x8AB\x91D7q\xCF\xFB\xC0\xB5\xA5\xDB\xB5\xE9[\xC2V9\xF1\x11\xF1Y\xA4\x82?\x92\xD5^\x1C\xAB\x98\xAA\x07\xD8\x01[\x83\x12\xBE\x851$\xC3}\fUt]\xBEr\xFE\xB1\xDE\x80\xA7\x06\xDC\x9Bt\xF1\x9B\xC1\xC1i\x9B\xE4\x86G\xBE\xEF\xC6\x9D\xC1\x0F\xCC\xA1\f$o,\xE9-\xAA\x84tJ\xDC\xA9\xB0\\\xDA\x88\xF9vRQ>\x98m\xC61\xA8\xC8'\x03\xB0\xC7\x7FY\xBF\xF3\x0B\xE0\xC6G\x91\xA7\xD5Qc\xCA\x06g))\x14\x85\n\xB7'8!\x1B.\xFCm,M\x13\r8STs\ne\xBB\njv.\xC9\xC2\x81\x85,r\x92\xA1\xE8\xBF\xA2Kf\x1A\xA8p\x8BK\xC2\xA3Ql\xC7\x19\xE8\x92\xD1$\x06\x99\xD6\x855\x0E\xF4p\xA0j\x10\x16\xC1\xA4\x19\bl7\x1ELwH'\xB5\xBC\xB04\xB3\f\x1C9J\xAA\xD8NO\xCA\x9C[\xF3o.h\xEE\x82\x8Ftoc\xA5x\x14x\xC8\x84\b\x02\xC7\x8C\xFA\xFF\xBE\x90\xEBlP\xA4\xF7\xA3\xF9\xBE\xF2xq\xC6\0A\xA0\x02\x0B\x1D\x10\0\0\0\x01\0\0\0\x03\0\0\0\x10\0\0\0 \0\0\0 \0\0\0\0\x01\0\0@\0A\xC1\x02\x0B\x13\x01\0\0\x01\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x80\0A\x8D\x03\x0B\xC3\x01\x02\0\0\0\0\0\x80\0\0@\x01\0P \0\x88P\0\0\0\b\0\"\x14\0U\"B\x97\b\x05 \0\0\xA0\0\0\x88Z\0\x94\\\0\x9D\xD4\x16\0\0\x1F\x80\xFA\xD0%2\xD3YYg\x11\xDA\xBF\xE6\xF6I\x15\f\xB3P\xB0\xB2\b'L|\x9D\x93\xA3\xE2\f\xEA\xE1\xE6\x885C+\xA5Io\xA1go\x012\xD7\x91.\xEBN\xE5U\xBF]5#\xEE\x8E\xC2^\xBC\xE2\x94C?\xA8\xF7x\xADE\xCD\xD0\xF36\xE8\x05\x9C\xD9\xC7\x1DQ\xB0\xC4z\xBCi[7\x11\xBD\xE5q\xBA\xE3\xF2\x9F ;\x17\xEE\xFE\x18\xE7\xD9Z\xE2FP7\x13\x9D\b\x15\x05\x04\x0F\rONH'&\xD2(\x0114\xB4h\xC6\xCCA\bB\xB8\x11\xD3bq\xA7\x9B\xE5\x84\xA4\xA7\x85\0A\xD0\x04\x0B\x1D\x10\0\0\0\x01\0\0\0\x03\0\0\0\x10\0\0\0P\x01\0\0P\x01\0\0\0\x01\0\0@\0A\xF0\x04\x0B+\x1C\0\0\0\x01\0\0\0\x01\0\0\0\x1C\0\0\0I\0n\0v\0a\0l\0i\0d\0 \0l\0e\0n\0g\0t\0h\0A\xA0\x05\x0B5&\0\0\0\x01\0\0\0\x01\0\0\0&\0\0\0~\0l\0i\0b\0/\0a\0r\0r\0a\0y\0b\0u\0f\0f\0e\0r\0.\0t\0s";

const _module = new WebAssembly.Module(_buffer.Buffer.from(wasmCode, 'binary'));

function newInstance() {
  return _loader.default.instantiateSync(_module);
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Runtime header offsets
const ID_OFFSET = -8;
const SIZE_OFFSET = -4;

// Runtime ids
const ARRAYBUFFER_ID = 0;
const STRING_ID = 1;
const ARRAYBUFFERVIEW_ID = 2;

// Runtime type information
const ARRAYBUFFERVIEW = 1 << 0;
const ARRAY = 1 << 1;
const SET = 1 << 2;
const MAP = 1 << 3;
const VAL_ALIGN_OFFSET = 5;
const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;
const VAL_SIGNED = 1 << 10;
const VAL_FLOAT = 1 << 11;
const VAL_NULLABLE = 1 << 12;
const VAL_MANAGED = 1 << 13;
const KEY_ALIGN_OFFSET = 14;
const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;
const KEY_SIGNED = 1 << 19;
const KEY_FLOAT = 1 << 20;
const KEY_NULLABLE = 1 << 21;
const KEY_MANAGED = 1 << 22;

// Array(BufferView) layout
const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;
const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;
const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;
const ARRAYBUFFERVIEW_SIZE = 12;
const ARRAY_LENGTH_OFFSET = 12;
const ARRAY_SIZE = 16;

const BIGINT = typeof BigUint64Array !== "undefined";
const THIS = Symbol();
const CHUNKSIZE = 1024;

/** Gets a string from an U32 and an U16 view on a memory. */
function getStringImpl(buffer, ptr) {
  const U32 = new Uint32Array(buffer);
  const U16 = new Uint16Array(buffer);
  var length = U32[(ptr + SIZE_OFFSET) >>> 2] >>> 1;
  var offset = ptr >>> 1;
  if (length <= CHUNKSIZE) return String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
  const parts = [];
  do {
    const last = U16[offset + CHUNKSIZE - 1];
    const size = last >= 0xD800 && last < 0xDC00 ? CHUNKSIZE - 1 : CHUNKSIZE;
    parts.push(String.fromCharCode.apply(String, U16.subarray(offset, offset += size)));
    length -= size;
  } while (length > CHUNKSIZE);
  return parts.join("") + String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
}

/** Prepares the base module prior to instantiation. */
function preInstantiate(imports) {
  const baseModule = {};

  function getString(memory, ptr) {
    if (!memory) return "<yet unknown>";
    return getStringImpl(memory.buffer, ptr);
  }

  // add common imports used by stdlib for convenience
  const env = (imports.env = imports.env || {});
  env.abort = env.abort || function abort(mesg, file, line, colm) {
    const memory = baseModule.memory || env.memory; // prefer exported, otherwise try imported
    throw Error("abort: " + getString(memory, mesg) + " at " + getString(memory, file) + ":" + line + ":" + colm);
  }
  env.trace = env.trace || function trace(mesg, n) {
    const memory = baseModule.memory || env.memory;
    console.log("trace: " + getString(memory, mesg) + (n ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + n).join(", "));
  }
  imports.Math = imports.Math || Math;
  imports.Date = imports.Date || Date;

  return baseModule;
}

/** Prepares the final module once instantiation is complete. */
function postInstantiate(baseModule, instance) {
  const rawExports = instance.exports;
  const memory = rawExports.memory;
  const table = rawExports.table;
  const alloc = rawExports["__alloc"];
  const retain = rawExports["__retain"];
  const rttiBase = rawExports["__rtti_base"] || ~0; // oob if not present

  /** Gets the runtime type info for the given id. */
  function getInfo(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2];
  }

  /** Gets the runtime base id for the given id. */
  function getBase(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2 + 1];
  }

  /** Gets the runtime alignment of a collection's values. */
  function getValueAlign(info) {
    return 31 - Math.clz32((info >>> VAL_ALIGN_OFFSET) & 31); // -1 if none
  }

  /** Gets the runtime alignment of a collection's keys. */
  function getKeyAlign(info) {
    return 31 - Math.clz32((info >>> KEY_ALIGN_OFFSET) & 31); // -1 if none
  }

  /** Allocates a new string in the module's memory and returns its retained pointer. */
  function __allocString(str) {
    const length = str.length;
    const ptr = alloc(length << 1, STRING_ID);
    const U16 = new Uint16Array(memory.buffer);
    for (var i = 0, p = ptr >>> 1; i < length; ++i) U16[p + i] = str.charCodeAt(i);
    return ptr;
  }

  baseModule.__allocString = __allocString;

  /** Reads a string from the module's memory by its pointer. */
  function __getString(ptr) {
    const buffer = memory.buffer;
    const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];
    if (id !== STRING_ID) throw Error("not a string: " + ptr);
    return getStringImpl(buffer, ptr);
  }

  baseModule.__getString = __getString;

  /** Gets the view matching the specified alignment, signedness and floatness. */
  function getView(alignLog2, signed, float) {
    const buffer = memory.buffer;
    if (float) {
      switch (alignLog2) {
        case 2: return new Float32Array(buffer);
        case 3: return new Float64Array(buffer);
      }
    } else {
      switch (alignLog2) {
        case 0: return new (signed ? Int8Array : Uint8Array)(buffer);
        case 1: return new (signed ? Int16Array : Uint16Array)(buffer);
        case 2: return new (signed ? Int32Array : Uint32Array)(buffer);
        case 3: return new (signed ? BigInt64Array : BigUint64Array)(buffer);
      }
    }
    throw Error("unsupported align: " + alignLog2);
  }

  /** Allocates a new array in the module's memory and returns its retained pointer. */
  function __allocArray(id, values) {
    const info = getInfo(id);
    if (!(info & (ARRAYBUFFERVIEW | ARRAY))) throw Error("not an array: " + id + " @ " + info);
    const align = getValueAlign(info);
    const length = values.length;
    const buf = alloc(length << align, ARRAYBUFFER_ID);
    const arr = alloc(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);
    const U32 = new Uint32Array(memory.buffer);
    U32[arr + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = retain(buf);
    U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = buf;
    U32[arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = length << align;
    if (info & ARRAY) U32[arr + ARRAY_LENGTH_OFFSET >>> 2] = length;
    const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);
    if (info & VAL_MANAGED) {
      for (let i = 0; i < length; ++i) view[(buf >>> align) + i] = retain(values[i]);
    } else {
      view.set(values, buf >>> align);
    }
    return arr;
  }

  baseModule.__allocArray = __allocArray;

  /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */
  function __getArrayView(arr) {
    const U32 = new Uint32Array(memory.buffer);
    const id = U32[arr + ID_OFFSET >>> 2];
    const info = getInfo(id);
    if (!(info & ARRAYBUFFERVIEW)) throw Error("not an array: " + id);
    const align = getValueAlign(info);
    var buf = U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    const length = info & ARRAY
      ? U32[arr + ARRAY_LENGTH_OFFSET >>> 2]
      : U32[buf + SIZE_OFFSET >>> 2] >>> align;
    return getView(align, info & VAL_SIGNED, info & VAL_FLOAT)
          .subarray(buf >>>= align, buf + length);
  }

  baseModule.__getArrayView = __getArrayView;

  /** Copies an array's values from the module's memory. Infers the array type from RTTI. */
  function __getArray(arr) {
    const input = __getArrayView(arr);
    const len = input.length;
    const out = new Array(len);
    for (let i = 0; i < len; i++) out[i] = input[i];
    return out;
  }

  baseModule.__getArray = __getArray;

  /** Copies an ArrayBuffer's value from the module's memory. */
  function __getArrayBuffer(ptr) {
    const buffer = memory.buffer;
    const length = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2];
    return buffer.slice(ptr, ptr + length);
  }

  baseModule.__getArrayBuffer = __getArrayBuffer;

  /** Copies a typed array's values from the module's memory. */
  function getTypedArray(Type, alignLog2, ptr) {
    return new Type(getTypedArrayView(Type, alignLog2, ptr));
  }

  /** Gets a live view on a typed array's values in the module's memory. */
  function getTypedArrayView(Type, alignLog2, ptr) {
    const buffer = memory.buffer;
    const U32 = new Uint32Array(buffer);
    const bufPtr = U32[ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    return new Type(buffer, bufPtr, U32[bufPtr + SIZE_OFFSET >>> 2] >>> alignLog2);
  }

  baseModule.__getInt8Array = getTypedArray.bind(null, Int8Array, 0);
  baseModule.__getInt8ArrayView = getTypedArrayView.bind(null, Int8Array, 0);
  baseModule.__getUint8Array = getTypedArray.bind(null, Uint8Array, 0);
  baseModule.__getUint8ArrayView = getTypedArrayView.bind(null, Uint8Array, 0);
  baseModule.__getUint8ClampedArray = getTypedArray.bind(null, Uint8ClampedArray, 0);
  baseModule.__getUint8ClampedArrayView = getTypedArrayView.bind(null, Uint8ClampedArray, 0);
  baseModule.__getInt16Array = getTypedArray.bind(null, Int16Array, 1);
  baseModule.__getInt16ArrayView = getTypedArrayView.bind(null, Int16Array, 1);
  baseModule.__getUint16Array = getTypedArray.bind(null, Uint16Array, 1);
  baseModule.__getUint16ArrayView = getTypedArrayView.bind(null, Uint16Array, 1);
  baseModule.__getInt32Array = getTypedArray.bind(null, Int32Array, 2);
  baseModule.__getInt32ArrayView = getTypedArrayView.bind(null, Int32Array, 2);
  baseModule.__getUint32Array = getTypedArray.bind(null, Uint32Array, 2);
  baseModule.__getUint32ArrayView = getTypedArrayView.bind(null, Uint32Array, 2);
  if (BIGINT) {
    baseModule.__getInt64Array = getTypedArray.bind(null, BigInt64Array, 3);
    baseModule.__getInt64ArrayView = getTypedArrayView.bind(null, BigInt64Array, 3);
    baseModule.__getUint64Array = getTypedArray.bind(null, BigUint64Array, 3);
    baseModule.__getUint64ArrayView = getTypedArrayView.bind(null, BigUint64Array, 3);
  }
  baseModule.__getFloat32Array = getTypedArray.bind(null, Float32Array, 2);
  baseModule.__getFloat32ArrayView = getTypedArrayView.bind(null, Float32Array, 2);
  baseModule.__getFloat64Array = getTypedArray.bind(null, Float64Array, 3);
  baseModule.__getFloat64ArrayView = getTypedArrayView.bind(null, Float64Array, 3);

  /** Tests whether an object is an instance of the class represented by the specified base id. */
  function __instanceof(ptr, baseId) {
    const U32 = new Uint32Array(memory.buffer);
    var id = U32[(ptr + ID_OFFSET) >>> 2];
    if (id <= U32[rttiBase >>> 2]) {
      do if (id == baseId) return true;
      while (id = getBase(id));
    }
    return false;
  }

  baseModule.__instanceof = __instanceof;

  // Pull basic exports to baseModule so code in preInstantiate can use them
  baseModule.memory = baseModule.memory || memory;
  baseModule.table  = baseModule.table  || table;

  // Demangle exports and provide the usual utility on the prototype
  return demangle(rawExports, baseModule);
}

function isResponse(o) {
  return typeof Response !== "undefined" && o instanceof Response;
}

/** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */
async function instantiate(source, imports) {
  if (isResponse(source = await source)) return instantiateStreaming(source, imports);
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    await WebAssembly.instantiate(
      source instanceof WebAssembly.Module
        ? source
        : await WebAssembly.compile(source),
      imports
    )
  );
}

exports.instantiate = instantiate;

/** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */
function instantiateSync(source, imports) {
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    new WebAssembly.Instance(
      source instanceof WebAssembly.Module
        ? source
        : new WebAssembly.Module(source),
      imports
    )
  )
}

exports.instantiateSync = instantiateSync;

/** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */
async function instantiateStreaming(source, imports) {
  if (!WebAssembly.instantiateStreaming) {
    return instantiate(
      isResponse(source = await source)
        ? source.arrayBuffer()
        : source,
      imports
    );
  }
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    (await WebAssembly.instantiateStreaming(source, imports)).instance
  );
}

exports.instantiateStreaming = instantiateStreaming;

/** Demangles an AssemblyScript module's exports to a friendly object structure. */
function demangle(exports, baseModule) {
  var module = baseModule ? Object.create(baseModule) : {};
  var setArgumentsLength = exports["__argumentsLength"]
    ? function(length) { exports["__argumentsLength"].value = length; }
    : exports["__setArgumentsLength"] || exports["__setargc"] || function() {};
  for (let internalName in exports) {
    if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;
    const elem = exports[internalName];
    let parts = internalName.split(".");
    let curr = module;
    while (parts.length > 1) {
      let part = parts.shift();
      if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};
      curr = curr[part];
    }
    let name = parts[0];
    let hash = name.indexOf("#");
    if (hash >= 0) {
      let className = name.substring(0, hash);
      let classElem = curr[className];
      if (typeof classElem === "undefined" || !classElem.prototype) {
        let ctor = function(...args) {
          return ctor.wrap(ctor.prototype.constructor(0, ...args));
        };
        ctor.prototype = {
          valueOf: function valueOf() {
            return this[THIS];
          }
        };
        ctor.wrap = function(thisValue) {
          return Object.create(ctor.prototype, { [THIS]: { value: thisValue, writable: false } });
        };
        if (classElem) Object.getOwnPropertyNames(classElem).forEach(name =>
          Object.defineProperty(ctor, name, Object.getOwnPropertyDescriptor(classElem, name))
        );
        curr[className] = ctor;
      }
      name = name.substring(hash + 1);
      curr = curr[className].prototype;
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          let getter = exports[internalName.replace("set:", "get:")];
          let setter = exports[internalName.replace("get:", "set:")];
          Object.defineProperty(curr, name, {
            get: function() { return getter(this[THIS]); },
            set: function(value) { setter(this[THIS], value); },
            enumerable: true
          });
        }
      } else {
        if (name === 'constructor') {
          (curr[name] = (...args) => {
            setArgumentsLength(args.length);
            return elem(...args);
          }).original = elem;
        } else { // instance method
          (curr[name] = function(...args) { // !
            setArgumentsLength(args.length);
            return elem(this[THIS], ...args);
          }).original = elem;
        }
      }
    } else {
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          Object.defineProperty(curr, name, {
            get: exports[internalName.replace("set:", "get:")],
            set: exports[internalName.replace("get:", "set:")],
            enumerable: true
          });
        }
      } else if (typeof elem === "function" && elem !== setArgumentsLength) {
        (curr[name] = (...args) => {
          setArgumentsLength(args.length);
          return elem(...args);
        }).original = elem;
      } else {
        curr[name] = elem;
      }
    }
  }
  return module;
}

exports.demangle = demangle;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 168 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 169 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subtreeFillToContents = exports.subtreeFillToLength = exports.subtreeFillToDepth = void 0;
const node_1 = __webpack_require__(25);
const zeroNode_1 = __webpack_require__(58);
const ERR_NAVIGATION = "Navigation error";
const ERR_TOO_MANY_NODES = "Too many nodes";
// subtree filling
function subtreeFillToDepth(bottom, depth) {
    let node = bottom;
    while (depth > 0) {
        node = new node_1.BranchNode(node, node);
        depth--;
    }
    return node;
}
exports.subtreeFillToDepth = subtreeFillToDepth;
function subtreeFillToLength(bottom, depth, length) {
    const maxLength = 1 << depth;
    if (length > maxLength)
        throw new Error(ERR_TOO_MANY_NODES);
    if (length === maxLength)
        return subtreeFillToDepth(bottom, depth);
    if (depth === 0) {
        if (length === 1)
            return bottom;
        else
            throw new Error(ERR_NAVIGATION);
    }
    if (depth === 1) {
        return new node_1.BranchNode(bottom, length > 1 ? bottom : zeroNode_1.zeroNode(0));
    }
    const pivot = maxLength >> 1;
    if (length <= pivot) {
        return new node_1.BranchNode(subtreeFillToLength(bottom, depth - 1, length), zeroNode_1.zeroNode(depth - 1));
    }
    else {
        return new node_1.BranchNode(subtreeFillToDepth(bottom, depth - 1), subtreeFillToLength(bottom, depth - 1, length - pivot));
    }
}
exports.subtreeFillToLength = subtreeFillToLength;
function subtreeFillToContents(nodes, depth) {
    const maxLength = 2 ** depth;
    if (nodes.length > maxLength)
        throw new Error(ERR_TOO_MANY_NODES);
    if (depth === 0) {
        if (!nodes.length)
            return zeroNode_1.zeroNode(0);
        return nodes[0];
    }
    if (depth === 1) {
        if (!nodes.length)
            return zeroNode_1.zeroNode(1);
        return new node_1.BranchNode(nodes[0], nodes[1] || zeroNode_1.zeroNode(0));
    }
    const pivot = Math.floor(maxLength / 2);
    if (nodes.length <= pivot) {
        return new node_1.BranchNode(subtreeFillToContents(nodes, depth - 1), zeroNode_1.zeroNode(depth - 1));
    }
    else {
        return new node_1.BranchNode(subtreeFillToContents(nodes.slice(0, Number(pivot)), depth - 1), subtreeFillToContents(nodes.slice(Number(pivot)), depth - 1));
    }
}
exports.subtreeFillToContents = subtreeFillToContents;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const gindex_1 = __webpack_require__(41);
const node_1 = __webpack_require__(25);
const proof_1 = __webpack_require__(100);
const single_1 = __webpack_require__(101);
const zeroNode_1 = __webpack_require__(58);
const ERR_INVALID_TREE = "Invalid tree operation";
const ERR_PARAM_LT_ZERO = "Param must be >= 0";
const ERR_COUNT_GT_DEPTH = "Count extends beyond depth limit";
class Tree {
    constructor(node, hook) {
        this._node = node;
        if (hook) {
            if (typeof WeakRef === "undefined") {
                this.hook = hook;
            }
            else {
                this.hook = new WeakRef(hook);
            }
        }
    }
    static createFromProof(proof) {
        return new Tree(proof_1.createNodeFromProof(proof));
    }
    get rootNode() {
        return this._node;
    }
    set rootNode(n) {
        this._node = n;
        if (this.hook) {
            // WeakRef should not change status during a program's execution
            // So, use WeakRef feature detection to assume the type of this.hook
            // to minimize the memory footprint of Tree
            if (typeof WeakRef === "undefined") {
                this.hook(this);
            }
            else {
                const hookVar = this.hook.deref();
                if (hookVar) {
                    hookVar(this);
                }
                else {
                    // Hook has been garbage collected, no need to keep the hookRef
                    this.hook = undefined;
                }
            }
        }
    }
    get root() {
        return this.rootNode.root;
    }
    getNode(index) {
        let node = this.rootNode;
        for (const i of gindex_1.gindexIterator(index)) {
            if (i) {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.right;
            }
            else {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.left;
            }
        }
        return node;
    }
    setter(index, expand = false) {
        let link = node_1.identity;
        let node = this.rootNode;
        const iterator = gindex_1.gindexIterator(index);
        for (const i of iterator) {
            if (i) {
                if (node.isLeaf()) {
                    if (!expand)
                        throw new Error(ERR_INVALID_TREE);
                    else {
                        const child = zeroNode_1.zeroNode(iterator.remainingBitLength() - 1);
                        node = new node_1.BranchNode(child, child);
                    }
                }
                link = node_1.compose(node.rebindRight.bind(node), link);
                node = node.right;
            }
            else {
                if (node.isLeaf()) {
                    if (!expand)
                        throw new Error(ERR_INVALID_TREE);
                    else {
                        const child = zeroNode_1.zeroNode(iterator.remainingBitLength() - 1);
                        node = new node_1.BranchNode(child, child);
                    }
                }
                link = node_1.compose(node.rebindLeft.bind(node), link);
                node = node.left;
            }
        }
        return node_1.compose(node_1.identity, link);
    }
    setNode(index, n, expand = false) {
        this.rootNode = this.setter(index, expand)(n);
    }
    getRoot(index) {
        return this.getNode(index).root;
    }
    setRoot(index, root, expand = false) {
        this.setNode(index, new node_1.LeafNode(root), expand);
    }
    getSubtree(index) {
        return new Tree(this.getNode(index), (v) => this.setNode(index, v.rootNode));
    }
    setSubtree(index, v, expand = false) {
        this.setNode(index, v.rootNode, expand);
    }
    clone() {
        return new Tree(this.rootNode);
    }
    getSingleProof(index) {
        return single_1.createSingleProof(this.rootNode, index)[1];
    }
    /**
     * Fast read-only iteration
     * In-order traversal of nodes at `depth`
     * starting from the `startIndex`-indexed node
     * iterating through `count` nodes
     */
    *iterateNodesAtDepth(depth, startIndex, count) {
        // Strategy:
        // First nagivate to the starting Gindex node,
        // At each level record the tuple (current node, the navigation direction) in a list (Left=0, Right=1)
        // Once we reach the starting Gindex node, the list will be length == depth
        // Begin emitting nodes: Outer loop:
        //   Yield the current node
        //   Inner loop
        //     pop off the end of the list
        //     If its (N, Left) (we've nav'd the left subtree, but not the right subtree)
        //       push (N, Right) and set set node as the n.right
        //       push (N, Left) and set node as n.left until list length == depth
        //   Inner loop until the list length == depth
        // Outer loop until the list is empty or the yield count == count
        if (startIndex < 0 || count < 0 || depth < 0) {
            throw new Error(ERR_PARAM_LT_ZERO);
        }
        if (BigInt(1) << BigInt(depth) < startIndex + count) {
            throw new Error(ERR_COUNT_GT_DEPTH);
        }
        if (count === 0) {
            return;
        }
        if (depth === 0) {
            yield this.rootNode;
            return;
        }
        let node = this.rootNode;
        let currCount = 0;
        const startGindex = gindex_1.toGindexBitstring(depth, BigInt(startIndex));
        const nav = [];
        for (const i of gindex_1.gindexIterator(startGindex)) {
            nav.push([node, i]);
            if (i) {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.right;
            }
            else {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.left;
            }
        }
        while (nav.length && currCount < count) {
            yield node;
            currCount++;
            if (currCount === count) {
                return;
            }
            do {
                const [parentNode, direction] = nav.pop();
                // if direction was left
                if (!direction) {
                    // now navigate right
                    nav.push([parentNode, 1]);
                    if (parentNode.isLeaf())
                        throw new Error(ERR_INVALID_TREE);
                    node = parentNode.right;
                    // and then left as far as possible
                    while (nav.length !== depth) {
                        nav.push([node, 0]);
                        if (node.isLeaf())
                            throw new Error(ERR_INVALID_TREE);
                        node = node.left;
                    }
                }
            } while (nav.length && nav.length !== depth);
        }
    }
    getProof(input) {
        return proof_1.createProof(this.rootNode, input);
    }
}
exports.Tree = Tree;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeTreeOffsetProof = exports.serializeTreeOffsetProof = exports.computeTreeOffsetProofSerializedLength = exports.createNodeFromTreeOffsetProof = exports.createTreeOffsetProof = exports.treeOffsetProofToNode = exports.nodeToTreeOffsetProof = void 0;
const node_1 = __webpack_require__(25);
const util_1 = __webpack_require__(173);
/**
 * Compute offsets and leaves of a tree-offset proof
 *
 * Recursive function
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 * @param node current node in the tree
 * @param gindex current generalized index in the tree
 * @param proofGindices generalized indices to left include in the proof - must be sorted in-order according to the tree
 */
function nodeToTreeOffsetProof(node, gindex, proofGindices) {
    if (!proofGindices.length || !proofGindices[0].startsWith(gindex)) {
        // there are no proof indices left OR the current subtree contains no remaining proof indices
        return [[], []];
    }
    else if (gindex === proofGindices[0]) {
        // the current node is at the next proof index
        proofGindices.shift();
        return [[], [node.root]];
    }
    else {
        // recursively compute offsets, leaves for the left and right subtree
        const [leftOffsets, leftLeaves] = nodeToTreeOffsetProof(node.left, gindex + "0", proofGindices);
        const [rightOffsets, rightLeaves] = nodeToTreeOffsetProof(node.right, gindex + "1", proofGindices);
        // the offset prepended to the list is # of leaves in the left subtree
        const pivot = leftLeaves.length;
        return [[pivot].concat(leftOffsets, rightOffsets), leftLeaves.concat(rightLeaves)];
    }
}
exports.nodeToTreeOffsetProof = nodeToTreeOffsetProof;
/**
 * Recreate a `Node` given offsets and leaves of a tree-offset proof
 *
 * Recursive definition
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 */
function treeOffsetProofToNode(offsets, leaves) {
    if (!leaves.length) {
        throw new Error("Proof must contain gt 0 leaves");
    }
    else if (leaves.length === 1) {
        return new node_1.LeafNode(leaves[0]);
    }
    else {
        // the offset popped from the list is the # of leaves in the left subtree
        const pivot = offsets[0];
        return new node_1.BranchNode(treeOffsetProofToNode(offsets.slice(1, pivot), leaves.slice(0, pivot)), treeOffsetProofToNode(offsets.slice(pivot), leaves.slice(pivot)));
    }
}
exports.treeOffsetProofToNode = treeOffsetProofToNode;
/**
 * Create a tree-offset proof
 *
 * @param rootNode the root node of the tree
 * @param gindices generalized indices to include in the proof
 */
function createTreeOffsetProof(rootNode, gindices) {
    return nodeToTreeOffsetProof(rootNode, "1", util_1.computeMultiProofBitstrings(gindices.map((g) => g.toString(2))));
}
exports.createTreeOffsetProof = createTreeOffsetProof;
/**
 * Recreate a `Node` given a tree-offset proof
 *
 * @param offsets offsets of a tree-offset proof
 * @param leaves leaves of a tree-offset proof
 */
function createNodeFromTreeOffsetProof(offsets, leaves) {
    // TODO validation
    return treeOffsetProofToNode(offsets, leaves);
}
exports.createNodeFromTreeOffsetProof = createNodeFromTreeOffsetProof;
function computeTreeOffsetProofSerializedLength(offsets, leaves) {
    // add 1 for # of leaves
    return (offsets.length + 1) * 2 + leaves.length * 32;
}
exports.computeTreeOffsetProofSerializedLength = computeTreeOffsetProofSerializedLength;
// Serialized tree offset proof structure:
// # of leaves - 2 bytes
// offsets - 2 bytes each
// leaves - 32 bytes each
function serializeTreeOffsetProof(output, byteOffset, offsets, leaves) {
    const writer = new DataView(output.buffer, output.byteOffset, output.byteLength);
    // set # of leaves
    writer.setUint16(byteOffset, leaves.length, true);
    // set offsets
    const offsetsStartIndex = byteOffset + 2;
    for (let i = 0; i < offsets.length; i++) {
        writer.setUint16(i * 2 + offsetsStartIndex, offsets[i], true);
    }
    // set leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    for (let i = 0; i < leaves.length; i++) {
        output.set(leaves[i], i * 32 + leavesStartIndex);
    }
}
exports.serializeTreeOffsetProof = serializeTreeOffsetProof;
function deserializeTreeOffsetProof(data, byteOffset) {
    const reader = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // get # of leaves
    const leafCount = reader.getUint16(byteOffset, true);
    if (data.length < (leafCount - 1) * 2 + leafCount * 32) {
        throw new Error("Unable to deserialize tree offset proof: not enough bytes");
    }
    // get offsets
    const offsetsStartIndex = byteOffset + 2;
    const offsets = Array.from({ length: leafCount - 1 }, (_, i) => reader.getUint16(i * 2 + offsetsStartIndex, true));
    // get leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    const leaves = Array.from({ length: leafCount }, (_, i) => data.subarray(i * 32 + leavesStartIndex, (i + 1) * 32 + leavesStartIndex));
    return [offsets, leaves];
}
exports.deserializeTreeOffsetProof = deserializeTreeOffsetProof;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMultiProofBitstrings = exports.filterParentBitstrings = exports.sortInOrderBitstrings = exports.computeProofBitstrings = exports.computeProofGindices = void 0;
const gindex_1 = __webpack_require__(41);
// Not currently in use, but simpler implementation useful for testing
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofGindices(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g > 1) {
        path.add(g);
        branch.add(gindex_1.gindexSibling(g));
        g = gindex_1.gindexParent(g);
    }
    return { path, branch };
}
exports.computeProofGindices = computeProofGindices;
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofBitstrings(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g.length > 1) {
        path.add(g);
        const lastBit = g[g.length - 1];
        const parent = g.substring(0, g.length - 1);
        branch.add(parent + (Number(lastBit) ^ 1));
        g = parent;
    }
    return { path, branch };
}
exports.computeProofBitstrings = computeProofBitstrings;
/**
 * Sort generalized indices in-order
 * @param bitLength maximum bit length of generalized indices to sort
 */
function sortInOrderBitstrings(gindices, bitLength) {
    if (!gindices.length) {
        return [];
    }
    return gindices
        .map((g) => g.padEnd(bitLength))
        .sort()
        .map((g) => g.trim());
}
exports.sortInOrderBitstrings = sortInOrderBitstrings;
/**
 * Filter out parent generalized indices
 */
function filterParentBitstrings(gindices) {
    const sortedBitstrings = gindices.sort((a, b) => a.length - b.length);
    const filtered = [];
    outer: for (let i = 0; i < sortedBitstrings.length; i++) {
        const bsA = sortedBitstrings[i];
        for (let j = i + 1; j < sortedBitstrings.length; j++) {
            const bsB = sortedBitstrings[j];
            if (bsB.startsWith(bsA)) {
                continue outer;
            }
        }
        filtered.push(bsA);
    }
    return filtered;
}
exports.filterParentBitstrings = filterParentBitstrings;
/**
 * Return the set of generalized indices required for a multiproof
 * This includes all leaves and any necessary witnesses
 * @param gindices leaves to include in proof
 * @returns all generalized indices required for a multiproof (leaves and witnesses), deduplicated and sorted in-order according to the tree
 */
function computeMultiProofBitstrings(gindices) {
    // Initialize the proof indices with the leaves
    const proof = new Set(filterParentBitstrings(gindices));
    const paths = new Set();
    const branches = new Set();
    // Collect all path indices and all branch indices
    let maxBitLength = 1;
    for (const gindex of proof) {
        if (gindex.length > maxBitLength)
            maxBitLength = gindex.length;
        const { path, branch } = computeProofBitstrings(gindex);
        path.forEach((g) => paths.add(g));
        branch.forEach((g) => branches.add(g));
    }
    // Remove all branches that are included in the paths
    paths.forEach((g) => branches.delete(g));
    // Add all remaining branches to the leaves
    branches.forEach((g) => proof.add(g));
    return sortInOrderBitstrings(Array.from(proof), maxBitLength);
}
exports.computeMultiProofBitstrings = computeMultiProofBitstrings;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merkleize = merkleize;
exports.mixInLength = mixInLength;

var _hash = __webpack_require__(60);

var _math = __webpack_require__(175);

var _zeros = __webpack_require__(176);

/** @module ssz */

/** @ignore */
function merkleize(chunks, padFor = 0) {
  const layerCount = (0, _math.bitLength)((0, _math.nextPowerOf2)(padFor || chunks.length) - 1);

  if (chunks.length == 0) {
    return _zeros.zeroHashes[layerCount];
  } // Instead of pushing on all padding zero chunks at the leaf level
  // we push on zero hash chunks at the highest possible level to avoid over-hashing


  let layer = 0;

  while (layer < layerCount) {
    // if the chunks.length is odd
    // we need to push on the zero-hash of that level to merkleize that level
    if (chunks.length % 2 == 1) {
      chunks.push(_zeros.zeroHashes[layer]);
    }

    for (let i = 0; i < chunks.length; i += 2) {
      const h = (0, _hash.hash)(chunks[i], chunks[i + 1]);
      chunks[i / 2] = Buffer.from(h.buffer, h.byteOffset, h.byteLength);
    }

    chunks.splice(chunks.length / 2, chunks.length / 2);
    layer++;
  }

  return chunks[0];
}
/** @ignore */


function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  const h = (0, _hash.hash)(root, lengthBuf);
  return Buffer.from(h.buffer, h.byteOffset, h.byteLength);
}
//# sourceMappingURL=merkleize.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28).Buffer))

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitLength = bitLength;
exports.nextPowerOf2 = nextPowerOf2;
exports.previousPowerOf2 = previousPowerOf2;

/** @ignore */
function bitLength(n) {
  const bitstring = n.toString(2);

  if (bitstring === "0") {
    return 0;
  }

  return bitstring.length;
}
/** @ignore */


function nextPowerOf2(n) {
  return n <= 0 ? 1 : Math.pow(2, bitLength(n - 1));
}
/** @ignore */


function previousPowerOf2(n) {
  return n === 0 ? 1 : Math.pow(2, bitLength(n) - 1);
}
//# sourceMappingURL=math.js.map

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroHashes = void 0;

var _constants = __webpack_require__(61);

var _hash = __webpack_require__(60);

/** @module ssz */
// create array of "zero hashes", successively hashed zero chunks
const zeroHashes = [Buffer.alloc(_constants.BYTES_PER_CHUNK)];
exports.zeroHashes = zeroHashes;

for (let i = 0; i < 52; i++) {
  const h = (0, _hash.hash)(zeroHashes[i], zeroHashes[i]);
  zeroHashes.push(Buffer.from(h.buffer, h.byteOffset, h.byteLength));
}
//# sourceMappingURL=zeros.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28).Buffer))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBitVectorType = isBitVectorType;
exports.BitVectorType = exports.BITVECTOR_TYPE = void 0;

var _vector = __webpack_require__(63);

var _basic = __webpack_require__(24);

var _type = __webpack_require__(6);

var _byteArray = __webpack_require__(17);

var _constants = __webpack_require__(61);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BITVECTOR_TYPE = Symbol.for("ssz/BitVectorType");
exports.BITVECTOR_TYPE = BITVECTOR_TYPE;

function isBitVectorType(type) {
  return (0, _type.isTypeOf)(type, BITVECTOR_TYPE);
}

class BitVectorType extends _vector.BasicVectorType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.booleanType
    }, options));

    this._typeSymbols.add(BITVECTOR_TYPE);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getByteLength(value) {
    return Math.ceil(this.length / 8);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getSerializedLength(value) {
    return Math.ceil(this.length / 8);
  }

  getMaxSerializedLength() {
    return this.struct_getSerializedLength(null);
  }

  getMinSerializedLength() {
    return this.struct_getSerializedLength(null);
  }

  struct_getChunkCount(value) {
    return Math.ceil(this.struct_getLength(value) / 256);
  }

  struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";

    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }

    return Number(bitstring);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);

    if (end - start !== this.size(null)) {
      throw new Error("Invalid bitvector: length not equal to vector length");
    }

    const value = [];

    for (let i = start; i < end - 1; i++) {
      value.push(...(0, _byteArray.getByteBits)(data, i));
    }

    const lastBitLength = this.length % 8;

    if (!lastBitLength) {
      // vector takes up the whole byte, no need for checks
      value.push(...(0, _byteArray.getByteBits)(data, end - 1));
    } else {
      const lastBits = (0, _byteArray.getByteBits)(data, end - 1);

      if (lastBits.slice(lastBitLength).some(b => b)) {
        throw new Error("Invalid bitvector: nonzero bits past length");
      }

      value.push(...lastBits.slice(0, lastBitLength));
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    const byteLength = this.struct_getByteLength(value);

    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = this.struct_getByte(value, i);
    }

    return offset + byteLength;
  }

  struct_getRootAtChunkIndex(value, chunkIndex) {
    const output = new Uint8Array(_constants.BYTES_PER_CHUNK);
    const byteLength = Math.min(_constants.BYTES_PER_CHUNK, this.struct_getByteLength(value) - chunkIndex);
    const byteOffset = chunkIndex * _constants.BYTES_PER_CHUNK;

    for (let i = 0; i < byteLength; i++) {
      output[i] = this.struct_getByte(value, i + byteOffset);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const bytes = (0, _byteArray.fromHexString)(data);
    return this.fromBytes(bytes, 0, bytes.length);
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(this.serialize(value));
  }

  tree_getByteLength(target) {
    return Math.ceil(this.tree_getLength(target) / 8);
  }

  tree_getSerializedLength(target) {
    return this.tree_getByteLength(target);
  }

  tree_deserializeFromBytes(data, start, end) {
    // mask last byte to ensure it doesn't go over length
    const lastByte = data[end - 1]; // If the data len fits full bytes this check must be skipped.
    // Otherwise we must ensure that the extra bits are set to zero.

    const lastByteBitLen = this.length % 8;

    if (lastByteBitLen > 0) {
      const mask = 0xff << lastByteBitLen & 0xff;

      if ((lastByte & mask) > 0) {
        throw new Error("Invalid deserialized bitvector length");
      }
    }

    return super.tree_deserializeFromBytes(data, start, end);
  }

  getBitOffset(index) {
    return index % 8;
  }

  getChunkOffset(index) {
    return Math.floor(index % 256 / 8);
  }

  getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) / 256);
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);
    const chunkCount = this.tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, chunkCount);
    let i = 0;

    for (const node of nodeIterator) {
      const chunk = node.root;

      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[this.getChunkOffset(i)];
        yield !!(byte & 1 << this.getBitOffset(i));
      }
    }
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    const byte = chunk[this.getChunkOffset(index)];
    return !!(byte & 1 << this.getBitOffset(index));
  }

  tree_setProperty(target, property, value) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = this.getChunkOffset(property);

    if (value) {
      chunk[byteOffset] |= 1 << this.getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ 1 << this.getBitOffset(property);
    }

    target.setRoot(chunkGindex, chunk);
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.length / 256);
  }

}

exports.BitVectorType = BitVectorType;
//# sourceMappingURL=bitVector.js.map

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBitListType = isBitListType;
exports.BitListType = exports.BITLIST_TYPE = void 0;

var _list = __webpack_require__(103);

var _basic = __webpack_require__(24);

var _type = __webpack_require__(6);

var _byteArray = __webpack_require__(17);

var _constants = __webpack_require__(61);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BITLIST_TYPE = Symbol.for("ssz/BitListType");
exports.BITLIST_TYPE = BITLIST_TYPE;

function isBitListType(type) {
  return (0, _type.isTypeOf)(type, BITLIST_TYPE);
}

class BitListType extends _list.BasicListType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.booleanType
    }, options));

    this._typeSymbols.add(BITLIST_TYPE);
  }

  struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";

    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }

    return Number(bitstring);
  }

  struct_getLength(value) {
    return value.length;
  }

  struct_getByteLength(value) {
    return Math.ceil(value.length / 8);
  }

  struct_getSerializedLength(value) {
    if (value.length % 8 === 0) {
      return this.struct_getByteLength(value) + 1;
    } else {
      return this.struct_getByteLength(value);
    }
  }

  getMaxSerializedLength() {
    return Math.ceil(this.limit / 8) + 1;
  }

  getMinSerializedLength() {
    return 1;
  }

  struct_getChunkCount(value) {
    return Math.ceil(this.struct_getLength(value) / 256);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = [];

    const toBool = c => c === "1" ? true : false;

    for (let i = start; i < end - 1; i++) {
      let bitstring = data[i].toString(2);
      bitstring = "0".repeat(8 - bitstring.length) + bitstring;
      value.push(...Array.prototype.map.call(bitstring, toBool).reverse());
    }

    const lastByte = data[end - 1];

    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }

    if (lastByte === 1) {
      return value;
    }

    const lastBits = Array.prototype.map.call(lastByte.toString(2), toBool).reverse();
    const last1 = lastBits.lastIndexOf(true);
    value.push(...lastBits.slice(0, last1));

    if (value.length > this.limit) {
      throw new Error("Invalid deserialized bitlist, length greater than limit");
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    const byteLength = this.struct_getByteLength(value);

    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = this.struct_getByte(value, i);
    }

    const newOffset = offset + byteLength;

    if (value.length % 8 === 0) {
      output[newOffset] = 1;
      return newOffset + 1;
    } else {
      output[newOffset - 1] |= 1 << value.length % 8;
      return newOffset;
    }
  }

  struct_getRootAtChunkIndex(value, chunkIndex) {
    const output = new Uint8Array(_constants.BYTES_PER_CHUNK);
    const byteLength = Math.min(_constants.BYTES_PER_CHUNK, this.struct_getByteLength(value) - chunkIndex);
    const byteOffset = chunkIndex * _constants.BYTES_PER_CHUNK;

    for (let i = 0; i < byteLength; i++) {
      output[i] = this.struct_getByte(value, i + byteOffset);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const bytes = (0, _byteArray.fromHexString)(data);
    return this.struct_deserializeFromBytes(bytes, 0, bytes.length);
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(this.serialize(value));
  }

  tree_getByteLength(target) {
    return Math.ceil(this.tree_getLength(target) / 8);
  }

  tree_getSerializedLength(target) {
    const bitLength = this.tree_getLength(target);

    if (bitLength % 8 === 0) {
      return this.tree_getByteLength(target) + 1;
    } else {
      return this.tree_getByteLength(target);
    }
  }

  tree_deserializeFromBytes(data, start, end) {
    const lastByte = data[end - 1];

    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }

    if (lastByte === 1) {
      const target = super.tree_deserializeFromBytes(data, start, end - 1);
      const length = (end - start - 1) * 8;
      this.tree_setLength(target, length);
      return target;
    } // the last byte is > 1, so a padding bit will exist in the last byte and need to be removed


    const target = super.tree_deserializeFromBytes(data, start, end);
    const lastGindex = this.getGindexAtChunkIndex(Math.ceil((end - start) / 32) - 1); // copy chunk into new memory

    const lastChunk = new Uint8Array(32);
    lastChunk.set(target.getRoot(lastGindex));
    const lastChunkByte = (end - start) % 32 - 1; // mask lastChunkByte

    const lastByteBitLength = lastByte.toString(2).length - 1;
    const length = (end - start - 1) * 8 + lastByteBitLength;
    const mask = 0xff >> 8 - lastByteBitLength;
    lastChunk[lastChunkByte] &= mask;
    target.setRoot(lastGindex, lastChunk);
    this.tree_setLength(target, length);
    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    const sizeNoPadding = this.tree_getByteLength(target);
    const fullChunkCount = Math.floor(sizeNoPadding / 32);
    const remainder = sizeNoPadding % 32;
    let i = 0;

    if (fullChunkCount > 0) {
      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, fullChunkCount)) {
        output.set(node.root, offset + i * 32);
        i++;
      }
    }

    if (remainder) {
      output.set(this.tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
    }

    const bitLength = this.tree_getLength(target);
    const size = this.tree_getSerializedLength(target);
    const newOffset = offset + size; // set padding bit

    output[newOffset - 1] |= 1 << bitLength % 8;
    return newOffset;
  }

  getBitOffset(index) {
    return index % 8;
  }

  getChunkOffset(index) {
    return Math.floor(index % 256 / 8);
  }

  getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) / 256);
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);
    const chunkCount = this.tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, chunkCount);
    let i = 0;

    for (const node of nodeIterator) {
      const chunk = node.root;

      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[this.getChunkOffset(i)];
        yield !!(byte & 1 << this.getBitOffset(i));
      }
    }
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    const byte = chunk[this.getChunkOffset(index)];
    return !!(byte & 1 << this.getBitOffset(index));
  }

  tree_setValueAtIndex(target, property, value, expand = false) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = this.getChunkOffset(property);

    if (value) {
      chunk[byteOffset] |= 1 << this.getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ 1 << this.getBitOffset(property);
    }

    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.limit / 256);
  }

}

exports.BitListType = BitListType;
//# sourceMappingURL=bitList.js.map

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRootType = isRootType;
exports.RootType = exports.ROOT_TYPE = void 0;

var _byteVector = __webpack_require__(104);

var _type = __webpack_require__(6);

var _backings = __webpack_require__(56);

var _byteArray = __webpack_require__(17);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ROOT_TYPE = Symbol.for("ssz/RootType");
exports.ROOT_TYPE = ROOT_TYPE;

function isRootType(type) {
  return (0, _type.isTypeOf)(type, ROOT_TYPE);
}

function convertRootToUint8Array(value) {
  if (value instanceof Uint8Array) {
    return value;
  } else if ((0, _backings.isTreeBacked)(value)) {
    return value.tree.root;
  } else if (Array.isArray(value)) {
    return new Uint8Array(value);
  } else {
    throw new Error("Unable to convert root to Uint8Array: not Uint8Array, tree-backed, or Array");
  }
}

class RootType extends _byteVector.ByteVectorType {
  constructor(options) {
    super({
      length: 32
    });

    _defineProperty(this, "_expandedType", void 0);

    this._expandedType = options.expandedType;

    this._typeSymbols.add(ROOT_TYPE);
  }

  get expandedType() {
    if (typeof this._expandedType === "function") {
      this._expandedType = this._expandedType();
    }

    return this._expandedType;
  }

  struct_equals(value1, value2) {
    return (0, _byteArray.byteArrayEquals)(convertRootToUint8Array(value1), convertRootToUint8Array(value2));
  }

  equals(value1, value2) {
    return this.struct_equals(value1, value2);
  }

}

exports.RootType = RootType;
//# sourceMappingURL=root.js.map

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isContainerType = isContainerType;
exports.ContainerType = exports.CONTAINER_TYPE = void 0;

var _abstract = __webpack_require__(55);

var _type = __webpack_require__(6);

var _persistentMerkleTree = __webpack_require__(27);

var _errorPath = __webpack_require__(102);

var _json = __webpack_require__(181);

var _treeValue = __webpack_require__(40);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CONTAINER_TYPE = Symbol.for("ssz/ContainerType");
exports.CONTAINER_TYPE = CONTAINER_TYPE;

function isContainerType(type) {
  return (0, _type.isTypeOf)(type, CONTAINER_TYPE);
}

class ContainerType extends _abstract.CompositeType {
  // ES6 ensures key order is chronological
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(options) {
    super();

    _defineProperty(this, "fields", void 0);

    this.fields = _objectSpread({}, options.fields);

    this._typeSymbols.add(CONTAINER_TYPE);
  }

  struct_defaultValue() {
    const obj = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      obj[fieldName] = fieldType.struct_defaultValue();
    }

    return obj;
  }

  struct_getSerializedLength(value) {
    let s = 0;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        s += fieldType.struct_getSerializedLength(value[fieldName]) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }

    return s;
  }

  getMaxSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMaxSerializedLength()), 0);
    const maxDynamicSize = Object.values(this.fields).reduce((total, fieldType) => total += fieldType.hasVariableSerializedLength() ? fieldType.getMaxSerializedLength() : 0, 0);
    return fixedSize + maxDynamicSize;
  }

  getMinSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMinSerializedLength()), 0);
    const minDynamicSize = Object.values(this.fields).reduce((total, fieldType) => total += fieldType.hasVariableSerializedLength() ? fieldType.getMinSerializedLength() : 0, 0);
    return fixedSize + minDynamicSize;
  }

  struct_assertValidValue(value) {
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      try {
        // @ts-ignore
        fieldType.struct_assertValidValue(value[fieldName]);
      } catch (e) {
        throw new Error("Invalid field ".concat(fieldName, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    this.struct_assertValidValue(value1);
    this.struct_assertValidValue(value2);
    return Object.entries(this.fields).every(([fieldName, fieldType]) => {
      return fieldType.struct_equals(value1[fieldName], value2[fieldName]);
    });
  }

  struct_clone(value) {
    const newValue = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      newValue[fieldName] = fieldType.struct_clone(value[fieldName]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    let currentIndex = start;
    let nextIndex = currentIndex;
    const value = {}; // Since variable-sized values can be interspersed with fixed-sized values, we precalculate
    // the offset indices so we can more easily deserialize the fields in once pass
    // first we get the fixed sizes

    const fixedSizes = Object.values(this.fields).map(fieldType => !fieldType.hasVariableSerializedLength() && fieldType.struct_getSerializedLength(null)); // with the fixed sizes, we can read the offsets, and store for our single pass

    const offsets = [];
    const fixedSection = new DataView(data.buffer, data.byteOffset);
    const fixedEnd = fixedSizes.reduce((index, size) => {
      if (size === false) {
        offsets.push(start + fixedSection.getUint32(index, true));
        return index + 4;
      } else {
        return index + size;
      }
    }, start);
    offsets.push(end);

    if (fixedEnd !== offsets[0]) {
      throw new Error("Not all variable bytes consumed");
    }

    let offsetIndex = 0;

    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      try {
        const fieldSize = fixedSizes[i];

        if (fieldSize === false) {
          // variable-sized field
          if (offsets[offsetIndex] > end) {
            throw new Error("Offset out of bounds");
          }

          if (offsets[offsetIndex] > offsets[offsetIndex + 1]) {
            throw new Error("Offsets must be increasing");
          }

          value[fieldName] = fieldType.struct_deserializeFromBytes(data, offsets[offsetIndex], offsets[offsetIndex + 1]);
          offsetIndex++;
          currentIndex += 4;
        } else {
          // fixed-sized field
          nextIndex = currentIndex + fieldSize;
          value[fieldName] = fieldType.struct_deserializeFromBytes(data, currentIndex, nextIndex);
          currentIndex = nextIndex;
        }
      } catch (e) {
        throw new _errorPath.SszErrorPath(e, fieldName);
      }
    }

    if (offsets.length > 1) {
      if (offsetIndex !== offsets.length - 1) {
        throw new Error("Not all variable bytes consumed");
      }

      if (currentIndex !== offsets[0]) {
        throw new Error("Not all fixed bytes consumed");
      }
    } else {
      if (currentIndex !== end) {
        throw new Error("Not all fixed bytes consumed");
      }
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    let variableIndex = offset + Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)), 0);
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4; // write serialized element to variable section

        variableIndex = fieldType.toBytes(value[fieldName], output, variableIndex);
      } else {
        fixedIndex = fieldType.toBytes(value[fieldName], output, fixedIndex);
      }
    }

    return variableIndex;
  }

  struct_getRootAtChunkIndex(value, index) {
    const fieldName = Object.keys(this.fields)[index];
    const fieldType = this.fields[fieldName];
    return fieldType.struct_hashTreeRoot(value[fieldName]);
  }

  struct_convertFromJson(data, options) {
    if (typeof data !== "object") {
      throw new Error("Invalid JSON container: expected Object");
    }

    const value = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const expectedCase = options ? options.case : null;
      const expectedFieldName = (0, _json.toExpectedCase)(fieldName, expectedCase);

      if (data[expectedFieldName] === undefined) {
        throw new Error("Invalid JSON container field: expected field ".concat(expectedFieldName, " is undefined"));
      }

      value[fieldName] = fieldType.fromJson(data[expectedFieldName], options);
    }

    return value;
  }

  struct_convertToJson(value, options) {
    const data = {};
    const expectedCase = options ? options.case : null;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      data[(0, _json.toExpectedCase)(fieldName, expectedCase)] = fieldType.toJson(value[fieldName], options);
    }

    return data;
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(Object.entries(this.fields).map(([fieldName, fieldType]) => {
      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const chunk = new Uint8Array(32);
        fieldType.toBytes(value[fieldName], chunk, 0);
        return new _persistentMerkleTree.LeafNode(chunk);
      } else {
        return fieldType.struct_convertToTree(value[fieldName]).rootNode;
      }
    }), this.getChunkDepth()));
  }

  struct_getPropertyNames() {
    return Object.keys(this.fields);
  }

  bytes_getVariableOffsets(target) {
    const types = Object.values(this.fields);
    const offsets = []; // variable-sized values can be interspersed with fixed-sized values
    // variable-sized value indices are serialized as offsets, indices deeper in the byte array

    let currentIndex = 0;
    let nextIndex = 0;
    const fixedSection = new DataView(target.buffer, target.byteOffset);
    const fixedOffsets = [];
    const variableOffsets = [];
    let variableIndex = 0;

    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        const offset = fixedSection.getUint32(currentIndex, true);

        if (offset > target.length) {
          throw new Error("Offset out of bounds");
        }

        variableOffsets.push(offset);
        currentIndex = nextIndex = currentIndex + 4;
        variableIndex++;
      } else {
        nextIndex = currentIndex + fieldType.struct_getSerializedLength(null);
        fixedOffsets[i] = [currentIndex, nextIndex];
        currentIndex = nextIndex;
      }
    }

    variableOffsets.push(target.length);
    variableIndex = 0;

    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        if (variableOffsets[variableIndex] > variableOffsets[variableIndex + 1]) {
          throw new Error("Offsets must be increasing");
        }

        offsets.push([variableOffsets[variableIndex], variableOffsets[variableIndex + 1]]);
        variableIndex++;
      } else {
        offsets.push(fixedOffsets[i]);
      }
    }

    return offsets;
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToContents)(Object.values(this.fields).map(fieldType => {
        if (!(0, _abstract.isCompositeType)(fieldType)) {
          return (0, _persistentMerkleTree.zeroNode)(0);
        } else {
          return fieldType.tree_defaultNode();
        }
      }), this.getChunkDepth());
    }

    return this._defaultNode;
  }

  tree_convertToStruct(target) {
    const value = {};

    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const chunk = this.tree_getRootAtChunkIndex(target, i);
        value[fieldName] = fieldType.struct_deserializeFromBytes(chunk, 0);
      } else {
        const subtree = this.tree_getSubtreeAtChunkIndex(target, i);
        value[fieldName] = fieldType.tree_convertToStruct(subtree);
      }
    }

    return value;
  }

  tree_getSerializedLength(target) {
    let s = 0;

    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        s += fieldType.tree_getSerializedLength(this.tree_getSubtreeAtChunkIndex(target, i)) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }

    return s;
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();
    const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      const [currentOffset, nextOffset] = offsets[i];

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        // view of the chunk, shared buffer from `data`
        const dataChunk = new Uint8Array(data.buffer, data.byteOffset + start + currentOffset, nextOffset - currentOffset);
        const chunk = new Uint8Array(32); // copy chunk into new memory

        chunk.set(dataChunk);
        this.tree_setRootAtChunkIndex(target, i, chunk);
      } else {
        this.tree_setSubtreeAtChunkIndex(target, i, fieldType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }
    }

    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    let variableIndex = offset + Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)), 0);
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;
    let i = 0;
    const fieldTypes = Object.values(this.fields);

    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, fieldTypes.length)) {
      const fieldType = fieldTypes[i];

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const s = fieldType.struct_getSerializedLength();
        output.set(node.root.slice(0, s), fixedIndex);
        fixedIndex += s;
      } else if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4; // write serialized element to variable section

        variableIndex = fieldType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, variableIndex);
      } else {
        fixedIndex = fieldType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, fixedIndex);
      }

      i++;
    }

    return variableIndex;
  }

  getPropertyGindex(prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name: ".concat(String(prop)));
    }

    return this.getGindexAtChunkIndex(chunkIndex);
  }

  getPropertyType(prop) {
    const type = this.fields[prop];

    if (!type) {
      throw new Error("Invalid container field name: ".concat(String(prop)));
    }

    return type;
  }

  tree_getPropertyNames() {
    return Object.keys(this.fields);
  }

  tree_getProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      return undefined;
    }

    const fieldType = this.fields[prop];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      const chunk = this.tree_getRootAtChunkIndex(target, chunkIndex);
      return fieldType.struct_deserializeFromBytes(chunk, 0);
    } else {
      return this.tree_getSubtreeAtChunkIndex(target, chunkIndex);
    }
  }

  tree_setProperty(target, property, value) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === property);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }

    const chunkGindex = this.getGindexAtChunkIndex(chunkIndex);
    const fieldType = this.fields[property];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      const chunk = new Uint8Array(32);
      fieldType.struct_serializeToBytes(value, chunk, 0);
      target.setRoot(chunkGindex, chunk);
      return true;
    } else {
      target.setSubtree(chunkGindex, value);
      return true;
    }
  }

  tree_deleteProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }

    const fieldType = this.fields[prop];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      return this.tree_setProperty(target, prop, fieldType.struct_defaultValue());
    } else {
      return this.tree_setProperty(target, prop, fieldType.tree_defaultValue());
    }
  }

  *tree_iterateValues(target) {
    const gindexIterator = (0, _persistentMerkleTree.iterateAtDepth)(this.getChunkDepth(), BigInt(0), BigInt(this.getMaxChunkCount()))[Symbol.iterator]();

    for (const propType of Object.values(this.fields)) {
      const {
        value,
        done
      } = gindexIterator.next();

      if (done) {
        return;
      } else {
        if (!(0, _abstract.isCompositeType)(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield target.getSubtree(value);
        }
      }
    }
  }

  *tree_readonlyIterateValues(target) {
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());

    for (const propType of Object.values(this.fields)) {
      const {
        value,
        done
      } = chunkIterator.next();

      if (done) {
        return;
      } else {
        if (!(0, _abstract.isCompositeType)(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield new _persistentMerkleTree.Tree(value);
        }
      }
    }
  }

  hasVariableSerializedLength() {
    return Object.values(this.fields).some(fieldType => fieldType.hasVariableSerializedLength());
  }

  getMaxChunkCount() {
    return Object.keys(this.fields).length;
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    const gindices = [];

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const fieldGindex = this.getPropertyGindex(fieldName);
      const extendedFieldGindex = (0, _persistentMerkleTree.concatGindices)([root, fieldGindex]);

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        gindices.push(extendedFieldGindex);
      } else {
        if (fieldType.hasVariableSerializedLength()) {
          if (!target) {
            throw new Error("variable type requires tree argument to get leaves");
          }

          gindices.push(...fieldType.tree_getLeafGindices(target.getSubtree(fieldGindex), extendedFieldGindex));
        } else {
          gindices.push(...fieldType.tree_getLeafGindices(undefined, extendedFieldGindex));
        }
      }
    }

    return gindices;
  }

}

exports.ContainerType = ContainerType;
//# sourceMappingURL=container.js.map

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toExpectedCase = toExpectedCase;

var _case = _interopRequireDefault(__webpack_require__(182));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toExpectedCase(value, expectedCase = "camel") {
  switch (expectedCase) {
    case "camel":
      return _case.default.camel(value);

    case "snake":
      return _case.default.snake(value);

    default:
      return value;
  }
}
//# sourceMappingURL=json.js.map

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function() {
    "use strict";
    var unicodes = function(s, prefix) {
        prefix = prefix || '';
        return s.replace(/(^|-)/g, '$1\\u'+prefix).replace(/,/g, '\\u'+prefix);
    },
    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),
    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),
    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
    regexps = function(symbols, lowers, uppers, impropers) {
        symbols = symbols || basicSymbols;
        lowers = lowers || baseLowerCase;
        uppers = uppers || baseUpperCase;
        impropers = impropers || improperInTitle;
        return {
            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),
            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),
            fill: new RegExp('['+symbols+']+(.|$)','g'),
            sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+lowers+'])', 'g'),
            improper: new RegExp('\\b('+impropers+')\\b', 'g'),
            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),
            upper: new RegExp('^[^'+lowers+']+$'),
            hole: /[^\s]\s[^\s]/,
            apostrophe: /'/g,
            room: new RegExp('['+symbols+']')
        };
    },
    re = regexps(),
    _ = {
        re: re,
        unicodes: unicodes,
        regexps: regexps,
        types: [],
        up: String.prototype.toUpperCase,
        low: String.prototype.toLowerCase,
        cap: function(s) {
            return _.up.call(s.charAt(0))+s.slice(1);
        },
        decap: function(s) {
            return _.low.call(s.charAt(0))+s.slice(1);
        },
        deapostrophe: function(s) {
            return s.replace(re.apostrophe, '');
        },
        fill: function(s, fill, deapostrophe) {
            if (fill != null) {
                s = s.replace(re.fill, function(m, next) {
                    return next ? fill + next : '';
                });
            }
            if (deapostrophe) {
                s = _.deapostrophe(s);
            }
            return s;
        },
        prep: function(s, fill, pascal, upper) {
            s = s == null ? '' : s + '';// force to string
            if (!upper && re.upper.test(s)) {
                s = _.low.call(s);
            }
            if (!fill && !re.hole.test(s)) {
                var holey = _.fill(s, ' ');
                if (re.hole.test(holey)) {
                    s = holey;
                }
            }
            if (!pascal && !re.room.test(s)) {
                s = s.replace(re.relax, _.relax);
            }
            return s;
        },
        relax: function(m, before, acronym, caps) {
            return before + ' ' + (acronym ? acronym+' ' : '') + caps;
        }
    },
    Case = {
        _: _,
        of: function(s) {
            for (var i=0,m=_.types.length; i<m; i++) {
                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }
            }
        },
        flip: function(s) {
            return s.replace(/\w/g, function(l) {
                return (l == _.up.call(l) ? _.low : _.up).call(l);
            });
        },
        random: function(s) {
            return s.replace(/\w/g, function(l) {
                return (Math.round(Math.random()) ? _.up : _.low).call(l);
            });
        },
        type: function(type, fn) {
            Case[type] = fn;
            _.types.push(type);
        }
    },
    types = {
        lower: function(s, fill, deapostrophe) {
            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);
        },
        snake: function(s) {
            return Case.lower(s, '_', true);
        },
        constant: function(s) {
            return Case.upper(s, '_', true);
        },
        camel: function(s) {
            return _.decap(Case.pascal(s));
        },
        kebab: function(s) {
            return Case.lower(s, '-', true);
        },
        upper: function(s, fill, deapostrophe) {
            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);
        },
        capital: function(s, fill, deapostrophe) {
            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {
                return border+_.up.call(letter);
            }), fill, deapostrophe);
        },
        header: function(s) {
            return Case.capital(s, '-', true);
        },
        pascal: function(s) {
            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {
                return _.up.call(letter);
            }), '', true);
        },
        title: function(s) {
            return Case.capital(s).replace(re.improper, function(small, p, i, s) {
                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;
            });
        },
        sentence: function(s, names, abbreviations) {
            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {
                return prelude + _.up.call(letter);
            });
            if (names) {
                names.forEach(function(name) {
                    s = s.replace(new RegExp('\\b'+Case.lower(name)+'\\b', "g"), _.cap);
                });
            }
            if (abbreviations) {
                abbreviations.forEach(function(abbr) {
                    s = s.replace(new RegExp('(\\b'+Case.lower(abbr)+'\\. +)(\\w)'), function(m, abbrAndSpace, letter) {
                        return abbrAndSpace + _.low.call(letter);
                    });
                });
            }
            return s;
        }
    };

    // TODO: Remove "squish" in a future breaking release.
    types.squish = types.pascal;
    
    // Allow import default
    Case.default = Case;

    for (var type in types) {
        Case.type(type, types[type]);
    }
    // export Case (AMD, commonjs, or global)
    var define = typeof define === "function" ? define : function(){};
    define( true && module.exports ? module.exports = Case : this.Case = Case);

}).call(this);


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phase0Preset = void 0;

var _ssz = __webpack_require__(0);

/* eslint-disable @typescript-eslint/naming-convention */
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
const BigInt64 = new _ssz.BigIntUintType({
  byteLength: 8
});
const Phase0Preset = new _ssz.ContainerType({
  fields: {
    // Misc
    MAX_COMMITTEES_PER_SLOT: Number64,
    TARGET_COMMITTEE_SIZE: Number64,
    MAX_VALIDATORS_PER_COMMITTEE: Number64,
    SHUFFLE_ROUND_COUNT: Number64,
    HYSTERESIS_QUOTIENT: Number64,
    HYSTERESIS_DOWNWARD_MULTIPLIER: Number64,
    HYSTERESIS_UPWARD_MULTIPLIER: Number64,
    // Fork choice
    SAFE_SLOTS_TO_UPDATE_JUSTIFIED: Number64,
    // Gwei Values
    MIN_DEPOSIT_AMOUNT: BigInt64,
    MAX_EFFECTIVE_BALANCE: BigInt64,
    EFFECTIVE_BALANCE_INCREMENT: BigInt64,
    // Time parameters
    MIN_ATTESTATION_INCLUSION_DELAY: Number64,
    SLOTS_PER_EPOCH: Number64,
    MIN_SEED_LOOKAHEAD: Number64,
    MAX_SEED_LOOKAHEAD: Number64,
    EPOCHS_PER_ETH1_VOTING_PERIOD: Number64,
    SLOTS_PER_HISTORICAL_ROOT: Number64,
    MIN_EPOCHS_TO_INACTIVITY_PENALTY: Number64,
    // State vector lengths
    EPOCHS_PER_HISTORICAL_VECTOR: Number64,
    EPOCHS_PER_SLASHINGS_VECTOR: Number64,
    HISTORICAL_ROOTS_LIMIT: Number64,
    VALIDATOR_REGISTRY_LIMIT: Number64,
    // Reward and penalty quotients
    BASE_REWARD_FACTOR: BigInt64,
    WHISTLEBLOWER_REWARD_QUOTIENT: BigInt64,
    PROPOSER_REWARD_QUOTIENT: BigInt64,
    INACTIVITY_PENALTY_QUOTIENT: BigInt64,
    MIN_SLASHING_PENALTY_QUOTIENT: BigInt64,
    PROPORTIONAL_SLASHING_MULTIPLIER: BigInt64,
    // Max operations per block
    MAX_PROPOSER_SLASHINGS: Number64,
    MAX_ATTESTER_SLASHINGS: Number64,
    MAX_ATTESTATIONS: Number64,
    MAX_DEPOSITS: Number64,
    MAX_VOLUNTARY_EXITS: Number64
  }
});
exports.Phase0Preset = Phase0Preset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AltairPreset = void 0;

var _ssz = __webpack_require__(0);

/* eslint-disable @typescript-eslint/naming-convention */
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
const BigInt64 = new _ssz.BigIntUintType({
  byteLength: 8
});
const AltairPreset = new _ssz.ContainerType({
  fields: {
    SYNC_COMMITTEE_SIZE: Number64,
    EPOCHS_PER_SYNC_COMMITTEE_PERIOD: Number64,
    INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt64,
    MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt64,
    PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt64
  }
});
exports.AltairPreset = AltairPreset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR = exports.MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR = exports.INACTIVITY_PENALTY_QUOTIENT_ALTAIR = exports.EPOCHS_PER_SYNC_COMMITTEE_PERIOD = exports.SYNC_COMMITTEE_SIZE = exports.MAX_VOLUNTARY_EXITS = exports.MAX_DEPOSITS = exports.MAX_ATTESTATIONS = exports.MAX_ATTESTER_SLASHINGS = exports.MAX_PROPOSER_SLASHINGS = exports.PROPORTIONAL_SLASHING_MULTIPLIER = exports.MIN_SLASHING_PENALTY_QUOTIENT = exports.INACTIVITY_PENALTY_QUOTIENT = exports.PROPOSER_REWARD_QUOTIENT = exports.WHISTLEBLOWER_REWARD_QUOTIENT = exports.BASE_REWARD_FACTOR = exports.VALIDATOR_REGISTRY_LIMIT = exports.HISTORICAL_ROOTS_LIMIT = exports.EPOCHS_PER_SLASHINGS_VECTOR = exports.EPOCHS_PER_HISTORICAL_VECTOR = exports.MIN_EPOCHS_TO_INACTIVITY_PENALTY = exports.SLOTS_PER_HISTORICAL_ROOT = exports.EPOCHS_PER_ETH1_VOTING_PERIOD = exports.MAX_SEED_LOOKAHEAD = exports.MIN_SEED_LOOKAHEAD = exports.SLOTS_PER_EPOCH = exports.MIN_ATTESTATION_INCLUSION_DELAY = exports.EFFECTIVE_BALANCE_INCREMENT = exports.MAX_EFFECTIVE_BALANCE = exports.MIN_DEPOSIT_AMOUNT = exports.SAFE_SLOTS_TO_UPDATE_JUSTIFIED = exports.HYSTERESIS_UPWARD_MULTIPLIER = exports.HYSTERESIS_DOWNWARD_MULTIPLIER = exports.HYSTERESIS_QUOTIENT = exports.SHUFFLE_ROUND_COUNT = exports.MAX_VALIDATORS_PER_COMMITTEE = exports.TARGET_COMMITTEE_SIZE = exports.MAX_COMMITTEES_PER_SLOT = exports.ACTIVE_PRESET = void 0;

var _preset = __webpack_require__(93);

var _mainnet = __webpack_require__(189);

var _minimal = __webpack_require__(192);

// load in an "active" preset
let ACTIVE_PRESET;
exports.ACTIVE_PRESET = ACTIVE_PRESET;
let preset;

switch (process.env.LODESTAR_PRESET) {
  case _preset.PresetName.minimal:
    exports.ACTIVE_PRESET = ACTIVE_PRESET = _preset.PresetName.minimal;
    preset = _minimal.preset;
    break;

  case _preset.PresetName.mainnet:
  default:
    exports.ACTIVE_PRESET = ACTIVE_PRESET = _preset.PresetName.mainnet;
    preset = _mainnet.preset;
    break;
}

const {
  MAX_COMMITTEES_PER_SLOT,
  TARGET_COMMITTEE_SIZE,
  MAX_VALIDATORS_PER_COMMITTEE,
  SHUFFLE_ROUND_COUNT,
  HYSTERESIS_QUOTIENT,
  HYSTERESIS_DOWNWARD_MULTIPLIER,
  HYSTERESIS_UPWARD_MULTIPLIER,
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED,
  MIN_DEPOSIT_AMOUNT,
  MAX_EFFECTIVE_BALANCE,
  EFFECTIVE_BALANCE_INCREMENT,
  MIN_ATTESTATION_INCLUSION_DELAY,
  SLOTS_PER_EPOCH,
  MIN_SEED_LOOKAHEAD,
  MAX_SEED_LOOKAHEAD,
  EPOCHS_PER_ETH1_VOTING_PERIOD,
  SLOTS_PER_HISTORICAL_ROOT,
  MIN_EPOCHS_TO_INACTIVITY_PENALTY,
  EPOCHS_PER_HISTORICAL_VECTOR,
  EPOCHS_PER_SLASHINGS_VECTOR,
  HISTORICAL_ROOTS_LIMIT,
  VALIDATOR_REGISTRY_LIMIT,
  BASE_REWARD_FACTOR,
  WHISTLEBLOWER_REWARD_QUOTIENT,
  PROPOSER_REWARD_QUOTIENT,
  INACTIVITY_PENALTY_QUOTIENT,
  MIN_SLASHING_PENALTY_QUOTIENT,
  PROPORTIONAL_SLASHING_MULTIPLIER,
  MAX_PROPOSER_SLASHINGS,
  MAX_ATTESTER_SLASHINGS,
  MAX_ATTESTATIONS,
  MAX_DEPOSITS,
  MAX_VOLUNTARY_EXITS,
  SYNC_COMMITTEE_SIZE,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR,
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR,
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR
} = preset;
exports.PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR = PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR;
exports.MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR = MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR;
exports.INACTIVITY_PENALTY_QUOTIENT_ALTAIR = INACTIVITY_PENALTY_QUOTIENT_ALTAIR;
exports.EPOCHS_PER_SYNC_COMMITTEE_PERIOD = EPOCHS_PER_SYNC_COMMITTEE_PERIOD;
exports.SYNC_COMMITTEE_SIZE = SYNC_COMMITTEE_SIZE;
exports.MAX_VOLUNTARY_EXITS = MAX_VOLUNTARY_EXITS;
exports.MAX_DEPOSITS = MAX_DEPOSITS;
exports.MAX_ATTESTATIONS = MAX_ATTESTATIONS;
exports.MAX_ATTESTER_SLASHINGS = MAX_ATTESTER_SLASHINGS;
exports.MAX_PROPOSER_SLASHINGS = MAX_PROPOSER_SLASHINGS;
exports.PROPORTIONAL_SLASHING_MULTIPLIER = PROPORTIONAL_SLASHING_MULTIPLIER;
exports.MIN_SLASHING_PENALTY_QUOTIENT = MIN_SLASHING_PENALTY_QUOTIENT;
exports.INACTIVITY_PENALTY_QUOTIENT = INACTIVITY_PENALTY_QUOTIENT;
exports.PROPOSER_REWARD_QUOTIENT = PROPOSER_REWARD_QUOTIENT;
exports.WHISTLEBLOWER_REWARD_QUOTIENT = WHISTLEBLOWER_REWARD_QUOTIENT;
exports.BASE_REWARD_FACTOR = BASE_REWARD_FACTOR;
exports.VALIDATOR_REGISTRY_LIMIT = VALIDATOR_REGISTRY_LIMIT;
exports.HISTORICAL_ROOTS_LIMIT = HISTORICAL_ROOTS_LIMIT;
exports.EPOCHS_PER_SLASHINGS_VECTOR = EPOCHS_PER_SLASHINGS_VECTOR;
exports.EPOCHS_PER_HISTORICAL_VECTOR = EPOCHS_PER_HISTORICAL_VECTOR;
exports.MIN_EPOCHS_TO_INACTIVITY_PENALTY = MIN_EPOCHS_TO_INACTIVITY_PENALTY;
exports.SLOTS_PER_HISTORICAL_ROOT = SLOTS_PER_HISTORICAL_ROOT;
exports.EPOCHS_PER_ETH1_VOTING_PERIOD = EPOCHS_PER_ETH1_VOTING_PERIOD;
exports.MAX_SEED_LOOKAHEAD = MAX_SEED_LOOKAHEAD;
exports.MIN_SEED_LOOKAHEAD = MIN_SEED_LOOKAHEAD;
exports.SLOTS_PER_EPOCH = SLOTS_PER_EPOCH;
exports.MIN_ATTESTATION_INCLUSION_DELAY = MIN_ATTESTATION_INCLUSION_DELAY;
exports.EFFECTIVE_BALANCE_INCREMENT = EFFECTIVE_BALANCE_INCREMENT;
exports.MAX_EFFECTIVE_BALANCE = MAX_EFFECTIVE_BALANCE;
exports.MIN_DEPOSIT_AMOUNT = MIN_DEPOSIT_AMOUNT;
exports.SAFE_SLOTS_TO_UPDATE_JUSTIFIED = SAFE_SLOTS_TO_UPDATE_JUSTIFIED;
exports.HYSTERESIS_UPWARD_MULTIPLIER = HYSTERESIS_UPWARD_MULTIPLIER;
exports.HYSTERESIS_DOWNWARD_MULTIPLIER = HYSTERESIS_DOWNWARD_MULTIPLIER;
exports.HYSTERESIS_QUOTIENT = HYSTERESIS_QUOTIENT;
exports.SHUFFLE_ROUND_COUNT = SHUFFLE_ROUND_COUNT;
exports.MAX_VALIDATORS_PER_COMMITTEE = MAX_VALIDATORS_PER_COMMITTEE;
exports.TARGET_COMMITTEE_SIZE = TARGET_COMMITTEE_SIZE;
exports.MAX_COMMITTEES_PER_SLOT = MAX_COMMITTEES_PER_SLOT;
//# sourceMappingURL=activePreset.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(188)))

/***/ }),
/* 188 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preset = exports.commit = void 0;

var _phase = __webpack_require__(190);

var _altair = __webpack_require__(191);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const commit = "v1.1.0-alpha.7";
exports.commit = commit;

const preset = _objectSpread(_objectSpread({}, _phase.phase0), _altair.altair);

exports.preset = preset;
//# sourceMappingURL=index.js.map

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phase0 = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
// Mainnet preset
const phase0 = {
  // Misc
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  MAX_COMMITTEES_PER_SLOT: 64,
  // 2**7 (= 128)
  TARGET_COMMITTEE_SIZE: 128,
  // 2**11 (= 2,048)
  MAX_VALIDATORS_PER_COMMITTEE: 2048,
  // See issue 563
  SHUFFLE_ROUND_COUNT: 90,
  // 4
  HYSTERESIS_QUOTIENT: 4,
  // 1 (minus 0.25)
  HYSTERESIS_DOWNWARD_MULTIPLIER: 1,
  // 5 (plus 1.25)
  HYSTERESIS_UPWARD_MULTIPLIER: 5,
  // Fork Choice
  // ---------------------------------------------------------------
  // 2**3 (= 8)
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: 8,
  // Gwei values
  // ---------------------------------------------------------------
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  MIN_DEPOSIT_AMOUNT: BigInt(1000000000),
  // 2**5 * 10**9 (= 32,000,000,000) Gwei
  MAX_EFFECTIVE_BALANCE: BigInt(32000000000),
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  EFFECTIVE_BALANCE_INCREMENT: BigInt(1000000000),
  // Time parameters
  // ---------------------------------------------------------------
  // 2**0 (= 1) slots 12 seconds
  MIN_ATTESTATION_INCLUSION_DELAY: 1,
  // 2**5 (= 32) slots 6.4 minutes
  SLOTS_PER_EPOCH: 32,
  // 2**0 (= 1) epochs 6.4 minutes
  MIN_SEED_LOOKAHEAD: 1,
  // 2**2 (= 4) epochs 25.6 minutes
  MAX_SEED_LOOKAHEAD: 4,
  // 2**6 (= 64) epochs ~6.8 hours
  EPOCHS_PER_ETH1_VOTING_PERIOD: 64,
  // 2**13 (= 8,192) slots ~13 hours
  SLOTS_PER_HISTORICAL_ROOT: 8192,
  // 2**2 (= 4) epochs 25.6 minutes
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: 4,
  // State vector lengths
  // ---------------------------------------------------------------
  // 2**16 (= 65,536) epochs ~0.8 years
  EPOCHS_PER_HISTORICAL_VECTOR: 65536,
  // 2**13 (= 8,192) epochs ~36 days
  EPOCHS_PER_SLASHINGS_VECTOR: 8192,
  // 2**24 (= 16,777,216) historical roots, ~26,131 years
  HISTORICAL_ROOTS_LIMIT: 16777216,
  // 2**40 (= 1,099,511,627,776) validator spots
  VALIDATOR_REGISTRY_LIMIT: 1099511627776,
  // Reward and penalty quotients
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  BASE_REWARD_FACTOR: BigInt(64),
  // 2**9 (= 512)
  WHISTLEBLOWER_REWARD_QUOTIENT: BigInt(512),
  // 2**3 (= 8)
  PROPOSER_REWARD_QUOTIENT: BigInt(8),
  // 2**26 (= 67,108,864)
  INACTIVITY_PENALTY_QUOTIENT: BigInt(67108864),
  // 2**7 (= 128) (lower safety margin at Phase 0 genesis)
  MIN_SLASHING_PENALTY_QUOTIENT: BigInt(128),
  PROPORTIONAL_SLASHING_MULTIPLIER: BigInt(1),
  // Max operations per block
  // ---------------------------------------------------------------
  // 2**4 (= 16)
  MAX_PROPOSER_SLASHINGS: 16,
  // 2**1 (= 2)
  MAX_ATTESTER_SLASHINGS: 2,
  // 2**7 (= 128)
  MAX_ATTESTATIONS: 128,
  // 2**4 (= 16)
  MAX_DEPOSITS: 16,
  // 2**4 (= 16)
  MAX_VOLUNTARY_EXITS: 16
};
exports.phase0 = phase0;
//# sourceMappingURL=phase0.js.map

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.altair = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
const altair = {
  SYNC_COMMITTEE_SIZE: 512,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: 256,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt(50331648),
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt(64),
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt(2)
};
exports.altair = altair;
//# sourceMappingURL=altair.js.map

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preset = exports.commit = void 0;

var _phase = __webpack_require__(193);

var _altair = __webpack_require__(194);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const commit = "v1.1.0-alpha.7";
exports.commit = commit;

const preset = _objectSpread(_objectSpread({}, _phase.phase0), _altair.altair);

exports.preset = preset;
//# sourceMappingURL=index.js.map

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phase0 = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
// Minimal preset
const phase0 = {
  // Misc
  // ---------------------------------------------------------------
  // [customized] Just 4 committees for slot for testing purposes
  MAX_COMMITTEES_PER_SLOT: 4,
  // [customized] unsecure, but fast
  TARGET_COMMITTEE_SIZE: 4,
  // 2**11 (= 2,048)
  MAX_VALIDATORS_PER_COMMITTEE: 2048,
  // [customized] Faster, but unsecure.
  SHUFFLE_ROUND_COUNT: 10,
  // 4
  HYSTERESIS_QUOTIENT: 4,
  // 1 (minus 0.25)
  HYSTERESIS_DOWNWARD_MULTIPLIER: 1,
  // 5 (plus 1.25)
  HYSTERESIS_UPWARD_MULTIPLIER: 5,
  // Fork Choice
  // ---------------------------------------------------------------
  // 2**1 (= 1)
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: 2,
  // Gwei values
  // ---------------------------------------------------------------
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  MIN_DEPOSIT_AMOUNT: BigInt(1000000000),
  // 2**5 * 10**9 (= 32,000,000,000) Gwei
  MAX_EFFECTIVE_BALANCE: BigInt(32000000000),
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  EFFECTIVE_BALANCE_INCREMENT: BigInt(1000000000),
  // Time parameters
  // ---------------------------------------------------------------
  // 2**0 (= 1) slots 6 seconds
  MIN_ATTESTATION_INCLUSION_DELAY: 1,
  // [customized] fast epochs
  SLOTS_PER_EPOCH: 8,
  // 2**0 (= 1) epochs
  MIN_SEED_LOOKAHEAD: 1,
  // 2**2 (= 4) epochs
  MAX_SEED_LOOKAHEAD: 4,
  // [customized] higher frequency new deposits from eth1 for testing
  EPOCHS_PER_ETH1_VOTING_PERIOD: 4,
  // [customized] smaller state
  SLOTS_PER_HISTORICAL_ROOT: 64,

  /*
  // 2**8 (= 256) epochs
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: 256,
  // [customized] higher frequency of committee turnover and faster time to acceptable voluntary exit
  SHARD_COMMITTEE_PERIOD: 64,
  */
  // 2**2 (= 4) epochs
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: 4,
  // State vector lengths
  // ---------------------------------------------------------------
  // [customized] smaller state
  EPOCHS_PER_HISTORICAL_VECTOR: 64,
  // [customized] smaller state
  EPOCHS_PER_SLASHINGS_VECTOR: 64,
  // 2**24 (= 16,777,216) historical roots
  HISTORICAL_ROOTS_LIMIT: 16777216,
  // 2**40 (= 1,099,511,627,776) validator spots
  VALIDATOR_REGISTRY_LIMIT: 1099511627776,
  // Reward and penalty quotients
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  BASE_REWARD_FACTOR: BigInt(64),
  // 2**9 (= 512)
  WHISTLEBLOWER_REWARD_QUOTIENT: BigInt(512),
  // 2**3 (= 8)
  PROPOSER_REWARD_QUOTIENT: BigInt(8),
  // [customized] 2**25 (= 33,554,432)
  INACTIVITY_PENALTY_QUOTIENT: BigInt(33554432),
  // [customized] 2**6 (= 64)
  MIN_SLASHING_PENALTY_QUOTIENT: BigInt(64),
  // [customized] 2 (lower safety margin than Phase 0 genesis but different than mainnet config for testing)
  PROPORTIONAL_SLASHING_MULTIPLIER: BigInt(2),
  // Max operations per block
  // ---------------------------------------------------------------
  // 2**4 (= 16)
  MAX_PROPOSER_SLASHINGS: 16,
  // 2**1 (= 2)
  MAX_ATTESTER_SLASHINGS: 2,
  // 2**7 (= 128)
  MAX_ATTESTATIONS: 128,
  // 2**4 (= 16)
  MAX_DEPOSITS: 16,
  // 2**4 (= 16)
  MAX_VOLUNTARY_EXITS: 16
};
exports.phase0 = phase0;
//# sourceMappingURL=phase0.js.map

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.altair = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
const altair = {
  SYNC_COMMITTEE_SIZE: 32,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: 8,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt(50331648),
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt(64),
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt(2)
};
exports.altair = altair;
//# sourceMappingURL=altair.js.map

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForkName = void 0;

/**
 * Forks in order of occurance
 */
let ForkName;
exports.ForkName = ForkName;

(function (ForkName) {
  ForkName["phase0"] = "phase0";
  ForkName["altair"] = "altair";
})(ForkName || (exports.ForkName = ForkName = {}));
//# sourceMappingURL=forkName.js.map

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sync = __webpack_require__(197);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _committee = __webpack_require__(198);

Object.keys(_committee).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _committee[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _committee[key];
    }
  });
});

var _beacon = __webpack_require__(199);

Object.keys(_beacon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _beacon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _beacon[key];
    }
  });
});

var _types = __webpack_require__(38);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _misc = __webpack_require__(88);

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _operations = __webpack_require__(89);

Object.keys(_operations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _operations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _operations[key];
    }
  });
});

var _validator = __webpack_require__(90);

Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});

var _wire = __webpack_require__(200);

Object.keys(_wire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wire[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wire[key];
    }
  });
});

var _api = __webpack_require__(91);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=sync.js.map

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=committee.js.map

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=beacon.js.map

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=wire.js.map

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightClientStore = exports.LightClientUpdate = exports.LightClientSnapshot = exports.BeaconState = exports.SignedBeaconBlock = exports.BeaconBlock = exports.BeaconBlockBody = exports.HistoricalBatch = exports.HistoricalStateRoots = exports.HistoricalBlockRoots = exports.SyncAggregate = exports.SyncCommitteeBits = exports.SyncAggregatorSelectionData = exports.SignedContributionAndProof = exports.ContributionAndProof = exports.SyncCommitteeContribution = exports.SyncCommitteeMessage = exports.SyncCommittee = exports.Metadata = exports.SyncSubnets = void 0;

var _lodestarParams = __webpack_require__(92);

var _ssz = __webpack_require__(0);

var _phase = __webpack_require__(39);

var _primitive = __webpack_require__(107);

var _lazyVar = __webpack_require__(109);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  Bytes32,
  Number64,
  Uint64,
  Slot,
  SubCommitteeIndex,
  ValidatorIndex,
  Gwei,
  Root,
  Version,
  BLSPubkey,
  BLSSignature,
  ParticipationFlags
} = _primitive.ssz; // So the expandedRoots can be referenced, and break the circular dependency

const typesRef = new _lazyVar.LazyVariable();
const SyncSubnets = new _ssz.BitVectorType({
  length: _lodestarParams.SYNC_COMMITTEE_SUBNET_COUNT
});
exports.SyncSubnets = SyncSubnets;
const Metadata = new _ssz.ContainerType({
  fields: {
    seqNumber: Uint64,
    attnets: _phase.ssz.AttestationSubnets,
    syncnets: SyncSubnets
  }
});
exports.Metadata = Metadata;
const SyncCommittee = new _ssz.ContainerType({
  fields: {
    pubkeys: new _ssz.VectorType({
      elementType: BLSPubkey,
      length: _lodestarParams.SYNC_COMMITTEE_SIZE
    }),
    aggregatePubkey: BLSPubkey
  }
});
exports.SyncCommittee = SyncCommittee;
const SyncCommitteeMessage = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    beaconBlockRoot: Root,
    validatorIndex: ValidatorIndex,
    signature: BLSSignature
  }
});
exports.SyncCommitteeMessage = SyncCommitteeMessage;
const SyncCommitteeContribution = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    beaconBlockRoot: Root,
    subCommitteeIndex: SubCommitteeIndex,
    aggregationBits: new _ssz.BitVectorType({
      length: _lodestarParams.SYNC_COMMITTEE_SIZE / _lodestarParams.SYNC_COMMITTEE_SUBNET_COUNT
    }),
    signature: BLSSignature
  }
});
exports.SyncCommitteeContribution = SyncCommitteeContribution;
const ContributionAndProof = new _ssz.ContainerType({
  fields: {
    aggregatorIndex: ValidatorIndex,
    contribution: SyncCommitteeContribution,
    selectionProof: BLSSignature
  }
});
exports.ContributionAndProof = ContributionAndProof;
const SignedContributionAndProof = new _ssz.ContainerType({
  fields: {
    message: ContributionAndProof,
    signature: BLSSignature
  }
});
exports.SignedContributionAndProof = SignedContributionAndProof;
const SyncAggregatorSelectionData = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    subCommitteeIndex: SubCommitteeIndex
  }
});
exports.SyncAggregatorSelectionData = SyncAggregatorSelectionData;
const SyncCommitteeBits = new _ssz.BitVectorType({
  length: _lodestarParams.SYNC_COMMITTEE_SIZE
});
exports.SyncCommitteeBits = SyncCommitteeBits;
const SyncAggregate = new _ssz.ContainerType({
  fields: {
    syncCommitteeBits: SyncCommitteeBits,
    syncCommitteeSignature: BLSSignature
  }
}); // Re-declare with the new expanded type

exports.SyncAggregate = SyncAggregate;
const HistoricalBlockRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconBlock
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalBlockRoots = HistoricalBlockRoots;
const HistoricalStateRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconState
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalStateRoots = HistoricalStateRoots;
const HistoricalBatch = new _ssz.ContainerType({
  fields: {
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots
  }
});
exports.HistoricalBatch = HistoricalBatch;
const BeaconBlockBody = new _ssz.ContainerType({
  fields: _objectSpread(_objectSpread({}, _phase.ssz.BeaconBlockBody.fields), {}, {
    syncAggregate: SyncAggregate
  })
});
exports.BeaconBlockBody = BeaconBlockBody;
const BeaconBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    // Reclare expandedType() with altair block and altair state
    parentRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconBlock
    }),
    stateRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconState
    }),
    body: BeaconBlockBody
  }
});
exports.BeaconBlock = BeaconBlock;
const SignedBeaconBlock = new _ssz.ContainerType({
  fields: {
    message: BeaconBlock,
    signature: BLSSignature
  }
}); //we don't reuse phase0.BeaconState fields since we need to replace some keys
//and we cannot keep order doing that

exports.SignedBeaconBlock = SignedBeaconBlock;
const BeaconState = new _ssz.ContainerType({
  fields: {
    genesisTime: Number64,
    genesisValidatorsRoot: Root,
    slot: Slot,
    fork: _phase.ssz.Fork,
    // History
    latestBlockHeader: _phase.ssz.BeaconBlockHeader,
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots,
    historicalRoots: new _ssz.ListType({
      elementType: new _ssz.RootType({
        expandedType: HistoricalBatch
      }),
      limit: _lodestarParams.HISTORICAL_ROOTS_LIMIT
    }),
    // Eth1
    eth1Data: _phase.ssz.Eth1Data,
    eth1DataVotes: new _ssz.ListType({
      elementType: _phase.ssz.Eth1Data,
      limit: _lodestarParams.EPOCHS_PER_ETH1_VOTING_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    }),
    eth1DepositIndex: Number64,
    // Registry
    validators: new _ssz.ListType({
      elementType: _phase.ssz.Validator,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    balances: new _ssz.ListType({
      elementType: Gwei,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    randaoMixes: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.EPOCHS_PER_HISTORICAL_VECTOR
    }),
    // Slashings
    slashings: new _ssz.VectorType({
      elementType: Gwei,
      length: _lodestarParams.EPOCHS_PER_SLASHINGS_VECTOR
    }),
    // Participation
    previousEpochParticipation: new _ssz.ListType({
      elementType: ParticipationFlags,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    currentEpochParticipation: new _ssz.ListType({
      elementType: ParticipationFlags,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    // Finality
    justificationBits: new _ssz.BitVectorType({
      length: _lodestarParams.JUSTIFICATION_BITS_LENGTH
    }),
    previousJustifiedCheckpoint: _phase.ssz.Checkpoint,
    currentJustifiedCheckpoint: _phase.ssz.Checkpoint,
    finalizedCheckpoint: _phase.ssz.Checkpoint,
    // Inactivity
    inactivityScores: new _ssz.ListType({
      elementType: Number64,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    // Sync
    currentSyncCommittee: SyncCommittee,
    nextSyncCommittee: SyncCommittee
  }
});
exports.BeaconState = BeaconState;
const LightClientSnapshot = new _ssz.ContainerType({
  fields: {
    header: _phase.ssz.BeaconBlockHeader,
    nextSyncCommittee: SyncCommittee,
    currentSyncCommittee: SyncCommittee
  }
});
exports.LightClientSnapshot = LightClientSnapshot;
const LightClientUpdate = new _ssz.ContainerType({
  fields: {
    header: _phase.ssz.BeaconBlockHeader,
    nextSyncCommittee: SyncCommittee,
    nextSyncCommitteeBranch: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2
    }),
    finalityHeader: _phase.ssz.BeaconBlockHeader,
    finalityBranch: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.FINALIZED_ROOT_INDEX_FLOORLOG2
    }),
    syncCommitteeBits: new _ssz.BitVectorType({
      length: _lodestarParams.SYNC_COMMITTEE_SIZE
    }),
    syncCommitteeSignature: BLSSignature,
    forkVersion: Version
  }
});
exports.LightClientUpdate = LightClientUpdate;
const LightClientStore = new _ssz.ContainerType({
  fields: {
    snapshot: LightClientSnapshot,
    validUpdates: new _ssz.ListType({
      elementType: LightClientUpdate,
      limit: _lodestarParams.EPOCHS_PER_SYNC_COMMITTEE_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    })
  }
}); // MUST set typesRef here, otherwise expandedType() calls will throw

exports.LightClientStore = LightClientStore;
typesRef.set({
  BeaconBlock,
  BeaconState
});
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=types.js.map

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allForks = void 0;

var _phase = __webpack_require__(39);

var _altair = __webpack_require__(64);

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Index the ssz types that differ by fork
 * A record of AllForksSSZTypes indexed by fork
 */
const allForks = {
  phase0: {
    BeaconBlockBody: _phase.ssz.BeaconBlockBody,
    BeaconBlock: _phase.ssz.BeaconBlock,
    SignedBeaconBlock: _phase.ssz.SignedBeaconBlock,
    BeaconState: _phase.ssz.BeaconState,
    Metadata: _phase.ssz.Metadata
  },
  altair: {
    BeaconBlockBody: _altair.ssz.BeaconBlockBody,
    BeaconBlock: _altair.ssz.BeaconBlock,
    SignedBeaconBlock: _altair.ssz.SignedBeaconBlock,
    BeaconState: _altair.ssz.BeaconState,
    Metadata: _altair.ssz.Metadata
  }
};
exports.allForks = allForks;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  allForks: true,
  phase0: true,
  altair: true
};
Object.defineProperty(exports, "phase0", {
  enumerable: true,
  get: function () {
    return _phase.ssz;
  }
});
Object.defineProperty(exports, "altair", {
  enumerable: true,
  get: function () {
    return _altair.ssz;
  }
});
exports.allForks = void 0;

var _sszTypes = __webpack_require__(108);

Object.keys(_sszTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sszTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sszTypes[key];
    }
  });
});

var _phase = __webpack_require__(39);

var _altair = __webpack_require__(64);

var _allForks = __webpack_require__(110);

const allForks = _allForks.ssz.allForks;
exports.allForks = allForks;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringType = void 0;

var _ssz = __webpack_require__(0);

/* eslint-disable @typescript-eslint/naming-convention */
class StringType extends _ssz.BasicType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  struct_getSerializedLength(data) {
    throw new Error("unsupported ssz operation");
  }

  struct_convertToJson(value) {
    return value;
  }

  struct_convertFromJson(data) {
    return data;
  }

  struct_assertValidValue(data) {
    throw new Error("unsupported ssz operation");
  }

  serialize() {
    throw new Error("unsupported ssz type for serialization");
  }

  struct_serializeToBytes() {
    throw new Error("unsupported ssz type for serialization");
  }

  struct_deserializeFromBytes() {
    throw new Error("unsupported ssz operation");
  }

  struct_defaultValue() {
    return "something";
  }

}

exports.StringType = StringType;
//# sourceMappingURL=StringType.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createRandomValueWorker", function() { return /* binding */ createRandomValueWorker; });
__webpack_require__.d(__webpack_exports__, "serialize", function() { return /* binding */ serialize; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/@chainsafe/lodestar-types/lib/index.js
var lib = __webpack_require__(29);

// CONCATENATED MODULE: ./src/util/types.ts













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var phase0 = lib["ssz"].phase0,
    altair = lib["ssz"].altair,
    allForks = lib["ssz"].allForks,
    primitive = _objectWithoutProperties(lib["ssz"], ["phase0", "altair", "allForks"]);

var forks = {
  phase0: _objectSpread(_objectSpread({}, phase0), primitive),
  altair: _objectSpread(_objectSpread(_objectSpread({}, phase0), altair), primitive)
};
function typeNames(types) {
  return Object.keys(types).sort();
}
// EXTERNAL MODULE: ./node_modules/@chainsafe/ssz/lib/index.js
var ssz_lib = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib!./src/components/worker.tsx















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import {presets} from "../util/types";



function randomNumber(length) {
  return Math.random() * length | 0;
}

function randomNumberUint(byteLength) {
  return randomNumber(byteLength);
}

function randomBigUint(byteLength) {
  return BigInt(randomNumber(byteLength));
}

function randomBoolean() {
  return Math.random() > 0.5;
}

function randomBooleanArray(length) {
  return Array.from({
    length: length
  }, function () {
    return randomBoolean();
  });
}

function randomByteVector(length) {
  var array = new Uint8Array(length);
  self.crypto.getRandomValues(array);
  return array;
}

function createRandomValue(type) {
  if (Object(ssz_lib["isNumberUintType"])(type)) {
    return randomNumberUint(type.byteLength);
  } else if (Object(ssz_lib["isBigIntUintType"])(type)) {
    return randomBigUint(type.byteLength);
  } else if (Object(ssz_lib["isBooleanType"])(type)) {
    return randomBoolean();
  } else if (Object(ssz_lib["isBitVectorType"])(type)) {
    return randomBooleanArray(type.length);
  } else if (Object(ssz_lib["isByteVectorType"])(type)) {
    return randomByteVector(type.length);
  } else if (Object(ssz_lib["isBitListType"])(type)) {
    var listLength = Math.min(Math.floor(Math.random() * 16), type.limit);
    return randomBooleanArray(listLength);
  } else if (Object(ssz_lib["isListType"])(type)) {
    var _listLength = Math.min(Math.floor(Math.random() * 16), type.limit);

    return Array.from({
      length: _listLength
    }, function () {
      return createRandomValue(type.elementType);
    });
  } else if (Object(ssz_lib["isVectorType"])(type)) {
    return Array.from({
      length: type.length
    }, function () {
      return createRandomValue(type.elementType);
    });
  } else if (Object(ssz_lib["isContainerType"])(type)) {
    var obj = {};
    Object.entries(type.fields).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          fieldName = _ref2[0],
          fieldType = _ref2[1];

      obj[fieldName] = createRandomValue(fieldType);
    });
    return obj;
  }
}

function getSSZType(data) {
  return forks[data.forkName][data.sszTypeName];
}

function createRandomValueWorker(data) {
  var sszType = getSSZType(data);
  var value = createRandomValue(sszType);
  return value;
}
function serialize(data) {
  var type = getSSZType(data);
  var serialized = type.serialize(data.input);
  var root = type.hashTreeRoot(data.input);
  return {
    serialized: serialized,
    root: root
  };
}
addEventListener('message', function (e) {var _e$data = e.data,type = _e$data.type,method = _e$data.method,id = _e$data.id,params = _e$data.params,f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () {return f.apply(__webpack_exports__, params);});} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ })
/******/ ]);
//# sourceMappingURL=333a416b4906f3977e1a.worker.js.map