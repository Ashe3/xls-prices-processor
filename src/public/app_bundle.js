/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _listeners_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/initialize */ "./src/public/js/listeners/initialize.js");
/* harmony import */ var _dataInit_dataInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataInit/dataInit */ "./src/public/js/dataInit/dataInit.js");




var app = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_dataInit_dataInit__WEBPACK_IMPORTED_MODULE_2__.initData)();

          case 2:
            _context.next = 4;
            return (0,_listeners_initialize__WEBPACK_IMPORTED_MODULE_1__.initializeListeners)();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function app() {
    return _ref.apply(this, arguments);
  };
}();

app();

/***/ }),

/***/ "./src/public/js/dataInit/dataInit.js":
/*!********************************************!*\
  !*** ./src/public/js/dataInit/dataInit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initData": () => (/* binding */ initData),
/* harmony export */   "createRuleElement": () => (/* binding */ createRuleElement)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/public/js/helpers/apiHelper.js");
/* harmony import */ var _helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/domHelper */ "./src/public/js/helpers/domHelper.js");
/* harmony import */ var _listeners_initialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners/initialize */ "./src/public/js/listeners/initialize.js");






var loadLocal = function loadLocal() {
  var c = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: ''
  });
};

var uploadLocal = function uploadLocal() {};

var initData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var rulesList, rules, rulesElementList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rulesList = document.getElementById('set-ups');
            _context.next = 3;
            return (0,_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__.callApi)('/api/rules', 'GET');

          case 3:
            rules = _context.sent;
            rulesElementList = rules.map(createRuleElement);
            rulesList.append.apply(rulesList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rulesElementList));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initData() {
    return _ref.apply(this, arguments);
  };
}();
var createRuleElement = function createRuleElement(_ref2) {
  var name = _ref2.name,
      type = _ref2.type,
      email = _ref2.email,
      url = _ref2.url,
      id = _ref2.id;
  var element = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'li',
    attrs: {
      id: id
    }
  });
  var ruleName = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'span',
    className: 'name'
  });
  ruleName.innerText = name;
  var ruleKey = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'span',
    className: 'key'
  });
  ruleKey.innerText = type;
  var loadBtn = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: 'btn'
  });
  var inputFile = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'input',
    attrs: {
      type: 'file',
      id: 'upload-file'
    }
  });
  var inputLabel = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'label',
    attrs: {
      "for": 'upload-file'
    }
  });
  inputLabel.innerText = 'load';
  loadBtn.append(inputFile, inputLabel);
  (0,_listeners_initialize__WEBPACK_IMPORTED_MODULE_4__.addSubmitListener)(loadBtn);
  var setBtn = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: 'btn'
  });
  setBtn.innerText = 'settings';
  var sendBtn = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: "btn ".concat(url === 'true' || email === 'true' ? '' : 'non-active')
  });
  sendBtn.innerText = 'send';
  var downloadBtn = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: 'btn non-active'
  });
  downloadBtn.innerText = 'download';
  var deleteButton = (0,_helpers_domHelper__WEBPACK_IMPORTED_MODULE_3__.createElement)({
    tagName: 'div',
    className: 'btn delete'
  });
  deleteButton.innerText = 'delete';
  (0,_listeners_initialize__WEBPACK_IMPORTED_MODULE_4__.addDeleteListener)(deleteButton);
  element.append(ruleName, ruleKey, loadBtn, setBtn, sendBtn, downloadBtn, deleteButton);
  return element;
};

/***/ }),

/***/ "./src/public/js/hanlers.js":
/*!**********************************!*\
  !*** ./src/public/js/hanlers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeRule": () => (/* binding */ removeRule),
/* harmony export */   "appendRule": () => (/* binding */ appendRule),
/* harmony export */   "handleFileUpload": () => (/* binding */ handleFileUpload)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataInit_dataInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataInit/dataInit */ "./src/public/js/dataInit/dataInit.js");
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/apiHelper */ "./src/public/js/helpers/apiHelper.js");



var removeRule = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var deleted;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__.callApi)("/api/rules/".concat(id), 'DELETE');

          case 2:
            deleted = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function removeRule(_x) {
    return _ref.apply(this, arguments);
  };
}();
var appendRule = function appendRule(newRule) {
  var rulesList = document.getElementById('set-ups');
  rulesList.append((0,_dataInit_dataInit__WEBPACK_IMPORTED_MODULE_1__.createRuleElement)(newRule));
};
var handleFileUpload = function handleFileUpload(event) {
  var file = event.target.files[0];
  var node = event.target.parentNode;
  var formData = new FormData(); // node.getAttribute('id')

  formData.append('file', file);
  (0,_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_2__.callApi)("/api/static/".concat(node.getAttribute('id')), 'POST', formData);
};

