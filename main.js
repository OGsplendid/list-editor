/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _widget_Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widget/Widget */ "./src/components/widget/Widget.js");
/* harmony import */ var _popup_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/Popup */ "./src/components/popup/Popup.js");



class App {
  constructor(element) {
    this.element = element;
    this.productsArray = [];

    this.popup = new _popup_Popup__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('.popup'));
    this.widget = new _widget_Widget__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.widget'));
  }

  addProduct(product) {
    this.productsArray.push(product);
  }

  renderTable() {
    if (this.popup.data) {
      this.productsArray.push(this.popup._data);
    }
    for (const item of this.productsArray) {
      for (const key in item) {
        const html = this.widget.createHTML(key, item[key]);
        this.widget.addToTable(html);
      }
    }
  }
}


/***/ }),

/***/ "./src/components/popup/Popup.js":
/*!***************************************!*\
  !*** ./src/components/popup/Popup.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
class Popup {
  constructor(element) {
    this.element = element;
    this.data = null;

    this.cancelButton = this.element.querySelector('.cancel-button');

    this.createDataRow = this.createDataRow.bind(this);
    this.cancelAdding = this.cancelAdding.bind(this);

    this.element.addEventListener('submit', this.createDataRow);
    this.cancelButton.addEventListener('click', this.cancelAdding);
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  createDataRow(e) {
    e.preventDefault();

    const name = this.element.querySelector('.input-name').value;
    const price = this.element.querySelector('.input-price').value;

    const clearedName = name.trim();
    const clearedPrice = parseInt(price.trim(), 10);

    if (!Popup.dataIsValid(clearedName, clearedPrice)) {
      return;
    }
    this.element.reset();
    this.element.classList.add('hidden');
    this.data = {
      name: clearedName,
      price: clearedPrice,
    };
  }

  static dataIsValid(name, price) {
    if (name.length === 0 || Number.isNaN(price)) {
      return false;
    }
    return true;
  }

  cancelAdding(e) {
    e.preventDefault();
    this.element.reset();
    this.element.classList.add('hidden');
  }
}


/***/ }),

/***/ "./src/components/widget/Widget.js":
/*!*****************************************!*\
  !*** ./src/components/widget/Widget.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Widget; }
/* harmony export */ });
class Widget {
  constructor(element) {
    this.element = element;
    this.addButton = this.element.querySelector('.create');

    this.showPopup = this.showPopup.bind(this);
    this.addButton.addEventListener('click', this.showPopup);
  }

  static createHTML(name, price) {
    return `
      <li class="product">
        <div class="name">${name}</div>
        <div class="price">${price}</div>
        <div class="tools">
          <div class="update">\\</div>
          <div class="delete">x</div>
        </div>
      </li>
    `;
  }

  static addToTable(html) {
    const list = document.querySelector('.products');
    list.insertAdjacentHTML('beforeend', html);
  }

  showPopup() {
    this.element.closest('.application').querySelector('.popup').classList.remove('hidden');
  }
}


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/App/App */ "./src/components/App/App.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



const app = new _components_App_App__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.application'));
app.renderTable();

}();
/******/ })()
;
//# sourceMappingURL=main.js.map