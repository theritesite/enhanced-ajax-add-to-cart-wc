/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@woocommerce/settings/build-module/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@woocommerce/settings/build-module/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_URL: () => (/* binding */ ADMIN_URL),
/* harmony export */   COUNTRIES: () => (/* binding */ COUNTRIES),
/* harmony export */   CURRENCY: () => (/* binding */ CURRENCY),
/* harmony export */   DEFAULT_DATE_RANGE: () => (/* binding */ DEFAULT_DATE_RANGE),
/* harmony export */   LOCALE: () => (/* binding */ LOCALE),
/* harmony export */   ORDER_STATUSES: () => (/* binding */ ORDER_STATUSES),
/* harmony export */   SITE_TITLE: () => (/* binding */ SITE_TITLE),
/* harmony export */   WC_ASSET_URL: () => (/* binding */ WC_ASSET_URL),
/* harmony export */   getSetting: () => (/* binding */ getSetting)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaults = {
  adminUrl: '',
  countries: [],
  currency: {
    code: 'USD',
    precision: 2,
    symbol: '$',
    symbolPosition: 'left',
    decimalSeparator: '.',
    priceFormat: '%1$s%2$s',
    thousandSeparator: ','
  },
  defaultDateRange: 'period=month&compare=previous_year',
  locale: {
    siteLocale: 'en_US',
    userLocale: 'en_US',
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  orderStatuses: [],
  siteTitle: '',
  wcAssetUrl: ''
};
var globalSharedSettings = (typeof wcSharedSettings === "undefined" ? "undefined" : (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(wcSharedSettings)) === 'object' ? wcSharedSettings : {}; // Use defaults or global settings, depending on what is set.

var allSettings = _objectSpread({}, defaults, {}, globalSharedSettings);

allSettings.currency = _objectSpread({}, defaults.currency, {}, allSettings.currency);
allSettings.locale = _objectSpread({}, defaults.locale, {}, allSettings.locale);
var ADMIN_URL = allSettings.adminUrl;
var COUNTRIES = allSettings.countries;
var CURRENCY = allSettings.currency;
var LOCALE = allSettings.locale;
var ORDER_STATUSES = allSettings.orderStatuses;
var SITE_TITLE = allSettings.siteTitle;
var WC_ASSET_URL = allSettings.wcAssetUrl;
var DEFAULT_DATE_RANGE = allSettings.defaultDateRange;
function getSetting(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (allSettings.hasOwnProperty(name)) {
    return allSettings[name];
  }

  return fallback;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/a2cp/a2cp-editor.jsx":
/*!**********************************!*\
  !*** ./src/a2cp/a2cp-editor.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A2cpEditor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/a2cp/editor.scss");
/* harmony import */ var _common_a2c_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/a2c-control */ "./src/common/a2c-control.jsx");
/* harmony import */ var _common_product_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/product-control */ "./src/common/product-control/index.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */







function A2cpEditor(attributes) {
  const {
    contentOrder,
    setAttributes,
    products
  } = attributes;
  const [list, setList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const [selectedComponent, setSelectedComponent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  const [editItem, setEditItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)('default');
  const onDone = () => {
    setAttributes({
      editMode: false
    });
    // debouncedSpeak(
    //     __(
    //         'Showing AJAX Add to Cart block preview.',
    //         'enhanced-ajax-add-to-cart-wc'
    //     )
    // );
  };
  const getItemControls = (item, index) => {
    const {
      contentVisibility,
      buttonText,
      quantity,
      titleAction,
      titleType
    } = attributes;
    const itemClassList = contentVisibility[item] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
    const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      key: index,
      className: itemClassList,
      onClick: e => {
        setSelectedComponent(item);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "dashicons dashicons-menu-alt3"
    }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_common_a2c_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      onChange: value => {
        const temp = JSON.parse(JSON.stringify(contentVisibility));
        temp[item] = value;
        setAttributes({
          contentVisibility: temp
        });
      },
      value: contentVisibility[item],
      item: item
    }), item === 'title' && (selectedComponent !== 'title' || selectedComponent === 'title' && editItem !== 'title') ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component btn-cmp",
      onClick: e => {
        setEditItem('title');
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "edit-component"
    }, "edit title")) : '', item === 'title' && selectedComponent === 'title' && editItem === 'title' ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, isVariableProduct() === false ? '' : (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "edit-component"
    }, "title text"), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RadioControl, {
      className: "trs-radio-cmp",
      selected: titleType,
      options: [{
        label: 'Full',
        value: 'full'
      }, {
        label: 'Base',
        value: 'base'
      }, {
        label: 'Attributes',
        value: 'att'
      }],
      onChange: titleType => {
        setAttributes({
          titleType
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("hr", null)), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.CheckboxControl, {
      className: "trs-checkbox",
      heading: "Link?",
      checked: titleAction === 'link',
      onChange: titleAction => {
        setAttributes({
          titleAction: titleAction === true ? 'link' : ''
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        setEditItem('none');
      }
    }, "done")) : '', item === 'button' && (selectedComponent !== 'button' || selectedComponent === 'button' && editItem !== 'button') ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component btn-cmp",
      onClick: e => {
        setEditItem('button');
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "edit-component"
    }, "edit text")) : '', item === 'button' && selectedComponent === 'button' && editItem === 'button' ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component input-area btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "display-edit-title"
    }, "button text:"), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
      type: "text",
      name: "button-text",
      onChange: e => {
        setAttributes({
          buttonText: e.target.value
        });
      },
      placeholder: buttonText,
      value: buttonText,
      className: "button-text input-text"
    }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        setEditItem('default');
      }
    }, "done")) : '', item === 'quantity' && selectedComponent !== 'quantity' || item === 'quantity' && selectedComponent === 'quantity' && editItem === 'none' ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "preview-text",
      onClick: e => {
        setEditItem('default');
      }
    }, "edit"), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('default');
      }
    }, "default: ", quantity['default'])), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('min');
      }
    }, "min: ", quantity['min']), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('max');
      }
    }, "max: ", quantity['max']))) : '', item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "qty-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        editItem === 'default' ? setEditItem('') : setEditItem('default');
      },
      className: editItem === 'default' ? 'selected' : ''
    }, "default: ", quantity['default']))), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "qty-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        editItem === 'min' ? setEditItem('') : setEditItem('min');
      },
      className: editItem === 'min' ? 'selected' : ''
    }, "min: ", quantity['min'])), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "qty-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        editItem === 'max' ? setEditItem('') : setEditItem('max');
      },
      className: editItem === 'max' ? 'selected' : ''
    }, "max: ", quantity['max'])))), editItem !== false && editItem !== '' ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "edit-component input-area"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: "display-edit-title"
    }, tempItem, ": "), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
      type: "number",
      name: tempItem + "-quantity",
      onChange: e => {
        const temp = JSON.parse(JSON.stringify(quantity));
        temp[tempItem] = e.target.value;
        setAttributes({
          quantity: temp
        });
      },
      placeholder: quantity[tempItem],
      value: quantity[tempItem],
      className: "input-text qty text " + tempItem + "-quantity"
    }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      onClick: e => {
        setEditItem('none');
      }
    }, "done")) : '') : '');
  };
  const isVariableProduct = () => {
    const {
      products
    } = attributes;
    return products.some(prod => prod.type === 'variation' || prod.type === 'variable');
  };
  const getItems = () => {
    const {
      contentOrder
    } = attributes;
    const items = contentOrder.map((item, index) => ({
      id: item,
      component: getItemControls(item, index)
    }));
    return items;
  };
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const items = reorder(contentOrder, result.source.index, result.destination.index);
    setAttributes({
      contentOrder: items
    });
  };
  const displayControls = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.DragDropContext, {
      onDragEnd: onDragEnd
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      role: "listbox",
      className: "trs-display-controls"
    }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.Droppable, {
      droppableId: "droppable",
      direction: "horizontal"
    }, droppableProvided => (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: droppableProvided.innerRef
    }, droppableProvided.droppableProps, {
      // {...droppableProvided.dragHandleProps}
      className: "trs-options-wrapper"
    }), getItems().map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_9__.Draggable, {
      key: item.id,
      draggableId: item.id,
      disableInteractiveElementBlocking: false,
      index: index
    }, draggableProvided => (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "trs-wrapper",
      "aria-label": "toggle " + item.id + " component",
      ref: draggableProvided.innerRef
    }, draggableProvided.draggableProps, draggableProvided.dragHandleProps), item.component))), droppableProvided.placeholder))));
  };
  const onChangeSelected = (newSelected = []) => {
    setAttributes({
      products: newSelected
    });
  };
  const onListRequest = (newList = []) => {
    setList(newList);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('AJAX Add to Cart button', 'enhanced-ajax-add-to-cart-wc'),
    className: "a2cp-block-placeholder"
  }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "a2cp-block"
  }, displayControls(), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_common_product_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: attributes.products,
    onChange: onChangeSelected,
    onListRequest: onListRequest,
    multiple: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: onDone
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Done', 'enhanced-ajax-add-to-cart-wc'))));
}

/***/ }),

/***/ "./src/a2cp/a2cp-inspector.jsx":
/*!*************************************!*\
  !*** ./src/a2cp/a2cp-inspector.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A2cpInspector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/a2cp/editor.scss");
/* harmony import */ var _common_a2c_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/a2c-control */ "./src/common/a2c-control.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */






function A2cpInspector(attributes) {
  const {
    contentOrder,
    setAttributes
  } = attributes;
  const [selectedComponent, setSelectedComponent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [editItem, setEditItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('default');
  const isVariableProduct = () => {
    const {
      products
    } = attributes;
    return products.some(prod => prod.type === 'variation' || prod.type === 'variable');
  };
  const getItemInspectorControls = (item, index) => {
    const {
      contentVisibility,
      buttonText,
      quantity,
      titleAction,
      titleType
    } = attributes;
    const itemClassList = contentVisibility[item] === true ? 'trs-inner-wrapper' : 'trs-inner-wrapper disabled-item';
    const tempItem = editItem !== 'min' && editItem !== 'max' ? 'default' : editItem;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: itemClassList,
      onClick: e => {
        setSelectedComponent(item);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_a2c_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      onChange: value => {
        const temp = JSON.parse(JSON.stringify(contentVisibility));
        temp[item] = value;
        setAttributes({
          contentVisibility: temp
        });
      },
      value: contentVisibility[item],
      item: item,
      title: false
    }), item === 'title' && (selectedComponent !== 'title' || selectedComponent === 'title' && editItem !== 'title') ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp",
      onClick: e => {
        setEditItem('title');
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "edit-component"
    }, "edit title")) : '', item === 'title' && selectedComponent === 'title' && editItem === 'title' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, isVariableProduct() === false ? '' : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "edit-component"
    }, "title text"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
      className: "trs-radio-cmp",
      selected: titleType,
      options: [{
        label: 'Full',
        value: 'full'
      }, {
        label: 'Base',
        value: 'base'
      }, {
        label: 'Attributes',
        value: 'att'
      }],
      onChange: titleType => {
        setAttributes({
          titleType
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.CheckboxControl, {
      className: "trs-checkbox",
      heading: "Link?",
      checked: titleAction === 'link',
      onChange: titleAction => {
        setAttributes({
          titleAction: titleAction === true ? 'link' : ''
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: e => {
        setEditItem('none');
      }
    }, "done")) : '', item === 'button' && (selectedComponent !== 'button' || selectedComponent === 'button' && editItem !== 'button') ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp",
      onClick: e => {
        setEditItem('button');
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "edit-component"
    }, "edit text")) : '', item === 'button' && selectedComponent === 'button' && editItem === 'button' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component input-area btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "display-edit-title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "preview-text "
    }, "button text:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "button-text",
      onChange: e => {
        setAttributes({
          buttonText: e.target.value
        });
      },
      placeholder: buttonText,
      value: buttonText,
      className: "button-text input-text"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: e => {
        setEditItem('default');
      }
    }, "done"))) : '', item === 'quantity' && selectedComponent !== 'quantity' || item === 'quantity' && selectedComponent === 'quantity' && editItem === 'none' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "preview-text",
      onClick: e => {
        setEditItem('default');
      }
    }, "edit"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('default');
      }
    }, "default: ", quantity['default'])), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('min');
      }
    }, "min: ", quantity['min']), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "preview-text",
      onClick: e => {
        setEditItem('max');
      }
    }, "max: ", quantity['max']))) : '', item === 'quantity' && selectedComponent === 'quantity' && editItem !== 'none' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component btn-cmp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      isPrimary: true,
      isPressed: true,
      onClick: e => {
        editItem === 'default' ? setEditItem('') : setEditItem('default');
      }
    }, "Default"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      isPrimary: true,
      onClick: e => {
        editItem === 'min' ? setEditItem('') : setEditItem('min');
      }
    }, "Min"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      isPrimary: true,
      onClick: e => {
        editItem === 'max' ? setEditItem('') : setEditItem('max');
      }
    }, "Max"))), editItem !== false && editItem !== '' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-component input-area"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "display-edit-title"
    }, tempItem, ":", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: tempItem + "-quantity",
      onChange: e => {
        const temp = JSON.parse(JSON.stringify(quantity));
        temp[tempItem] = e.target.value;
        setAttributes({
          quantity: temp
        });
      },
      placeholder: quantity[tempItem],
      value: quantity[tempItem],
      className: "input-text qty text " + tempItem + "-quantity"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: e => {
        setEditItem('none');
      }
    }, "done"))) : '') : '');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content', 'enhanced-ajax-add-to-cart-wc'),
    className: "a2cp-content-container",
    initialOpen: true
  }, contentOrder.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, {
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "content-element ",
      htmlFor: "content-order-form-" + item
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(lodash__WEBPACK_IMPORTED_MODULE_7___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_7___default().lowerCase(item)), 'enhanced-ajax-add-to-cart-wc')), getItemInspectorControls(item, index));
  })));
}

/***/ }),

/***/ "./src/a2cp/a2cp-mockup.jsx":
/*!**********************************!*\
  !*** ./src/a2cp/a2cp-mockup.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A2cpMockup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/a2cp/editor.scss");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_formatting_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/formatting/price */ "./src/common/formatting/price.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



function A2cpMockup(attributes, className) {
  const {
    buttonText,
    contentVisibility,
    contentOrder,
    products,
    quantity,
    titleType
  } = attributes;
  let customClass = '';
  if (__webpack_require__.g.A2C && __webpack_require__.g.A2C.customClass !== undefined && __webpack_require__.g.A2C.customClass.length > 0) {
    let customClassSetting = __webpack_require__.g.A2C.customClass;
    customClass = customClassSetting.replace(/(<([^>]+)>)/ig, "");
  }
  if (products[0]) {
    if (products[0].id > 0) {
      const product = products[0];
      const title = product[titleType];
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "add-to-cart-pro " + className + " " + customClass
      }, contentOrder.map((item, index) => {
        if (item === 'title' && contentVisibility[item] === true) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            key: index,
            className: "ea-line ea-text"
          }, title);
        } else if (item === 'price' && contentVisibility[item] === true) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            key: index,
            className: "ea-line ea-text"
          }, (0,_common_formatting_price__WEBPACK_IMPORTED_MODULE_4__.formatPrice)(product['price']));
        } else if (item === 'quantity') {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            key: index,
            className: "ea-line quantity-container"
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "quantity"
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
            type: "number",
            id: product.id,
            className: "input-text qty text",
            step: 1,
            defaultValue: quantity['default'],
            min: quantity['min'],
            max: quantity['max'],
            name: 'quantity',
            title: 'quantity',
            hidden: !contentVisibility[item]
          })));
        } else if (item === 'separator' && contentVisibility[item] === true) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            key: index,
            className: "ea-line"
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            className: "ea-separator"
          }));
        } else if (item === 'button' && contentVisibility[item] === true) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
            key: index + "_" + item,
            type: "submit",
            className: "a2cp_button button alt",
            "data-pid": product.parent_id > 0 ? product.parent_id : product.id,
            "data-vid": product.id
          }, buttonText);
        }
      }));
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "no-product-found"
  }, "no product found");
}

/***/ }),

/***/ "./src/a2cp/edit.jsx":
/*!***************************!*\
  !*** ./src/a2cp/edit.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/a2cp/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _a2cp_inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./a2cp-inspector */ "./src/a2cp/a2cp-inspector.jsx");
/* harmony import */ var _a2cp_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./a2cp-editor */ "./src/a2cp/a2cp-editor.jsx");
/* harmony import */ var _a2cp_mockup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a2cp-mockup */ "./src/a2cp/a2cp-mockup.jsx");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */








/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  className
}) {
  const renderEditMode = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_a2cp_editor__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      setAttributes: setAttributes
    }));
  };
  const renderViewMode = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_a2cp_mockup__WEBPACK_IMPORTED_MODULE_9__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      className: className
    }));
  };
  const {
    editMode
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)(), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
    label: "Edit mode"
  }, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarButton, {
    icon: 'edit',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit'),
    onClick: () => setAttributes({
      editMode: !editMode
    }),
    isActive: editMode
  }))), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_a2cp_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    setAttributes: setAttributes
  })), editMode ? renderEditMode() : (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Disabled, null, renderViewMode()));
}

/***/ }),

/***/ "./src/a2cp/index.js":
/*!***************************!*\
  !*** ./src/a2cp/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/a2cp/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/a2cp/edit.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/a2cp/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  title: 'AJAX Add to Cart Block',
  icon: 'cart',
  category: 'widgets',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Non-redirect add to cart button wherever you want!', 'enhanced-ajax-add-to-cart-wc'),
  supports: {
    html: false,
    align: true
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/common/a2c-control.jsx":
/*!************************************!*\
  !*** ./src/common/a2c-control.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */



// wc.wcSettings.getSetting('isLargeCatalog');
// import { Spinner, MenuItem } from '@wordpress/components';

/**
 * The products control exposes a custom selector for searching and selecting
 * products.
 *
 * @param {Object} props Component props.
 * @param {Function} props.onChange  Callback fired when the selected item changes
 * @param {Function} props.onSearch  Callback fired when a search is triggered
 * @param {Array}    props.selected  An array of selected products.
 * @param {Array}    props.products  An array of products to select from.
 * @param {boolean}  props.isLoading Whether or not the products are being loaded.
 *
 * @return {Function} A functional component.
 */
const A2CControl = ({
  error,
  onChange,
  item,
  value,
  title
}) => {
  if (error) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "error ", error.status);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "trs-toggle-container"
  }, title === false ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-component trs-toggle-label"
  }, "display?") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "trs-toggle-label"
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_2___default().lowerCase(item))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: value,
    onChange: onChange,
    className: "trs-toggle",
    role: "checkbox",
    "aria-label": lodash__WEBPACK_IMPORTED_MODULE_2___default().startCase(lodash__WEBPACK_IMPORTED_MODULE_2___default().lowerCase(item)) + " toggle switch",
    "aria-describedby": "This button will toggle if the element is visible"
  }));
};
A2CControl.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  item: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
A2CControl.defaultProps = {
  isLoading: true,
  value: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A2CControl);

/***/ }),

/***/ "./src/common/api/index.js":
/*!*********************************!*\
  !*** ./src/common/api/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGetUrlWithNonce: () => (/* binding */ createGetUrlWithNonce),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   products: () => (/* binding */ products),
/* harmony export */   settings: () => (/* binding */ settings),
/* harmony export */   variations: () => (/* binding */ variations)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/common/api/request.js");
/**
 * Internal dependencies
 */

const namespace = 'eaa2c/v1/';
const wc_namespace = 'wc/v3/';
const products = () => `${wc_namespace}products`;
// export const productImage = () => `${ wc_namespace }product-image/${ product.ID }?type=${ attribute.image }`
const variations = () => `${wc_namespace}products/${product.ID}/variations`;
const settings = () => `${namespace}settings`;
const handleError = jsonError => {
  if (jsonError.data.message) {
    throw jsonError.data.message;
  }
  throw JSON.stringify(jsonError);
};
const post = (url, data) => (0,_request__WEBPACK_IMPORTED_MODULE_0__["default"])().post(url, data).catch(handleError);
const get = url => (0,_request__WEBPACK_IMPORTED_MODULE_0__["default"])().get(url).catch(handleError);
const createGetUrlWithNonce = (url, queryString) => (0,_request__WEBPACK_IMPORTED_MODULE_0__["default"])().createGetUrlWithNonce(url, queryString);

/***/ }),

/***/ "./src/common/api/request.js":
/*!***********************************!*\
  !*** ./src/common/api/request.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getBaseURL: () => (/* binding */ getBaseURL),
/* harmony export */   getNonce: () => (/* binding */ getNonce),
/* harmony export */   setBaseURL: () => (/* binding */ setBaseURL),
/* harmony export */   setNonce: () => (/* binding */ setNonce)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_parse_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parse-json */ "./src/common/utils/parse-json.js");
/**
 * External dependencies
 */
// import { translate as __ } from 'i18n-calypso';


/**
 * Internal dependencies
 */