/***/ }),

/***/ "./src/public/js/helpers/apiHelper.js":
/*!********************************************!*\
  !*** ./src/public/js/helpers/apiHelper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callApi": () => (/* binding */ callApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);

var URL = 'http://localhost:8080';
function callApi(_x, _x2) {
  return _callApi.apply(this, arguments);
}

function _callApi() {
  _callApi = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint, method) {
    var body,
        headers,
        url,
        options,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            headers = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
            url = URL + endpoint;
            options = {
              method: method,
              headers: headers
            };

            if (method === 'POST') {
              options.body = body;
            }

            return _context.abrupt("return", fetch(url, options).then(function (response) {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something wrong');
              }
            }).then(function (response) {
              return response;
            })["catch"](function (e) {
              return alert(e.message);
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callApi.apply(this, arguments);
}

/***/ }),

/***/ "./src/public/js/helpers/domHelper.js":
/*!********************************************!*\
  !*** ./src/public/js/helpers/domHelper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var createElement = function createElement(_ref) {
  var tagName = _ref.tagName,
      className = _ref.className,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? {} : _ref$attrs;
  var element = document.createElement(tagName);

  if (className) {
    var _element$classList;

    var classNames = className.split(' ').filter(Boolean);

    (_element$classList = element.classList).add.apply(_element$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(classNames));
  }

  Object.keys(attrs).forEach(function (key) {
    return element.setAttribute(key, attrs[key]);
  });
  return element;
};

/***/ }),

/***/ "./src/public/js/listeners/initialize.js":
/*!***********************************************!*\
  !*** ./src/public/js/listeners/initialize.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeListeners": () => (/* binding */ initializeListeners),
/* harmony export */   "addDeleteListener": () => (/* binding */ addDeleteListener),
/* harmony export */   "addSubmitListener": () => (/* binding */ addSubmitListener)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/public/js/helpers/apiHelper.js");
/* harmony import */ var _hanlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hanlers */ "./src/public/js/hanlers.js");



var initializeListeners = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var deleteBtns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initModal();
            deleteBtns = document.getElementsByClassName('delete');
            Array.from(deleteBtns).forEach(addDeleteListener);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initializeListeners() {
    return _ref.apply(this, arguments);
  };
}();

function submitForm(_x) {
  return _submitForm.apply(this, arguments);
}

