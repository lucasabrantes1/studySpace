/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dobrar.js":
/*!*******************!*\
  !*** ./dobrar.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dobrar)\n/* harmony export */ });\nfunction dobrar(num) {\n  return num * 2;\n}\n\n//# sourceURL=webpack://conhecendoEUtilizandoOBabel/./dobrar.js?");

/***/ }),

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ quadrado),\n/* harmony export */   \"metade\": () => (/* binding */ metade),\n/* harmony export */   \"MEUPI\": () => (/* binding */ MEUPI)\n/* harmony export */ });\nfunction quadrado(num) {\n  return num * num;\n}\nfunction metade(num) {\n  return num / 2;\n}\nvar MEUPI = 3.145678;\n\n//# sourceURL=webpack://conhecendoEUtilizandoOBabel/./funcoes.js?");

/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"soma\": () => (/* binding */ soma),\n/* harmony export */   \"subtracao\": () => (/* binding */ subtracao)\n/* harmony export */ });\nfunction soma(num1, num2) {\n  return num1 + num2;\n}\nfunction subtracao(n1, n2) {\n  return n1 - n2;\n}\n\n//# sourceURL=webpack://conhecendoEUtilizandoOBabel/./helper.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./helper.js\");\n/* harmony import */ var _dobrar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dobrar */ \"./dobrar.js\");\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\n\n\n\nconsole.log((0,_helper__WEBPACK_IMPORTED_MODULE_0__.soma)(40, 2));\nconsole.log((0,_helper__WEBPACK_IMPORTED_MODULE_0__.subtracao)(82, 40));\nconsole.log((0,_dobrar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(8));\nconsole.log((0,_funcoes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(7));\nconsole.log((0,_funcoes__WEBPACK_IMPORTED_MODULE_2__.metade)(8));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_2__.MEUPI);\nconsole.log(_helper__WEBPACK_IMPORTED_MODULE_0__.soma(5, 9));\nconsole.log(_helper__WEBPACK_IMPORTED_MODULE_0__.subtracao(9, 4));\n\n//# sourceURL=webpack://conhecendoEUtilizandoOBabel/./main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;