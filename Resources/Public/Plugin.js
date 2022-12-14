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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "./node_modules/@sindresorhus/slugify/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sindresorhus/slugify/index.js ***!
  \*****************************************************/
/*! exports provided: default, slugifyWithCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugifyWithCounter", function() { return slugifyWithCounter; });
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-string-regexp */ "./node_modules/@sindresorhus/slugify/node_modules/escape-string-regexp/index.js");
/* harmony import */ var _sindresorhus_transliterate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sindresorhus/transliterate */ "./node_modules/@sindresorhus/transliterate/index.js");
/* harmony import */ var _overridable_replacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overridable-replacements.js */ "./node_modules/@sindresorhus/slugify/overridable-replacements.js");




const decamelize = string => {
	return string
		// Separate capitalized words.
		.replace(/([A-Z]{2,})(\d+)/g, '$1 $2')
		.replace(/([a-z\d]+)([A-Z]{2,})/g, '$1 $2')

		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2');
};

const removeMootSeparators = (string, separator) => {
	const escapedSeparator = Object(escape_string_regexp__WEBPACK_IMPORTED_MODULE_0__["default"])(separator);

	return string
		.replace(new RegExp(`${escapedSeparator}{2,}`, 'g'), separator)
		.replace(new RegExp(`^${escapedSeparator}|${escapedSeparator}$`, 'g'), '');
};

function slugify(string, options) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\``);
	}

	options = {
		separator: '-',
		lowercase: true,
		decamelize: true,
		customReplacements: [],
		preserveLeadingUnderscore: false,
		preserveTrailingDash: false,
		...options
	};

	const shouldPrependUnderscore = options.preserveLeadingUnderscore && string.startsWith('_');
	const shouldAppendDash = options.preserveTrailingDash && string.endsWith('-');

	const customReplacements = new Map([
		..._overridable_replacements_js__WEBPACK_IMPORTED_MODULE_2__["default"],
		...options.customReplacements
	]);

	string = Object(_sindresorhus_transliterate__WEBPACK_IMPORTED_MODULE_1__["default"])(string, {customReplacements});

	if (options.decamelize) {
		string = decamelize(string);
	}

	let patternSlug = /[^a-zA-Z\d]+/g;

	if (options.lowercase) {
		string = string.toLowerCase();
		patternSlug = /[^a-z\d]+/g;
	}

	string = string.replace(patternSlug, options.separator);
	string = string.replace(/\\/g, '');
	if (options.separator) {
		string = removeMootSeparators(string, options.separator);
	}

	if (shouldPrependUnderscore) {
		string = `_${string}`;
	}

	if (shouldAppendDash) {
		string = `${string}-`;
	}

	return string;
}

function slugifyWithCounter() {
	const occurrences = new Map();

	const countable = (string, options) => {
		string = slugify(string, options);

		if (!string) {
			return '';
		}

		const stringLower = string.toLowerCase();
		const numberless = occurrences.get(stringLower.replace(/(?:-\d+?)+?$/, '')) || 0;
		const counter = occurrences.get(stringLower);
		occurrences.set(stringLower, typeof counter === 'number' ? counter + 1 : 1);
		const newCounter = occurrences.get(stringLower) || 2;
		if (newCounter >= 2 || numberless > 2) {
			string = `${string}-${newCounter}`;
		}

		return string;
	};

	countable.reset = () => {
		occurrences.clear();
	};

	return countable;
}


/***/ }),

/***/ "./node_modules/@sindresorhus/slugify/node_modules/escape-string-regexp/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@sindresorhus/slugify/node_modules/escape-string-regexp/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return escapeStringRegexp; });
function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it???s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns??? stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}


/***/ }),

/***/ "./node_modules/@sindresorhus/slugify/overridable-replacements.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sindresorhus/slugify/overridable-replacements.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const overridableReplacements = [
	['&', ' and '],
	['????', ' unicorn '],
	['???', ' love ']
];

/* harmony default export */ __webpack_exports__["default"] = (overridableReplacements);


/***/ }),

/***/ "./node_modules/@sindresorhus/transliterate/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sindresorhus/transliterate/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transliterate; });
/* harmony import */ var lodash_deburr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.deburr */ "./node_modules/lodash.deburr/index.js");
/* harmony import */ var lodash_deburr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_deburr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-string-regexp */ "./node_modules/@sindresorhus/transliterate/node_modules/escape-string-regexp/index.js");
/* harmony import */ var _replacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replacements.js */ "./node_modules/@sindresorhus/transliterate/replacements.js");




const doCustomReplacements = (string, replacements) => {
	for (const [key, value] of replacements) {
		// TODO: Use `String#replaceAll()` when targeting Node.js 16.
		string = string.replace(new RegExp(Object(escape_string_regexp__WEBPACK_IMPORTED_MODULE_1__["default"])(key), 'g'), value);
	}

	return string;
};

function transliterate(string, options) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\``);
	}

	options = {
		customReplacements: [],
		...options
	};

	const customReplacements = new Map([
		..._replacements_js__WEBPACK_IMPORTED_MODULE_2__["default"],
		...options.customReplacements
	]);

	string = string.normalize();
	string = doCustomReplacements(string, customReplacements);
	string = lodash_deburr__WEBPACK_IMPORTED_MODULE_0___default()(string);

	return string;
}


/***/ }),