function _submitForm() {
  _submitForm = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(formComponent) {
    var name, type, email, url, newRuleData, newRule;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = formComponent.elements.name.value;
            type = formComponent.elements.type.value;
            email = formComponent.elements.email.checked;
            url = formComponent.elements.url.checked;
            newRuleData = {
              name: name,
              type: type,
              email: email,
              url: url
            };
            _context3.next = 7;
            return (0,_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_1__.callApi)('/api/rules', 'POST', new URLSearchParams(newRuleData), {
              'Content-Type': 'application/x-www-form-urlencoded'
            });

          case 7:
            newRule = _context3.sent;
            (0,_hanlers__WEBPACK_IMPORTED_MODULE_2__.appendRule)(newRule.rule);
            formComponent.reset();

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _submitForm.apply(this, arguments);
}

;

var initModal = function initModal() {
  var modal = document.getElementById('modal');
  var openModal = document.getElementById('o-modal');
  var closeModal = document.getElementsByClassName('close')[0];
  var submitButton = document.getElementById('send');
  var formComponent = document.getElementById('create-handler');
  openModal.addEventListener('click', function () {
    return modal.style.display = 'block';
  });
  closeModal.addEventListener('click', function () {
    return modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  submitButton.addEventListener('click', function () {
    submitForm(formComponent);
    modal.style.display = 'none';
  });
};

var addDeleteListener = function addDeleteListener(element) {
  element.addEventListener('click', /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var node;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              node = event.target.parentNode;
              _context2.next = 3;
              return (0,_hanlers__WEBPACK_IMPORTED_MODULE_2__.removeRule)(node.getAttribute('id'));

            case 3:
              node.remove();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var addSubmitListener = function addSubmitListener(element) {
  element.addEventListener('change', function (event) {
    (0,_hanlers__WEBPACK_IMPORTED_MODULE_2__.handleFileUpload)(event);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/public/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3hscy1wcmljZXMtcHJvY2Vzc29yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9zcmMvcHVibGljL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci8uL3NyYy9wdWJsaWMvanMvZGF0YUluaXQvZGF0YUluaXQuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9zcmMvcHVibGljL2pzL2hhbmxlcnMuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3IvLi9zcmMvcHVibGljL2pzL2hlbHBlcnMvYXBpSGVscGVyLmpzIiwid2VicGFjazovL3hscy1wcmljZXMtcHJvY2Vzc29yLy4vc3JjL3B1YmxpYy9qcy9oZWxwZXJzL2RvbUhlbHBlci5qcyIsIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci8uL3NyYy9wdWJsaWMvanMvbGlzdGVuZXJzL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3hscy1wcmljZXMtcHJvY2Vzc29yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veGxzLXByaWNlcy1wcm9jZXNzb3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly94bHMtcHJpY2VzLXByb2Nlc3Nvci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5TGlrZVRvQXJyYXkiLCJyZXF1aXJlIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiaXNBcnJheSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiT2JqZWN0IiwiZnJvbSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIlR5cGVFcnJvciIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJuIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0ZXN0IiwiYXBwIiwiaW5pdERhdGEiLCJpbml0aWFsaXplTGlzdGVuZXJzIiwibG9hZExvY2FsIiwiYyIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwidXBsb2FkTG9jYWwiLCJydWxlc0xpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FsbEFwaSIsInJ1bGVzIiwicnVsZXNFbGVtZW50TGlzdCIsIm1hcCIsImNyZWF0ZVJ1bGVFbGVtZW50IiwiYXBwZW5kIiwidHlwZSIsImVtYWlsIiwidXJsIiwiaWQiLCJlbGVtZW50IiwiYXR0cnMiLCJydWxlTmFtZSIsImlubmVyVGV4dCIsInJ1bGVLZXkiLCJsb2FkQnRuIiwiaW5wdXRGaWxlIiwiaW5wdXRMYWJlbCIsImFkZFN1Ym1pdExpc3RlbmVyIiwic2V0QnRuIiwic2VuZEJ0biIsImRvd25sb2FkQnRuIiwiZGVsZXRlQnV0dG9uIiwiYWRkRGVsZXRlTGlzdGVuZXIiLCJyZW1vdmVSdWxlIiwiZGVsZXRlZCIsImFwcGVuZFJ1bGUiLCJuZXdSdWxlIiwiaGFuZGxlRmlsZVVwbG9hZCIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibm9kZSIsInBhcmVudE5vZGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0QXR0cmlidXRlIiwiVVJMIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsIm9wdGlvbnMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiRXJyb3IiLCJlIiwiYWxlcnQiLCJtZXNzYWdlIiwiY2xhc3NOYW1lcyIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImNsYXNzTGlzdCIsImFkZCIsImtleXMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiaW5pdE1vZGFsIiwiZGVsZXRlQnRucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdWJtaXRGb3JtIiwiZm9ybUNvbXBvbmVudCIsImVsZW1lbnRzIiwiY2hlY2tlZCIsIm5ld1J1bGVEYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwicnVsZSIsInJlc2V0IiwibW9kYWwiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwic3VibWl0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUFxQztBQUNuQyxNQUFJQSxHQUFHLElBQUksSUFBUCxJQUFlQSxHQUFHLEdBQUdELEdBQUcsQ0FBQ0UsTUFBN0IsRUFBcUNELEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxNQUFWOztBQUVyQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLElBQUksR0FBRyxJQUFJQyxLQUFKLENBQVVKLEdBQVYsQ0FBdkIsRUFBdUNFLENBQUMsR0FBR0YsR0FBM0MsRUFBZ0RFLENBQUMsRUFBakQsRUFBcUQ7QUFDbkRDLFFBQUksQ0FBQ0QsQ0FBRCxDQUFKLEdBQVVILEdBQUcsQ0FBQ0csQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FBT0MsSUFBUDtBQUNEOztBQUVERSxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLGlCQUFqQixDOzs7Ozs7Ozs7O0FDVkEsSUFBSVMsZ0JBQWdCLEdBQUdD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V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXBwX2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUxpc3RlbmVycyB9IGZyb20gJy4vbGlzdGVuZXJzL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgaW5pdERhdGEgfSBmcm9tICcuL2RhdGFJbml0L2RhdGFJbml0JztcblxuY29uc3QgYXBwID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBpbml0RGF0YSgpO1xuICBhd2FpdCBpbml0aWFsaXplTGlzdGVuZXJzKCk7XG59XG5cbmFwcCgpOyIsImltcG9ydCB7IGNhbGxBcGkgfSBmcm9tIFwiLi4vaGVscGVycy9hcGlIZWxwZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9oZWxwZXJzL2RvbUhlbHBlcic7XG5pbXBvcnQgeyBhZGREZWxldGVMaXN0ZW5lciwgYWRkU3VibWl0TGlzdGVuZXIgfSBmcm9tIFwiLi4vbGlzdGVuZXJzL2luaXRpYWxpemVcIjtcblxuY29uc3QgbG9hZExvY2FsID0gKCkgPT4ge1xuICBjb25zdCBjID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICcnIH0pO1xufVxuXG5jb25zdCB1cGxvYWRMb2NhbCA9ICgpID0+IHtcblxufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJ1bGVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdXBzJyk7XG5cbiAgY29uc3QgcnVsZXMgPSBhd2FpdCBjYWxsQXBpKCcvYXBpL3J1bGVzJywgJ0dFVCcpO1xuICBjb25zdCBydWxlc0VsZW1lbnRMaXN0ID0gcnVsZXMubWFwKGNyZWF0ZVJ1bGVFbGVtZW50KTtcblxuICBydWxlc0xpc3QuYXBwZW5kKC4uLnJ1bGVzRWxlbWVudExpc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJ1bGVFbGVtZW50ID0gKHsgbmFtZSwgdHlwZSwgZW1haWwsIHVybCwgaWQgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdsaScsIGF0dHJzOiB7IGlkIH0gfSk7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZTogJ3NwYW4nLCBjbGFzc05hbWU6ICduYW1lJyB9KTtcbiAgcnVsZU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcblxuICBjb25zdCBydWxlS2V5ID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdzcGFuJywgY2xhc3NOYW1lOiAna2V5JyB9KTtcbiAgcnVsZUtleS5pbm5lclRleHQgPSB0eXBlO1xuXG4gIGNvbnN0IGxvYWRCdG4gPSBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ2J0bicgfSk7XG4gIGNvbnN0IGlucHV0RmlsZSA9IGNyZWF0ZUVsZW1lbnQoe3RhZ05hbWU6ICdpbnB1dCcsIGF0dHJzOiB7dHlwZTogJ2ZpbGUnLCBpZDogJ3VwbG9hZC1maWxlJ319KTtcbiAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoe3RhZ05hbWU6ICdsYWJlbCcsIGF0dHJzOiB7Zm9yOiAndXBsb2FkLWZpbGUnfX0pO1xuICBpbnB1dExhYmVsLmlubmVyVGV4dCA9ICdsb2FkJztcbiAgbG9hZEJ0bi5hcHBlbmQoaW5wdXRGaWxlLCBpbnB1dExhYmVsKTtcbiAgYWRkU3VibWl0TGlzdGVuZXIobG9hZEJ0bik7XG5cbiAgY29uc3Qgc2V0QnRuID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICdidG4nIH0pO1xuICBzZXRCdG4uaW5uZXJUZXh0ID0gJ3NldHRpbmdzJztcblxuICBjb25zdCBzZW5kQnRuID0gY3JlYXRlRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBjbGFzc05hbWU6IGBidG4gJHt1cmwgPT09ICd0cnVlJyB8fCBlbWFpbCA9PT0gJ3RydWUnID8gJycgOiAnbm9uLWFjdGl2ZSd9YCB9KTtcbiAgc2VuZEJ0bi5pbm5lclRleHQgPSAnc2VuZCc7XG5cbiAgY29uc3QgZG93bmxvYWRCdG4gPSBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ2J0biBub24tYWN0aXZlJyB9KTtcbiAgZG93bmxvYWRCdG4uaW5uZXJUZXh0ID0gJ2Rvd25sb2FkJztcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ2J0biBkZWxldGUnIH0pO1xuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ2RlbGV0ZSc7XG4gIGFkZERlbGV0ZUxpc3RlbmVyKGRlbGV0ZUJ1dHRvbik7XG5cbiAgZWxlbWVudC5hcHBlbmQocnVsZU5hbWUsIHJ1bGVLZXksIGxvYWRCdG4sIHNldEJ0biwgc2VuZEJ0biwgZG93bmxvYWRCdG4sIGRlbGV0ZUJ1dHRvbik7XG4gIHJldHVybiBlbGVtZW50O1xufTsiLCJpbXBvcnQgeyBjcmVhdGVSdWxlRWxlbWVudCB9IGZyb20gXCIuL2RhdGFJbml0L2RhdGFJbml0XCI7XG5pbXBvcnQgeyBjYWxsQXBpIH0gZnJvbSBcIi4vaGVscGVycy9hcGlIZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVJ1bGUgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGNhbGxBcGkoYC9hcGkvcnVsZXMvJHtpZH1gLCAnREVMRVRFJyk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRSdWxlID0gKG5ld1J1bGUpID0+IHtcbiAgY29uc3QgcnVsZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldC11cHMnKTtcbiAgcnVsZXNMaXN0LmFwcGVuZChjcmVhdGVSdWxlRWxlbWVudChuZXdSdWxlKSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gIGNvbnN0IHsgcGFyZW50Tm9kZTogbm9kZSB9ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAvLyBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKVxuICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgY2FsbEFwaShgL2FwaS9zdGF0aWMvJHtub2RlLmdldEF0dHJpYnV0ZSgnaWQnKX1gLCAnUE9TVCcsIGZvcm1EYXRhKTtcbn1cbiIsImNvbnN0IFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbEFwaShlbmRwb2ludCwgbWV0aG9kLCBib2R5ID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICBjb25zdCB1cmwgPSBVUkwgKyBlbmRwb2ludDtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVycyxcbiAgfTtcblxuICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBvcHRpb25zLmJvZHkgPSBib2R5O1xuICB9XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucylcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdyb25nJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxuICAgIC5jYXRjaChlID0+IGFsZXJ0KGUubWVzc2FnZSkpO1xufSIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHt0YWdOYW1lLCBjbGFzc05hbWUsIGF0dHJzID0ge319KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIH1cbiAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goa2V5ID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSkpO1xuICByZXR1cm4gZWxlbWVudDtcbn0iLCJpbXBvcnQgeyBjYWxsQXBpIH0gZnJvbSAnLi4vaGVscGVycy9hcGlIZWxwZXInO1xuaW1wb3J0IHsgYXBwZW5kUnVsZSwgcmVtb3ZlUnVsZSwgaGFuZGxlRmlsZVVwbG9hZCB9IGZyb20gJy4uL2hhbmxlcnMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUxpc3RlbmVycyA9IGFzeW5jICgpID0+IHtcbiAgaW5pdE1vZGFsKCk7XG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUnKTtcblxuICBBcnJheS5mcm9tKGRlbGV0ZUJ0bnMpLmZvckVhY2goYWRkRGVsZXRlTGlzdGVuZXIpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0Rm9ybShmb3JtQ29tcG9uZW50KSB7XG4gIGNvbnN0IHsgdmFsdWU6IG5hbWUgfSA9IGZvcm1Db21wb25lbnQuZWxlbWVudHMubmFtZTtcbiAgY29uc3QgeyB2YWx1ZTogdHlwZSB9ID0gZm9ybUNvbXBvbmVudC5lbGVtZW50cy50eXBlO1xuICBjb25zdCB7IGNoZWNrZWQ6IGVtYWlsIH0gPSBmb3JtQ29tcG9uZW50LmVsZW1lbnRzLmVtYWlsO1xuICBjb25zdCB7IGNoZWNrZWQ6IHVybCB9ID0gZm9ybUNvbXBvbmVudC5lbGVtZW50cy51cmw7XG5cbiAgY29uc3QgbmV3UnVsZURhdGEgPSB7IG5hbWUsIHR5cGUsIGVtYWlsLCB1cmwgfTtcblxuICBjb25zdCBuZXdSdWxlID0gYXdhaXQgY2FsbEFwaSgnL2FwaS9ydWxlcycsICdQT1NUJywgbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXdSdWxlRGF0YSksIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0pO1xuICBhcHBlbmRSdWxlKG5ld1J1bGUucnVsZSk7XG4gIGZvcm1Db21wb25lbnQucmVzZXQoKTtcbn07XG5cbmNvbnN0IGluaXRNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ28tbW9kYWwnKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF07XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kJyk7XG4gIGNvbnN0IGZvcm1Db21wb25lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWhhbmRsZXInKTtcblxuICBvcGVuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN1Ym1pdEZvcm0oZm9ybUNvbXBvbmVudCk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRGVsZXRlTGlzdGVuZXIgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBwYXJlbnROb2RlOiBub2RlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgYXdhaXQgcmVtb3ZlUnVsZShub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgbm9kZS5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU3VibWl0TGlzdGVuZXIgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICBoYW5kbGVGaWxlVXBsb2FkKGV2ZW50KTtcbiAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3B1YmxpYy9qcy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9