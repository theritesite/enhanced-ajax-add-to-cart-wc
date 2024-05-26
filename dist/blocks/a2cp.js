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

/***/ "./src/a2cp/edit.js":
/*!**************************!*\
  !*** ./src/a2cp/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Edit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ \"./src/a2cp/editor.scss\");\n\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/\n */\n\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * Those files can contain any CSS code that gets applied to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * The edit function describes the structure of your block in the context of the\n * editor. This represents what the editor will render when the block is used.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit\n *\n * @return {Element} Element to render.\n */\nfunction Edit() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A2cp – hello from the editor!', 'a2cp'));\n}\n\n//# sourceURL=webpack://trs/./src/a2cp/edit.js?");

/***/ }),

/***/ "./src/a2cp/index.js":
/*!***************************!*\
  !*** ./src/a2cp/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/a2cp/style.scss\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./src/a2cp/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ \"./src/a2cp/block.json\");\n/**\n * Registers a new block provided a unique name and an object defining its behavior.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * All files containing `style` keyword are bundled together. The code used\n * gets applied both to the front of your site and to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Every block starts by registering a new block type definition.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {\n  /**\n   * @see ./edit.js\n   */\n  edit: _edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://trs/./src/a2cp/index.js?");

/***/ }),

/***/ "./src/a2cp/editor.scss":
/*!******************************!*\
  !*** ./src/a2cp/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://trs/./src/a2cp/editor.scss?");

/***/ }),

/***/ "./src/a2cp/style.scss":
/*!*****************************!*\
  !*** ./src/a2cp/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://trs/./src/a2cp/style.scss?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external ["window","wp","blocks"] ***!
  \*****************************************/
/***/ ((module) => {

module.exports = window["window"]["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external ["window","wp","i18n"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = window["window"]["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "./src/a2cp/block.json":
/*!*****************************!*\
  !*** ./src/a2cp/block.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"$schema\":\"https://schemas.wp.org/trunk/block.json\",\"apiVersion\":3,\"name\":\"add-to-cart-pro/a2cp\",\"version\":\"0.1.0\",\"title\":\"a2cp\",\"category\":\"widgets\",\"icon\":\"smiley\",\"description\":\"Example block scaffolded with Create Block tool.\",\"example\":{},\"supports\":{\"html\":false},\"textdomain\":\"a2cp\",\"editorScript\":\"file:./index.js\",\"editorStyle\":\"file:./index.css\",\"style\":\"file:./style-index.css\",\"render\":\"file:./render.php\",\"viewScript\":\"file:./view.js\"}');\n\n//# sourceURL=webpack://trs/./src/a2cp/block.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/a2cp/index.js");
/******/ 	(this.trs = this.trs || {})["[modulename]"] = __webpack_exports__;
/******/ 	
/******/ })()
;