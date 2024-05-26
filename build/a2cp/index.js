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

/***/ "./src/a2cp/index.js":
/*!***************************************!*\
  !*** ./src/a2cp/index.js + 8 modules ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: external [\"wp\",\"blocks\"]\nconst external_wp_blocks_namespaceObject = window[\"wp\"][\"blocks\"];\n;// CONCATENATED MODULE: ./src/a2cp/style.scss\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: external \"React\"\nconst external_React_namespaceObject = window[\"React\"];\n;// CONCATENATED MODULE: external [\"wp\",\"i18n\"]\nconst external_wp_i18n_namespaceObject = window[\"wp\"][\"i18n\"];\n;// CONCATENATED MODULE: external [\"wp\",\"blockEditor\"]\nconst external_wp_blockEditor_namespaceObject = window[\"wp\"][\"blockEditor\"];\n;// CONCATENATED MODULE: ./src/a2cp/editor.scss\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./src/a2cp/edit.js\n\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/\n */\n\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * Those files can contain any CSS code that gets applied to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * The edit function describes the structure of your block in the context of the\n * editor. This represents what the editor will render when the block is used.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit\n *\n * @return {Element} Element to render.\n */\nfunction Edit() {\n  return (0,external_React_namespaceObject.createElement)(\"p\", (0,external_wp_blockEditor_namespaceObject.useBlockProps)(), (0,external_wp_i18n_namespaceObject.__)('A2cp – hello from the editor!', 'a2cp'));\n}\n;// CONCATENATED MODULE: ./src/a2cp/block.json\nconst block_namespaceObject = /*#__PURE__*/JSON.parse('{\"$schema\":\"https://schemas.wp.org/trunk/block.json\",\"apiVersion\":3,\"name\":\"add-to-cart-pro/a2cp\",\"version\":\"0.1.0\",\"title\":\"a2cp\",\"category\":\"widgets\",\"icon\":\"smiley\",\"description\":\"Example block scaffolded with Create Block tool.\",\"example\":{},\"supports\":{\"html\":false},\"textdomain\":\"a2cp\",\"editorScript\":\"file:./index.js\",\"editorStyle\":\"file:./index.css\",\"style\":\"file:./style-index.css\",\"render\":\"file:./render.php\",\"viewScript\":\"file:./view.js\"}');\n;// CONCATENATED MODULE: ./src/a2cp/index.js\n/**\n * Registers a new block provided a unique name and an object defining its behavior.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * All files containing `style` keyword are bundled together. The code used\n * gets applied both to the front of your site and to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Every block starts by registering a new block type definition.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n(0,external_wp_blocks_namespaceObject.registerBlockType)(block_namespaceObject.name, {\n  /**\n   * @see ./edit.js\n   */\n  edit: Edit\n});\n\n//# sourceURL=webpack://enhanced-ajax-add-to-cart-wc/./src/a2cp/index.js_+_8_modules?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"a2cp/index": 0,
/******/ 			"a2cp/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkenhanced_ajax_add_to_cart_wc"] = globalThis["webpackChunkenhanced_ajax_add_to_cart_wc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["a2cp/style-index"], () => (__webpack_require__("./src/a2cp/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;