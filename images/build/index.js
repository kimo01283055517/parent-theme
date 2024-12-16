/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Search {
  constructor() {
    this.btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn');
    this.div = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner');
    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay');
    this.search_btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search');
    this.close_btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close');
    this.input = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.input-container input');
    this.searchContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search_content');
    this.timeOut;
    this.event();
  }
  event() {
    this.btn.on('click', this.showOverlay.bind(this));
    this.close_btn.on('click', this.hideOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', this.openAndColseByKeyBord.bind(this));
    this.input.on('keyup', this.inputsearchevent.bind(this));
  }
  inputsearchevent(e) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      const data = jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(`http://localhost/kimo/wp-json/wp/v2/posts?search='${this.input.val()}'`).then(thedate => {
        console.log(thedate[0].title.rendered);
        this.searchContent.html(this.showTheResult(thedate));
      });
    }, 2000);
  }
  showTheResult(data) {
    return `${data.map(resulte => {
      return `<h1> <a href="${resulte.link}">${resulte.title.rendered}</a></h1>`;
    })}`;
  }
  openAndColseByKeyBord(e) {
    if (e.keyCode == 83) {
      this.showOverlay();
    }
    if (e.keyCode == 27) {
      this.hideOverlay();
    }
  }
  showOverlay() {
    this.overlay.addClass('active');
  }
  hideOverlay() {
    this.overlay.removeClass('active');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _scripts_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/search */ "./src/scripts/search.js");


const search = new _scripts_search__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map