/***/ "./node_modules/@sindresorhus/transliterate/node_modules/escape-string-regexp/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@sindresorhus/transliterate/node_modules/escape-string-regexp/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return escapeStringRegexp; });
function escapeStringRegexp(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it???s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns??? stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
}


/***/ }),

/***/ "./node_modules/@sindresorhus/transliterate/replacements.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sindresorhus/transliterate/replacements.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const replacements = [
	// German umlauts
	['??', 'ss'],
	['???', 'Ss'],
	['??', 'ae'],
	['??', 'Ae'],
	['??', 'oe'],
	['??', 'Oe'],
	['??', 'ue'],
	['??', 'Ue'],

	// Latin
	['??', 'A'],
	['??', 'A'],
	['??', 'A'],
	['??', 'A'],
	['??', 'Ae'],
	['??', 'A'],
	['??', 'AE'],
	['??', 'C'],
	['??', 'E'],
	['??', 'E'],
	['??', 'E'],
	['??', 'E'],
	['??', 'I'],
	['??', 'I'],
	['??', 'I'],
	['??', 'I'],
	['??', 'D'],
	['??', 'N'],
	['??', 'O'],
	['??', 'O'],
	['??', 'O'],
	['??', 'O'],
	['??', 'Oe'],
	['??', 'O'],
	['??', 'O'],
	['??', 'U'],
	['??', 'U'],
	['??', 'U'],
	['??', 'Ue'],
	['??', 'U'],
	['??', 'Y'],
	['??', 'TH'],
	['??', 'ss'],
	['??', 'a'],
	['??', 'a'],
	['??', 'a'],
	['??', 'a'],
	['??', 'ae'],
	['??', 'a'],
	['??', 'ae'],
	['??', 'c'],
	['??', 'e'],
	['??', 'e'],
	['??', 'e'],
	['??', 'e'],
	['??', 'i'],
	['??', 'i'],
	['??', 'i'],
	['??', 'i'],
	['??', 'd'],
	['??', 'n'],
	['??', 'o'],
	['??', 'o'],
	['??', 'o'],
	['??', 'o'],
	['??', 'oe'],
	['??', 'o'],
	['??', 'o'],
	['??', 'u'],
	['??', 'u'],
	['??', 'u'],
	['??', 'ue'],
	['??', 'u'],
	['??', 'y'],
	['??', 'th'],
	['??', 'y'],
	['???', 'SS'],

	// Vietnamese
	['??', 'a'],
	['??', 'A'],
	['??', 'a'],
	['??', 'A'],
	['??', 'a'],
	['??', 'A'],
	['??', 'a'],
	['??', 'A'],
	['??', 'e'],
	['??', 'E'],
	['??', 'e'],
	['??', 'E'],
	['??', 'e'],
	['??', 'E'],
	['??', 'i'],
	['??', 'I'],
	['??', 'i'],
	['??', 'I'],
	['??', 'o'],
	['??', 'O'],
	['??', 'o'],
	['??', 'O'],
	['??', 'o'],
	['??', 'O'],
	['??', 'o'],
	['??', 'O'],
	['??', 'u'],
	['??', 'U'],
	['??', 'u'],
	['??', 'U'],
	['??', 'y'],
	['??', 'Y'],
	['??', 'a'],
	['??', 'A'],
	['??', 'D'],
	['??', 'd'],
	['??', 'i'],
	['??', 'I'],
	['??', 'u'],
	['??', 'U'],
	['??', 'o'],
	['??', 'O'],
	['??', 'u'],
	['??', 'U'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'a'],
	['???', 'A'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'e'],
	['???', 'E'],
	['???', 'i'],
	['???', 'I'],
	['???', 'i'],
	['???', 'I'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'o'],
	['???', 'O'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'u'],
	['???', 'U'],
	['???', 'y'],
	['???', 'Y'],
	['???', 'y'],
	['???', 'Y'],
	['???', 'y'],
	['???', 'Y'],
	['???', 'y'],
	['???', 'Y'],

	// Arabic
	['??', 'e'],
	['??', 'a'],
	['??', 'a'],
	['??', 'w'],
	['??', 'i'],
	['??', 'y'],
	['??', 'a'],
	['??', 'b'],
	['??', 't'],
	['??', 't'],
	['??', 'th'],
	['??', 'j'],
	['??', 'h'],
	['??', 'kh'],
	['??', 'd'],
	['??', 'dh'],
	['??', 'r'],
	['??', 'z'],
	['??', 's'],
	['??', 'sh'],
	['??', 's'],
	['??', 'd'],
	['??', 't'],
	['??', 'z'],
	['??', 'e'],
	['??', 'gh'],
	['??', '_'],
	['??', 'f'],
	['??', 'q'],
	['??', 'k'],
	['??', 'l'],
	['??', 'm'],
	['??', 'n'],
	['??', 'h'],
	['??', 'w'],
	['??', 'a'],
	['??', 'y'],
	['?????', 'a'],
	['??', 'u'],
	['?????', 'i'],
	['??', '0'],
	['??', '1'],
	['??', '2'],
	['??', '3'],
	['??', '4'],
	['??', '5'],
	['??', '6'],
	['??', '7'],
	['??', '8'],
	['??', '9'],

	// Persian / Farsi
	['??', 'ch'],
	['??', 'k'],
	['??', 'g'],
	['??', 'p'],
	['??', 'zh'],
	['??', 'y'],
	['??', '0'],
	['??', '1'],
	['??', '2'],
	['??', '3'],
	['??', '4'],
	['??', '5'],
	['??', '6'],
	['??', '7'],
	['??', '8'],
	['??', '9'],

	// Pashto
	['??', 'p'],
	['??', 'z'],
	['??', 'c'],
	['??', 'd'],
	['???', 'd'],
	['???', 'r'],
	['??', 'r'],
	['???', 'z'],
	['??', 'g'],
	['??', 'x'],
	['??', 'g'],
	['??', 'n'],
	['??', 'e'],
	['??', 'e'],
	['??', 'ai'],

	// Urdu
	['??', 't'],
	['??', 'd'],
	['??', 'r'],
	['??', 'n'],
	['??', 'h'],
	['??', 'h'],
	['??', 'e'],

	// Russian
	['??', 'A'],
	['??', 'a'],
	['??', 'B'],
	['??', 'b'],
	['??', 'V'],
	['??', 'v'],
	['??', 'G'],
	['??', 'g'],
	['??', 'D'],
	['??', 'd'],
	['????', 'ye'],
	['????', 'Ye'],
	['????', 'yE'],
	['????', 'YE'],
	['??', 'E'],
	['??', 'e'],
	['??', 'Yo'],
	['??', 'yo'],
	['??', 'Zh'],
	['??', 'zh'],
	['??', 'Z'],
	['??', 'z'],
	['??', 'I'],
	['??', 'i'],
	['????', 'iy'],
	['????', 'Iy'],
	['????', 'IY'],
	['????', 'iY'],
	['??', 'Y'],
	['??', 'y'],
	['??', 'K'],
	['??', 'k'],
	['??', 'L'],
	['??', 'l'],
	['??', 'M'],
	['??', 'm'],
	['??', 'N'],
	['??', 'n'],
	['??', 'O'],
	['??', 'o'],
	['??', 'P'],
	['??', 'p'],
	['??', 'R'],
	['??', 'r'],
	['??', 'S'],
	['??', 's'],
	['??', 'T'],
	['??', 't'],
	['??', 'U'],
	['??', 'u'],
	['??', 'F'],
	['??', 'f'],
	['??', 'Kh'],
	['??', 'kh'],
	['??', 'Ts'],
	['??', 'ts'],
	['??', 'Ch'],
	['??', 'ch'],
	['??', 'Sh'],
	['??', 'sh'],
	['??', 'Sch'],
	['??', 'sch'],
	['??', ''],
	['??', ''],
	['??', 'Y'],
	['??', 'y'],
	['??', ''],
	['??', ''],
	['??', 'E'],
	['??', 'e'],
	['??', 'Yu'],
	['??', 'yu'],
	['??', 'Ya'],
	['??', 'ya'],

	// Romanian
	['??', 'a'],
	['??', 'A'],
	['??', 's'],
	['??', 'S'],
	['??', 't'],
	['??', 'T'],
	['??', 't'],
	['??', 'T'],

	// Turkish
	['??', 's'],
	['??', 'S'],
	['??', 'c'],
	['??', 'C'],
	['??', 'g'],
	['??', 'G'],
	['??', 'i'],
	['??', 'I'],

	// Armenian
	['??', 'a'],
	['??', 'A'],
	['??', 'b'],
	['??', 'B'],
	['??', 'g'],
	['??', 'G'],
	['??', 'd'],
	['??', 'D'],
	['??', 'ye'],
	['??', 'Ye'],
	['??', 'z'],
	['??', 'Z'],
	['??', 'e'],
	['??', 'E'],
	['??', 'y'],
	['??', 'Y'],
	['??', 't'],
	['??', 'T'],
	['??', 'zh'],
	['??', 'Zh'],
	['??', 'i'],
	['??', 'I'],
	['??', 'l'],
	['??', 'L'],
	['??', 'kh'],
	['??', 'Kh'],
	['??', 'ts'],
	['??', 'Ts'],
	['??', 'k'],
	['??', 'K'],
	['??', 'h'],
	['??', 'H'],
	['??', 'dz'],
	['??', 'Dz'],
	['??', 'gh'],
	['??', 'Gh'],
	['??', 'tch'],
	['??', 'Tch'],
	['??', 'm'],
	['??', 'M'],
	['??', 'y'],
	['??', 'Y'],
	['??', 'n'],
	['??', 'N'],
	['??', 'sh'],
	['??', 'Sh'],
	['??', 'vo'],
	['??', 'Vo'],
	['??', 'ch'],
	['??', 'Ch'],
	['??', 'p'],
	['??', 'P'],
	['??', 'j'],
	['??', 'J'],
	['??', 'r'],
	['??', 'R'],
	['??', 's'],
	['??', 'S'],
	['??', 'v'],
	['??', 'V'],
	['??', 't'],
	['??', 'T'],
	['??', 'r'],
	['??', 'R'],
	['??', 'c'],
	['??', 'C'],
	['????', 'u'],
	['????', 'U'],
	['????', 'U'],
	['??', 'p'],
	['??', 'P'],
	['??', 'q'],
	['??', 'Q'],
	['??', 'o'],
	['??', 'O'],
	['??', 'f'],
	['??', 'F'],
	['??', 'yev'],

	// Georgian
	['???', 'a'],
	['???', 'b'],
	['???', 'g'],
	['???', 'd'],
	['???', 'e'],
	['???', 'v'],
	['???', 'z'],
	['???', 't'],
	['???', 'i'],
	['???', 'k'],
	['???', 'l'],
	['???', 'm'],
	['???', 'n'],
	['???', 'o'],
	['???', 'p'],
	['???', 'zh'],
	['???', 'r'],
	['???', 's'],
	['???', 't'],
	['???', 'u'],
	['???', 'ph'],
	['???', 'q'],
	['???', 'gh'],
	['???', 'k'],
	['???', 'sh'],
	['???', 'ch'],
	['???', 'ts'],
	['???', 'dz'],
	['???', 'ts'],
	['???', 'tch'],
	['???', 'kh'],
	['???', 'j'],
	['???', 'h'],

	// Czech
	['??', 'c'],
	['??', 'd'],
	['??', 'e'],
	['??', 'n'],
	['??', 'r'],
	['??', 's'],
	['??', 't'],
	['??', 'u'],
	['??', 'z'],
	['??', 'C'],
	['??', 'D'],
	['??', 'E'],
	['??', 'N'],
	['??', 'R'],
	['??', 'S'],
	['??', 'T'],
	['??', 'U'],
	['??', 'Z'],

	// Dhivehi
	['??', 'h'],
	['??', 'sh'],
	['??', 'n'],
	['??', 'r'],
	['??', 'b'],
	['??', 'lh'],
	['??', 'k'],
	['??', 'a'],
	['??', 'v'],
	['??', 'm'],
	['??', 'f'],
	['??', 'dh'],
	['??', 'th'],
	['??', 'l'],
	['??', 'g'],
	['??', 'gn'],
	['??', 's'],
	['??', 'd'],
	['??', 'z'],
	['??', 't'],
	['??', 'y'],
	['??', 'p'],
	['??', 'j'],
	['??', 'ch'],
	['??', 'tt'],
	['??', 'hh'],
	['??', 'kh'],
	['??', 'th'],
	['??', 'z'],
	['??', 'sh'],
	['??', 's'],
	['??', 'd'],
	['??', 't'],
	['??', 'z'],
	['??', 'a'],
	['??', 'gh'],
	['??', 'q'],
	['??', 'w'],
	['??', 'a'],
	['??', 'aa'],
	['??', 'i'],
	['??', 'ee'],
	['??', 'u'],
	['??', 'oo'],
	['??', 'e'],
	['??', 'ey'],
	['??', 'o'],
	['??', 'oa'],
	['??', ''],

	// Greek
	['??', 'a'],
	['??', 'v'],
	['??', 'g'],
	['??', 'd'],
	['??', 'e'],
	['??', 'z'],
	['??', 'i'],
	['??', 'th'],
	['??', 'i'],
	['??', 'k'],
	['??', 'l'],
	['??', 'm'],
	['??', 'n'],
	['??', 'ks'],
	['??', 'o'],
	['??', 'p'],
	['??', 'r'],
	['??', 's'],
	['??', 't'],
	['??', 'y'],
	['??', 'f'],
	['??', 'x'],
	['??', 'ps'],
	['??', 'o'],
	['??', 'a'],
	['??', 'e'],
	['??', 'i'],
	['??', 'o'],
	['??', 'y'],
	['??', 'i'],
	['??', 'o'],
	['??', 's'],
	['??', 'i'],
	['??', 'y'],
	['??', 'y'],
	['??', 'i'],
	['??', 'A'],
	['??', 'B'],
	['??', 'G'],
	['??', 'D'],
	['??', 'E'],
	['??', 'Z'],
	['??', 'I'],
	['??', 'TH'],
	['??', 'I'],
	['??', 'K'],
	['??', 'L'],
	['??', 'M'],
	['??', 'N'],
	['??', 'KS'],
	['??', 'O'],
	['??', 'P'],
	['??', 'R'],
	['??', 'S'],
	['??', 'T'],
	['??', 'Y'],
	['??', 'F'],
	['??', 'X'],
	['??', 'PS'],
	['??', 'O'],
	['??', 'A'],
	['??', 'E'],
	['??', 'I'],
	['??', 'O'],
	['??', 'Y'],
	['??', 'I'],
	['??', 'O'],
	['??', 'I'],
	['??', 'Y'],

	// Disabled as it conflicts with German and Latin.
	// Hungarian
	// ['??', 'a'],
	// ['??', 'A'],
	// ['??', 'o'],
	// ['??', 'O'],
	// ['??', 'u'],
	// ['??', 'U'],
	// ['??', 'u'],
	// ['??', 'U'],

	// Latvian
	['??', 'a'],
	['??', 'e'],
	['??', 'g'],
	['??', 'i'],
	['??', 'k'],
	['??', 'l'],
	['??', 'n'],
	['??', 'u'],
	['??', 'A'],
	['??', 'E'],
	['??', 'G'],
	['??', 'I'],
	['??', 'K'],
	['??', 'L'],
	['??', 'N'],
	['??', 'U'],
	['??', 'c'],
	['??', 's'],
	['??', 'z'],
	['??', 'C'],
	['??', 'S'],
	['??', 'Z'],

	// Lithuanian
	['??', 'a'],
	['??', 'c'],
	['??', 'e'],
	['??', 'e'],
	['??', 'i'],
	['??', 's'],
	['??', 'u'],
	['??', 'u'],
	['??', 'z'],
	['??', 'A'],
	['??', 'C'],
	['??', 'E'],
	['??', 'E'],
	['??', 'I'],
	['??', 'S'],
	['??', 'U'],
	['??', 'U'],

	// Macedonian
	['??', 'Kj'],
	['??', 'kj'],
	['??', 'Lj'],
	['??', 'lj'],
	['??', 'Nj'],
	['??', 'nj'],
	['????', 'Ts'],
	['????', 'ts'],

	// Polish
	['??', 'a'],
	['??', 'c'],
	['??', 'e'],
	['??', 'l'],
	['??', 'n'],
	['??', 's'],
	['??', 'z'],
	['??', 'z'],
	['??', 'A'],
	['??', 'C'],
	['??', 'E'],
	['??', 'L'],
	['??', 'N'],
	['??', 'S'],
	['??', 'Z'],
	['??', 'Z'],

	// Disabled as it conflicts with Vietnamese.
	// Serbian
	// ['??', 'lj'],
	// ['??', 'nj'],
	// ['??', 'Lj'],
	// ['??', 'Nj'],
	// ['??', 'dj'],
	// ['??', 'Dj'],
	// ['??', 'dj'],
	// ['??', 'j'],
	// ['??', 'c'],
	// ['??', 'dz'],
	// ['??', 'Dj'],
	// ['??', 'j'],
	// ['??', 'C'],
	// ['??', 'Dz'],

	// Disabled as it conflicts with German and Latin.
	// Slovak
	// ['??', 'a'],
	// ['??', 'A'],
	// ['??', 'l'],
	// ['??', 'l'],
	// ['??', 'r'],
	// ['??', 'L'],
	// ['??', 'L'],
	// ['??', 'R'],

	// Disabled as it conflicts with German and Latin.
	// Swedish
	// ['??', 'o'],
	// ['??', 'o'],
	// ['??', 'a'],
	// ['??', 'A'],
	// ['??', 'e'],
	// ['??', 'E'],
	// ['??', 'o'],
	// ['??', 'O'],

	// Ukrainian
	['??', 'Ye'],
	['??', 'I'],
	['??', 'Yi'],
	['??', 'G'],
	['??', 'ye'],
	['??', 'i'],
	['??', 'yi'],
	['??', 'g'],

	// Dutch
	['??', 'IJ'],
	['??', 'ij'],

	// Danish
	// ['??', 'Ae'],
	// ['??', 'Oe'],
	// ['??', 'Aa'],
	// ['??', 'ae'],
	// ['??', 'oe'],
	// ['??', 'aa']

	// Currencies
	['??', 'c'],
	['??', 'Y'],
	['??', 'b'],
	['???', 't'],
	['???', 'Bo'],
	['???', 'B'],
	['???', 'CE'],
	['???', 'C'],
	['???', 'Cr'],
	['???', 'F'],
	['???', 'm'],
	['???', 'N'],
	['???', 'Pt'],
	['???', 'Rs'],
	['???', 'W'],
	['???', 's'],
	['???', 'E'],
	['???', 'K'],
	['???', 'T'],
	['???', 'Dp'],
	['???', 'S'],
	['???', 'P'],
	['???', 'G'],
	['???', 'A'],
	['???', 'S'],
	['???', 'C'],
	['???', 'tt'],
	['???', 'S'],
	['???', 'T'],
	['???', 'R'],
	['???', 'L'],
	['???', 'P'],
	['???', 'B'],
	['???', '$'],
	['???', 'c'],
	['???', 'Y'],
	['???', 'W'],

	// Latin
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'C'],
	['????', 'D'],
	['????', 'g'],
	['????', 'J'],
	['????', 'K'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'f'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'h'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],
	['????', 'A'],
	['????', 'B'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'O'],
	['????', 'P'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z'],
	['????', 'a'],
	['????', 'b'],
	['????', 'c'],
	['????', 'd'],
	['????', 'e'],
	['????', 'f'],
	['????', 'g'],
	['????', 'h'],
	['????', 'i'],
	['????', 'j'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'o'],
	['????', 'p'],
	['????', 'q'],
	['????', 'r'],
	['????', 's'],
	['????', 't'],
	['????', 'u'],
	['????', 'v'],
	['????', 'w'],
	['????', 'x'],
	['????', 'y'],
	['????', 'z'],

	// Dotless letters
	['????', 'l'],
	['????', 'j'],

	// Greek
	['????', 'A'],
	['????', 'B'],
	['????', 'G'],
	['????', 'D'],
	['????', 'E'],
	['????', 'Z'],
	['????', 'I'],
	['????', 'TH'],
	['????', 'I'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'KS'],
	['????', 'O'],
	['????', 'P'],
	['????', 'R'],
	['????', 'TH'],
	['????', 'S'],
	['????', 'T'],
	['????', 'Y'],
	['????', 'F'],
	['????', 'x'],
	['????', 'PS'],
	['????', 'O'],
	['????', 'D'],
	['????', 'a'],
	['????', 'b'],
	['????', 'g'],
	['????', 'd'],
	['????', 'e'],
	['????', 'z'],
	['????', 'i'],
	['????', 'th'],
	['????', 'i'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'ks'],
	['????', 'o'],
	['????', 'p'],
	['????', 'r'],
	['????', 's'],
	['????', 's'],
	['????', 't'],
	['????', 'y'],
	['????', 'f'],
	['????', 'x'],
	['????', 'ps'],
	['????', 'o'],
	['????', 'd'],
	['????', 'E'],
	['????', 'TH'],
	['????', 'K'],
	['????', 'f'],
	['????', 'r'],
	['????', 'p'],
	['????', 'A'],
	['????', 'V'],
	['????', 'G'],
	['????', 'D'],
	['????', 'E'],
	['????', 'Z'],
	['????', 'I'],
	['????', 'TH'],
	['????', 'I'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'KS'],
	['????', 'O'],
	['????', 'P'],
	['????', 'S'],
	['????', 'TH'],
	['????', 'S'],
	['????', 'T'],
	['????', 'Y'],
	['????', 'F'],
	['????', 'X'],
	['????', 'PS'],
	['????', 'O'],
	['????', 'D'],
	['????', 'a'],
	['????', 'v'],
	['????', 'g'],
	['????', 'd'],
	['????', 'e'],
	['????', 'z'],
	['????', 'i'],
	['????', 'th'],
	['????', 'i'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'ks'],
	['????', 'o'],
	['????', 'p'],
	['????', 'r'],
	['????', 's'],
	['????', 's'],
	['????', 't'],
	['????', 'y'],
	['????', 'f'],
	['????', 'x'],
	['????', 'ps'],
	['????', 'o'],
	['????', 'a'],
	['????', 'e'],
	['????', 'i'],
	['????', 'k'],
	['????', 'f'],
	['????', 'r'],
	['????', 'p'],
	['????', 'A'],
	['????', 'B'],
	['????', 'G'],
	['????', 'D'],
	['????', 'E'],
	['????', 'Z'],
	['????', 'I'],
	['????', 'TH'],
	['????', 'I'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'KS'],
	['????', 'O'],
	['????', 'P'],
	['????', 'R'],
	['????', 'TH'],
	['????', 'S'],
	['????', 'T'],
	['????', 'Y'],
	['????', 'F'],
	['????', 'X'],
	['????', 'PS'],
	['????', 'O'],
	['????', 'D'],
	['????', 'a'],
	['????', 'v'],
	['????', 'g'],
	['????', 'd'],
	['????', 'e'],
	['????', 'z'],
	['????', 'i'],
	['????', 'th'],
	['????', 'i'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'ks'],
	['????', 'o'],
	['????', 'p'],
	['????', 'r'],
	['????', 's'],
	['????', 's'],
	['????', 't'],
	['????', 'y'],
	['????', 'f'],
	['????', 'x'],
	['????', 'ps'],
	['????', 'o'],
	['????', 'a'],
	['????', 'e'],
	['????', 'i'],
	['????', 'k'],
	['????', 'f'],
	['????', 'r'],
	['????', 'p'],
	['????', 'A'],
	['????', 'V'],
	['????', 'G'],
	['????', 'D'],
	['????', 'E'],
	['????', 'Z'],
	['????', 'I'],
	['????', 'TH'],
	['????', 'I'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'KS'],
	['????', 'O'],
	['????', 'P'],
	['????', 'S'],
	['????', 'TH'],
	['????', 'S'],
	['????', 'T'],
	['????', 'Y'],
	['????', 'F'],
	['????', 'X'],
	['????', 'PS'],
	['????', 'O'],
	['????', 'D'],
	['????', 'av'],
	['????', 'g'],
	['????', 'd'],
	['????', 'e'],
	['????', 'z'],
	['????', 'i'],
	['????', 'i'],
	['????', 'th'],
	['????', 'i'],
	['????', 'k'],
	['????', 'l'],
	['????', 'm'],
	['????', 'n'],
	['????', 'ks'],
	['????', 'o'],
	['????', 'p'],
	['????', 'r'],
	['????', 's'],
	['????', 's'],
	['????', 't'],
	['????', 'y'],
	['????', 'f'],
	['????', 'x'],
	['????', 'ps'],
	['????', 'o'],
	['????', 'a'],
	['????', 'e'],
	['????', 'i'],
	['????', 'k'],
	['????', 'f'],
	['????', 'r'],
	['????', 'p'],
	['????', 'F'],
	['????', 'f'],
	['???', '(a)'],
	['???', '(b)'],
	['???', '(c)'],
	['???', '(d)'],
	['???', '(e)'],
	['???', '(f)'],
	['???', '(g)'],
	['???', '(h)'],
	['???', '(i)'],
	['???', '(j)'],
	['???', '(k)'],
	['???', '(l)'],
	['???', '(m)'],
	['???', '(n)'],
	['???', '(o)'],
	['???', '(p)'],
	['???', '(q)'],
	['???', '(r)'],
	['???', '(s)'],
	['???', '(t)'],
	['???', '(u)'],
	['???', '(v)'],
	['???', '(w)'],
	['???', '(x)'],
	['???', '(y)'],
	['???', '(z)'],
	['???', '(A)'],
	['???', '(B)'],
	['???', '(C)'],
	['???', '(D)'],
	['???', '(E)'],
	['???', '(F)'],
	['???', '(G)'],
	['???', '(H)'],
	['???', '(I)'],
	['???', '(J)'],
	['???', '(K)'],
	['???', '(L)'],
	['???', '(N)'],
	['???', '(O)'],
	['???', '(P)'],
	['???', '(Q)'],
	['???', '(R)'],
	['???', '(S)'],
	['???', '(T)'],
	['???', '(U)'],
	['???', '(V)'],
	['???', '(W)'],
	['???', '(X)'],
	['???', '(Y)'],
	['???', '(Z)'],
	['???', '(a)'],
	['???', '(b)'],
	['???', '(b)'],
	['???', '(c)'],
	['???', '(e)'],
	['???', '(f)'],
	['???', '(g)'],
	['???', '(h)'],
	['???', '(i)'],
	['???', '(j)'],
	['???', '(k)'],
	['???', '(l)'],
	['???', '(m)'],
	['???', '(n)'],
	['???', '(o)'],
	['???', '(p)'],
	['???', '(q)'],
	['???', '(r)'],
	['???', '(s)'],
	['???', '(t)'],
	['???', '(u)'],
	['???', '(v)'],
	['???', '(w)'],
	['???', '(x)'],
	['???', '(y)'],
	['???', '(z)'],

	// Maltese
	['??', 'C'],
	['??', 'c'],
	['??', 'G'],
	['??', 'g'],
	['??', 'H'],
	['??', 'h'],
	['??', 'Z'],
	['??', 'z'],

	// Numbers
	['????', '0'],
	['????', '1'],
	['????', '2'],
	['????', '3'],
	['????', '4'],
	['????', '5'],
	['????', '6'],
	['????', '7'],
	['????', '8'],
	['????', '9'],
	['????', '0'],
	['????', '1'],
	['????', '2'],
	['????', '3'],
	['????', '4'],
	['????', '5'],
	['????', '6'],
	['????', '7'],
	['????', '8'],
	['????', '9'],
	['????', '0'],
	['????', '1'],
	['????', '2'],
	['????', '3'],
	['????', '4'],
	['????', '5'],
	['????', '6'],
	['????', '7'],
	['????', '8'],
	['????', '9'],
	['????', '0'],
	['????', '1'],
	['????', '2'],
	['????', '3'],
	['????', '4'],
	['????', '5'],
	['????', '6'],
	['????', '7'],
	['????', '8'],
	['????', '9'],
	['????', '0'],
	['????', '1'],
	['????', '2'],
	['????', '3'],
	['????', '4'],
	['????', '5'],
	['????', '6'],
	['????', '7'],
	['????', '8'],
	['????', '9'],
	['???', '1'],
	['???', '2'],
	['???', '3'],
	['???', '4'],
	['???', '5'],
	['???', '6'],
	['???', '7'],
	['???', '8'],
	['???', '9'],
	['???', '10'],
	['???', '11'],
	['???', '12'],
	['???', '13'],
	['???', '14'],
	['???', '15'],
	['???', '16'],
	['???', '17'],
	['???', '18'],
	['???', '19'],
	['???', '20'],
	['???', '1'],
	['???', '2'],
	['???', '3'],
	['???', '4'],
	['???', '5'],
	['???', '6'],
	['???', '7'],
	['???', '8'],
	['???', '9'],
	['???', '10'],
	['???', '11'],
	['???', '12'],
	['???', '13'],
	['???', '14'],
	['???', '15'],
	['???', '16'],
	['???', '17'],
	['???', '18'],
	['???', '19'],
	['???', '20'],
	['???', '1.'],
	['???', '2.'],
	['???', '3.'],
	['???', '4.'],
	['???', '5.'],
	['???', '6.'],
	['???', '7.'],
	['???', '8.'],
	['???', '9.'],
	['???', '10.'],
	['???', '11.'],
	['???', '12.'],
	['???', '13.'],
	['???', '14.'],
	['???', '15.'],
	['???', '16.'],
	['???', '17.'],
	['???', '18.'],
	['???', '19.'],
	['???', '20.'],
	['???', '0'],
	['???', '11'],
	['???', '12'],
	['???', '13'],
	['???', '14'],
	['???', '15'],
	['???', '16'],
	['???', '17'],
	['???', '18'],
	['???', '19'],
	['???', '20'],
	['???', '1'],
	['???', '2'],
	['???', '3'],
	['???', '4'],
	['???', '5'],
	['???', '6'],
	['???', '7'],
	['???', '8'],
	['???', '9'],
	['???', '10'],
	['???', '0'],

	// Punctuation
	['????', '&'],
	['????', '&'],
	['????', '&'],
	['????', '&'],
	['????', '&'],
	['????', '&'],
	['????', '"'],
	['????', '"'],
	['????', '"'],
	['???', '?!'],
	['????', '?!'],
	['????', '?!'],
	['????', '?!'],
	['????', '/'],
	['????', '\\'],

	// Alchemy
	['????', 'AR'],
	['????', 'V'],
	['????', 'V'],
	['????', 'VR'],
	['????', 'VF'],
	['????', '2'],
	['????', '5'],
	['????', 'f'],
	['????', 'W'],
	['????', 'U'],
	['????', 'V'],
	['????', 'T'],
	['????', 'V'],
	['????', 'MB'],
	['????', 'VB'],
	['????', '3B'],
	['????', '3B'],

	// Emojis
	['????', '100'],
	['????', 'BACK'],
	['????', 'END'],
	['????', 'ON!'],
	['????', 'SOON'],
	['????', 'TOP'],
	['????', '18'],
	['????', 'abc'],
	['????', 'ABCD'],
	['????', 'abcd'],
	['????', '1234'],
	['????', 'T&@%'],
	['#??????', '#'],
	['*??????', '*'],
	['0??????', '0'],
	['1??????', '1'],
	['2??????', '2'],
	['3??????', '3'],
	['4??????', '4'],
	['5??????', '5'],
	['6??????', '6'],
	['7??????', '7'],
	['8??????', '8'],
	['9??????', '9'],
	['????', '10'],
	['???????', 'A'],
	['???????', 'B'],
	['????', 'AB'],
	['????', 'CL'],
	['???????', 'O'],
	['????', 'P'],
	['????', 'SOS'],
	['????', 'C'],
	['????', 'D'],
	['????', 'E'],
	['????', 'F'],
	['????', 'G'],
	['????', 'H'],
	['????', 'I'],
	['????', 'J'],
	['????', 'K'],
	['????', 'L'],
	['????', 'M'],
	['????', 'N'],
	['????', 'Q'],
	['????', 'R'],
	['????', 'S'],
	['????', 'T'],
	['????', 'U'],
	['????', 'V'],
	['????', 'W'],
	['????', 'X'],
	['????', 'Y'],
	['????', 'Z']
];

