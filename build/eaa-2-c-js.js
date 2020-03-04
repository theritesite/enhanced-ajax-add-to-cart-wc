this["eaa2c"] = this["eaa2c"] || {}; this["eaa2c"]["eaa2cJS"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/enhanced-ajax-add-to-cart-wc-public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/enhanced-ajax-add-to-cart-wc-public.js":
/*!**********************************************************!*\
  !*** ./public/js/enhanced-ajax-add-to-cart-wc-public.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Takes lots of notes of how WooCommerce uses AJAX and JavaScript to add and handle the proccess\n * of adding a variable product to the cart\n * \n * @since 1.0.0\n */\njQuery(function ($) {\n  'use strict';\n  /**\n   * AddToCartHandler class.\n   */\n\n  var AddToCartHandler = function AddToCartHandler() {\n    var self = this;\n    self.showNotices = self.showNotices.bind(self);\n    self.scrollToNotices = self.scrollToNotices.bind(self);\n    $(document.body).on('click', '.variable_add_to_cart_button', this.onAddVariableToCart).on('click', '.simple_add_to_cart_button', this.onAddSimpleToCart).on('added_to_cart', this.updateButton).on('added_to_cart', this.updateCartPage).on('added_to_cart', this.updateFragments).on('notices_received', this.showNotices);\n  };\n  /**\n   * Handle the variable product add to cart event.\n   */\n\n\n  AddToCartHandler.prototype.onAddVariableToCart = function (e) {\n    var $thisbutton = $(this);\n    e.preventDefault();\n    $thisbutton.removeClass(\"added\");\n    $thisbutton.addClass(\"loading\");\n    var data = {};\n    $.each($thisbutton.data(), function (key, value) {\n      data[key] = value;\n    });\n    data['qty'] = $(this).siblings('.quantity-container').find('input').val();\n    data['action'] = 'variable_add_to_cart'; // Trigger event.\n\n    $(document.body).trigger('adding_to_cart', [$thisbutton, data]);\n    $.ajax({\n      url: EAA2C.ajax_url,\n      type: \"POST\",\n      data: {\n        product: data['pid'],\n        variable: data['vid'],\n        quantity: data['qty'],\n        action: 'variable_add_to_cart'\n      },\n      success: function success(response) {\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n\n        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);\n\n        if (response.html) {\n          $(document.body).trigger('notices_received', [response.html]);\n        }\n      },\n      error: function error() {\n        console.error(\"failure!\");\n\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n      }\n    });\n  };\n  /**\n   * Handle the simple product add to cart event.\n   */\n\n\n  AddToCartHandler.prototype.onAddSimpleToCart = function (e) {\n    var $thisbutton = $(this);\n    e.preventDefault();\n    $thisbutton.removeClass(\"added\");\n    $thisbutton.addClass(\"loading\");\n    var data = {};\n    $.each($thisbutton.data(), function (key, value) {\n      data[key] = value;\n    });\n    data['qty'] = $(this).siblings('.quantity-container').find('input').val();\n    data['action'] = 'simple_add_to_cart'; // Trigger event.\n\n    $(document.body).trigger('adding_to_cart', [$thisbutton, data]);\n    $.ajax({\n      url: EAA2C.ajax_url,\n      type: \"POST\",\n      data: {\n        product: data['pid'],\n        quantity: data['qty'],\n        action: 'simple_add_to_cart'\n      },\n      success: function success(response) {\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n\n        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);\n\n        if (response.html) {\n          $(document.body).trigger('notices_received', [response.html]);\n        }\n      },\n      error: function error() {\n        console.error(\"failure!\");\n\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n      }\n    });\n  };\n  /**\n   * Update cart page elements after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateButton = function (e, fragments, cart_hash, $button) {\n    $button = typeof $button === 'undefined' ? false : $button;\n\n    if ($button) {\n      $button.removeClass('loading');\n      $button.addClass('added'); // View cart text.\n\n      if (!wc_add_to_cart_params.is_cart && $button.parent().find('.added_to_cart').length === 0) {\n        $button.after(' <a href=\"' + wc_add_to_cart_params.cart_url + '\" class=\"added_to_cart wc-forward\" title=\"' + wc_add_to_cart_params.i18n_view_cart + '\">' + wc_add_to_cart_params.i18n_view_cart + '</a>');\n      }\n\n      $(document.body).trigger('wc_cart_button_updated', [$button]);\n    }\n  };\n  /**\n   * Update cart page elements after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateCartPage = function () {\n    var page = window.location.toString().replace('add-to-cart', 'added-to-cart');\n    $('.shop_table.cart').load(page + ' .shop_table.cart:eq(0) > *', function () {\n      $('.shop_table.cart').stop(true).css('opacity', '1').unblock();\n      $(document.body).trigger('cart_page_refreshed');\n    });\n    $('.cart_totals').load(page + ' .cart_totals:eq(0) > *', function () {\n      $('.cart_totals').stop(true).css('opacity', '1').unblock();\n      $(document.body).trigger('cart_totals_refreshed');\n    });\n  };\n  /**\n   * Update fragments after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateFragments = function (e, fragments) {\n    if (fragments) {\n      $.each(fragments, function (key) {\n        $(key).addClass('updating').fadeTo('400', '0.6').block({\n          message: null,\n          overlayCSS: {\n            opacity: 0.6\n          }\n        });\n      });\n      $.each(fragments, function (key, value) {\n        $(key).replaceWith(value);\n        $(key).stop(true).css('opacity', '1').unblock();\n      });\n      $(document.body).trigger('wc_fragments_loaded');\n    }\n  };\n\n  AddToCartHandler.prototype.showNotices = function (element, target) {\n    $('.woocommerce-error, .woocommerce-message').remove();\n    var domTarget = $('.content-area');\n    domTarget.before(target);\n    this.scrollToNotices();\n  };\n\n  AddToCartHandler.prototype.scrollToNotices = function (e) {\n    var scrollElement = $('.woocommerce-error, .woocommerce-message');\n    var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;\n\n    if (!scrollElement.length) {}\n\n    if (scrollElement.length) {\n      if (isSmoothScrollSupported) {\n        scrollElement[0].scrollIntoView({\n          behavior: 'smooth'\n        });\n      } else {\n        $('html, body').animate({\n          scrollTop: scrollElement.offset().top - 100\n        }, 1000);\n      }\n    }\n  };\n  /**\n   * Init AddToCartHandler.\n   */\n\n\n  new AddToCartHandler();\n});\n\n//# sourceURL=webpack://eaa2c.%5Bname%5D/./public/js/enhanced-ajax-add-to-cart-wc-public.js?");

/***/ })

/******/ });