let nonce;
const setNonce = _nonce => nonce = _nonce;
const getNonce = () => nonce;
let baseURL;
const setBaseURL = _baseURL => baseURL = _baseURL;
const getBaseURL = () => baseURL;
const _request = (url, data, method, namespace = '') => {
  const request = {
    method,
    credentials: 'same-origin',
    headers: {
      'X-WP-Nonce': nonce,
      'Content-Type': 'application/json'
    }
  };
  if (data) {
    request.body = JSON.stringify(data);
  }
  if (namespace && !namespace.endsWith('/')) {
    namespace += '/';
  }
  if (-1 !== baseURL.indexOf('?')) {
    url = url.replace('?', '&');
  }
  return fetch(baseURL + namespace + url, request).then(response => {
    return (0,_utils_parse_json__WEBPACK_IMPORTED_MODULE_1__["default"])(response).then(json => {
      if (json.success) {
        return json;
      }
      if ('rest_cookie_invalid_nonce' === json.code) {
        window.persistState = true;
        alert('There was a problem saving your settings. Please try again after the page is reloaded.');
        location.reload();
        return;
      }
      throw json;
    });
  });
};
const createGetUrlWithNonce = (url, queryString) => {
  if (queryString) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.startsWith)(queryString, '?')) {
      queryString = queryString.substring(1);
    }
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.startsWith)(queryString, '&')) {
      queryString = '&' + queryString;
    }
  }
  const queryStart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.endsWith)(baseURL, 'index.php?rest_route=/') ? '&' : '?';
  return `${baseURL}${url}${queryStart}_wpnonce=${nonce}${queryString}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => ({
  post: (url, data, namespace) => _request(url, data, 'POST', namespace),
  get: (url, namespace) => _request(url, null, 'GET', namespace),
  createGetUrlWithNonce
}));

/***/ }),

/***/ "./src/common/formatting/html.js":
/*!***************************************!*\
  !*** ./src/common/formatting/html.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createValidHtml: () => (/* binding */ createValidHtml)
/* harmony export */ });
const createValidHtml = ({
  inputHtml
}) => {
  if (inputHtml.length) {
    var html = inputHtml;
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";
    return text;
  } else {
    console.error("Error in creating 'valid' html.");
    return '(no title can display. Error? Check console.)';
  }
};

/***/ }),

/***/ "./src/common/formatting/price.js":
/*!****************************************!*\
  !*** ./src/common/formatting/price.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* binding */ formatPrice)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ "./node_modules/@woocommerce/settings/build-module/index.js");
/**
 * External dependencies
 */



/**
 * Format a price with currency data.
 *
 * @param {number} value Number to format.
 * @param {string} priceFormat  Price format string.
 * @param {string} currencySymbol Currency symbol.
 */
const formatPrice = (value, priceFormat = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.CURRENCY.priceFormat, currencySymbol = _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.CURRENCY.symbol) => {
  const formattedNumber = parseInt(value, 10);
  if (!isFinite(formattedNumber)) {
    return '';
  }
  const formattedValue = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(priceFormat, currencySymbol, formattedNumber);

  // This uses a textarea to magically decode HTML currency symbols.
  const txt = document.createElement('textarea');
  txt.innerHTML = formattedValue;
  return txt.value;
};

/***/ }),

/***/ "./src/common/formatting/title.js":
/*!****************************************!*\
  !*** ./src/common/formatting/title.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTitle: () => (/* binding */ createTitle)
/* harmony export */ });
const createTitle = ({
  product = [],
  variation = [],
  titleType = 'full'
}) => {
  const parentName = product.name;
  var varName = '';
  if (variation && parentName && titleType !== 'base') {
    if (variation.attributes) {
      varName = '' + variation.attributes.map(attribute => " " + attribute.option);
    }
    if (parentName && varName && titleType === 'full') {
      return parentName + ' - ' + varName;
    } else if (varName && titleType === 'att') {
      return varName;
    } else {
      if (product) {
        if (!parentName) {
          return "Error: product name is null";
        }
        return "Error: Variation attributes are null";
      }
    }
  } else if (product) {
    if (parentName) {
      return parentName;
    } else {
      return "Error: product name is null";
    }
  } else {
    return 'Error: product is null';
  }
};

/***/ }),

/***/ "./src/common/hierarchy.js":
/*!*********************************!*\
  !*** ./src/common/hierarchy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTermsTree: () => (/* binding */ buildTermsTree)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Returns terms in a tree form.
 *
 * @param {Array} filteredList  Array of terms, possibly a subset of all terms, in flat format.
 * @param {Array} list  Array of the full list of terms, defaults to the filteredList.
 *
 * @return {Array} Array of terms in tree format.
 */
function buildTermsTree(filteredList, list = filteredList) {
  const termsByParent = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(filteredList, 'parent');
  const listById = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(list, 'id');
  const getParentsName = (term = {}) => {
    if (!term.parent) {
      return term.name ? [term.name] : [];
    }
    const parentName = getParentsName(listById[term.parent]);
    return [...parentName, term.name];
  };
  const fillWithChildren = terms => {
    return terms.map(term => {
      const children = termsByParent[term.id];
      delete termsByParent[term.id];
      return {
        ...term,
        breadcrumbs: getParentsName(listById[term.parent]),
        children: children && children.length ? fillWithChildren(children) : []
      };
    });
  };
  const tree = fillWithChildren(termsByParent['0'] || []);
  delete termsByParent['0'];

  // anything left in termsByParent has no visible parent
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(termsByParent, terms => {
    tree.push(...fillWithChildren(terms || []));
  });
  return tree;
}

/***/ }),

/***/ "./src/common/icons/back.jsx":
/*!***********************************!*\
  !*** ./src/common/icons/back.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C7781",
    d: "M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" /* eslint-disable-line max-len */
  }))
}));

/***/ }),

/***/ "./src/common/icons/checkbox-checked.jsx":
/*!***********************************************!*\
  !*** ./src/common/icons/checkbox-checked.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#1E8CBE",
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /* eslint-disable-line max-len */
  }))
}));

/***/ }),

/***/ "./src/common/icons/checkbox-unchecked.jsx":
/*!*************************************************!*\
  !*** ./src/common/icons/checkbox-unchecked.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C7781",
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }))
}));

/***/ }),

/***/ "./src/common/icons/index.js":
/*!***********************************!*\
  !*** ./src/common/icons/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconBack: () => (/* reexport safe */ _back__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   IconCheckChecked: () => (/* reexport safe */ _checkbox_checked__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   IconCheckUnchecked: () => (/* reexport safe */ _checkbox_unchecked__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   IconRadioSelected: () => (/* reexport safe */ _radio_selected__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   IconRadioUnselected: () => (/* reexport safe */ _radio_unselected__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _checkbox_checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-checked */ "./src/common/icons/checkbox-checked.jsx");
/* harmony import */ var _checkbox_unchecked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-unchecked */ "./src/common/icons/checkbox-unchecked.jsx");
/* harmony import */ var _radio_selected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-selected */ "./src/common/icons/radio-selected.jsx");
/* harmony import */ var _radio_unselected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-unselected */ "./src/common/icons/radio-unselected.jsx");
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back */ "./src/common/icons/back.jsx");
// Export each icon as a named component.






/***/ }),

/***/ "./src/common/icons/radio-selected.jsx":
/*!*********************************************!*\
  !*** ./src/common/icons/radio-selected.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#1E8CBE",
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /* eslint-disable-line max-len */
  }))
}));

/***/ }),

/***/ "./src/common/icons/radio-unselected.jsx":
/*!***********************************************!*\
  !*** ./src/common/icons/radio-unselected.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#6C7781",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /* eslint-disable-line max-len */
  }))
}));

/***/ }),

/***/ "./src/common/product-control/index.jsx":
/*!**********************************************!*\
  !*** ./src/common/product-control/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/common/product-control/view.jsx");
/* harmony import */ var _state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/reducer */ "./src/common/product-control/state/reducer.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/local-storage */ "./src/common/utils/local-storage.js");
/* harmony import */ var _utils_local_api_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/local-api-middleware */ "./src/common/utils/local-api-middleware.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/actions */ "./src/common/product-control/state/actions.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/request */ "./src/common/api/request.js");










// const { registerGenericStore } = wp.data;


class ProductControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.store = null;
    this.createdStores = {};
    this.reduxStore = null;
    this.state = {
      products: [],
      variations: {}
    };
    const createdStores = this.createdStores;
    const routeClassName = 'eaa2c-product-control';
    const args = {
      products: [],
      variations: {}
    };
    if (typeof createdStores[routeClassName] === 'undefined') {
      const persistedStateKey = routeClassName;
      const persistedState = _utils_local_storage__WEBPACK_IMPORTED_MODULE_5__.getWithExpiry(persistedStateKey);
      const {
        selected
      } = props;
      // storageUtils.remove( persistedStateKey );
      const serverState = {
        ..._state_reducer__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULT_STATE,
        selected
      };
      const initialState = {
        ...serverState,
        ...persistedState
      };
      const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"].withExtraArgument(args), _utils_local_api_middleware__WEBPACK_IMPORTED_MODULE_6__["default"]];
      const enhancers = [(0,redux__WEBPACK_IMPORTED_MODULE_11__.applyMiddleware)(...middlewares)].filter(Boolean);
      const store = (0,redux__WEBPACK_IMPORTED_MODULE_11__.compose)(...enhancers)(redux__WEBPACK_IMPORTED_MODULE_11__.createStore)(_state_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
      const mappedActions = Object.keys(_state_actions__WEBPACK_IMPORTED_MODULE_7__).reduce((acc, actionKey) => {
        acc[actionKey] = (...args) => store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__[actionKey](...args));
        return acc;
      }, {});
      const genericStore = {
        getSelectors() {
          return {};
        },
        getActions() {
          return mappedActions;
        },
        subscribe: store.subscribe
      };
      const genStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.registerGenericStore)(persistedStateKey, genericStore);
      createdStores[routeClassName] = genStore;
      this.store = genStore;
      this.reduxStore = store;
      // console.log( "at the end of store -- store: " );
      // console.log( store );
    }
  }
  componentDidMount() {
    const routeClassName = 'eaa2c-product-control';
    const persistedStateKey = routeClassName;
    // const persistedState = storageUtils.getWithExpiry( persistedStateKey );
    // storageUtils.remove( persistedStateKey );
    const {
      selected
    } = this.props;
    const dispatch = this.reduxStore.dispatch;
    // console.log( "ProductControl did mount, going through dispatch now." );
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchProductsIfNeeded(selected, '', []));
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    const state = this.reduxStore.getState();
    const {
      products,
      variations
    } = state;
    const persistedStateKey = 'eaa2c-product-control';
    // console.log( "this is in before unload -- state: " );
    // console.log( state );
    // console.log( "this is in before unload -- props: " );
    // console.log( this.props );

    // if ( window.persistState ) {
    // storageUtils.setWithExpiry( persistedStateKey, { products, variations } );
    // storageUtils.setWithExpiry( persistedStateKey, state );
    // console.log( "window.persistState is true and using storageUtils");
    // console.log( storageUtils.getWithExpiry( persistedStateKey ) );
    // }
    // console.log( "this is unmounting" );
  }
  render() {
    const {
      onChange,
      selected,
      multiple,
      onListRequest
    } = this.props;
    const {
      products,
      variations
    } = this.state;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
      store: this.reduxStore
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
      selected: selected,
      onChange: onChange,
      multiple: multiple,
      dispatch: this.reduxStore.dispatch,
      products: products,
      variations: variations,
      onListRequest: onListRequest
    }));
  }
}

/***/ }),

/***/ "./src/common/product-control/search-list-control.jsx":
/*!************************************************************!*\
  !*** ./src/common/product-control/search-list-control.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchListControl: () => (/* binding */ SearchListControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gridicons */ "./node_modules/gridicons/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/actions */ "./src/common/product-control/state/actions.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/local-storage */ "./src/common/utils/local-storage.js");
/* harmony import */ var _hierarchy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hierarchy */ "./src/common/hierarchy.js");
/* harmony import */ var _search_list_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-list-item */ "./src/common/product-control/search-list-item.jsx");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tag */ "./src/common/tag.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons */ "./src/common/icons/index.js");

/**
 * External dependencies
 */












/**
 * Internal dependencies
 */





const defaultMessages = {
  clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear all selected items', 'woocommerce-admin'),
  list: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Results', 'woocommerce-admin'),
  noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No items found.', 'woocommerce-admin'),
  noResults: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results for %s', 'woocommerce-admin'),
  search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search for items', 'woocommerce-admin'),
  selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('%d item selected', '%d items selected', n, 'woocommerce-admin'), n),
  updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search results updated.', 'woocommerce-admin')
};

/**
 * Component to display a searchable, selectable list of items.
 */
class SearchListControl extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      oldList: [],
      currentProduct: {}
    };
    this.transitionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRef)();
    this.transitionRef2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRef)();
    this.backOne = this.backOne.bind(this);
    this.resetLists = this.resetLists.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onClear = this.onClear.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.defaultRenderItem = this.defaultRenderItem.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  componentDidUpdate(prevProps) {
    const {
      onSearch,
      search,
      products,
      variations,
      selected
    } = this.props;
    const persistedStateKey = 'eaa2c-product-control';
    if (search !== prevProps.search && typeof onSearch === 'function') {
      onSearch(search);
    }
    if (products !== prevProps.products && products.length > 0) {
      _utils_local_storage__WEBPACK_IMPORTED_MODULE_8__.setWithExpiry(persistedStateKey, {
        products,
        variations
      });
    }
    if (variations !== prevProps.variations && Object.keys(variations).length > 0) {
      _utils_local_storage__WEBPACK_IMPORTED_MODULE_8__.setWithExpiry(persistedStateKey, {
        products,
        variations
      });
    }
  }
  componentDidMount() {}
  onRemove(item) {
    const {
      isSingle,
      onChange,
      selected,
      dispatch
    } = this.props;
    const id = item.id;
    return () => {
      // console.log( "executing onremove with id: " + id );
      if (this.isSelected(item)) {
        // console.log( "item is selected, continuing to remove." );
        const i = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.findIndex)(selected, {
          id
        });
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.removeSelected(item));
        if (isSingle) {
          onChange([]);
        } else {
          // console.log( "index: " + i );
          // console.log( selected );
          // console.log( "id: " + id );
          onChange([...selected.slice(0, i), ...selected.slice(i + 1)]);
        }
      }
    };
  }
  onSelect(item) {
    const {
      isSingle,
      onChange,
      selected,
      dispatch
    } = this.props;
    // console.log( "in onSelect" );
    return () => {
      if (this.isSelected(item) && item.type !== 'variable') {
        // console.log( "calling remove" );
        this.onRemove(item)();
        if (item.type === 'variation') {
          if (isSingle) {
            this.backOne();
          }
        }
        return;
      }
      if (item.type === 'variable') {
        this.setState({
          currentProduct: item
        });
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchVariationsIfNeeded(item, selected, '', []));
        // this.setState({ oldList: list });
        // this.renderList( list )
        // console.log( "it is a variable" );
      } else if (item.type === 'variation') {
        // console.log( "adding item to selected list as the variation has been clicked." );
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.setSelected(item, isSingle));
        if (isSingle) {
          onChange([item]);
        } else {
          onChange([...selected, item]);
        }
        // dispatch(ProductControlActions.fetchProductsIfNeeded( selected, '', [] ));
        // dispatch( ProductControlActions.switchToProducts() );
        if (isSingle) {
          this.backOne();
        }
      } else {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.setSelected(item, isSingle));
        if (isSingle) {
          // console.log( "adding item to selected list" );
          // console.log( item );
          onChange([item]);
          // selected = [ ...selected, item ];
          // onChange( [ item ] );
        } else {
          onChange([...selected, item]);
        }
        // console.log( "it is not a variable product type" );
      }
    };
  }
  onClear() {
    this.props.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.removeAllSelected());
    this.props.onChange([]);
  }
  isSelected(item) {
    if (item.type === 'variable') {
      return this.props.selected.some(prod => /*{ return( */item.children.includes(prod.id) /*) }*/);
    } else {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.findIndex)(this.props.selected, {
        id: item.id
      }) !== -1;
    }
  }
  getFilteredList(list, search) {
    const {
      isHierarchical
    } = this.props;
    if (!search) {
      return isHierarchical ? (0,_hierarchy__WEBPACK_IMPORTED_MODULE_9__.buildTermsTree)(list) : list;
    }
    const messages = {
      ...defaultMessages,
      ...this.props.messages
    };
    const re = new RegExp((0,lodash__WEBPACK_IMPORTED_MODULE_5__.escapeRegExp)(search), 'i');
    this.props.debouncedSpeak(messages.updated);
    const filteredList = list.map(item => re.test(item.name) ? item : false).filter(Boolean);
    return isHierarchical ? (0,_hierarchy__WEBPACK_IMPORTED_MODULE_9__.buildTermsTree)(filteredList, list) : filteredList;
  }
  defaultRenderItem(args) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_item__WEBPACK_IMPORTED_MODULE_10__["default"], args);
  }
  renderList(list, depth = 0) {
    const {
      isSingle,
      search
    } = this.props;
    const renderItem = this.props.renderItem || this.defaultRenderItem;
    if (!list) {
      return null;
    }
    return list.map(item => item.type !== 'variable' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      key: item.id
    }, renderItem({
      item,
      isSelected: this.isSelected(item),
      onSelect: this.onSelect,
      isSingle,
      search,
      depth
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      key: item.id
    }, renderItem({
      item,
      isSelected: this.isSelected(item),
      onSelect: this.onSelect,
      isSingle,
      search,
      depth
    }), item.children && item.children.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: this.onSelect(item),
      className: "holder-container woocommerce-search-list__list woocommerce-search-list__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        minWidth: "35px"
      }
    }), item.children.length, " options to choose from...") : ''));
  }
  backOne() {
    const {
      dispatch
    } = this.props;
    this.setState({
      currentProduct: {}
    });
    return dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.switchToProducts());
  }
  resetLists() {
    const {
      dispatch
    } = this.props;
    const persistedStateKey = 'eaa2c-product-control';
    _utils_local_storage__WEBPACK_IMPORTED_MODULE_8__.remove(persistedStateKey);
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.clearLists());
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchProductsIfNeeded());
    return;
  }
  renderRefetchList() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "search-product-reset",
      onClick: this.resetLists
    }, "Products not up to date? ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, "Refresh!"));
  }
  renderListItemHeader(product) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
      onClick: this.backOne,
      icon: "dashicons-arrow-left-alt",
      role: "columnheader",
      className: "is-back-button components-button components-icon-button woocommerce-search-list__title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "woocommerce-search-list__item-state",
      "aria-label": "Back to previous list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_12__.IconBack, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "woocommerce-search-list__label search-list-header"
    }, "Choosing variation for ", product.name, "..."));
  }
  renderListSection(currList = undefined) {
    const {
      isLoading,
      search
    } = this.props;
    const messages = {
      ...defaultMessages,
      ...this.props.messages
    };
    const {
      currentProduct
    } = this.state;
    if (isLoading && (currList === undefined || currList && currList < 1)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
        label: messages.list,
        className: "woocommerce-search-list__list slider-container"
      }, currentProduct && Object.keys(currentProduct).length > 0 ? this.renderListItemHeader(currentProduct) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "woocommerce-search-list__list is-loading"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)));
    }
    var list = currList && currList.length > 0 ? currList : this.props.list;
    list = this.getFilteredList(list, search);
    if (!list.length && list !== currList) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
        label: messages.list,
        className: "woocommerce-search-list__list slider-container"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "woocommerce-search-list__list is-not-found"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "woocommerce-search-list__not-found-icon"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(gridicons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "notice-outline",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "woocommerce-search-list__not-found-text"
      }, search ?
      // eslint-disable-next-line @wordpress/valid-sprintf
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(messages.noResults, search) : messages.noItems)));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
      label: messages.list,
      className: "woocommerce-search-list__list"
    }, currentProduct && Object.keys(currentProduct).length > 0 && list !== currList ? this.renderListItemHeader(currentProduct) : '', this.renderList(list));
  }
  renderSelectedSection() {
    const {
      isSingle,
      selected
    } = this.props;
    const messages = {
      ...defaultMessages,
      ...this.props.messages
    };
    if (isSingle || !selected) {
      return null;
    }
    const selectedCount = selected.length;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-search-list__selected"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-search-list__selected-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, messages.selected(selectedCount)), selectedCount > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isLink: true,
      isDestructive: true,
      onClick: this.onClear,
      "aria-label": messages.clear
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear all', 'woocommerce-admin')) : null), selected.map((item, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tag__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: i,
      label: item.name,
      id: item.id,
      item: item,
      remove: this.onRemove
    })));
  }
  render() {
    const {
      className = '',
      search,
      setState,
      list,
      isLoading
    } = this.props;
    const messages = {
      ...defaultMessages,
      ...this.props.messages
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `woocommerce-search-list ${className}`
    }, this.renderSelectedSection(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-search-list__search remove-margins"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: messages.search,
      type: "search",
      value: search,
      onChange: value => setState({
        search: value
      })
    }), list && !isLoading ? this.renderRefetchList() : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: "slider-group"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_14__["default"], {
      nodeRef: this.transitionRef,
      timeout: 500,
      in: false,
      appear: false,
      enter: false,
      exit: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: this.transitionRef,
      className: "slider-container"
    }, this.renderListSection(this.props.products))), (this.state.currentProduct && this.state.currentProduct.id > 0 && this.props.products && this.props.products.length > 0) === false ? '' : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_14__["default"], {
      nodeRef: this.transitionRef2,
      in: true,
      timeout: 500,
      appear: true,
      enter: true,
      exit: true,
      classNames: "slider"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: this.transitionRef2,
      className: "slider-container"
    }, this.renderListSection()))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-placeholder"
    }));
  }
}
SearchListControl.propTypes = {
  /**
   * Additional CSS classes.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
  /**
   * Whether the list of items is hierarchical or not. If true, each list item is expected to
   * have a parent property.
   */
  isHierarchical: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  /**
   * Whether the list of items is still loading.
   */
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  /**
   * Restrict selections to one item.
   */
  isSingle: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  /**
   * A complete list of item objects, each with id, name properties. This is displayed as a
   * clickable/keyboard-able list, and possibly filtered by the search term (searches name).
   */
  list: prop_types__WEBPACK_IMPORTED_MODULE_15___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_15___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().number),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string)
  })),
  /**
   * Messages displayed or read to the user. Configure these to reflect your object type.
   * See `defaultMessages` above for examples.
   */
  messages: prop_types__WEBPACK_IMPORTED_MODULE_15___default().shape({
    /**
     * A more detailed label for the "Clear all" button, read to screen reader users.
     */
    clear: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
    /**
     * Label for the list of selectable items, only read to screen reader users.
     */
    list: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
    /**
     * Message to display when the list is empty (implies nothing loaded from the server
     * or parent component).
     */
    noItems: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
    /**
     * Message to display when no matching results are found. %s is the search term.
     */
    noResults: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
    /**
     * Label for the search input
     */
    search: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
    /**
     * Label for the selected items. This is actually a function, so that we can pass
     * through the count of currently selected items.
     */
    selected: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
    /**
     * Label indicating that search results have changed, read to screen reader users.
     */
    updated: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string)
  }),
  /**
   * Callback fired when selected items change, whether added, cleared, or removed.
   * Passed an array of item objects (as passed in via props.list).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func).isRequired,
  /**
   * Callback fired when the search field is used.
   */
  onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  /**
   * Callback to render each item in the selection list, allows any custom object-type rendering.
   */
  renderItem: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  /**
   * The list of currently selected items.
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().array).isRequired,
  // from withState
  search: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
  setState: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  // from withSpokenMessages
  debouncedSpeak: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  // from withInstanceId
  instanceId: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withState)({
  search: ''
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withSpokenMessages, _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId])(SearchListControl));

/***/ }),

/***/ "./src/common/product-control/search-list-item.jsx":
/*!*********************************************************!*\
  !*** ./src/common/product-control/search-list-item.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./src/common/icons/index.js");


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

function getHighlightedName(name, search) {
  if (!search) {
    return name;
  }
  const re = new RegExp((0,lodash__WEBPACK_IMPORTED_MODULE_2__.escapeRegExp)(search), 'ig');
  return name.replace(re, '<strong>$&</strong>');
}
function getBreadcrumbsForDisplay(breadcrumbs) {
  if (breadcrumbs.length === 1) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.first)(breadcrumbs);
  }
  if (breadcrumbs.length === 2) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.first)(breadcrumbs) + ' › ' + (0,lodash__WEBPACK_IMPORTED_MODULE_2__.last)(breadcrumbs);
  }
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.first)(breadcrumbs) + ' … ' + (0,lodash__WEBPACK_IMPORTED_MODULE_2__.last)(breadcrumbs);
}
const getInteractionIcon = (isSingle = false, isSelected = false) => {
  if (isSingle) {
    return isSelected ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_4__.IconRadioSelected, null) : (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_4__.IconRadioUnselected, null);
  }
  return isSelected ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_4__.IconCheckChecked, null) : (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_4__.IconCheckUnchecked, null);
};
const SearchListItem = ({
  countLabel,
  className,
  depth = 0,
  item,
  isSelected,
  isSingle,
  onSelect,
  search = '',
  showCount = false,
  ...props
}) => {
  const classes = [className, 'woocommerce-search-list__item'];
  classes.push(`depth-${depth}`);
  if (isSingle) {
    classes.push('is-radio-button');
  }
  const hasBreadcrumbs = item.breadcrumbs && item.breadcrumbs.length;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: isSingle ? 'menuitemradio' : 'menuitemcheckbox',
    className: classes.join(' '),
    onClick: onSelect(item),
    isSelected: isSelected
  }, props), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "woocommerce-search-list__item-state"
  }, getInteractionIcon(isSingle, isSelected)), (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "woocommerce-search-list__item-label"
  }, hasBreadcrumbs ? (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "woocommerce-search-list__item-prefix"
  }, getBreadcrumbsForDisplay(item.breadcrumbs)) : null, (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "woocommerce-search-list__item-name",
    dangerouslySetInnerHTML: {
      __html: getHighlightedName(item.name, search)
    }
  })), !!showCount && (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "woocommerce-search-list__item-count"
  }, countLabel || item.count));
};
SearchListItem.propTypes = {
  /**
   * Additional CSS classes.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  /**
   * Label to display if `showCount` is set to true. If undefined, it will use `item.count`.
   */
  countLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  /**
   * Depth, non-zero if the list is hierarchical.
   */
  depth: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  /**
   * Current item to display.
   */
  item: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  /**
   * Whether this item is selected.
   */
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  /**
   * Whether this should only display a single item (controls radio vs checkbox icon).
   */
  isSingle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  /**
   * Callback for selecting the item.
   */
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  /**
   * Search string, used to highlight the substring in the item name.
   */
  search: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  /**
   * Toggles the "count" bubble on/off.
   */
  showCount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchListItem);

/***/ }),

/***/ "./src/common/product-control/state/actions.js":
/*!*****************************************************!*\
  !*** ./src/common/product-control/state/actions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_LISTS: () => (/* binding */ CLEAR_LISTS),
/* harmony export */   FETCH_PRODUCTS: () => (/* binding */ FETCH_PRODUCTS),
/* harmony export */   FETCH_VARIATIONS: () => (/* binding */ FETCH_VARIATIONS),
/* harmony export */   GET_PRODUCTS: () => (/* binding */ GET_PRODUCTS),
/* harmony export */   GET_VARIATIONS: () => (/* binding */ GET_VARIATIONS),
/* harmony export */   REMOVE_ALL_SELECTED: () => (/* binding */ REMOVE_ALL_SELECTED),
/* harmony export */   REMOVE_SELECTED: () => (/* binding */ REMOVE_SELECTED),
/* harmony export */   SET_LIST: () => (/* binding */ SET_LIST),
/* harmony export */   SET_PRODUCTS: () => (/* binding */ SET_PRODUCTS),
/* harmony export */   SET_SELECTED: () => (/* binding */ SET_SELECTED),
/* harmony export */   SET_VARIATIONS: () => (/* binding */ SET_VARIATIONS),
/* harmony export */   SWITCH_TO_PROD: () => (/* binding */ SWITCH_TO_PROD),
/* harmony export */   SWITCH_TO_VAR: () => (/* binding */ SWITCH_TO_VAR),
/* harmony export */   clearLists: () => (/* binding */ clearLists),
/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts),
/* harmony export */   fetchProductsIfNeeded: () => (/* binding */ fetchProductsIfNeeded),
/* harmony export */   fetchVariations: () => (/* binding */ fetchVariations),
/* harmony export */   fetchVariationsIfNeeded: () => (/* binding */ fetchVariationsIfNeeded),
/* harmony export */   removeAllSelected: () => (/* binding */ removeAllSelected),
/* harmony export */   removeSelected: () => (/* binding */ removeSelected),
/* harmony export */   setList: () => (/* binding */ setList),
/* harmony export */   setProducts: () => (/* binding */ setProducts),
/* harmony export */   setSelected: () => (/* binding */ setSelected),
/* harmony export */   setVariations: () => (/* binding */ setVariations),
/* harmony export */   switchToProducts: () => (/* binding */ switchToProducts),
/* harmony export */   switchToVariations: () => (/* binding */ switchToVariations)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./src/common/api/index.js");
/* harmony import */ var _search_product_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search-product-util */ "./src/common/search-product-util.js");
/* harmony import */ var _search_product_variation_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search-product-variation-util */ "./src/common/search-product-variation-util.js");
/**
 * External dependencies
 */
// import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */



const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_VARIATIONS = 'FETCH_VARIATIONS';
const SET_SELECTED = 'SET_SELECTED';
const SET_LIST = 'SET_LIST';
const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_PRODUCTS = 'SET_PRODUCTS';
const GET_VARIATIONS = 'GET_VARIATIONS';
const SET_VARIATIONS = 'SET_VARIATIONS';
const REMOVE_SELECTED = 'REMOVE_SELECTED';
const SWITCH_TO_PROD = 'SWITCH_TO_PROD';
const SWITCH_TO_VAR = 'SWITCH_TO_VAR';
const REMOVE_ALL_SELECTED = 'REMOVE_ALL_SELECTED';
const CLEAR_LISTS = 'CLEAR_LISTS';
function switchToProducts() {
  // console.log( "switching to products list" );
  return {
    type: SWITCH_TO_PROD
  };
}
function switchToVariations(parent) {
  // console.log( "switching ot variations list" );
  return {
    type: SWITCH_TO_VAR,
    parent
  };
}
function fetchProducts(selected, search, args) {
  // console.log( "fetching products" );
  return dispatch => {
    dispatch(requestProducts(selected, search, args));
    return (0,_search_product_util__WEBPACK_IMPORTED_MODULE_1__.getProducts)({
      selected,
      search,
      args
    })
    // .then( response => response.json())
    .then(response => dispatch(setProducts(response)));
  };
}
;
function requestProducts(selected, search, args) {
  return {
    type: GET_PRODUCTS,
    selected,
    search,
    args
  };
}
function fetchVariations(parentProd, selected, search, args) {
  // return {
  // 	type: FETCH_VARIATIONS,
  // 	parent,
  // 	selected,
  // 	search,
  // 	args,
  // };
  // console.log( "fetching variations of parent product:" );
  // console.log( parentProd );
  return dispatch => {
    dispatch(requestVariations(parentProd, selected, search, args));
    return (0,_search_product_variation_util__WEBPACK_IMPORTED_MODULE_2__.getProductVariations)({
      parentProd,
      selected,
      search,
      args
    })
    // .then( response => response.json())
    .then(response => dispatch(setVariations(parentProd, response)));
  };
}
;
function requestVariations(parent, selected, search, args) {
  return {
    type: GET_VARIATIONS,
    parent,
    selected,
    search,
    args
  };
}
function setSelected(product, single) {
  // console.log( "called and reached setSelected." );
  return {
    type: SET_SELECTED,
    product,
    single
  };
}
;
function setList(item) {
  const {
    products,
    variations
  } = state;
  if (item) {
    if (variations[item.id]) {
      var list = variations[item.id];
      return {
        type: SET_LIST,
        list
      };
    }
  }
  return {
    type: SET_LIST,
    list
  };
}
;
function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products
  };
}
;
function setVariations(parent, variations) {
  return {
    type: SET_VARIATIONS,
    parent,
    variations
  };
}
;
function removeSelected(product, value) {
  return {
    type: REMOVE_SELECTED,
    product,
    value
  };
}
;
function removeAllSelected() {
  return {
    type: REMOVE_ALL_SELECTED
  };
}
function shouldFetchProducts(state, selected, search, args) {
  const {
    products,
    isLoading,
    error
  } = state;
  if (!products || products && products.length < 1) {
    // console.log( "no products exist, sending!" );
    return true;
  } else if (isLoading) {
    return false;
  } else {
    if (products.length <= 0) {
      console.error("there was an error with products fetching.");
    }
    return false;
  }
}
function fetchProductsIfNeeded(selected, search, args) {
  // console.log( "in fetchProductsIfNeeded." );
  return (dispatch, getState) => {
    if (shouldFetchProducts(getState(), selected, search, args)) {
      // console.log( "sending fetch dispatch." );
      return dispatch(fetchProducts(selected, search, args));
    } else if (getState().products) {
      // return {
      // 	type: SWITCH_TO_PROD,
      // selected,
      // search,
      // args,
      // }
      return dispatch(switchToProducts());
    }
  };
}
function shouldFetchVariations(state, parent, selected, search, args) {
  const {
    variations,
    isLoading,
    error
  } = state;
  if (!variations) {
    // console.log( "no variations exist, sending!" );
    return true;
  } else if (!variations[parent.id] || variations[parent.id] && variations[parent.id].length < 1) {
    // console.log( "no variations for this product exist, sending!" );
    return true;
  } else if (variations[parent.id]) {
    return false;
  } else if (isLoading) {
    return false;
  } else {
    // console.log( "there was an error with variation fetching." );
    return false;
  }
}
function fetchVariationsIfNeeded(parent, selected, search, args) {
  // console.log( "in fetchVariationsIfNeeded." );
  // console.log( parent );
  return (dispatch, getState) => {
    const {
      variations
    } = getState();
    if (shouldFetchVariations(getState(), parent, selected, search, args)) {
      // console.log( "sending fetch dispatch for variations." );
      return dispatch(fetchVariations(parent, selected, search, args));
    } else if (variations[parent.id]) {
      // return variations[ parent.id ];
      // return {
      // 	type: GET_VARIATIONS,
      // 	parent,
      // 	selected,
      // 	search,
      // 	args,
      // }
      // console.log( "attempting to switch" );
      return dispatch(switchToVariations(parent));
    }
  };
}
function clearLists() {
  // console.log( "in clear lists." );
  return {
    type: CLEAR_LISTS
  };
}

/***/ }),

/***/ "./src/common/product-control/state/reducer.js":
/*!*****************************************************!*\
  !*** ./src/common/product-control/state/reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_STATE: () => (/* binding */ DEFAULT_STATE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/common/product-control/state/actions.js");
/**
 * External dependencies
 */
// import { omit } from 'lodash';


/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  isLoading: false,
  list: [],
  products: [],
  variations: {},
  // selected: [],
  currentProduct: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = DEFAULT_STATE, action) => {
  var {
    selected,
    products,
    variations
  } = state;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SWITCH_TO_PROD:
      // console.log( "switching to prod" );
      return {
        ...state,
        list: products,
        isLoading: false
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SWITCH_TO_VAR:
      // console.log( "switching to var: " + action.parent.id );
      // console.log( action.parent );
      // console.log( "that should have been the parent product." );
      return {
        ...state,
        list: variations[action.parent.id],
        isLoading: false
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_PRODUCTS:
      // console.log( "in set products and isloading should be false now" );
      return {
        ...state,
        products: action.products,
        isLoading: false,
        list: action.products
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_VARIATIONS:
      // console.log( "in set variations and isloading should be false now" );
      return {
        ...state,
        variations: {
          ...state.variations,
          [action.parent.id]: action.variations
        },
        list: action.variations,
        currentProduct: action.parent,
        isLoading: false
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_SELECTED:
      var newSel = state.selected && !action.single ? state.selected.concat(action.product) : [action.product];
      // console.log( "setting selected:" );
      // console.log( newSel );
      return {
        ...state,
        selected: [...newSel]
        // [
        // 	...state.selected,
        // 	action.product,
        // ]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_SELECTED:
      const id = action.product.id;
      var i = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selected, {
        id
      });
      // console.log( "index of remove " + i );
      // console.log( "selected item: " + selected[i] );
      return {
        ...state,
        selected: [...selected.slice(0, i), ...selected.slice(i + 1)]
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_LIST:
      return {
        ...state,
        list: action.list
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.GET_PRODUCTS:
      // console.log( "in get products?" );
      return {
        ...state,
        // list: products,
        isLoading: true
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.GET_VARIATIONS:
      // return state;
      // console.log( "in get variations?" );
      return {
        ...state,
        isLoading: true
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_ALL_SELECTED:
      return {
        ...state,
        selected: []
      };
    case _actions__WEBPACK_IMPORTED_MODULE_1__.CLEAR_LISTS:
      return {
        ...state,
        list: [],
        products: [],
        variations: {}
      };
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/common/product-control/view.jsx":
/*!*********************************************!*\
  !*** ./src/common/product-control/view.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductControler: () => (/* binding */ ProductControler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/actions */ "./src/common/product-control/state/actions.js");
/* harmony import */ var _search_list_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-list-control */ "./src/common/product-control/search-list-control.jsx");

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


const messages = {
  clear: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear all products', 'enhanced-ajax-add-to-cart-wc'),
  list: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Products', 'enhanced-ajax-add-to-cart-wc'),
  noItems: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Your store doesn't have any products.", 'enhanced-ajax-add-to-cart-wc'),
  search: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search for products to display', 'enhanced-ajax-add-to-cart-wc'),
  selected: n => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%d product selected', '%d products selected', n, 'enhanced-ajax-add-to-cart-wc'), n),
  updated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Product search results updated.', 'enhanced-ajax-add-to-cart-wc')
};
class ProductControler extends _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: this.props.products,
    };
  }
  componentDidMount() {
    // console.log( "ProductController Mounted." );
  }
  render() {
    const {
      error,
      multiple,
      isLoading,
      products,
      variations,
      selected,
      onSearch,
      onChange,
      dispatch
    } = this.props;
    const {
      list
    } = this.props;

    // if ( ! list ) {
    // 	this.setState({ list: products });
    // }
    if (error) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "error ", error.status);
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_list_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "woocommerce-products",
      isSingle: multiple === true ? false : true,
      list: list && list.length > 0 ? list : products,
      products: products,
      variations: variations,
      isLoading: isLoading,
      selected: selected
      /*selected={ products.filter( ( product ) => {
      		// const selectedIds = Object.keys( selected ).map(function(key, index) {
      		// 	if ( key === 'id' ) {
      		// 		return selected[key];
      		// 	}
      		// })
      		const selectedIds = selected.map( ( { id } ) => id );
      		return selectedIds.includes( product.id );
      	}
      ) }*/,
      onSearch: onSearch,
      onChange: onChange,
      messages: messages,
      dispatch: dispatch
    }));
  }
}
ProductControler.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,
  onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  products: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  variations: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,
  onListRequest: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
ProductControler.defaultProps = {
  selected: [],
  products: [],
  variations: {},
  isLoading: true,
  multiple: false
  // list: [],
};
const mapStateToProps = state => ({
  selected: state.selected,
  products: state.products,
  variations: state.variations,
  isLoading: state.isLoading,
  list: state.list
});
const mapDispatchToProps = dispatch => (0,redux__WEBPACK_IMPORTED_MODULE_7__.bindActionCreators)(_state_actions__WEBPACK_IMPORTED_MODULE_4__, dispatch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ProductControler));

/***/ }),

/***/ "./src/common/search-product-util.js":
/*!*******************************************!*\
  !*** ./src/common/search-product-util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "./node_modules/@woocommerce/settings/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formatting_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatting/title */ "./src/common/formatting/title.js");
/* harmony import */ var _formatting_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatting/html */ "./src/common/formatting/html.js");
/**
 * External dependencies
 */






const getProductsRequests = ({
  selected = [],
  search = '',
  queryArgs = []
}) => {
  const defaultArgs = {
    per_page: (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('isLargeCatalog') ? 100 : -1,
    catalog_visibility: 'any',
    status: 'publish',
    search,
    orderby: 'title',
    order: 'asc'
  };
  const requests = [(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wc/v3/products', {
    ...defaultArgs,
    ...queryArgs
  })];

  // If we have a large catalog, we might not get all selected products in the first page.
  if ((0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('isLargeCatalog') && selected.length) {
    requests.push((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wc/v3/products', {
      status: 'publish',
      include: selected
    }));
  }
  return requests;
};
const getProducts = ({
  selected = [],
  search = '',
  queryArgs = []
}) => {
  const requests = getProductsRequests({
    selected,
    search,
    queryArgs
  });
  return Promise.all(requests.map(path => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path
  }))).then(data => {
    const products = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniqBy)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.flatten)(data), 'id');
    var title = '';
    const list = products.map(product => ({
      name: title = (0,_formatting_title__WEBPACK_IMPORTED_MODULE_4__.createTitle)({
        product: product,
        variation: [],
        titleType: 'base'
      }),
      id: product.id,
      full: title,
      base: title,
      att: title,
      price: product.price,
      type: product.type,
      short_description: (0,_formatting_html__WEBPACK_IMPORTED_MODULE_5__.createValidHtml)({
        inputHtml: product.short_description
      }),
      children: product.variations,
      images: product.images ? product.images.map(image => image.id) : []
    }));
    return list;
  }).catch(e => {
    throw e;
  });
};

/***/ }),

/***/ "./src/common/search-product-variation-util.js":
/*!*****************************************************!*\
  !*** ./src/common/search-product-variation-util.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductVariations: () => (/* binding */ getProductVariations)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "./node_modules/@woocommerce/settings/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _formatting_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatting/title */ "./src/common/formatting/title.js");
/* harmony import */ var _formatting_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatting/html */ "./src/common/formatting/html.js");
/**
 * External dependencies
 */






const getProductVariationsRequests = ({
  parentProd = [],
  selected = [],
  search = '',
  queryArgs = []
}) => {
  const defaultArgs = {
    per_page: (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('isLargeCatalog') ? 100 : -1,
    catalog_visibility: 'any',
    status: 'publish',
    search,
    orderby: 'title',
    order: 'asc'
  };
  const requests = [(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wc/v3/products/' + parentProd.id + '/variations', {
    ...defaultArgs,
    ...queryArgs
  })];

  // If we have a large catalog, we might not get all selected products in the first page.
  if ((0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('isLargeCatalog') && selected.length) {
    requests.push((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wc/v3/products/' + parentProd.id + '/variations', {
      status: 'publish',
      include: selected
    }));
  }
  return requests;
};
const getProductVariations = ({
  parentProd = [],
  selected = [],
  search = '',
  queryArgs = []
}) => {
  const requests = getProductVariationsRequests({
    parentProd,
    selected,
    search,
    queryArgs
  });
  return Promise.all(requests.map(path => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path
  }))).then(data => {
    const variations = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.uniqBy)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.flatten)(data), 'id');
    const list = variations.map(variation => ({
      name: (0,_formatting_title__WEBPACK_IMPORTED_MODULE_4__.createTitle)({
        product: parentProd,
        variation: variation
      }),
      id: variation.id,
      full: (0,_formatting_title__WEBPACK_IMPORTED_MODULE_4__.createTitle)({
        product: parentProd,
        variation: variation,
        titleType: 'full'
      }),
      att: (0,_formatting_title__WEBPACK_IMPORTED_MODULE_4__.createTitle)({
        product: parentProd,
        variation: variation,
        titleType: 'att'
      }),
      base: (0,_formatting_title__WEBPACK_IMPORTED_MODULE_4__.createTitle)({
        product: parentProd,
        variation: variation,
        titleType: 'base'
      }),
      price: variation.price,
      parent_id: parentProd.id,
      type: 'variation',
      short_description: (0,_formatting_html__WEBPACK_IMPORTED_MODULE_5__.createValidHtml)({
        inputHtml: parentProd.short_description
      }),
      attributes: variation.attributes,
      images: parentProd.images ? parentProd.images.map(image => image.id) : []
    }));
    return list;
  }).catch(e => {
    throw e;
  });
};

/***/ }),

/***/ "./src/common/tag.jsx":
/*!****************************!*\
  !*** ./src/common/tag.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);

/**
 * External dependencies
 */








/**
 * This component can be used to show an item styled as a "tag", optionally with an `X` + "remove"
 * or with a popover that is shown on click.
 *
 * @return {Object} -
 */
const Tag = ({
  id,
  item,
  instanceId,
  isVisible,
  label,
  popoverContents,
  remove,
  screenReaderLabel,
  setState,
  className
}) => {
  screenReaderLabel = screenReaderLabel || label;
  if (!label) {
    // A null label probably means something went wrong
    // @todo Maybe this should be a loading indicator?
    return null;
  }
  label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(label);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('woocommerce-tag', className, {
    'has-remove': !!remove
  });
  const labelId = `woocommerce-tag__label-${instanceId}`;
  const labelTextNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, screenReaderLabel), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true"
  }, label));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classes
  }, popoverContents ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "woocommerce-tag__text",
    id: labelId,
    onClick: () => setState(() => ({
      isVisible: true
    })),
    isToggled: isVisible
  }, labelTextNode) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "woocommerce-tag__text",
    id: labelId
  }, labelTextNode), popoverContents && isVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
    onClose: () => setState(() => ({
      isVisible: false
    }))
  }, popoverContents), remove && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    className: "woocommerce-tag__remove",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
      icon: "dismiss",
      size: 20
    }),
    onClick: remove(item),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove %s', 'enhanced-ajax-add-to-cart-wc'), label),
    "aria-describedby": labelId
  }));
};
Tag.propTypes = {
  /**
   * The ID for this item, used in the remove function.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  /**
   * The name for this item, displayed as the tag's text.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string).isRequired,
  /**
   * Contents to display on click in a popover
   */
  popoverContents: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),
  /**
   * A function called when the remove X is clicked. If not used, no X icon will display.
   */
  remove: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  /**
   * A more descriptive label for screen reader users. Defaults to the `name` prop.
   */
  screenReaderLabel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.withState)({
  isVisible: false
})((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.withInstanceId)(Tag)));

/***/ }),

/***/ "./src/common/utils/local-api-middleware.js":
/*!**************************************************!*\
  !*** ./src/common/utils/local-api-middleware.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const actionsToModify = [];

/**
 * Look for Jetpack proxy requests that were localized as
 * indicated by the `meta.localApiRequest` flag.
 *
 * Modify their `dataLayer` meta to mimic the Jetpack proxy.
 *
 * @returns {Function} middleware function
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => next => action => {
  if ('CONNECTING_IN_PROGRESS' === action.type && lodash__WEBPACK_IMPORTED_MODULE_0___default().get(action, 'meta.localApiRequest') && lodash__WEBPACK_IMPORTED_MODULE_0___default().has(action, 'onSuccess.type')) {
    // This request was a Jetpack proxy request that
    // was rewritten to hit the local WC API.
    actionsToModify.push(lodash__WEBPACK_IMPORTED_MODULE_0___default().get(action, 'onSuccess.type'));
  } else if (-1 !== actionsToModify.indexOf(action.type) && lodash__WEBPACK_IMPORTED_MODULE_0___default().has(action, 'meta.dataLayer.data.body')) {
    // The WooCommerce middleware expects this response from the
    // Jetpack REST API proxy, which nests the body under `data`.
    action.meta.dataLayer.data.data = action.meta.dataLayer.data.body;
    delete action.meta.dataLayer.data.body;

    // Don't process this action again.
    const actionIndex = actionsToModify.indexOf(action.type);
    actionsToModify.splice(actionIndex, 1);
  }
  return next(action);
});

/***/ }),

/***/ "./src/common/utils/local-storage-polyfill.js":
/*!****************************************************!*\
  !*** ./src/common/utils/local-storage-polyfill.js ***!
  \****************************************************/
/***/ (() => {

function localStoragePolyfill() {
  if (!('localStorage' in window)) {
    // if (!Modernizr.localstorage) {
    window.localStorage = {
      _data: {},
      setItem: function (id, val) {
        return this._data[id] = String(val);
      },
      getItem: function (id) {
        return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
      },
      removeItem: function (id) {
        return delete this._data[id];
      },
      clear: function () {
        return this._data = {};
      }
    };
  }
}

/***/ }),

/***/ "./src/common/utils/local-storage.js":
/*!*******************************************!*\
  !*** ./src/common/utils/local-storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_AGE: () => (/* binding */ MAX_AGE),
/* harmony export */   getWithExpiry: () => (/* binding */ getWithExpiry),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   setWithExpiry: () => (/* binding */ setWithExpiry)
/* harmony export */ });
/* harmony import */ var _local_storage_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage-polyfill */ "./src/common/utils/local-storage-polyfill.js");
/* harmony import */ var _local_storage_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_storage_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Internal dependencies
 */
//import from calypso

// localStoragePolyfill();

const MAX_AGE = 3600000;
const setWithExpiry = (key, obj) => {
  if (!obj) {
    return;
  }
  const json = JSON.stringify({
    ...obj,
    _timestamp: Date.now()
  });
  localStorage.setItem(key, json);
};
const getWithExpiry = (key, maxAge = MAX_AGE) => {
  const json = localStorage.getItem(key);
  if (json) {
    const item = JSON.parse(json);
    if (maxAge > Date.now() - item._timestamp) {
      delete item._timestamp;
      return item;
    }
  }
  return null;
};
const remove = key => {
  localStorage.removeItem(key);
};

/***/ }),

/***/ "./src/common/utils/parse-json.js":
/*!****************************************!*\
  !*** ./src/common/utils/parse-json.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * External dependencies
 */
// import { translate as __ } from 'i18n-calypso';

/**
 * Parses a server response into a JSON object, providing a human-readable error if the
 * JSON is invalid.
 *
 * @param {Response} response Response object, as obtained from a fetch call.
 * @returns {Promise} Resolves with the parsed JSON object,
 * or rejects with a human-readable error if the payload is not valid JSON
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (response => {
  if (!response instanceof Response) {
    console.error('Invalid Response object'); // eslint-disable-line no-console
    return Promise.reject('Unexpected server error.');
  }
  return response.text().then(text => {
    try {
      return JSON.parse(text);
    } catch (error) {
      if (__webpack_require__.g.EAA2C && __webpack_require__.g.EAA2C.debug && 'false' !== __webpack_require__.g.EAA2C.debug) {
        console.error("Error parsing the JSON passed from the response."); // eslint-disable-line no-console
        console.error(error); // eslint-disable-line no-console
        console.error(text); // eslint-disable-line no-console
      }
      throw 'Unexpected server error.';
    }
  });
});

/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBox: () => (/* binding */ calculateBox),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   expand: () => (/* binding */ expand),
/* harmony export */   getBox: () => (/* binding */ getBox),
/* harmony export */   getRect: () => (/* binding */ getRect),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   shrink: () => (/* binding */ shrink),
/* harmony export */   withScroll: () => (/* binding */ withScroll)
/* harmony export */ });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);

  if (suffix !== 'px') {
    return 0;
  }

  var result = Number(value);
  !!isNaN(result) ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : 0 : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasClass)
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClass)
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/gridicons/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/gridicons/dist/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0})),exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!=d&&Object.prototype.hasOwnProperty.call(e,d)){var h=n?Object.getOwnPropertyDescriptor(e,d):null;h&&(h.get||h.set)?Object.defineProperty(l,d,h):l[d]=e[d]}return l["default"]=e,a&&a.set(e,l),l}function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t,a=1;a<arguments.length;a++)for(var l in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,l,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)a=d[l],0<=t.indexOf(a)||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,l,n={},d=Object.keys(e);for(l=0;l<d.length;l++)a=d[l],0<=t.indexOf(a)||(n[a]=e[a]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a,l=0;l<t.length;l++)a=t[l],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var a,l=_getPrototypeOf(e);if(t){var n=_getPrototypeOf(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _defineProperty(e,t,a){return t=_toPropertyKey(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:t+""}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var l=a.call(e,t||"default");if("object"!==_typeof(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var doesItNeedOffset=function(e,t){return 0<=t.indexOf(e)},isModulo18=function(e){return 0==e%18},iconsThatNeedOffset=["gridicons-add-outline","gridicons-add","gridicons-align-image-center","gridicons-align-image-left","gridicons-align-image-none","gridicons-align-image-right","gridicons-attachment","gridicons-bold","gridicons-bookmark-outline","gridicons-bookmark","gridicons-calendar","gridicons-cart","gridicons-create","gridicons-custom-post-type","gridicons-external","gridicons-folder","gridicons-heading","gridicons-help-outline","gridicons-help","gridicons-history","gridicons-info-outline","gridicons-info","gridicons-italic","gridicons-layout-blocks","gridicons-link-break","gridicons-link","gridicons-list-checkmark","gridicons-list-ordered","gridicons-list-unordered","gridicons-menus","gridicons-minus","gridicons-my-sites","gridicons-notice-outline","gridicons-notice","gridicons-plus-small","gridicons-plus","gridicons-popout","gridicons-posts","gridicons-scheduled","gridicons-share-ios","gridicons-star-outline","gridicons-star","gridicons-stats","gridicons-status","gridicons-thumbs-up","gridicons-textcolor","gridicons-time","gridicons-trophy","gridicons-user-circle","gridicons-reader-follow","gridicons-reader-following"],iconsThatNeedOffsetX=["gridicons-arrow-down","gridicons-arrow-up","gridicons-comment","gridicons-clear-formatting","gridicons-flag","gridicons-menu","gridicons-reader","gridicons-strikethrough"],iconsThatNeedOffsetY=["gridicons-align-center","gridicons-align-justify","gridicons-align-left","gridicons-align-right","gridicons-arrow-left","gridicons-arrow-right","gridicons-house","gridicons-indent-left","gridicons-indent-right","gridicons-minus-small","gridicons-print","gridicons-sign-out","gridicons-stats-alt","gridicons-trash","gridicons-underline","gridicons-video-camera"],Gridicon=function(e){function t(){return _classCallCheck(this,t),a.apply(this,arguments)}_inherits(t,e);var a=_createSuper(t);return _createClass(t,[{key:"render",value:function render(){var e,t=this.props,a=t.size,l=t.onClick,n=t.icon,d=t.className,h=_objectWithoutProperties(t,_excluded),i="gridicons-"+n,c=doesItNeedOffset(i,iconsThatNeedOffset)&&isModulo18(a),s=doesItNeedOffset(i,iconsThatNeedOffsetX)&&isModulo18(a),r=doesItNeedOffset(i,iconsThatNeedOffsetY)&&isModulo18(a),g=["gridicon",i,d,!!c&&"needs-offset",!!s&&"needs-offset-x",!!r&&"needs-offset-y"].filter(Boolean).join(" ");switch(i){default:e=_react["default"].createElement("svg",_extends({height:a,width:a},h));break;case"gridicons-add-image":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 0014.5 11zm3.5 3.234l-.513-.57a2 2 0 00-2.976 0l-.656.731L9 9l-3 3.333V6h7V4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7h-2v3.234z"})));break;case"gridicons-add-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z"})));break;case"gridicons-add":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})));break;case"gridicons-align-center":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 19h16v-2H4v2zm13-6H7v2h10v-2zM4 9v2h16V9H4zm13-4H7v2h10V5z"})));break;case"gridicons-align-image-center":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 5h18v2H3V5zm0 14h18v-2H3v2zm5-4h8V9H8v6z"})));break;case"gridicons-align-image-left":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 5h18v2H3V5zm0 14h18v-2H3v2zm0-4h8V9H3v6zm10 0h8v-2h-8v2zm0-4h8V9h-8v2z"})));break;case"gridicons-align-image-none":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 7H3V5h18v2zm0 10H3v2h18v-2zM11 9H3v6h8V9z"})));break;case"gridicons-align-image-right":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 7H3V5h18v2zm0 10H3v2h18v-2zm0-8h-8v6h8V9zm-10 4H3v2h8v-2zm0-4H3v2h8V9z"})));break;case"gridicons-align-justify":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z"})));break;case"gridicons-align-left":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 19h16v-2H4v2zm10-6H4v2h10v-2zM4 9v2h16V9H4zm10-4H4v2h10V5z"})));break;case"gridicons-align-right":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 17H4v2h16v-2zm-10-2h10v-2H10v2zM4 9v2h16V9H4zm6-2h10V5H10v2z"})));break;case"gridicons-arrow-down":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"})));break;case"gridicons-arrow-left":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})));break;case"gridicons-arrow-right":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})));break;case"gridicons-arrow-up":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13 20V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V20h2z"})));break;case"gridicons-aside":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14 20l6-6V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h8zM6 6h12v6h-4a2 2 0 00-2 2v4H6V6zm10 4H8V8h8v2z"})));break;case"gridicons-attachment":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14 1a5 5 0 00-5 5v10a3 3 0 003 3 2.991 2.991 0 002.99-3V6H13v10a1 1 0 11-2 0V6a3 3 0 116 0v10.125C17 18.887 14.762 21 12 21a5 5 0 01-5-5v-5H5v5a7 7 0 007 7 6.991 6.991 0 006.99-7V6c0-2.762-2.228-5-4.99-5z"})));break;case"gridicons-audio":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8 4v10.184A2.962 2.962 0 007 14a3 3 0 103 3V7h7v4.184A2.962 2.962 0 0016 11a3 3 0 103 3V4H8z"})));break;case"gridicons-bell":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6.14 14.969l2.828 2.828a2 2 0 11-2.828-2.828zm8.867 5.325l-.706.706L3 9.699l.706-.706 1.102.157c.754.108 1.689-.122 2.077-.51l3.885-3.884a5.993 5.993 0 018.475 8.475l-3.885 3.885c-.388.388-.618 1.323-.51 2.077l.157 1.101z"})));break;case"gridicons-block":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 018-8c1.848 0 3.545.633 4.9 1.686L5.686 16.9A7.957 7.957 0 014 12zm8 8a7.955 7.955 0 01-4.9-1.686L18.314 7.1A7.957 7.957 0 0120 12a8 8 0 01-8 8z"})));break;case"gridicons-bold":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 5.009h4.547c2.126 0 3.671.303 4.632.907.962.605 1.442 1.567 1.442 2.887 0 .896-.211 1.63-.631 2.205-.421.574-.98.919-1.678 1.036v.103c.951.212 1.637.608 2.057 1.189.421.58.631 1.352.631 2.316 0 1.367-.494 2.434-1.482 3.199-.989.766-2.332 1.149-4.027 1.149H7V5.009zm3 5.937h2.027c.862 0 1.486-.133 1.872-.4.387-.267.579-.708.579-1.323 0-.574-.21-.986-.63-1.236-.421-.249-1.087-.374-1.996-.374H10v3.333zm0 2.523v3.906h2.253c.876 0 1.521-.167 1.939-.502.417-.335.626-.848.626-1.539 0-1.244-.889-1.865-2.668-1.865H10z"})));break;case"gridicons-book":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 3h2v18H4zM18 3H7v18h11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 6h-6V8h6v1zm0-2h-6V6h6v1z"})));break;case"gridicons-bookmark-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 5v12.554l-5-2.857-5 2.857V5h10m0-2H7a2 2 0 00-2 2v16l7-4 7 4V5a2 2 0 00-2-2z"})));break;case"gridicons-bookmark":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 3H7a2 2 0 00-2 2v16l7-4 7 4V5a2 2 0 00-2-2z"})));break;case"gridicons-briefcase":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14 15h-4v-2H2v6a2 2 0 002 2h16a2 2 0 002-2v-6h-8v2zm6-9h-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2H4a2 2 0 00-2 2v4h20V8a2 2 0 00-2-2zm-4 0H8V4h8v2z"})));break;case"gridicons-bug":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 14h4v-2h-4v-2h1a2 2 0 002-2V6h-2v2H5V6H3v2a2 2 0 002 2h1v2H2v2h4v1a6 6 0 00.09 1H5a2 2 0 00-2 2v2h2v-2h1.81A6 6 0 0011 20.91V10h2v10.91A6 6 0 0017.19 18H19v2h2v-2a2 2 0 00-2-2h-1.09a6 6 0 00.09-1zM12 2a4 4 0 00-4 4h8a4 4 0 00-4-4z"})));break;case"gridicons-calendar":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 15H5V8h14v11z"})));break;case"gridicons-camera":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 12c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm5-5v11c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2V4h4v1h2l1-2h6l1 2h2c1.1 0 2 .9 2 2zM7.5 9c0-.8-.7-1.5-1.5-1.5S4.5 8.2 4.5 9s.7 1.5 1.5 1.5S7.5 9.8 7.5 9zM19 12c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z"})));break;case"gridicons-caption":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 15l2-2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h13l-2 2H4v12h16v-3zm2.44-8.56l-.88-.88a1.5 1.5 0 00-2.12 0L12 13v2H6v2h9v-1l7.44-7.44a1.5 1.5 0 000-2.12z"})));break;case"gridicons-cart":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5a2 2 0 001.952-1.566L21 5H7V4a2 2 0 00-2-2H3v2h2v11a2 2 0 002 2h12a2 2 0 00-2-2H7v-2h10.396z"})));break;case"gridicons-chat":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 12c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9v3l-3-3H3zM21 18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-6v1c0 2.2-1.8 4-4 4v2c0 1.1.9 2 2 2h2v3l3-3h3z"})));break;case"gridicons-checkmark-circle":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658A9.98 9.98 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.94 9.94 0 00-.966-4.266L11 17.768z"})));break;case"gridicons-checkmark":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414z"})));break;case"gridicons-chevron-down":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586z"})));break;case"gridicons-chevron-left":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14 20l-8-8 8-8 1.414 1.414L8.828 12l6.586 6.586z"})));break;case"gridicons-chevron-right":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586z"})));break;case"gridicons-chevron-up":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586z"})));break;case"gridicons-clear-formatting":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10.837 10.163l-4.6 4.6L10 4h4l.777 2.223-2.144 2.144-.627-2.092-1.169 3.888zm5.495.506L19.244 19H15.82l-1.049-3.5H11.5L5 22l-1.5-1.5 17-17L22 5l-5.668 5.669zm-2.311 2.31l-.031.031.032-.01-.001-.021z"})));break;case"gridicons-clipboard":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 18H8v-2h8v2zm0-6H8v2h8v-2zm2-9h-2v2h2v15H6V5h2V3H6a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zm-4 2V4a2 2 0 10-4 0v1a2 2 0 00-2 2v1h8V7a2 2 0 00-2-2z"})));break;case"gridicons-cloud-download":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 9c-.009 0-.017.002-.025.003A6.496 6.496 0 005 9.5a6.5 6.5 0 00.186 1.519C5.123 11.016 5.064 11 5 11a4 4 0 00-4 4c0 1.202.541 2.267 1.38 3h18.593C22.196 17.089 23 15.643 23 14a5 5 0 00-5-5zm-6 7l-4-5h3V8h2v3h3l-4 5z"})));break;case"gridicons-cloud-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11.5 5a4.514 4.514 0 014.481 4.154l.141 1.861 1.867-.013.093-.001A3.003 3.003 0 0121 14c0 .748-.28 1.452-.783 2H3.279A1.906 1.906 0 013 15c0-1.074.851-1.953 1.915-1.998.059.007.118.012.178.015l2.659.124-.621-2.588A4.468 4.468 0 017 9.5C7 7.019 9.019 5 11.5 5m0-2A6.5 6.5 0 005 9.5a6.5 6.5 0 00.186 1.519C5.123 11.016 5.064 11 5 11a4 4 0 00-4 4c0 1.202.541 2.267 1.38 3h18.593C22.196 17.089 23 15.643 23 14a5 5 0 00-5-5l-.025.002A6.496 6.496 0 0011.5 3z"})));break;case"gridicons-cloud-upload":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 9c-.009 0-.017.002-.025.003A6.496 6.496 0 005 9.5a6.5 6.5 0 00.186 1.519C5.123 11.016 5.064 11 5 11a4 4 0 00-4 4c0 1.202.541 2.267 1.38 3h18.593C22.196 17.089 23 15.643 23 14a5 5 0 00-5-5zm-5 4v3h-2v-3H8l4-5 4 5h-3z"})));break;case"gridicons-cloud":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 9c-.009 0-.017.002-.025.003A6.496 6.496 0 005 9.5a6.5 6.5 0 00.186 1.519C5.123 11.016 5.064 11 5 11a4 4 0 00-4 4c0 1.202.541 2.267 1.38 3h18.593C22.196 17.089 23 15.643 23 14a5 5 0 00-5-5z"})));break;case"gridicons-code":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M23 12l-5.45 6.5L16 17.21 20.39 12 16 6.79l1.55-1.29zM8 6.79L6.45 5.5 1 12l5.45 6.5L8 17.21 3.61 12zm.45 14.61l1.93.52L15.55 2.6l-1.93-.52z"})));break;case"gridicons-cog":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 12c0-.568-.061-1.122-.174-1.656l1.834-1.612-2-3.464-2.322.786a7.97 7.97 0 00-2.859-1.657L14 2h-4l-.479 2.396a7.97 7.97 0 00-2.859 1.657L4.34 5.268l-2 3.464 1.834 1.612a7.993 7.993 0 000 3.312L2.34 15.268l2 3.464 2.322-.786a7.97 7.97 0 002.859 1.657L10 22h4l.479-2.396a7.978 7.978 0 002.859-1.657l2.322.786 2-3.464-1.834-1.612A8.01 8.01 0 0020 12zm-8 4a4 4 0 110-8 4 4 0 010 8z"})));break;case"gridicons-comment":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 16l-5 5v-5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-7z"})));break;case"gridicons-computer":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h6v2H7v2h10v-2h-3v-2h6a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H4V4h16v12z"})));break;case"gridicons-coupon":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13 16v2h-2v-2h2zm3-3h2v-2h-2v2zm2 8h-2v2h2v-2zm3-5v2h2v-2h-2zm-1-3a1 1 0 011 1h2a3 3 0 00-3-3v2zm1 7a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-7 1a1 1 0 01-1-1h-2a3 3 0 003 3v-2zm3.21-5.21a2 2 0 01-2.828.002l-.002-.002L10 11.41l-1.43 1.44c.279.506.427 1.073.43 1.65A3.5 3.5 0 115.5 11a3.454 3.454 0 011.65.43L8.59 10 7.15 8.57A3.454 3.454 0 015.5 9 3.5 3.5 0 119 5.5a3.454 3.454 0 01-.43 1.65L10 8.59l3.88-3.88a2 2 0 012.828-.002l.002.002-5.3 5.29 5.8 5.79zM5.5 7a1.5 1.5 0 10-.001-3.001A1.5 1.5 0 005.5 7zM7 14.5a1.5 1.5 0 10-3.001.001A1.5 1.5 0 007 14.5z"})));break;case"gridicons-create":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5v2H5v14h14v-5h2z"}),_react["default"].createElement("path",{d:"M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z"})));break;case"gridicons-credit-card":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v2H4V6h16zM4 18v-6h16v6H4zm2-4h7v2H6v-2zm9 0h3v2h-3v-2z"})));break;case"gridicons-crop":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 16h-4V8a2 2 0 00-2-2H8V2H6v4H2v2h4v8a2 2 0 002 2h8v4h2v-4h4v-2zM8 16V8h8v8H8z"})));break;case"gridicons-cross-circle":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z"})));break;case"gridicons-cross-small":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z"})));break;case"gridicons-cross":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z"})));break;case"gridicons-custom-post-type":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM6 6h5v5H6V6zm4.5 13a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm3-6l3-5 3 5h-6z"})));break;case"gridicons-customize":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M2 6c0-1.505.78-3.08 2-4 0 .845.69 2 2 2a3 3 0 013 3c0 .386-.079.752-.212 1.091a74.515 74.515 0 012.191 1.808l-2.08 2.08a75.852 75.852 0 01-1.808-2.191A2.977 2.977 0 016 10c-2.21 0-4-1.79-4-4zm12.152 6.848l1.341-1.341A4.446 4.446 0 0017.5 12 4.5 4.5 0 0022 7.5c0-.725-.188-1.401-.493-2.007L18 9l-2-2 3.507-3.507A4.446 4.446 0 0017.5 3 4.5 4.5 0 0013 7.5c0 .725.188 1.401.493 2.007L3 20l2 2 6.848-6.848a68.562 68.562 0 005.977 5.449l1.425 1.149 1.5-1.5-1.149-1.425a68.562 68.562 0 00-5.449-5.977z"})));break;case"gridicons-domains":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.918 6h-3.215a49.088 49.088 0 00-.565-3.357A8.048 8.048 0 0118.918 8zm-5.904-3.928c.068.352.387 2.038.645 3.928h-3.318c.258-1.89.577-3.576.645-3.928C11.319 4.029 11.656 4 12 4s.681.029 1.014.072zM14 12c0 .598-.043 1.286-.109 2h-3.782c-.066-.714-.109-1.402-.109-2s.043-1.286.109-2h3.782c.066.714.109 1.402.109 2zM8.862 4.643A49.088 49.088 0 008.297 8H5.082a8.048 8.048 0 013.78-3.357zM4.263 10h3.821C8.033 10.668 8 11.344 8 12s.033 1.332.085 2H4.263C4.097 13.359 4 12.692 4 12s.098-1.359.263-2zm.819 6h3.215c.188 1.424.42 2.65.565 3.357A8.048 8.048 0 015.082 16zm5.904 3.928A77.282 77.282 0 0110.341 16h3.318a78.303 78.303 0 01-.645 3.928c-.333.043-.67.072-1.014.072s-.681-.029-1.014-.072zm4.152-.571c.145-.707.377-1.933.565-3.357h3.215a8.048 8.048 0 01-3.78 3.357zM19.737 14h-3.821c.051-.668.084-1.344.084-2s-.033-1.332-.085-2h3.821c.166.641.264 1.308.264 2s-.097 1.359-.263 2z"})));break;case"gridicons-dropdown":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 10l5 5 5-5z"})));break;case"gridicons-ellipsis-circle":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5S9 11.2 9 12s-.7 1.5-1.5 1.5zm4.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"})));break;case"gridicons-ellipsis":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 12a2 2 0 11-4.001-.001A2 2 0 017 12zm12-2a2 2 0 10.001 4.001A2 2 0 0019 10zm-7 0a2 2 0 10.001 4.001A2 2 0 0012 10z"})));break;case"gridicons-external":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})));break;case"gridicons-filter":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z"})));break;case"gridicons-fire":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21.5 13.4c0 1.2-.2 2.3-.7 3.4-.5 1.1-1.2 2-2.1 2.9-.9.8-1.9 1.5-3.1 1.9-.5.2-1.1.4-1.7.5l.3-.1s2.2-1.3 2.7-4.1c.2-2.5-1.9-3.6-1.9-3.6s-1.1 1.4-2.6 1.4c-2.4 0-2-4-2-4s-3.6 1.9-3.6 5.9c0 2.5 2.6 4.4 2.6 4.4-.3-.1-.7-.2-1-.3-1.2-.4-2.2-1.1-3.1-1.9-.9-.8-1.6-1.8-2.1-2.9-.5-1.1-.7-2.2-.7-3.4 0-3.9 4.6-7.7 4.6-7.7s.4 3 2.7 3c4.2 0 2.7-6.7 2.7-6.7s3.8 2.2 4.9 8.2c2.1-.3 1.9-3 1.9-3s2.2 2.9 2.2 6.1"})));break;case"gridicons-flag":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M15 6a2 2 0 00-2-2H5v17h2v-7h5a2 2 0 002 2h6V6h-5z"})));break;case"gridicons-flip-horizontal":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 18v-5h3v-2h-3V6a2 2 0 00-2-2H6a2 2 0 00-2 2v5H1v2h3v5a2 2 0 002 2h12a2 2 0 002-2zM6 6h12v5H6V6z"})));break;case"gridicons-flip-vertical":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 4h-5V1h-2v3H6a2 2 0 00-2 2v12a2 2 0 002 2h5v3h2v-3h5a2 2 0 002-2V6a2 2 0 00-2-2zM6 18V6h5v12H6z"})));break;case"gridicons-folder-multiple":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 8a2 2 0 00-2 2v10c0 1.1.9 2 2 2h14a2 2 0 002-2H4V8zm16 10H8a2 2 0 01-2-2V6a2 2 0 012-2h3a2 2 0 012 2h7a2 2 0 012 2v8a2 2 0 01-2 2z"})));break;case"gridicons-folder":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z"})));break;case"gridicons-fullscreen-exit":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14 10V4h2v2.59l3.29-3.29 1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29 1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3-1.42-1.42L6.59 16H4v-2z"})));break;case"gridicons-fullscreen":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 3v6h-2V6.41l-3.29 3.3-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3 1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29-1.41-1.42L5 17.59V15H3v6z"})));break;case"gridicons-gift":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 6h-4.8c.5-.5.8-1.2.8-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0-1.7-1.3-3-3-3S6 2.3 6 4c0 .8.3 1.5.8 2H2v6h1v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8h1V6zm-2 4h-7V8h7v2zm-5-7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM9 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM4 8h7v2H4V8zm1 4h6v8H5v-8zm14 8h-6v-8h6v8z"})));break;case"gridicons-globe":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18l2-2 1-1v-2h-2v-1l-1-1H9v3l2 2v1.931C7.06 19.436 4 16.072 4 12l1 1h2v-2h2l3-3V6h-2L9 5v-.411a7.945 7.945 0 016 0V6l-1 1v2l1 1 3.13-3.13A7.983 7.983 0 0119.736 10H18l-2 2v2l1 1h2l.286.286C18.029 18.061 15.239 20 12 20z"})));break;case"gridicons-grid":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8 8H4V4h4v4zm6-4h-4v4h4V4zm6 0h-4v4h4V4zM8 10H4v4h4v-4zm6 0h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm6 0h-4v4h4v-4z"})));break;case"gridicons-heading-h1":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0A4.742 4.742 0 0115 9v1h2v7h2V7h-1.43z"})));break;case"gridicons-heading-h2":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 7h2v10H9v-4H5v4H3V7h2v4h4V7zm8 8c.51-.41.6-.62 1.06-1.05.437-.4.848-.828 1.23-1.28a6.4 6.4 0 00.85-1.28c.199-.39.305-.822.31-1.26a3.007 3.007 0 00-.27-1.28 2.902 2.902 0 00-.76-1 3.485 3.485 0 00-1.17-.63 4.766 4.766 0 00-1.5-.22c-.359 0-.717.033-1.07.1a4.895 4.895 0 00-1 .29 4.431 4.431 0 00-.86.49c-.287.21-.561.437-.82.68l1.24 1.22a5.829 5.829 0 011-.7c.35-.201.747-.304 1.15-.3a1.91 1.91 0 011.27.38c.311.278.477.684.45 1.1a2.127 2.127 0 01-.36 1.11 7.126 7.126 0 01-1 1.25c-.44.43-.98.92-1.59 1.43-.61.51-1.41 1.06-2.16 1.65V17h8v-2h-4z"})));break;case"gridicons-heading-h3":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14.11 14.218c.355.287.749.523 1.17.7.434.181.9.273 1.37.27.484.017.965-.086 1.4-.3a.92.92 0 00.55-.84 1.136 1.136 0 00-.15-.58 1.137 1.137 0 00-.51-.43 3.65 3.65 0 00-1-.27 9.786 9.786 0 00-1.52-.1v-1.57a4.73 4.73 0 002.17-.36 1.06 1.06 0 00.63-.93.9.9 0 00-.38-.81 2.002 2.002 0 00-1.13-.28 2.836 2.836 0 00-1.14.28 5.568 5.568 0 00-1.06.62l-1.22-1.39a6.55 6.55 0 011.64-.9 5.354 5.354 0 011.9-.33 6.448 6.448 0 011.56.17c.431.101.84.277 1.21.52.325.211.595.495.79.83.19.342.287.729.28 1.12.011.48-.177.943-.52 1.28a3.867 3.867 0 01-1.46.86v.06c.609.14 1.175.425 1.65.83.437.382.68.94.66 1.52.005.421-.113.835-.34 1.19a2.853 2.853 0 01-.9.88 4.462 4.462 0 01-1.32.55 6.395 6.395 0 01-1.57.19 6.42 6.42 0 01-2.31-.37 4.29 4.29 0 01-1.57-1l1.12-1.41zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z"})));break;case"gridicons-heading-h4":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z"})));break;case"gridicons-heading-h5":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14.09 14.19c.352.269.73.5 1.13.69a3.07 3.07 0 001.34.29 2.54 2.54 0 001.44-.4 1.29 1.29 0 00.57-1.14A1.3 1.3 0 0018 12.5a2.292 2.292 0 00-1.38-.39h-.47a2.197 2.197 0 00-.4.08l-.41.15-.48.23-1.02-.57.28-5h6.4v1.92h-4.31L16 10.76a4.57 4.57 0 01.68-.18c.235-.037.472-.054.71-.05.463-.004.924.057 1.37.18.411.115.798.305 1.14.56.33.248.597.57.78.94.212.422.322.888.32 1.36.007.497-.11.989-.34 1.43a3.336 3.336 0 01-.91 1.07c-.393.3-.837.527-1.31.67a5.165 5.165 0 01-1.54.26 5.993 5.993 0 01-2.31-.39 5.427 5.427 0 01-1.59-1l1.09-1.42zM11 17H9v-4H5v4H3V7h2v4h4V7h2v10z"})));break;case"gridicons-heading-h6":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm8.579-7.508a3.157 3.157 0 00-.82-.49 2.683 2.683 0 00-1.94 0 1.991 1.991 0 00-.78.52c-.244.27-.431.586-.55.93a4.643 4.643 0 00-.25 1.43 4.168 4.168 0 011.25-.77c.406-.171.84-.262 1.28-.27.416-.006.83.048 1.23.16.365.118.705.304 1 .55.296.253.529.571.68.93.194.403.303.843.32 1.29.01.468-.093.931-.3 1.35a3.192 3.192 0 01-.83 1 3.63 3.63 0 01-1.2.64 4.71 4.71 0 01-3-.05 3.71 3.71 0 01-1.35-.85 4.193 4.193 0 01-1-1.48 5.809 5.809 0 01-.32-2.16 6.496 6.496 0 01.38-2.34 4.58 4.58 0 011-1.62c.407-.416.898-.74 1.44-.95a4.637 4.637 0 011.7-.31 5.192 5.192 0 012 .34c.5.19.963.464 1.37.81l-1.31 1.34zm-2.39 5.84c.203.001.406-.03.6-.09.184-.046.357-.128.51-.24.151-.136.271-.303.35-.49.093-.225.137-.467.13-.71a1.259 1.259 0 00-.43-1.07 1.806 1.806 0 00-1.12-.33 2.406 2.406 0 00-1 .21 2.913 2.913 0 00-1 .73c.047.346.144.683.29 1 .109.231.258.441.44.62.153.149.338.261.54.33.226.055.46.068.69.04z"})));break;case"gridicons-heading":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 20h-3v-6H9v6H6V5.009h3V11h6V5.009h3V20z"})));break;case"gridicons-heart-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16.5 4.5c2.206 0 4 1.794 4 4 0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 013.273 1.706L12 7.953l1.227-1.746A4.008 4.008 0 0116.5 4.5m0-1.5A5.49 5.49 0 0012 5.344 5.49 5.49 0 007.5 3 5.5 5.5 0 002 8.5c0 5.719 6.5 10.438 10 12.85 3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0016.5 3z"})));break;case"gridicons-heart":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16.5 3A5.49 5.49 0 0012 5.344 5.49 5.49 0 007.5 3 5.5 5.5 0 002 8.5c0 5.719 6.5 10.438 10 12.85 3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0016.5 3z"})));break;case"gridicons-help-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 8a4 4 0 00-8 0h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2a1 1 0 00-1 1v2h2v-1.141A3.991 3.991 0 0016 10zm-3 6h-2v2h2v-2z"})));break;case"gridicons-help":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 16h-2v-2h2v2zm0-4.141V15h-2v-2a1 1 0 011-1c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2H8a4 4 0 018 0 3.991 3.991 0 01-3 3.859z"})));break;case"gridicons-history":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M2.12 13.526c.742 4.781 4.902 8.47 9.881 8.47 5.499 0 9.998-4.499 9.998-9.998S17.501 2 12.002 2C8.704 2 5.802 3.601 4 6V2.001L2.003 2 2 9h7V7l-3.199-.001C7.2 5.201 9.502 4 12.002 4 16.4 4 20 7.6 20 11.998s-3.6 7.999-7.999 7.999c-3.878 0-7.132-2.794-7.849-6.471H2.12z"}),_react["default"].createElement("path",{d:"M11.002 6.999v5.302l3.201 4.297 1.6-1.197-2.801-3.701V6.999z"})));break;case"gridicons-house":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 9L12 1 2 9v2h2v10h5v-4a3 3 0 116 0v4h5V11h2V9z"})));break;case"gridicons-image-multiple":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M15 7.5a1.5 1.5 0 113.001.001A1.5 1.5 0 0115 7.5zM4 20h14a2 2 0 01-2 2H4c-1.1 0-2-.9-2-2V8a2 2 0 012-2v14zM22 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2zM8 4v6.333L11 7l4.855 5.395.656-.731a2 2 0 012.976 0l.513.57V4H8z"})));break;case"gridicons-image-remove":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20.587 3.423l1.414 1.414L20 6.84V18a2 2 0 01-2 2H6.839l-2.006 2.006-1.414-1.414L20.587 3.423zM12.42 14.42l1.001 1.001 1-1a1.59 1.59 0 012.11.11L18 16V8.839l-5.58 5.58zM15.162 6H6v6.38l2.19-2.19 1.391 1.391L4 17.162V6a2 2 0 012-2h11.162l-2 2z"})));break;case"gridicons-image":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2zm-2 0H6v6.38l2.19-2.19 5.23 5.23 1-1a1.59 1.59 0 012.11.11L18 16V6zm-5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"})));break;case"gridicons-indent-left":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 20h2V4h-2v16zM2 11h10.172l-2.086-2.086L11.5 7.5 16 12l-4.5 4.5-1.414-1.414L12.172 13H2v-2z"})));break;case"gridicons-indent-right":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6 4H4v16h2V4zm16 9H11.828l2.086 2.086L12.5 16.5 8 12l4.5-4.5 1.414 1.414L11.828 11H22v2z"})));break;case"gridicons-info-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"})));break;case"gridicons-info":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})));break;case"gridicons-ink":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M5 15a7 7 0 1014 0 6.963 6.963 0 00-1.105-3.765h.007L12 2l-5.903 9.235h.007A6.971 6.971 0 005 15z"})));break;case"gridicons-institution":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M2 19h20v3H2zM12 2L2 6v2h20V6zM17 10h3v7h-3zM10.5 10h3v7h-3zM4 10h3v7H4z"})));break;case"gridicons-italic":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10.536 5l-.427 2h1.5L9.263 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2z"})));break;case"gridicons-layout-blocks":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 7h-2V3a2 2 0 00-2-2H7a2 2 0 00-2 2v2H3a2 2 0 00-2 2v4a2 2 0 002 2h2v8a2 2 0 002 2h10a2 2 0 002-2v-2h2a2 2 0 002-2V9a2 2 0 00-2-2zm-4 14H7v-8h2a2 2 0 002-2V7a2 2 0 00-2-2H7V3h10v4h-2a2 2 0 00-2 2v8a2 2 0 002 2h2v2zm4-4h-6V9h6v8z"})));break;case"gridicons-layout":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8 20H5a2 2 0 01-2-2V6a2 2 0 012-2h3a2 2 0 012 2v12a2 2 0 01-2 2zm8-10h4a2 2 0 002-2V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a2 2 0 002 2zm5 10v-6a2 2 0 00-2-2h-5a2 2 0 00-2 2v6a2 2 0 002 2h5a2 2 0 002-2z"})));break;case"gridicons-line-graph":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z"})));break;case"gridicons-link-break":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10 11l-2 2H7v-2h3zm9.641-3.64L22 5l-1.5-1.5-17 17L5 22l9-9h3v-2h-1l2-2c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1a4 4 0 004-4v-2a3.995 3.995 0 00-2.359-3.64zM4.36 16.64L6 15c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.631 7 7 7H6a4 4 0 00-4 4v2c0 1.623.971 3.013 2.36 3.64z"})));break;case"gridicons-link":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 13H7v-2h10v2zm1-6h-1c-1.631 0-3.065.792-3.977 2H18c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1a4 4 0 004-4v-2a4 4 0 00-4-4zM2 11v2a4 4 0 004 4h1c1.63 0 3.065-.792 3.977-2H6c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.631 7 7 7H6a4 4 0 00-4 4z"})));break;case"gridicons-list-checkmark":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9.5 15.5L5 20l-2.5-2.5 1.061-1.061L5 17.879l3.439-3.439L9.5 15.5zM10 5v2h11V5H10zm0 14h11v-2H10v2zm0-6h11v-2H10v2zM8.439 8.439L5 11.879 3.561 10.44 2.5 11.5 5 14l4.5-4.5-1.061-1.061zm0-6L5 5.879l-1.439-1.44L2.5 5.5 5 8l4.5-4.5-1.061-1.061z"})));break;case"gridicons-list-ordered-rtl":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 19h13v-2H3v2zm0-6h13v-2H3v2zm0-8v2h13V5H3zm16.587.252c.107-.096.197-.188.269-.275-.012.228-.018.48-.018.756V8h1.175V3.717h-1.042L18.5 4.915l.601.738.486-.401zm.448 7.826c.475-.426.785-.715.93-.867.146-.152.262-.297.35-.435.088-.138.153-.278.195-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608a1.153 1.153 0 00-.507-.417 1.775 1.775 0 00-.742-.148 2.42 2.42 0 00-.596.067c-.177.045-.34.11-.491.195-.15.085-.336.226-.557.423l.636.744c.174-.15.33-.264.467-.341a.835.835 0 01.409-.116.44.44 0 01.305.097.335.335 0 01.108.264c0 .09-.018.176-.054.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L18.547 13.3v.762h3.108v-.955h-1.62v-.029zm.459 4.747v-.018c.307-.086.541-.225.703-.414.162-.191.243-.419.243-.685a.839.839 0 00-.378-.727c-.252-.176-.6-.264-1.043-.264-.307 0-.579.033-.816.1a2.363 2.363 0 00-.696.334l.48.773c.293-.184.576-.275.85-.275.147 0 .263.027.35.082.087.055.13.139.13.252 0 .301-.294.451-.882.451h-.27v.87h.264c.217 0 .393.016.527.049.135.031.232.08.293.143.061.064.091.154.091.271 0 .152-.058.264-.174.336-.116.07-.301.106-.555.106a2.3 2.3 0 01-.538-.069 2.502 2.502 0 01-.573-.212v.961c.228.088.441.148.637.182.196.033.41.05.64.05.561 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.003-.585-.355-.923-1.07-1.013z"})));break;case"gridicons-list-ordered":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.269-.275-.012.228-.018.48-.018.756V8h1.175V3.717H3.959L2.488 4.915l.601.738.486-.401zm.334 7.764c.475-.426.785-.715.93-.867.146-.152.262-.297.35-.435.088-.138.153-.278.195-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.289-.32-.507-.417a1.775 1.775 0 00-.742-.148c-.221 0-.419.022-.596.067s-.34.11-.491.195c-.15.085-.336.226-.557.423l.636.744c.174-.15.33-.264.467-.341a.835.835 0 01.409-.116.44.44 0 01.305.097.335.335 0 01.108.264c0 .09-.018.176-.054.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64l-1.046 1.058V14h3.108v-.955h-1.62v-.029zm.53 4.746v-.018c.307-.086.541-.225.703-.414.162-.191.243-.419.243-.685a.839.839 0 00-.378-.727c-.252-.176-.6-.264-1.043-.264-.307 0-.579.033-.816.1s-.469.178-.696.334l.48.773c.293-.184.576-.275.85-.275.147 0 .263.027.35.082s.13.139.13.252c0 .301-.294.451-.882.451h-.27v.87h.264c.217 0 .393.016.527.049.135.031.232.08.293.143.061.064.091.154.091.271 0 .152-.058.264-.174.336-.116.07-.301.106-.555.106a2.3 2.3 0 01-.538-.069 2.502 2.502 0 01-.573-.212v.961c.228.088.441.148.637.182.196.033.41.05.64.05.561 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.003-.585-.355-.923-1.07-1.013z"})));break;case"gridicons-list-unordered":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 19h12v-2H9v2zm0-6h12v-2H9v2zm0-8v2h12V5H9zm-4-.5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 4.5zm0 6a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 10.5zm0 6a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 16.5z"})));break;case"gridicons-location":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 9A7 7 0 105 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.971 6.971 0 0019 9zm-7 3a3 3 0 110-6 3 3 0 010 6z"})));break;case"gridicons-lock":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 114 0c0 .738-.405 1.376-1 1.723z"})));break;case"gridicons-mail":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z"})));break;case"gridicons-mention":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2a10 10 0 000 20v-2a8 8 0 118-8v.5a1.5 1.5 0 01-3 0V7h-2v1a5 5 0 101 7 3.5 3.5 0 006-2.46V12A10 10 0 0012 2zm0 13a3 3 0 113-3 3 3 0 01-3 3z"})));break;case"gridicons-menu":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 6v2H3V6h18zM3 18h18v-2H3v2zm0-5h18v-2H3v2z"})));break;case"gridicons-menus":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 19h10v-2H9v2zm0-6h6v-2H9v2zm0-8v2h12V5H9zm-4-.5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 4.5zm0 6a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 10.5zm0 6a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005 16.5z"})));break;case"gridicons-microphone":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 9v1a7 7 0 01-6 6.92V20h3v2H8v-2h3v-3.08A7 7 0 015 10V9h2v1a5 5 0 0010 0V9zm-7 4a3 3 0 003-3V5a3 3 0 00-6 0v5a3 3 0 003 3z"})));break;case"gridicons-minus-small":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6 11h12v2H6z"})));break;case"gridicons-minus":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 11h18v2H3z"})));break;case"gridicons-money":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M2 5v14h20V5H2zm5 12a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4a3 3 0 00-3 3H7zm5-8c1.1 0 2 1.3 2 3s-.9 3-2 3-2-1.3-2-3 .9-3 2-3z"})));break;case"gridicons-multiple-users":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M24 14.6c0 .6-1.2 1-2.6 1.2-.9-1.7-2.7-3-4.8-3.9.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5zM6.8 11H6c-3.1 0-6 1.9-6 3.6 0 .6 1.2 1 2.6 1.2.9-1.7 2.7-3 4.8-3.9l-.6-.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 1c-4.1 0-8 2.6-8 5 0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5zm5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3.8 1 1.3 2.3 1.3 3.7 0 .7-.1 1.4-.3 2zM6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4 4.3 4 3 5.3 3 7s1.3 3 3 3z"})));break;case"gridicons-my-sites-horizon":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10.986 13.928l.762-2.284-1.324-3.629a15.694 15.694 0 01-.892-.081c-.458-.027-.405-.727.054-.701 0 0 1.403.108 2.239.108.889 0 2.266-.108 2.266-.108.458-.027.512.646.054.701 0 0-.461.054-.973.081l2.006 5.966a81.578 81.578 0 00-2.599-.061l-.429-1.177-.403 1.171c-.252.001-.508.01-.761.014zm-7.156.393A8.463 8.463 0 013.5 12c0-1.232.264-2.402.736-3.459l2.036 5.578c.849-.059 1.69-.103 2.526-.137L6.792 8.015c.512-.027.973-.081.973-.081.458-.054.404-.727-.055-.701 0 0-1.376.108-2.265.108-.16 0-.347-.004-.547-.01A8.491 8.491 0 0112 3.5c2.213 0 4.228.846 5.74 2.232-.036-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.509 0 .701.404 1.293.835 1.994.323.566.701 1.293.701 2.344 0 .674-.245 1.463-.573 2.51.301.019.604.043.907.066l.798-2.307c.485-1.213.646-2.182.646-3.044 0-.313-.021-.603-.057-.874A8.469 8.469 0 0120.5 12c0 .807-.128 1.581-.339 2.32.5.049 1.005.112 1.508.169A9.916 9.916 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 .862.125 1.692.331 2.49.5-.057 1.002-.12 1.499-.169zm14.638 3.167c-1.792 2.184-4.35 3.013-6.468 3.013-1.876 0-4.551-.698-6.463-3.013-.585.048-1.174.1-1.769.161C5.571 20.271 8.578 22 12 22c3.422 0 6.429-1.729 8.232-4.351a79.692 79.692 0 00-1.764-.161zM12 15.01c-3.715 0-7.368.266-10.958.733.179.41.35.825.506 1.247 3.427-.431 6.91-.679 10.452-.679s7.025.248 10.452.679c.156-.422.327-.836.506-1.246A84.852 84.852 0 0012 15.01z"})));break;case"gridicons-my-sites":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-1.232.264-2.402.736-3.459L8.291 19.65A8.5 8.5 0 013.5 12zm8.5 8.501c-.834 0-1.64-.122-2.401-.346l2.551-7.411 2.613 7.158a.718.718 0 00.061.117 8.497 8.497 0 01-2.824.482zm1.172-12.486c.512-.027.973-.081.973-.081.458-.054.404-.727-.054-.701 0 0-1.377.108-2.266.108-.835 0-2.239-.108-2.239-.108-.459-.026-.512.674-.054.701 0 0 .434.054.892.081l1.324 3.629-1.86 5.579-3.096-9.208c.512-.027.973-.081.973-.081.458-.054.403-.727-.055-.701 0 0-1.376.108-2.265.108-.16 0-.347-.004-.547-.01A8.491 8.491 0 0112 3.5c2.213 0 4.228.846 5.74 2.232-.037-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.509 0 .701.404 1.293.835 1.994.323.566.701 1.293.701 2.344 0 .727-.28 1.572-.647 2.748l-.848 2.833-3.072-9.138zm3.101 11.332l2.596-7.506c.485-1.213.646-2.182.646-3.045 0-.313-.021-.603-.057-.874A8.455 8.455 0 0120.5 12a8.493 8.493 0 01-4.227 7.347z"})));break;case"gridicons-nametag":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 6a1 1 0 11-1 1 1 1 0 011-1zm-6 8h12v3H6zm14-8h-4V3H8v3H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM10 5h4v5h-4zm10 14H4v-9h4a2 2 0 002 2h4a2 2 0 002-2h4z"})));break;case"gridicons-next-page":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 8h-8V6h8v2zm4-4v8l-6 6H8a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2zm-2 0H8v12h6v-4a2 2 0 012-2h4V4zM4 6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2H4V6z"})));break;case"gridicons-not-visible":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M1 12s4.188-6 11-6c.947 0 1.839.121 2.678.322L8.36 12.64A3.96 3.96 0 018 11c0-.937.335-1.787.875-2.469-2.392.812-4.214 2.385-5.254 3.469a14.868 14.868 0 002.98 2.398l-1.453 1.453C2.497 14.13 1 12 1 12zm22 0s-4.188 6-11 6c-.946 0-1.836-.124-2.676-.323L5 22l-1.5-1.5 17-17L22 5l-3.147 3.147C21.501 9.869 23 12 23 12zm-2.615.006a14.83 14.83 0 00-2.987-2.403L16 11a4 4 0 01-4 4l-.947.947c.31.031.624.053.947.053 3.978 0 6.943-2.478 8.385-3.994z"})));break;case"gridicons-notice-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})));break;case"gridicons-notice":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z"})));break;case"gridicons-offline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10 3h8l-4 6h4L6 21l4-9H6l4-9z"})));break;case"gridicons-pages":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2zm-2 10V4H6v16h6v-4a2 2 0 012-2h4z"})));break;case"gridicons-pause":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"})));break;case"gridicons-pencil":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13 6l5 5-9.507 9.507a1.766 1.766 0 01-.012-2.485l-.003-.003a1.763 1.763 0 01-2.521-2.467l-.008-.008a1.765 1.765 0 01-2.455-.036L13 6zm7.586-.414l-2.172-2.172a2 2 0 00-2.828 0L14 5l5 5 1.586-1.586a2 2 0 000-2.828zM3 18v3h3a3 3 0 00-3-3z"})));break;case"gridicons-phone":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z"})));break;case"gridicons-pin":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 17c0-2.038-1.188-3.836-3-4.92V5h.5a1.5 1.5 0 000-3h-9a1.5 1.5 0 000 3H8v7.08C6.188 13.164 5 14.962 5 17h6v4c0 .55.45 1 1 1s1-.45 1-1v-4h6z"})));break;case"gridicons-plans":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 12H6l5-10v10zm2 6V10h5l-5 10z"})));break;case"gridicons-play":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 14.5v-9l6 4.5z"})));break;case"gridicons-plugins":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 8V3a1 1 0 00-2 0v5h-4V3a1 1 0 00-2 0v5H5v4a6.992 6.992 0 004 6.317V22h6v-3.683A6.994 6.994 0 0019 12V8h-3z"})));break;case"gridicons-plus-small":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 11h-5V6h-2v5H6v2h5v5h2v-5h5z"})));break;case"gridicons-plus":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8v2z"})));break;case"gridicons-popout":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6 7V5a2 2 0 012-2h11a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2v-2h2v2h11V5H8v2H6zm5.5-.5l-1.414 1.414L13.172 11H3v2h10.172l-3.086 3.086L11.5 17.5 17 12l-5.5-5.5z"})));break;case"gridicons-posts":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z"})));break;case"gridicons-print":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 16h6v2H9v-2zm13 1h-3v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H2V9a2 2 0 012-2h1V5a2 2 0 012-2h10a2 2 0 012 2v2h1a2 2 0 012 2v8zM7 7h10V5H7v2zm10 7H7v6h10v-6zm3-3.5a1.5 1.5 0 10-3.001.001A1.5 1.5 0 0020 10.5z"})));break;case"gridicons-product-downloadable":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 3H2v6h1v11a2 2 0 002 2h14a2 2 0 002-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-6-10v5.17l2.59-2.58L17 14l-5 5-5-5 1.41-1.42L11 15.17V10h2z"})));break;case"gridicons-product-external":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 3H2v6h1v11a2 2 0 002 2h14a2 2 0 002-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z"})));break;case"gridicons-product-virtual":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 3H2v6h1v11a2 2 0 002 2h14a2 2 0 002-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zM7 16.45a1.82 1.82 0 011.82-1.82h.09a2.94 2.94 0 115.799-.92 2.27 2.27 0 011.08 4.29H7.87A1.811 1.811 0 017 16.45z"})));break;case"gridicons-product":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 3H2v6h1v11a2 2 0 002 2h14a2 2 0 002-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zM9 11h6a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})));break;case"gridicons-quote":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.372 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.345 2.04-.216 3.1c.168 1.4.62 2.52 1.356 3.35C5.837 18.58 6.754 19 7.85 19c.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.073-.13-1.54-.022-.16-.94.09-1.95.752-3.02.66-1.06 1.513-1.86 2.556-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505a11.29 11.29 0 00-1.894 2.094c-.556.79-.97 1.68-1.24 2.69a8.042 8.042 0 00-.217 3.1c.166 1.4.616 2.52 1.35 3.35.733.834 1.647 1.252 2.743 1.252.967 0 1.768-.29 2.402-.877.627-.576.942-1.365.942-2.368v.011z"})));break;case"gridicons-read-more":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 12h6v-2H9zm-7 0h5v-2H2zm15 0h5v-2h-5zm3 2v2l-6 6H6a2 2 0 01-2-2v-6h2v6h6v-4a2 2 0 012-2h6zM4 8V4a2 2 0 012-2h12a2 2 0 012 2v4h-2V4H6v4z"})));break;case"gridicons-reader-comment":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12.528 14.556v-.75h-8.75c-.568 0-1.028-.46-1.028-1.028v-8c0-.568.46-1.028 1.028-1.028h12.444c.568 0 1.028.46 1.028 1.028v7.948c0 .905-.438 1.756-1.175 2.282l-3.547 2.534z",stroke:"#000",strokeWidth:"1.5"})));break;case"gridicons-reader-external":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{clipRule:"evenodd",d:"M11.376 2.016h6.608v6.608h-1.5V4.577l-5.87 5.87-.53.53-1.061-1.06.53-.53 5.87-5.87H11.376zM5 5.5h4V4H5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-4h-1.5v4a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5z",fillRule:"evenodd"})));break;case"gridicons-reader-follow-conversation":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 14v-3h-2v3h-3v2h3v3h2v-3h3v-2z"}),_react["default"].createElement("path",{d:"M13 16h-2l-5 5v-5H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4h-4v3h-3v4z"})));break;case"gridicons-reader-follow":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{clipRule:"evenodd",d:"M4 4.5h12V11h1.5V3h-15v12a2 2 0 002 2h7v-1.5h-7A.5.5 0 014 15zm10.5 2h-9V8h9zm-5 3h-4V11h4zM13 11h-1v1h1zm-1-1.5h-1.5v4h4v-4H13zM9.5 12h-4v1.5h4zm6.5 1.25h1.5v2.25h2.25V17H17.5v2.25H16V17h-2.25v-1.5H16z",fillRule:"evenodd"})));break;case"gridicons-reader-following-conversation":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16.8 14.5l3.2-3.2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h2v5l8.7-8.7 2.1 2.2z"}),_react["default"].createElement("path",{d:"M22.6 11.1l-6.1 6.1-2.1-2.2-1.4 1.4 3.5 3.6 7.5-7.6z"})));break;case"gridicons-reader-following":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 11.889l-4.455 4.455-2.094-2.176L9.538 19H5c-1.1 0-2-.9-2-2V3h18v8.889zM16.508 22L24 14.482l-1.388-1.376-6.094 6.094-2.106-2.188L13 18.4l3.508 3.6zM9 14H5v-1h4v1zm-4-2h7v-1H5v1zm7-2H5V9h7v1zM5 7h14V5H5v2z"})));break;case"gridicons-reader-share":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("clipPath",{id:"a"},_react["default"].createElement("path",{d:"M0 0h20v20H0z"})),_react["default"].createElement("g",{clipPath:"url(#a)"},_react["default"].createElement("path",{d:"M11.867 6.8V3l6.8 6.65-6.8 6.65v-3.8s-10.2-.884-10.2 4.5c0-10.77 10.2-10.2 10.2-10.2z",stroke:"#000",strokeLinecap:"round",strokeWidth:"1.5"}))));break;case"gridicons-reader-star":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10 2.5l2.446 5.335h5.47l-4.582 4.24 1.559 5.425L10 14.687 5.108 17.5l1.559-5.426-4.584-4.239h5.471z",stroke:"#000",strokeLinecap:"round",strokeWidth:"1.5"})));break;case"gridicons-reader":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4H3zm7 11H5v-1h5v1zm2-2H5v-1h7v1zm0-2H5v-1h7v1zm7 4h-5v-5h5v5zm0-7H5V6h14v2z"})));break;case"gridicons-reblog":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22.086 9.914L20 7.828V18a2 2 0 01-2 2h-7v-2h7V7.828l-2.086 2.086L14.5 8.5 19 4l4.5 4.5-1.414 1.414zM6 16.172V6h7V4H6a2 2 0 00-2 2v10.172l-2.086-2.086L.5 15.5 5 20l4.5-4.5-1.414-1.414L6 16.172z"})));break;case"gridicons-recent":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M23 12l-2.44 2.78.34 3.68-3.61.82-1.89 3.18L12 21l-3.4 1.47-1.89-3.18-3.61-.82.34-3.69L1 12l2.44-2.79-.34-3.68 3.61-.81L8.6 1.54 12 3l3.4-1.46 1.89 3.18 3.61.82-.34 3.68L23 12zm-2.67 0L18.5 9.89l.24-2.79L16 6.5l-1.42-2.43L12 5.18 9.42 4.07 8 6.5l-2.74.59.24 2.79L3.67 12l1.83 2.1-.24 2.8 2.74.6 1.42 2.43L12 18.81l2.58 1.11L16 17.5l2.74-.61-.24-2.79 1.83-2.1zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"})));break;case"gridicons-redo":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 6v3.586l-3.657-3.657c-1.172-1.172-2.707-1.757-4.243-1.757s-3.071.585-4.242 1.757a6 6 0 000 8.485l5.364 5.364 1.414-1.414L7.272 13a4.004 4.004 0 010-5.657A3.975 3.975 0 0110.1 6.171c1.068 0 2.073.416 2.828 1.172L16.586 11H13v2h7V6h-2z"})));break;case"gridicons-refresh":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17.91 14c-.478 2.833-2.943 5-5.91 5-3.308 0-6-2.692-6-6s2.692-6 6-6h2.172l-2.086 2.086L13.5 10.5 18 6l-4.5-4.5-1.414 1.414L14.172 5H12a8 8 0 000 16c4.079 0 7.438-3.055 7.931-7H17.91z"})));break;case"gridicons-refund":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13.91 2.91L11.83 5H14a8 8 0 018 8h-2a6 6 0 00-6-6h-2.17l2.09 2.09-1.42 1.41L8 6l1.41-1.41L12.5 1.5l1.41 1.41zM2 12v10h16V12H2zm2 6.56v-3.11A4 4 0 005.45 14h9.1A4 4 0 0016 15.45v3.11A3.996 3.996 0 0014.57 20H5.45A3.996 3.996 0 004 18.56zm6 .44c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2z"})));break;case"gridicons-reply":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M9 16h7.2l-2.6 2.6L15 20l5-5-5-5-1.4 1.4 2.6 2.6H9c-2.2 0-4-1.8-4-4s1.8-4 4-4h2V4H9c-3.3 0-6 2.7-6 6s2.7 6 6 6z"})));break;case"gridicons-resize":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M13 4v2h3.59L6 16.59V13H4v7h7v-2H7.41L18 7.41V11h2V4h-7z"})));break;case"gridicons-rotate":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 14v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h10a2 2 0 012 2zM13.914 2.914L11.828 5H14a8 8 0 018 8h-2c0-3.308-2.692-6-6-6h-2.172l2.086 2.086L12.5 10.5 8 6l1.414-1.414L12.5 1.5l1.414 1.414z"})));break;case"gridicons-scheduled":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M10.498 18.001l-3.705-3.705 1.415-1.415 2.294 2.294 5.293-5.293 1.415 1.415-6.712 6.704zM21 6v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V2h2v2h8V2h2v2h1a2 2 0 012 2zm-2 2H5v11h14V8z"})));break;case"gridicons-science":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.211 19.7c.375.867 1.01 1.3 1.909 1.3h13.76c.898 0 1.535-.433 1.909-1.3.374-.867.251-1.656-.37-2.367L15.465 11V5h1.668a.917.917 0 00.69-.283.992.992 0 00.273-.717.992.992 0 00-.273-.717.917.917 0 00-.69-.283H6.867a.916.916 0 00-.69.283.992.992 0 00-.272.717c0 .289.091.528.273.717a.916.916 0 00.69.283h1.668v6L3.58 17.333c-.62.711-.743 1.5-.369 2.367zm4.457-4.423h8.664l-2.792-3.544V5h-3.08v6.733l-2.792 3.544z"})));break;case"gridicons-search":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 19l-5.154-5.154a7 7 0 10-2 2L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"})));break;case"gridicons-share-computer":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h6v2H7v2h10v-2h-3v-2h6a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H4V4h16zm-3.25-3a1.75 1.75 0 01-3.5 0L10 11.36a1.71 1.71 0 110-2.71L13.25 7a1.77 1.77 0 11.68 1.37L10.71 10l3.22 1.61A1.74 1.74 0 0116.75 13z"})));break;case"gridicons-share-ios":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2v2H5v9h14v-9h-2V8zM6.5 5.5l1.414 1.414L11 3.828V14h2V3.828l3.086 3.086L17.5 5.5 12 0 6.5 5.5z"})));break;case"gridicons-share":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 16c-.788 0-1.499.31-2.034.807L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.048 4.118A2.981 2.981 0 0015 19a3 3 0 103-3z"})));break;case"gridicons-shipping":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 8h-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10h2a3 3 0 106 0h4a3 3 0 106 0h2v-5l-4-4zM7 18.5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 017 18.5zM4 14V7h10v7H4zm13 4.5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0117 18.5z"})));break;case"gridicons-shutter":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18.9 4.8s-.7 5.6-3.5 10.2c1.7-.3 3.9-.9 6.6-2 0 0 .7-4.6-3.1-8.2zm-6 2.8c-1.1-1.3-2.7-3-5-4.7C5.1 4.2 3 6.6 2.3 9.6 7 7.7 11 7.5 12.9 7.6zm3.4 2.9c.6-1.6 1.2-3.9 1.6-6.7-4.1-3-8.6-1.5-8.6-1.5s4.4 3.4 7 8.2zm-5.2 6c1.1 1.3 2.7 3 5 4.7 0 0 4.3-1.6 5.6-6.7 0-.1-5.3 2.1-10.6 2zm-3.4-3.1c-.6 1.6-1.2 3.8-1.5 6.7 0 0 3.6 2.9 8.6 1.5 0 0-4.6-3.4-7.1-8.2zM2 11.1s-.7 4.5 3.1 8.2c0 0 .7-5.7 3.5-10.3-1.7.3-4 .9-6.6 2.1z"})));break;case"gridicons-sign-out":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 17v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h9a2 2 0 012 2v2h-2V5H5v14h9v-2h2zm2.5-10.5l-1.414 1.414L20.172 11H10v2h10.172l-3.086 3.086L18.5 17.5 24 12l-5.5-5.5z"})));break;case"gridicons-site":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zm-5 14H6v-7h7zm5 0h-3v-7h3zm0-9H6V6h12z"})));break;case"gridicons-spam":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 2H7L2 7v10l5 5h10l5-5V7l-5-5zm-4 15h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z"})));break;case"gridicons-speaker":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 8v6c1.7 0 3-1.3 3-3s-1.3-3-3-3zM11 7H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v3c0 1.1.9 2 2 2h2v-5h2l4 4h2V3h-2l-4 4z"})));break;case"gridicons-special-character":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12.005 7.418c-1.237 0-2.191.376-2.861 1.128S8.14 10.358 8.14 11.725c0 1.388.226 2.514.677 3.378.451.865 1.135 1.543 2.051 2.036V20H5v-2.666h3.119a6.427 6.427 0 01-2.404-2.6c-.564-1.097-.846-2.322-.846-3.676 0-1.258.292-2.363.876-3.317.585-.953 1.417-1.686 2.497-2.199s2.334-.769 3.763-.769c2.181 0 3.915.571 5.204 1.712s1.933 2.673 1.933 4.594c0 1.354-.283 2.57-.852 3.65a6.655 6.655 0 01-2.44 2.604H19V20h-5.908v-2.861c.95-.492 1.651-1.179 2.102-2.061s.677-2.006.677-3.374c0-1.36-.337-2.415-1.01-3.164-.673-.747-1.625-1.122-2.856-1.122z"})));break;case"gridicons-star-outline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 6.308l1.176 3.167.347.936.997.041 3.374.139-2.647 2.092-.784.62.27.962.911 3.249-2.814-1.871-.83-.553-.83.552-2.814 1.871.911-3.249.27-.962-.784-.62-2.648-2.092 3.374-.139.997-.041.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.891 18.18 21l-2.002-7.141L22 9.257l-7.418-.305L12 2z"})));break;case"gridicons-star":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.891 5.82 21l2.002-7.141L2 9.257l7.418-.304z"})));break;case"gridicons-stats-alt-2":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8.143 15.857H5.57V9.43h2.572v6.428zM13.286 15.857h-2.572V3h2.572v12.857zM18.428 15.857h-2.571v-9h2.571v9z"}),_react["default"].createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 20.714H3v-2h18v2z"})));break;case"gridicons-stats-alt":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z"})));break;case"gridicons-stats-down-alt":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 21H3v-2h18v2zM8 3H4v14h4V3zm6 3h-4v11h4V6zm6 4h-4v7h4v-7z"})));break;case"gridicons-stats-down":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zM9 17H7V7h2v10zm4 0h-2v-7h2v7zm4 0h-2v-5h2v5z"})));break;case"gridicons-stats-up-alt":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-4h-4v11h4V6zm6-3h-4v14h4V3z"})));break;case"gridicons-stats-up":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zM9 17H7v-5h2v5zm4 0h-2v-7h2v7zm4 0h-2V7h2v10z"})));break;case"gridicons-stats":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-7h2v7z"})));break;case"gridicons-status":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.55 13c-.019.166-.05.329-.05.5a4.5 4.5 0 009 0c0-.171-.032-.334-.05-.5h-8.9zM10 10V8a1 1 0 00-2 0v2a1 1 0 002 0zm6 0V8a1 1 0 00-2 0v2a1 1 0 002 0z"})));break;case"gridicons-story":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 5a2 2 0 012 2v13a2 2 0 01-2 2h-7a2 2 0 01-2-2h9z"}),_react["default"].createElement("path",{d:"M13 4H5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2z"}),_react["default"].createElement("path",{d:"M7 16h8a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"})));break;case"gridicons-strikethrough":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M14.348 12H21v2h-4.613c.239.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.759-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.439 1.818.749 2.5.928.682.181 1.306.27 1.872.27.679 0 1.2-.129 1.562-.39.363-.259.545-.644.545-1.158 0-.285-.08-.54-.24-.763a2.687 2.687 0 00-.704-.643c-.18-.12-.482-.287-.88-.491H3v-2h11.348zm-3.528-2a1.569 1.569 0 01-.193-.235 1.323 1.323 0 01-.189-.713c0-.439.156-.795.469-1.068.313-.273.762-.409 1.348-.409.492 0 .993.063 1.502.19.509.126 1.153.349 1.931.669l.998-2.405a14.867 14.867 0 00-2.16-.758A8.521 8.521 0 0012.354 5c-1.544 0-2.753.369-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"})));break;case"gridicons-sync":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M23.5 13.5l-3.086 3.086L19 18l-4.5-4.5 1.414-1.414L18 14.172V12c0-3.308-2.692-6-6-6V4a8 8 0 018 8v2.172l2.086-2.086L23.5 13.5zM6 12V9.828l2.086 2.086L9.5 10.5 5 6 3.586 7.414.5 10.5l1.414 1.414L4 9.828V12a8 8 0 008 8v-2c-3.308 0-6-2.692-6-6z"})));break;case"gridicons-tablet":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-5 19h-2v-1h2v1zm5-2H6V5h12v14z"})));break;case"gridicons-tag":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M20 2.007h-7.087a2 2 0 00-1.414.586l-8.906 8.906a2 2 0 000 2.828l7.086 7.086a2 2 0 002.828 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007a2 2 0 00-2-2zM17.007 9a2 2 0 11-.001-3.999A2 2 0 0117.007 9z"})));break;case"gridicons-text-color":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 19h18v3H3v-3zM15.82 17h3.424L14 3h-4L4.756 17h3.425l1.066-3.5h5.506L15.82 17zm-1.952-6h-3.73l1.868-5.725L13.868 11z"})));break;case"gridicons-themes":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2H4V6zm16-4H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-5 14H8V9h7v7zm5 0h-3V9h3v7zm0-9H8V4h12v3z"})));break;case"gridicons-thumbs-up":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6.7 22H2v-9h2l2.7 9zM19.999 9H14V5a3 3 0 00-3-3h-1v4L7.1 9.625A5.02 5.02 0 006 12.76V14l2.1 7h8.337a4 4 0 003.881-3.03l1.621-6.485A2 2 0 0019.999 9z"})));break;case"gridicons-time":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 13.4L13 11.667V7h-2v5.333l3.2 4.266 1.6-1.199z"})));break;case"gridicons-trash":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M6.187 8h11.625l-.695 11.125A2 2 0 0115.121 21H8.879a2 2 0 01-1.996-1.875L6.187 8zM19 5v2H5V5h3V4a2 2 0 012-2h4a2 2 0 012 2v1h3zm-9 0h4V4h-4v1z"})));break;case"gridicons-trending":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"})));break;case"gridicons-trophy":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18 5.062V3H6v2.062H2V8c0 2.525 1.889 4.598 4.324 4.932A5.998 5.998 0 0011 16.91V18a2 2 0 01-2 2H8v2h8v-2h-1a2 2 0 01-2-2v-1.09a5.998 5.998 0 004.676-3.978C20.111 12.598 22 10.525 22 8V5.062h-4zM4 8v-.938h2v3.766A3.004 3.004 0 014 8zm16 0a3.006 3.006 0 01-2 2.829V7.062h2V8z"})));break;case"gridicons-types":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M22 17a5 5 0 11-10.001-.001A5 5 0 0122 17zM6.5 6.5h3.8L7 1 1 11h5.5V6.5zm9.5 4.085V8H8v8h2.585A6.505 6.505 0 0116 10.585z"})));break;case"gridicons-underline":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M4 19v2h16v-2H4zM18 3v8a6 6 0 11-12 0V3h3v8c0 1.654 1.346 3 3 3s3-1.346 3-3V3h3z"})));break;case"gridicons-undo":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M18.142 5.929c-1.172-1.172-2.707-1.757-4.243-1.757s-3.071.586-4.243 1.757L6 9.586V6H4v7h7v-2H7.414l3.657-3.657a3.975 3.975 0 012.828-1.172c1.068 0 2.073.416 2.828 1.172a4.004 4.004 0 010 5.657l-5.364 5.364 1.414 1.414 5.364-5.364a5.999 5.999 0 00.001-8.485z"})));break;case"gridicons-user-add":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("circle",{cx:"15",cy:"8",r:"4"}),_react["default"].createElement("path",{d:"M15 20s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2zM6 10V7H4v3H1v2h3v3h2v-3h3v-2z"})));break;case"gridicons-user-circle":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.5a8.5 8.5 0 11.001-17.001A8.5 8.5 0 0112 20.5zm0-8c-3.038 0-5.5 1.728-5.5 3.5s2.462 3.5 5.5 3.5 5.5-1.728 5.5-3.5-2.462-3.5-5.5-3.5zm0-.5a3 3 0 100-6 3 3 0 000 6z"})));break;case"gridicons-user":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4a4 4 0 110 8 4 4 0 010-8zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2z"})));break;case"gridicons-video-camera":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17 9V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2v-2l5 4V5l-5 4z"})));break;case"gridicons-video-remove":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19.42 4.59l1.167-1.167 1.414 1.414L20 6.84V18a2 2 0 01-2 2v-2h-2v2H6.839l-2.006 2.006-1.414-1.414L4.59 19.42a2.011 2.011 0 01-.01-.01L8 16 18 6l1.41-1.42.01.01zM15.84 11V11H18V8.839l-2.16 2.16zM16 8.01L16.01 8H16v.011zM6 15.17l-2 2V6a2 2 0 012-2v2h2V4h9.17l-9 9H6v2.17zM6 8v3h2V8H6zm12 8v-3h-2v3h2z"})));break;case"gridicons-video":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M8.001 4h8v1.997h2V4A2 2 0 0120 6v12a2 2 0 01-1.999 2v-2.003h-2V20h-8v-2.003h-2V20H6a2 2 0 01-2-2V6a2 2 0 012-2h.001v1.997h2V4zM10 15l4.5-3L10 9v6zm8.001.997v-3h-2v3h2zm0-5v-3h-2v3h2zm-10 5v-3h-2v3h2zm0-5v-3h-2v3h2z"})));break;case"gridicons-visible":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 6C5.188 6 1 12 1 12s4.188 6 11 6 11-6 11-6-4.188-6-11-6zm0 10c-3.943 0-6.926-2.484-8.379-4 1.04-1.085 2.862-2.657 5.254-3.469A3.96 3.96 0 008 11a4 4 0 008 0 3.96 3.96 0 00-.875-2.469c2.393.812 4.216 2.385 5.254 3.469-1.455 1.518-4.437 4-8.379 4z"})));break;case"gridicons-zoom-in":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M15.8 13.8c.7-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.4 0 2.7-.4 3.8-1.2L19 21l2-2-5.2-5.2zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"}),_react["default"].createElement("path",{d:"M11 7H9v2H7v2h2v2h2v-2h2V9h-2z"})));break;case"gridicons-zoom-out":e=_react["default"].createElement("svg",_extends({className:g,height:a,width:a,onClick:l},h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 10c0 3.9 3.1 7 7 7 1.4 0 2.7-.5 3.8-1.2L19 21l2-2-5.2-5.2c.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7s-7 3.1-7 7zm2 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"}),_react["default"].createElement("path",{d:"M7 9h6v2H7z"})));}return e}}]),t}(_react.PureComponent);exports["default"]=Gridicon,_defineProperty(Gridicon,"defaultProps",{size:24}),_defineProperty(Gridicon,"propTypes",{icon:_propTypes["default"].string.isRequired,size:_propTypes["default"].number,onClick:_propTypes["default"].func,className:_propTypes["default"].string});


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/a2cp/editor.scss":
/*!******************************!*\
  !*** ./src/a2cp/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/a2cp/style.scss":
/*!*****************************!*\
  !*** ./src/a2cp/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rafSchd);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropContext: () => (/* binding */ DragDropContext),
/* harmony export */   Draggable: () => (/* binding */ PublicDraggable),
/* harmony export */   Droppable: () => (/* binding */ ConnectedDroppable),
/* harmony export */   resetServerContext: () => (/* binding */ resetServerContext),
/* harmony export */   useKeyboardSensor: () => (/* binding */ useKeyboardSensor),
/* harmony export */   useMouseSensor: () => (/* binding */ useMouseSensor),
/* harmony export */   useTouchSensor: () => (/* binding */ useTouchSensor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);











var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
function log(type, message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console)[type].apply(_console, getFormattedMessage(message));
}
var warning = log.bind(null, 'warn');
var error = log.bind(null, 'error');

function noop() {}

function getOptions(shared, fromBinding) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, shared, {}, fromBinding);
}

function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function (unbind) {
      unbind();
    });
  };
}

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
function RbdInvariant(message) {
  this.message = message;
}

RbdInvariant.prototype.toString = function toString() {
  return this.message;
};

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(prefix + ": " + (message || ''));
  }
}

var ErrorBoundary = function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;

    _this.onWindowError = function (event) {
      var callbacks = _this.getCallbacks();

      if (callbacks.isDragging()) {
        callbacks.tryAbort();
         true ? warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : 0;
      }

      var err = event.error;

      if (err instanceof RbdInvariant) {
        event.preventDefault();

        if (true) {
          error(err.message);
        }
      }
    };

    _this.getCallbacks = function () {
      if (!_this.callbacks) {
        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
      }

      return _this.callbacks;
    };

    _this.setCallbacks = function (callbacks) {
      _this.callbacks = callbacks;
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: 'error',
      fn: this.onWindowError
    }]);
  };

  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }

      this.setState({});
      return;
    }

    throw err;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };

  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };

  return ErrorBoundary;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  dragHandleUsageInstructions: dragHandleUsageInstructions,
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? invariant(false) : 0 : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }

  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }

  return Object.keys(map).map(function (key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}

var toDroppableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return values(draggables);
});

var getDraggablesInsideDroppable = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

function tryGetDestination(impact) {
  if (impact.at && impact.at.type === 'REORDER') {
    return impact.at.destination;
  }

  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at.combine;
  }

  return null;
}

var removeDraggableFromList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var location = tryGetDestination(previousImpact);

  if (!location) {
    return null;
  }

  function getImpact(target) {
    var at = {
      type: 'COMBINE',
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, previousImpact, {
      at: at
    });
  }

  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;

  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }

  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }

    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }

  var indexOfClosest = findIndex(withoutDraggable, function (d) {
    return d.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ?  true ? invariant(false, 'Could not find displaced item in set') : 0 : void 0;
  var proposedIndex = indexOfClosest - 1;

  if (proposedIndex < 0) {
    return null;
  }

  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!last) {
    return true;
  }

  var invisible = last.invisible,
      visible = last.visible;

  if (invisible[id]) {
    return false;
  }

  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};

function getTarget(draggable, displacedBy) {
  var marginBox = draggable.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)((0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(marginBox, expandBy));
}

function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging,
      destination = _ref.destination,
      displacedBy = _ref.displacedBy,
      viewport = _ref.viewport,
      forceShouldAnimate = _ref.forceShouldAnimate,
      last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable) {
    var target = getTarget(draggable, displacedBy);
    var id = draggable.descriptor.id;
    groups.all.push(id);
    var isVisible = isPartiallyVisible({
      target: target,
      destination: destination,
      viewport: viewport,
      withDroppableDisplacement: true
    });

    if (!isVisible) {
      groups.invisible[draggable.descriptor.id] = true;
      return groups;
    }

    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate: shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}

function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }

  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}

function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination,
      inHomeList = _ref.inHomeList,
      displacedBy = _ref.displacedBy,
      destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList: inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}

function calculateReorderImpact(_ref2) {
  var draggable = _ref2.draggable,
      insideDestination = _ref2.insideDestination,
      destination = _ref2.destination,
      viewport = _ref2.viewport,
      displacedBy = _ref2.displacedBy,
      last = _ref2.last,
      index = _ref2.index,
      forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable, destination);

  if (index == null) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var match = find(insideDestination, function (item) {
    return item.descriptor.index === index;
  });

  if (!match) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var sliceFrom = insideDestination.indexOf(match);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination: destination,
    displacedBy: displacedBy,
    last: last,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate
  });
  return {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: index
      }
    }
  };
}

function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      draggables = _ref.draggables,
      combine = _ref.combine,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var combineId = combine.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }

    return combineWithIndex - 1;
  }

  if (isMovingForward) {
    return combineWithIndex + 1;
  }

  return combineWithIndex;
});

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      insideDestination = _ref.insideDestination,
      location = _ref.location;

  if (!insideDestination.length) {
    return null;
  }

  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

  if (proposedIndex < firstIndex) {
    return null;
  }

  if (proposedIndex > upperBound) {
    return null;
  }

  return proposedIndex;
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ?  true ? invariant(false, 'Cannot move in direction without previous impact location') : 0 : void 0;

  if (wasAt.type === 'REORDER') {
    var _newIndex = fromReorder({
      isMovingForward: isMovingForward,
      isInHomeList: isInHomeList,
      location: wasAt.destination,
      insideDestination: insideDestination
    });

    if (_newIndex == null) {
      return null;
    }

    return calculateReorderImpact({
      draggable: draggable,
      insideDestination: insideDestination,
      destination: destination,
      viewport: viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }

  var newIndex = fromCombine({
    isMovingForward: isMovingForward,
    destination: destination,
    displaced: previousImpact.displaced,
    draggables: draggables,
    combine: wasAt.combine,
    afterCritical: afterCritical
  });

  if (newIndex == null) {
    return null;
  }

  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      afterCritical = _ref.afterCritical,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var whenCombining = (function (_ref) {
  var afterCritical = _ref.afterCritical,
      impact = _ref.impact,
      draggables = _ref.draggables;
  var combine = tryGetCombine(impact);
  !combine ?  true ? invariant(false) : 0 : void 0;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical: afterCritical,
    combineWith: combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = impact.displaced,
      displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];

  if (closestAfter) {
    var closest = draggables[closestAfter];

    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closest.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(closest.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      afterCritical = _ref.afterCritical;
  var original = draggable.page.borderBox.center;
  var at = impact.at;

  if (!droppable) {
    return original;
  }

  if (!at) {
    return original;
  }

  if (at.type === 'REORDER') {
    return whenReordering({
      impact: impact,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      afterCritical: afterCritical
    });
  }

  return whenCombining({
    impact: impact,
    draggables: draggables,
    afterCritical: afterCritical
  });
};

var getPageBorderBoxCenterFromImpact = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

function getDraggables(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];

    if (displacement) {
      return displacement;
    }
  }

  return null;
}

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var withDroppableScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll];
  last.all.forEach(function (id) {
    var displacement = tryGetVisible(id, groups);

    if (displacement) {
      visible[id] = displacement;
      return;
    }

    invisible[id] = true;
  });

  var newImpact = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: {
      all: last.all,
      invisible: invisible,
      visible: visible
    }
  });

  return newImpact;
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      afterCritical = _ref.afterCritical;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? invariant(false, 'Cannot get clipped area from droppable') : 0 : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
  var original = draggable.page.borderBox.center;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
  var original = draggable.page.borderBox;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, afterCritical),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var getDisplacedBy = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function getDisplacedBy(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;

  if (droppable.descriptor.mode === 'virtual') {
    return patch(axis.line, placeholderSize[axis.line]);
  }

  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame, {
    scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? invariant(false, 'Should not add placeholder space to home list') : 0 : void 0;
  !!droppable.subject.withPlaceholder ?  true ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : 0 : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? invariant(false, 'Cannot remove placeholder form subject when there was none') : 0 : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : 0 : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: 'REORDER',
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      afterCritical: afterCritical
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

  var proposedIndex = function () {
    var relativeTo = moveRelativeTo.descriptor.index;

    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return relativeTo;
    }

    if (isGoingBeforeTarget) {
      return relativeTo;
    }

    return relativeTo + 1;
  }();

  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    displacedBy: displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var whatIsDraggedOver = (function (impact) {
  var at = impact.at;

  if (!at) {
    return null;
  }

  if (at.type === 'REORDER') {
    return at.destination.droppableId;
  }

  return at.combine.droppableId;
});

var getDroppableOver = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}

function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}

function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox,
      draggable = _ref.draggable,
      candidates = _ref.candidates;
  var startCenter = draggable.page.borderBox.center;
  var sorted = candidates.map(function (candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function (a, b) {
    return b.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}

function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox,
      draggable = _ref2.draggable,
      droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function (item) {
    if (!item.isEnabled) {
      return false;
    }

    var active = item.subject.active;

    if (!active) {
      return false;
    }

    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }

    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }

    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);

    if (!isStartContained && !isEndContained) {
      return true;
    }

    if (isStartContained) {
      return crossAxisStart < childCenter;
    }

    return crossAxisEnd > childCenter;
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }

  return getFurthestAway({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    candidates: candidates
  });
}

var offsetRectByPosition = function offsetRectByPosition(rect, point) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(offsetByPosition(rect, point));
};

var withDroppableScroll = (function (droppable, area) {
  var frame = droppable.frame;

  if (!frame) {
    return area;
  }

  return offsetRectByPosition(area, frame.scroll.diff.value);
});

function getIsDisplaced(_ref) {
  var displaced = _ref.displaced,
      id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}

function atIndex(_ref) {
  var draggable = _ref.draggable,
      closest = _ref.closest,
      inHomeList = _ref.inHomeList;

  if (!closest) {
    return null;
  }

  if (!inHomeList) {
    return closest.descriptor.index;
  }

  if (closest.descriptor.index > draggable.descriptor.index) {
    return closest.descriptor.index - 1;
  }

  return closest.descriptor.index;
}

var getReorderImpact = (function (_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
      draggable = _ref2.draggable,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      last = _ref2.last,
      viewport = _ref2.viewport,
      afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var closest = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }

      return targetStart < childCenter - displacement;
    }

    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }

    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable,
    closest: closest,
    inHomeList: isHomeOf(draggable, destination)
  });
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: last,
    displacedBy: displacedBy,
    index: newIndex
  });
});

var combineThresholdDivisor = 4;
var getCombineImpact = (function (_ref) {
  var draggable = _ref.draggable,
      targetRect = _ref.pageBorderBoxWithDroppableScroll,
      previousImpact = _ref.previousImpact,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var combineWith = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }

      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }

    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }

    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });

  if (!combineWith) {
    return null;
  }

  var impact = {
    displacedBy: displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: 'COMBINE',
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageOffset = _ref.pageOffset,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    previousImpact: previousImpact,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    last: previousImpact.displaced,
    viewport: viewport,
    afterCritical: afterCritical
  });
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    current: current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

function getDraggables$1(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      destination = _ref.destination,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate,
    last: last
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: displaced
  });
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    afterCritical: afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? invariant(false) : 0 : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? invariant(false, 'Must be over a destination in SNAP movement mode') : 0 : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getLiftEffect = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable);
  !(rawIndex !== -1) ?  true ? invariant(false, 'Expected draggable to be inside home list') : 0 : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home.descriptor.mode === 'virtual',
    displacedBy: displacedBy,
    effected: effected
  };
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: home,
    displacedBy: displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: getHomeLocation(draggable.descriptor)
    }
  };
  return {
    impact: impact,
    afterCritical: afterCritical
  };
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var start = function start(key) {
  if (true) {
    {
      return;
    }
  }
};
var finish = function finish(key) {
  if (true) {
    {
      return;
    }
  }
};

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(draggable.client, offset$1);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, initialWindowScroll);

  var moved = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable, {
    placeholder: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? invariant(false, 'Expected Droppable to have a frame') : 0 : void 0;
  return frame;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var publishWhileDraggingInVirtual = (function (_ref) {
  var state = _ref.state,
      published = _ref.published;
  start();
  var withScrollChange = published.modified.map(function (update) {
    var existing = state.dimensions.droppables[update.droppableId];
    var scrolled = scrollDroppable(existing, update.scroll);
    return scrolled;
  });

  var droppables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));

  var draggables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.draggables, {}, updatedAdditions);

  published.removals.forEach(function (id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables: droppables,
    draggables: draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable = dimensions.draggables[state.critical.draggable.id];
  var home = dimensions.droppables[state.critical.droppable.id];

  var _getLiftEffect = getLiftEffect({
    draggable: draggable,
    home: home,
    draggables: draggables,
    viewport: state.viewport
  }),
      onLiftImpact = _getLiftEffect.impact,
      afterCritical = _getLiftEffect.afterCritical;

  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: previousImpact,
    viewport: state.viewport,
    afterCritical: afterCritical
  });
  finish();

  var draggingState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DRAGGING'
  }, state, {
    phase: 'DRAGGING',
    impact: impact,
    onLiftImpact: onLiftImpact,
    dimensions: dimensions,
    afterCritical: afterCritical,
    forceShouldAnimate: false
  });

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, {
    phase: 'DROP_PENDING',
    reason: state.reason,
    isWaiting: false
  });

  return dropPending;
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === 'SNAP') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      scrollJumpRequest: null
    });
  }

  return state;
}

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'FLUSH') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idle, {
      shouldFlush: true
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : 0 : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getLiftEffect = getLiftEffect({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getLiftEffect.impact,
        afterCritical = _getLiftEffect.afterCritical;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      afterCritical: afterCritical,
      onLiftImpact: impact,
      viewport: viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, "Collection cannot start from phase " + state.phase) : 0 : void 0;

    var _result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : 0 : void 0;
    return publishWhileDraggingInVirtual({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return removeScrollJumpRequest(state);
    }

    if (state.phase === 'COLLECTING') {
      return removeScrollJumpRequest(state);
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : 0 : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : 0 : void 0;

    var updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : 0 : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : 0 : void 0;

    var _updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Cannot move by window in phase " + state.phase) : 0 : void 0;
    !state.isWindowScrollAllowed ?  true ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : 0 : void 0;
    var _newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }

    var _viewport = scrollViewport(state.viewport, _newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport, {
      scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, action.type + " received while not in DRAGGING phase") : 0 : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : 0 : void 0;

    var newState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot animate drop from phase " + state.phase) : 0 : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _completed = action.payload.completed;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: false
    };
  }

  return state;
});

var beforeInitialCapture = function beforeInitialCapture(args) {
  return {
    type: 'BEFORE_INITIAL_CAPTURE',
    payload: args
  };
};
var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var flush = function flush() {
  return {
    type: 'FLUSH',
    payload: null
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }

  var indexes = insideDestination.map(function (d) {
    return d.descriptor.index;
  });
  var errors = {};

  for (var i = 1; i < indexes.length; i++) {
    var current = indexes[i];
    var previous = indexes[i - 1];

    if (current !== previous + 1) {
      errors[current] = true;
    }
  }

  if (!Object.keys(errors).length) {
    return;
  }

  var formatted = indexes.map(function (index) {
    var hasError = Boolean(errors[index]);
    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
  }).join(', ');
   true ? warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : 0;
}

function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? invariant(false, 'Unexpected phase to start a drag') : 0 : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id,
          movementMode: movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        validateDimensions(critical, dimensions);
        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    afterCritical: afterCritical,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  return offset;
});

var getDropImpact = (function (_ref) {
  var draggables = _ref.draggables,
      reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      onLiftImpact = _ref.onLiftImpact;

  if (!lastImpact.at || reason !== 'DROP') {
    var recomputedHomeImpact = recompute({
      draggables: draggables,
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }

  if (lastImpact.at.type === 'REORDER') {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }

  var withoutMovement = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, lastImpact, {
    displaced: emptyGroups
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : 0 : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot drop in phase: " + state.phase) : 0 : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable = dimensions.draggables[state.critical.draggable.id];

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

function getWindowScrollBinding(update) {
  return {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }

      update();
    }
  };
}

function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;

  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }

  var scheduled = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;

  function isActive() {
    return unbind !== noop;
  }

  function start() {
    !!isActive() ?  true ? invariant(false, 'Cannot start scroll listener when already active') : 0 : void 0;
    unbind = bindEvents(window, [binding]);
  }

  function stop() {
    !isActive() ?  true ? invariant(false, 'Cannot stop scroll listener when not active') : 0 : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }

  return {
    start: start,
    stop: stop,
    isActive: isActive
  };
}

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var scrollListener = (function (store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll: newScroll
      }));
    }
  });
  return function (next) {
    return function (action) {
      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
        listener.start();
      }

      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }

      next(action);
    };
  };
});

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : 0;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : 0;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? invariant(false, 'Could not find timer') : 0 : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start();
  fn();
  finish();
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeCapture = function beforeCapture(draggableId, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeCapture', function () {
      var fn = getResponders().onBeforeCapture;

      if (fn) {
        var before = {
          draggableId: draggableId,
          mode: mode
        };
        fn(before);
      }
    });
  };

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = tryGetDestination(impact);
    var combine = tryGetCombine(impact);
    !dragging ?  true ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : 0 : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? invariant(false, 'Can only flush responders while dragging') : 0 : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : 0 : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeCapture: beforeCapture,
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'BEFORE_INITIAL_CAPTURE') {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'FLUSH') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : 0 : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
});

var dropAnimationFlushOnScroll = (function (store) {
  var unbind = null;
  var frameId = null;

  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (unbind) {
      unbind();
      unbind = null;
    }
  }

  return function (next) {
    return function (action) {
      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
        clear();
      }

      next(action);

      if (action.type !== 'DROP_ANIMATE') {
        return;
      }

      var binding = {
        eventName: 'scroll',
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();

          if (state.phase === 'DROP_ANIMATING') {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function () {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var focus = (function (marshal) {
  var isWatching = false;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }

        next(action);

        if (!isWatching) {
          return;
        }

        if (action.type === 'FLUSH') {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          isWatching = false;
          var result = action.payload.completed.result;

          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }

          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
});

var shouldStop = function shouldStop(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : 0 : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'react-beautiful-dnd'
}) : redux__WEBPACK_IMPORTED_MODULE_8__.compose;
var createStore = (function (_ref) {
  var dimensionMarshal = _ref.dimensionMarshal,
      focusMarshal = _ref.focusMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(reducer, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
});

var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry,
      callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;

  var collect = function collect() {
    if (frameId) {
      return;
    }

    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function () {
      frameId = null;
      start();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;
      var added = Object.keys(additions).map(function (id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });
      var updated = Object.keys(modified).map(function (id) {
        var entry = registry.droppable.getById(id);
        var scroll = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      finish();
      callbacks.publish(result);
    });
  };

  var add = function add(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;

    if (staging.removals[id]) {
      delete staging.removals[id];
    }

    collect();
  };

  var remove = function remove(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
}

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? invariant(false, 'Cannot find document.documentElement') : 0 : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      registry = _ref.registry;
  start();
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish();
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }

  if (entry.descriptor.type !== dragging.type) {
    return false;
  }

  var home = registry.droppable.getById(entry.descriptor.droppableId);

  if (home.descriptor.mode !== 'virtual') {
     true ? warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : 0;
    return false;
  }

  return true;
}

var createDimensionMarshal = (function (registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry: registry
  });

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableScroll({
      id: id,
      newScroll: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    if (!collection) {
      return;
    }

    registry.droppable.getById(id).callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    registry.droppable.getAllByType(home.type).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };

  var subscriber = function subscriber(event) {
    !collection ?  true ? invariant(false, 'Should only be subscribed when a collection is occurring') : 0 : void 0;
    var dragging = collection.critical.draggable;

    if (event.type === 'ADDITION') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }

    if (event.type === 'REMOVAL') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : 0 : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical: critical,
      unsubscribe: unsubscribe
    };
    return getInitialPublish({
      critical: critical,
      registry: registry,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getScrollableDroppables = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? invariant(false, 'Invalid result') : 0 : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : 0;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$2 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$2({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollWindow);
  var scheduleDroppableScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? invariant(false, 'Cannot fluid scroll if not dragging') : 0 : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var start$1 = function start$1(state) {
    start();
    !!dragging ?  true ? invariant(false, 'Cannot start auto scrolling when already started') : 0 : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish();

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : 0 : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = 'data-rbd';
var dragHandle = function () {
  var base = prefix$1 + "-drag-handle";
  return {
    base: base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function () {
  var base = prefix$1 + "-draggable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function () {
  var base = prefix$1 + "-droppable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (contextId) {
  var getSelector = makeGetSelector(contextId);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? invariant(false, 'Cannot find the head to append a style to') : 0 : void 0;
  return head;
};

var createStyleEl = function createStyleEl(nonce) {
  var el = document.createElement('style');

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  el.type = 'text/css';
  return el;
};

function useStyleMarshal(contextId, nonce) {
  var styles = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dynamicRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setDynamicStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)((0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? invariant(false, 'style elements already mounted') : 0 : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? invariant(false, 'Cannot unmount ref as it is not set') : 0 : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));

  if (!possible.length) {
     true ? warning("Unable to find any drag handles in the context \"" + contextId + "\"") : 0;
    return null;
  }

  var handle = find(possible, function (el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });

  if (!handle) {
     true ? warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") : 0;
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle needs to be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function useFocusMarshal(contextId) {
  var entriesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var recordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var restoreFocusFrameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var register = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function register(id, focus) {
    var entry = {
      id: id,
      focus: focus
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];

      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryGiveFocus(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);

    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryShiftRecord(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRestoreFocusRecorded() {
    if (restoreFocusFrameRef.current) {
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    restoreFocusFrameRef.current = requestAnimationFrame(function () {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;

      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRecordFocus(id) {
    recordRef.current = null;
    var focused = document.activeElement;

    if (!focused) {
      return;
    }

    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }

    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function () {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      register: register,
      tryRecordFocus: tryRecordFocus,
      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
      tryShiftRecord: tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}

function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];

  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb);

      if (index === -1) {
        return;
      }

      subscribers.splice(index, 1);
    };
  }

  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }

  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ?  true ? invariant(false, "Cannot find draggable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: 'ADDITION',
        value: entry
      });
    },
    update: function update(entry, last) {
      var current = entries.draggables[last.descriptor.id];

      if (!current) {
        return;
      }

      if (current.uniqueId !== entry.uniqueId) {
        return;
      }

      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.draggables[draggableId];
      notify({
        type: 'REMOVAL',
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }

  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ?  true ? invariant(false, "Cannot find droppable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function clean() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }

  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe: subscribe,
    clean: clean
  };
}

function useRegistry() {
  var registry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(createRegistry, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? invariant(false, 'Cannot find document.body') : 0 : void 0;
  return body;
});

var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getId = function getId(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getId(contextId);
  }, [contextId]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function setup() {
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('aria-atomic', 'true');

    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();

        if (body.contains(el)) {
          body.removeChild(el);
        }

        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id]);
  var announce = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : 0;
  }, []);
  return announce;
}

var count = 0;
var defaults = {
  separator: '::'
};
function reset() {
  count = 0;
}
function useUniqueId(prefix, options) {
  if (options === void 0) {
    options = defaults;
  }

  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + prefix + options.separator + count++;
  }, [options.separator, prefix]);
}

function getElementId(_ref) {
  var contextId = _ref.contextId,
      uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId,
      text = _ref2.text;
  var uniqueId = useUniqueId('hidden-text', {
    separator: '-'
  });
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getElementId({
      contextId: contextId,
      uniqueId: uniqueId
    });
  }, [uniqueId, contextId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function mount() {
    var el = document.createElement('div');
    el.id = id;
    el.textContent = text;
    el.style.display = 'none';
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();

      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

var peerDependencies = {
	react: "^16.8.5 || ^17.0.0 || ^18.0.0",
	"react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? invariant(false, "Unable to parse React version " + value) : 0 : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : 0;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : 0;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : 0;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : 0;
  }
});

function useDev(useHook) {
  if (true) {
    useHook();
  }
}

function useDevSetupWarning(fn, inputs) {
  useDev(function () {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      try {
        fn();
      } catch (e) {
        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
      }
    }, inputs);
  });
}

function useStartupValidation() {
  useDevSetupWarning(function () {
    checkReactVersion(peerDependencies.react, (react__WEBPACK_IMPORTED_MODULE_0___default().version));
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = current;
  });
  return ref;
}

function create() {
  var lock = null;

  function isClaimed() {
    return Boolean(lock);
  }

  function isActive(value) {
    return value === lock;
  }

  function claim(abandon) {
    !!lock ?  true ? invariant(false, 'Cannot claim lock as it is already claimed') : 0 : void 0;
    var newLock = {
      abandon: abandon
    };
    lock = newLock;
    return newLock;
  }

  function release() {
    !lock ?  true ? invariant(false, 'Cannot release lock when there is no lock') : 0 : void 0;
    lock = null;
  }

  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }

  return {
    isClaimed: isClaimed,
    isActive: isActive,
    claim: claim,
    release: release,
    tryAbandon: tryAbandon
  };
}

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;
var sloppyClickThreshold = 5;

function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}

var idle$1 = {
  type: 'IDLE'
};

function getCaptureBindings(_ref) {
  var cancel = _ref.cancel,
      completed = _ref.completed,
      getPhase = _ref.getPhase,
      setPhase = _ref.setPhase;
  return [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();

      if (phase.type === 'DRAGGING') {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }

      !(phase.type === 'PENDING') ?  true ? invariant(false, 'Cannot be IDLE') : 0 : void 0;
      var pending = phase.point;

      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }

      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: 'DRAGGING',
        actions: actions
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (getPhase().type === 'DRAGGING') {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === 'PENDING') {
        cancel();
      }
    }
  }, {
    eventName: 'webkitmouseforcedown',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false, 'Unexpected phase') : 0 : void 0;

      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$1);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'mousedown',
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.button !== primaryButton) {
          return;
        }

        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'webkitmouseforcewillbegin',
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }

        var id = api.findClosestDraggableId(event);

        if (!id) {
          return;
        }

        var options = api.findOptionsForDraggable(id);

        if (!options) {
          return;
        }

        if (options.shouldRespectForcePress) {
          return;
        }

        if (!api.canGetLock(id)) {
          return;
        }

        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel: cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(phaseRef.current.type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    phaseRef.current = {
      type: 'PENDING',
      point: point,
      actions: actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var _scrollJumpKeys;

function noop$1() {}

var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }

  function drop() {
    stop();
    actions.drop();
  }

  return [{
    eventName: 'keydown',
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      if (event.keyCode === space) {
        event.preventDefault();
        drop();
        return;
      }

      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }

      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }

      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }

      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }

      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useKeyboardSensor(api) {
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop$1);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'keydown',
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.keyCode !== space) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!preDrag) {
          return;
        }

        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();

        function stop() {
          !isCapturing ?  true ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : 0 : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }

        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var idle$2 = {
  type: 'IDLE'
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;

function getWindowBindings(_ref) {
  var cancel = _ref.cancel,
      getPhase = _ref.getPhase;
  return [{
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel,
      completed = _ref2.completed,
      getPhase = _ref2.getPhase;
  return [{
    eventName: 'touchmove',
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      phase.hasMoved = true;
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false) : 0 : void 0;
      var touch = event.touches[0];

      if (!touch) {
        return;
      }

      var isForcePress = touch.force >= forcePressThreshold;

      if (!isForcePress) {
        return;
      }

      var shouldRespect = phase.actions.shouldRespectForcePress();

      if (phase.type === 'PENDING') {
        if (shouldRespect) {
          cancel();
        }

        return;
      }

      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }

        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useTouchSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$2);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var getPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function getPhase() {
    return phaseRef.current;
  }, []);
  var setPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function setPhase(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'touchstart',
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        var touch = event.touches[0];
        var clientX = touch.clientX,
            clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    if (current.type === 'PENDING') {
      clearTimeout(current.longPressTimerId);
    }

    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel: cancel,
      completed: stop,
      getPhase: getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startDragging() {
    var phase = getPhase();
    !(phase.type === 'PENDING') ?  true ? invariant(false, "Cannot start dragging from phase " + phase.type) : 0 : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: 'DRAGGING',
      actions: actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(getPhase().type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: 'PENDING',
      point: point,
      actions: actions,
      longPressTimerId: longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: 'touchmove',
      fn: function fn() {},
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}

function useValidateSensorHooks(sensorHooks) {
  useDev(function () {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function () {
      !(previousRef.current.length === sensorHooks.length) ?  true ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : 0 : void 0;
    });
  });
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
}

function isEventInInteractiveElement(draggable, event) {
  var target = event.target;

  if (!isHtmlElement(target)) {
    return false;
  }

  return isAnInteractiveElement(draggable, target);
}

var getBorderBoxCenterPosition = (function (el) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(el.getBoundingClientRect()).center;
});

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var supportedMatchesName = function () {
  var base = 'matches';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
  var value = find(candidates, function (name) {
    return name in Element.prototype;
  });
  return value || base;
}();

function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }

  if (el[supportedMatchesName](selector)) {
    return el;
  }

  return closestPonyfill(el.parentElement, selector);
}

function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }

  return closestPonyfill(el, selector);
}

function getSelector(contextId) {
  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
}

function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;

  if (!isElement(target)) {
     true ? warning('event.target must be a Element') : 0;
    return null;
  }

  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);

  if (!handle) {
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle must be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);

  if (!handle) {
    return null;
  }

  return handle.getAttribute(dragHandle.draggableId);
}

function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function (el) {
    return el.getAttribute(draggable.id) === draggableId;
  });

  if (!draggable$1) {
    return null;
  }

  if (!isHtmlElement(draggable$1)) {
     true ? warning('Draggable element is not a HTMLElement') : 0;
    return null;
  }

  return draggable$1;
}

function preventDefault(event) {
  event.preventDefault();
}

function _isActive(_ref) {
  var expected = _ref.expected,
      phase = _ref.phase,
      isLockActive = _ref.isLockActive,
      shouldWarn = _ref.shouldWarn;

  if (!isLockActive()) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : 0;
    }

    return false;
  }

  if (expected !== phase) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : 0;
    }

    return false;
  }

  return true;
}

function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI,
      store = _ref2.store,
      registry = _ref2.registry,
      draggableId = _ref2.draggableId;

  if (lockAPI.isClaimed()) {
    return false;
  }

  var entry = registry.draggable.findById(draggableId);

  if (!entry) {
     true ? warning("Unable to find draggable with id: " + draggableId) : 0;
    return false;
  }

  if (!entry.options.isEnabled) {
    return false;
  }

  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }

  return true;
}

function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI,
      contextId = _ref3.contextId,
      store = _ref3.store,
      registry = _ref3.registry,
      draggableId = _ref3.draggableId,
      forceSensorStop = _ref3.forceSensorStop,
      sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI: lockAPI,
    store: store,
    registry: registry,
    draggableId: draggableId
  });

  if (!shouldStart) {
    return null;
  }

  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);

  if (!el) {
     true ? warning("Unable to find draggable element with id: " + draggableId) : 0;
    return null;
  }

  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }

  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = 'PRE_DRAG';

  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }

  function isLockActive() {
    return lockAPI.isActive(lock);
  }

  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected: expected,
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }

  var tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

  function lift$1(args) {
    function completed() {
      lockAPI.release();
      phase = 'COMPLETED';
    }

    if (phase !== 'PRE_DRAG') {
      completed();
      !(phase === 'PRE_DRAG') ?  true ? invariant(false, "Cannot lift in phase " + phase) : 0 : void 0;
    }

    store.dispatch(lift(args.liftActionArgs));
    phase = 'DRAGGING';

    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }

      args.cleanup();

      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: 'click',
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }

      completed();
      store.dispatch(drop({
        reason: reason
      }));
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      isActive: function isActive() {
        return _isActive({
          expected: 'DRAGGING',
          phase: phase,
          isLockActive: isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop(options) {
        return finish('DROP', options);
      },
      cancel: function cancel(options) {
        return finish('CANCEL', options);
      }
    }, args.actions);
  }

  function fluidLift(clientSelection) {
    var move$1 = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(function (client) {
      tryDispatchWhenDragging(function () {
        return move({
          client: client
        });
      });
    });
    var api = lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: 'FLUID'
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, api, {
      move: move$1
    });
  }

  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: 'SNAP'
      },
      cleanup: noop,
      actions: actions
    });
  }

  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: 'PRE_DRAG',
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    });

    if (shouldRelease) {
      lockAPI.release();
    }
  }

  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: 'PRE_DRAG',
        phase: phase,
        isLockActive: isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift: fluidLift,
    snapLift: snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}

var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId,
      store = _ref4.store,
      registry = _ref4.registry,
      customSensors = _ref4.customSensors,
      enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return create();
  })[0];
  var tryAbandonLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryAbandonLock(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function () {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function () {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId) {
    return canStart({
      lockAPI: lockAPI,
      registry: registry,
      store: store,
      draggableId: draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId, forceStop, options) {
    return tryStart({
      lockAPI: lockAPI,
      registry: registry,
      contextId: contextId,
      store: store,
      draggableId: draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryReleaseLock() {
    if (!lockAPI.isClaimed()) {
      return;
    }

    lockAPI.tryAbandon();

    if (store.getState().phase !== 'IDLE') {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(lockAPI.isClaimed, [lockAPI]);
  var api = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canGetLock: canGetLock,
      tryGetLock: tryGetLock,
      findClosestDraggableId: findClosestDraggableId,
      findOptionsForDraggable: findOptionsForDraggable,
      tryReleaseLock: tryReleaseLock,
      isLockClaimed: isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);

  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}

var createResponders = function createResponders(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? invariant(false, 'Could not find store from lazy ref') : 0 : void 0;
  return lazyRef.current;
}

function App(props) {
  var contextId = props.contextId,
      setCallbacks = props.setCallbacks,
      sensors = props.sensors,
      nonce = props.nonce,
      dragHandleUsageInstructions = props.dragHandleUsageInstructions;
  var lazyStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId: contextId,
    text: dragHandleUsageInstructions
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      publishWhileDragging: publishWhileDragging,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createAutoScroller((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createStore({
      announce: announce,
      autoScroller: autoScroller,
      dimensionMarshal: dimensionMarshal,
      focusMarshal: focusMarshal,
      getResponders: getResponders,
      styleMarshal: styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : 0;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === 'DROP_ANIMATING';
  }, []);
  var appCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      isDragging: isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId: contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
      registry: registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId: contextId,
    store: store,
    registry: registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    context: StoreContext,
    store: store
  }, props.children));
}

var count$1 = 0;
function reset$1() {
  count$1 = 0;
}
function useInstanceCount() {
  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + count$1++;
  }, []);
}

function resetServerContext() {
  reset$1();
  reset();
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, null, function (setCallbacks) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
      nonce: props.nonce,
      contextId: contextId,
      setCallbacks: setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}

var isEqual$1 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$1('scroll');
var isAuto = isEqual$1('auto');
var isVisible$1 = isEqual$1('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? invariant(false) : 0 : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : 0;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : 0;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(paddingBox, base.border);
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.createBox)({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  !result ?  true ? invariant(false, 'Could not find required context') : 0 : void 0;
  return result;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppablePublisher(args) {
  var whileDraggingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId('droppable');
  var registry = appContext.registry,
      marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(descriptor);
  var memoizedUpdateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? invariant(false, 'Can only update scroll when dragging') : 0 : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Could not find scroll options while scrolling') : 0 : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : 0 : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? invariant(false, 'Cannot collect without a droppable ref') : 0 : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;

    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }

    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : 0 : void 0;
    return getScroll$1(closest);
  }, []);
  var dragStopped = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot stop drag when no active drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeAttribute(scrollContainer.contextId);
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot scroll when there is no drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : 0 : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      getScrollWhileDragging: getScrollWhileDragging,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      callbacks: callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : 0;
        dragStopped();
      }

      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop$2() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
    boxSizing: 'border-box',
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: '0',
    flexGrow: '0',
    pointerEvents: 'none',
    transition: animate !== 'none' ? transitions.placeholder : null
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tryClearAnimateOpenTimer = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      contextId = props.contextId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }

    if (animateOpenTimerRef.current) {
      return noop$2;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(props.placeholder.tagName, {
    style: style,
    'data-rbd-placeholder-context-id': contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_0___default().memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : 0 : void 0;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function runChecks(args, checks) {
  checks.forEach(function (check) {
    return check(args);
  });
}

var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ?  true ? invariant(false, 'A Droppable requires a droppableId prop') : 0 : void 0;
  !(typeof props.droppableId === 'string') ?  true ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : 0 : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ?  true ? invariant(false, 'isDropDisabled must be a boolean') : 0 : void 0;
  !isBoolean(props.isCombineEnabled) ?  true ? invariant(false, 'isCombineEnabled must be a boolean') : 0 : void 0;
  !isBoolean(props.ignoreContainerClipping) ?  true ? invariant(false, 'ignoreContainerClipping must be a boolean') : 0 : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props,
      getPlaceholderRef = _ref4.getPlaceholderRef;

  if (!props.placeholder) {
    return;
  }

  var ref = getPlaceholderRef();

  if (ref) {
    return;
  }

   true ? warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : 0;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ?  true ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : 0 : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ?  true ? invariant(false, 'Expected virtual list to not have a placeholder') : 0 : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function () {
    runChecks(args, shared);

    if (args.props.mode === 'standard') {
      runChecks(args, standard);
    }

    if (args.props.mode === 'virtual') {
      runChecks(args, virtual);
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset = dragging.offset,
      combineWith = dragging.combineWith,
      dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
  var style = {
    position: 'fixed',
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: 'border-box',
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform: transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: 'none'
  };
  return style;
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.calculateBox)(borderBox, computedStyles);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor: descriptor,
    placeholder: placeholder,
    displaceBy: displaceBy,
    client: client,
    page: page
  };
  return dimension;
}

function useDraggablePublisher(args) {
  var uniqueId = useUniqueId('draggable');
  var descriptor = args.descriptor,
      registry = args.registry,
      getDraggableRef = args.getDraggableRef,
      canDragInteractiveElements = args.canDragInteractiveElements,
      shouldRespectForcePress = args.shouldRespectForcePress,
      isEnabled = args.isEnabled;
  var options = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canDragInteractiveElements: canDragInteractiveElements,
      shouldRespectForcePress: shouldRespectForcePress,
      isEnabled: isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll) {
    var el = getDraggableRef();
    !el ?  true ? invariant(false, 'Cannot get dimension when no ref is set') : 0 : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      options: options,
      getDimension: getDimension
    };
  }, [descriptor, getDimension, options, uniqueId]);
  var publishedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(entry);
  var isFirstPublishRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  useIsomorphicLayoutEffect(function () {
    registry.draggable.register(publishedRef.current);
    return function () {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function () {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }

    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}

function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function () {
    function prefix(id) {
      return "Draggable[id: " + id + "]: ";
    }

    var id = props.draggableId;
    !id ?  true ? invariant(false, 'Draggable requires a draggableId') : 0 : void 0;
    !(typeof id === 'string') ?  true ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : 0 : void 0;
    !isInteger(props.index) ?  true ? invariant(false, prefix(id) + " requires an integer index prop") : 0 : void 0;

    if (props.mapped.type === 'DRAGGING') {
      return;
    }

    checkIsValidInnerRef(getRef());

    if (props.isEnabled) {
      !findDragHandle(contextId, id) ?  true ? invariant(false, prefix(id) + " Unable to find drag handle") : 0 : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function () {
    var initialRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isClone);
    useDevSetupWarning(function () {
      !(isClone === initialRef.current) ?  true ? invariant(false, 'Draggable isClone prop value changed during component life') : 0 : void 0;
    }, [isClone]);
  });
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function Draggable(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (el) {
    ref.current = el;
  }, []);
  var getRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return ref.current;
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      contextId = _useRequiredContext.contextId,
      dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId,
      registry = _useRequiredContext.registry;

  var _useRequiredContext2 = useRequiredContext(DroppableContext),
      type = _useRequiredContext2.type,
      droppableId = _useRequiredContext2.droppableId;

  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: props.draggableId,
      index: props.index,
      type: type,
      droppableId: droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children,
      draggableId = props.draggableId,
      isEnabled = props.isEnabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.canDragInteractiveElements,
      isClone = props.isClone,
      mapped = props.mapped,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);

  if (!isClone) {
    var forPublisher = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
      return {
        descriptor: descriptor,
        registry: registry,
        getDraggableRef: getRef,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress,
        isEnabled: isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }

  var dragHandleProps = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return isEnabled ? {
      tabIndex: 0,
      role: 'button',
      'aria-describedby': dragHandleUsageInstructionsId,
      'data-rbd-drag-handle-draggable-id': draggableId,
      'data-rbd-drag-handle-context-id': contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-rbd-draggable-context-id': contextId,
        'data-rbd-draggable-id': draggableId,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};

function getDraggableSelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone: isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  return selector;
}

function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: combineTargetFor,
    combineWith: null
  };
}

var atRest = {
  mapped: {
    type: 'SECONDARY',
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};

function getSecondarySelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(getSecondarySnapshot);
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });

  var getFallback = function getFallback(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };

  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine = tryGetCombine(impact);
    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }

      if (impact.displaced.invisible[ownId]) {
        return null;
      }

      var change = negate(afterCritical.displacedBy.point);

      var _offset = memoizedOffset(change.x, change.y);

      return getMemoizedProps(_offset, combineTargetFor, true);
    }

    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }

    var displaceBy = impact.displacedBy.point;
    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
  };

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }

    return null;
  };

  return selector;
}

var makeMapStateToProps = function makeMapStateToProps() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };

  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);

function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;

  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivateDraggable, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    isClone: false,
    isEnabled: isEnabled,
    canDragInteractiveElements: canDragInteractiveElements,
    shouldRespectForcePress: shouldRespectForcePress
  }));
}

function Droppable(props) {
  var appContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
  !appContext ?  true ? invariant(false, 'Could not find app context') : 0 : void 0;
  var contextId = appContext.contextId,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      mode = props.mode,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      useClone = props.useClone,
      updateViewportMaxScroll = props.updateViewportMaxScroll,
      getContainerForClone = props.getContainerForClone;
  var getDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return droppableRef.current;
  }, []);
  var setDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props: props,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppablePublisher({
    droppableId: droppableId,
    type: type,
    mode: mode,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      contextId: contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-rbd-droppable-id': droppableId,
        'data-rbd-droppable-context-id': contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      droppableId: droppableId,
      type: type,
      isUsingCloneFor: isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);

  function getClone() {
    if (!useClone) {
      return null;
    }

    var dragging = useClone.dragging,
        render = useClone.render;
    var node = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return react_dom__WEBPACK_IMPORTED_MODULE_4___default().createPortal(node, getContainerForClone());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };

  var idleWithoutAnimation = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });

  var getDraggableRubric = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone: useClone
      };
    }

    if (!isEnabled) {
      return idleWithoutAnimation;
    }

    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }

    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot,
      useClone: null
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }

    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
      var isHome = _completed.critical.droppable.id === id;

      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }

      if (isHome) {
        return idleWithAnimation;
      }

      return idleWithoutAnimation;
    }

    return idleWithoutAnimation;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll: updateViewportMaxScroll
};

function getBody() {
  !document.body ?  true ? invariant(false, 'document.body is not ready') : 0 : void 0;
  return document.body;
}

var defaultProps = {
  mode: 'standard',
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");






function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectAdvanced)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");


var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    _excluded2 = ["reactReduxForwardedRef"];





 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded2);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.createSubscription)(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.
        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnect: () => (/* binding */ createConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");


var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];






/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _excluded);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapDispatchToPropsIsFunction: () => (/* binding */ whenMapDispatchToPropsIsFunction),
/* harmony export */   whenMapDispatchToPropsIsMissing: () => (/* binding */ whenMapDispatchToPropsIsMissing),
/* harmony export */   whenMapDispatchToPropsIsObject: () => (/* binding */ whenMapDispatchToPropsIsObject)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapStateToPropsIsFunction: () => (/* binding */ whenMapStateToPropsIsFunction),
/* harmony export */   whenMapStateToPropsIsMissing: () => (/* binding */ whenMapStateToPropsIsMissing)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   whenMergePropsIsFunction: () => (/* binding */ whenMergePropsIsFunction),
/* harmony export */   whenMergePropsIsOmitted: () => (/* binding */ whenMergePropsIsOmitted),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   impureFinalPropsSelectorFactory: () => (/* binding */ impureFinalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");

var _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _excluded);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed

        if (newStoreState === latestStoreState.current) {
          return;
        }

        var _newSelectedState = latestSelector.current(newStoreState);

        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (true) {
      if (!selector) {
        throw new Error("You must pass a selector to useSelector");
      }

      if (typeof selector !== 'function') {
        throw new Error("You must pass a function as a selector to useSelector");
      }

      if (typeof equalityFn !== 'function') {
        throw new Error("You must pass a function as an equality function to useSelector");
      }
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connect),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connectAdvanced),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useStore)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");


 // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_2__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  var subscription = {
    addNestedSub: addNestedSub,
    notifyNestedSubs: notifyNestedSubs,
    handleChangeWrapper: handleChangeWrapper,
    isSubscribed: isSubscribed,
    trySubscribe: trySubscribe,
    tryUnsubscribe: tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};

  var _loop = function _loop(key) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };

  for (var key in actionCreators) {
    _loop(key);
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_6__.forceReflow)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
}) : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENTERED: () => (/* binding */ ENTERED),
/* harmony export */   ENTERING: () => (/* binding */ ENTERING),
/* harmony export */   EXITED: () => (/* binding */ EXITED),
/* harmony export */   EXITING: () => (/* binding */ EXITING),
/* harmony export */   UNMOUNTED: () => (/* binding */ UNMOUNTED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired, (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element).isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChildMapping: () => (/* binding */ getChildMapping),
/* harmony export */   getInitialChildMapping: () => (/* binding */ getInitialChildMapping),
/* harmony export */   getNextChildMapping: () => (/* binding */ getNextChildMapping),
/* harmony export */   mergeChildMappings: () => (/* binding */ mergeChildMappings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNamesShape: () => (/* binding */ classNamesShape),
/* harmony export */   timeoutsShape: () => (/* binding */ timeoutsShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/reflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/reflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forceReflow: () => (/* binding */ forceReflow)
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ ActionTypes),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ useCallback),
/* harmony export */   useCallbackOne: () => (/* binding */ useCallbackOne),
/* harmony export */   useMemo: () => (/* binding */ useMemo),
/* harmony export */   useMemoOne: () => (/* binding */ useMemoOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external ["window","wp","apiFetch"] ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external ["window","wp","blocks"] ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external ["window","wp","data"] ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external ["window","wp","element"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!***********************************************!*\
  !*** external ["window","wp","htmlEntities"] ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external ["window","wp","i18n"] ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external ["window","wp","url"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["window"]["wp"]["url"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }),

/***/ "./src/a2cp/block.json":
/*!*****************************!*\
  !*** ./src/a2cp/block.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"add-to-cart-pro/a2cp","version":"0.1.0","title":"a2cp","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"a2cp","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
//# sourceMappingURL=index.js.map