/* harmony default export */ __webpack_exports__["default"] = (replacements);


/***/ }),

/***/ "./node_modules/lodash.deburr/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.deburr/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('d??j?? vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.unescape/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.unescape/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(/*! lodash.unescape */ "./node_modules/lodash.unescape/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _slugify = __webpack_require__(/*! @sindresorhus/slugify */ "./node_modules/@sindresorhus/slugify/index.js");

var _slugify2 = _interopRequireDefault(_slugify);

var _overridableReplacements = __webpack_require__(/*! @sindresorhus/slugify/overridable-replacements */ "./node_modules/@sindresorhus/slugify/overridable-replacements.js");

var _overridableReplacements2 = _interopRequireDefault(_overridableReplacements);

var _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");

var _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");

var _style = __webpack_require__(/*! ./style.css */ "./src/style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultOptions = {
    autoFocus: false,
    disabled: false,
    maxlength: null,
    readonly: false,
    // some defaults may be sensible, but there might be more coming
    // https://github.com/sindresorhus/slugify/issues/7
    replaceCharacters: _overridableReplacements2.default.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            from = _ref2[0];

        return [from, ''];
    })
};

var UriPathSegment = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
    _inherits(UriPathSegment, _PureComponent);

    function UriPathSegment() {
        _classCallCheck(this, UriPathSegment);

        return _possibleConstructorReturn(this, (UriPathSegment.__proto__ || Object.getPrototypeOf(UriPathSegment)).apply(this, arguments));
    }

    _createClass(UriPathSegment, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                value = _props.value,
                className = _props.className,
                commit = _props.commit,
                options = _props.options,
                i18nRegistry = _props.i18nRegistry,
                onKeyPress = _props.onKeyPress,
                onEnterKey = _props.onEnterKey;

            // Placeholder text must be unescaped in case html entities were used

            var placeholder = options && options.placeholder && i18nRegistry.translate((0, _lodash2.default)(options.placeholder));
            var finalOptions = Object.assign({}, defaultOptions, options);

            var customReplacements = finalOptions && 'replaceCharacters' in finalOptions && _typeof(finalOptions.replaceCharacters) === 'object' ? Object.entries(finalOptions.replaceCharacters).map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    from = _ref4[0],
                    to = _ref4[1];

                return [from, i18nRegistry.translate((0, _lodash2.default)(to))];
            }) : undefined;
            var finalReplacements = [].concat(_toConsumableArray(defaultOptions.replaceCharacters), _toConsumableArray(customReplacements));

            var titleValue = options && options.title ? options.title : '';
            var slug = (0, _slugify2.default)(titleValue, { customReplacements: finalReplacements });
            var showSyncButton = !(finalOptions.readonly || finalOptions.disabled);

            return _react2.default.createElement(
                'div',
                { style: { display: 'flex' }, className: className },
                _react2.default.createElement(
                    'div',
                    { style: { flexGrow: 1 } },
                    _react2.default.createElement(_reactUiComponents.TextInput, {
                        id: id,
                        autoFocus: finalOptions.autoFocus,
                        value: value,
                        onChange: commit,
                        placeholder: placeholder,
                        onKeyPress: onKeyPress,
                        onEnterKey: onEnterKey,
                        disabled: finalOptions.disabled,
                        maxLength: finalOptions.maxlength,
                        readOnly: finalOptions.readonly
                    })
                ),
                showSyncButton ? _react2.default.createElement(
                    'div',
                    { style: { flexGrow: 0 } },
                    _react2.default.createElement(_reactUiComponents.IconButton, {
                        id: 'neos-UriPathSegmentEditor-sync',
                        size: 'regular',
                        icon: 'sync',
                        onClick: function onClick() {
                            return commit(slug);
                        },
                        className: _style2.default.syncButton,
                        style: 'neutral',
                        hoverStyle: 'clean',
                        title: i18nRegistry.translate('Neos.Neos.Ui:Main:syncUriPathSegment')
                    })
                ) : null
            );
        }
    }]);

    return UriPathSegment;
}(_react.PureComponent), _class2.propTypes = {
    className: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    commit: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.object,
    onKeyPress: _propTypes2.default.func,
    onEnterKey: _propTypes2.default.func,
    id: _propTypes2.default.string,

    i18nRegistry: _propTypes2.default.object.isRequired
}, _class2.defaultProps = {
    options: {}
}, _temp)) || _class);
exports.default = UriPathSegment;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _editor = __webpack_require__(/*! ./editor */ "./src/editor.js");

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Prgfx.Neos.NeosPathSegmentEditorFix', {}, function (globalRegistry) {
    var editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('Prgfx.Neos.NeosPathSegmentEditorFix/UriPathSegmentEditor', {
        component: _editor2.default
    });
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"syncButton":"style__syncButton___3cjXz"};

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map