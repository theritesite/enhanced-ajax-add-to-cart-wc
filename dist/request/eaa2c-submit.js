this["trs"] = this["trs"] || {}; this["trs"]["[modulename]"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/enhanced-ajax-add-to-cart-wc-public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/enhanced-ajax-add-to-cart-wc-public.js":
/*!**********************************************************!*\
  !*** ./assets/js/enhanced-ajax-add-to-cart-wc-public.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Takes lots of notes of how WooCommerce uses AJAX and JavaScript to add and handle the proccess\n * of adding a variable product to the cart\n * \n * @since 1.0.0\n */\njQuery(function ($) {\n  'use strict';\n  /**\n   * AddToCartHandler class.\n   */\n\n  var AddToCartHandler = function AddToCartHandler() {\n    var self = this;\n    self.showValidation = self.showValidation.bind(self);\n    self.showNotices = self.showNotices.bind(self);\n    self.scrollToNotices = self.scrollToNotices.bind(self);\n    self.blockButtons = self.blockButtons.bind(self);\n    self.unblockButtons = self.unblockButtons.bind(self);\n\n    if (true == EAA2C.blocking) {\n      $(document.body).on('click', '.variable_add_to_cart_button', this.blockButtons).on('click', '.simple_add_to_cart_button', this.blockButtons).on('click', '.eaa2c_add_to_cart_button', this.blockButtons).on('added_to_cart', this.unblockButtons).on('notices_received', this.unblockButtons);\n    }\n\n    $(document.body).on('click', '.variable_add_to_cart_button', this.onAddAnyToCart).on('click', '.simple_add_to_cart_button', this.onAddAnyToCart).on('click', '.eaa2c_add_to_cart_button', this.onAddAnyToCart).on('added_to_cart', this.updateButton).on('added_to_cart', this.updateCartPage).on('added_to_cart', this.updateFragments).on('notices_received', this.showNotices).on('validation_message', this.showValidation);\n  };\n\n  AddToCartHandler.prototype.blockButtons = function (e) {\n    $('.simple_add_to_cart_button').attr('disabled', true);\n    $('.variable_add_to_cart_button').attr('disabled', true);\n    $('.eaa2c_add_to_cart_button').attr('disabled', true);\n  };\n\n  AddToCartHandler.prototype.unblockButtons = function (e) {\n    $('.simple_add_to_cart_button').attr('disabled', false);\n    $('.variable_add_to_cart_button').attr('disabled', false);\n    $('.eaa2c_add_to_cart_button').attr('disabled', false);\n  };\n  /**\n   * Handle the variable product add to cart event.\n   */\n\n\n  AddToCartHandler.prototype.onAddAnyToCart = function (e) {\n    var $thisbutton = $(this);\n    e.preventDefault();\n    $thisbutton.removeClass(\"added\");\n    $thisbutton.addClass(\"loading\");\n    var data = {\n      pid: 0,\n      vid: 0,\n      qty: 0\n    };\n    var qty = {};\n    var min = 0;\n    var max = 0;\n\n    if (true === EAA2C.domCheck) {\n      data['pid'] = parseInt($thisbutton.data('pid'));\n      data['vid'] = parseInt($thisbutton.data('vid'));\n    } else {\n      $.each($(this).data(), function (key, value) {\n        data[key] = value;\n      });\n    }\n\n    qty = $(this).siblings('.quantity-container').find('input.input-text.qty.text');\n    data['action'] = 'eaa2c_add_to_cart';\n    console.log(qty);\n    min = parseInt(qty.attr('min'));\n    max = parseInt(qty.attr('max'));\n\n    if (isNaN(max) || max === '') {\n      max = -1;\n    }\n\n    data['qty'] = qty.val();\n\n    if (EAA2C.debug) {\n      console.log(\"quantity max: \" + max + \" and min: \" + min + \" and val: \" + qty.val());\n    } // Trigger event.\n\n\n    $(document.body).trigger('adding_to_cart', [$thisbutton, data]);\n\n    if (parseInt(max) === -1 && data['qty'] >= min || data['qty'] <= max && data['qty'] >= min) {\n      $.ajax({\n        url: EAA2C.ajax_url,\n        type: \"POST\",\n        data: {\n          product: data['pid'],\n          variable: data['vid'],\n          quantity: data['qty'],\n          action: 'eaa2c_add_to_cart',\n          eaa2c_action: true,\n          'wc-ajax': true\n        },\n        success: function success(response) {\n          if (EAA2C.debug) {\n            console.log(\"product id: \" + data['pid'] + \" variable id: \" + data['vid'] + \" quantity: \" + data['qty']);\n          }\n\n          $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);\n\n          if (response.html) {\n            $(document.body).trigger('notices_received', [response.html]);\n          }\n        },\n        error: function error() {\n          console.error(\"Failure adding product to cart!\");\n\n          if (EAA2C.debug) {\n            console.log(\"product id: \" + data['pid'] + \" variable id: \" + data['vid'] + \" quantity: \" + data['qty']);\n          }\n        }\n      });\n    } else if (data['qty'] > max) {\n      var errorHtml = '<ul class=\"woocommerce-error eaa2c-error eaa2c-message\" role=\"alert\"><li>cannot add product to cart, you are over the allowed maximum of ' + qty.attr('max') + ' to add to your cart.</li></ul>';\n      $thisbutton.removeClass(\"loading\");\n      $(document.body).trigger('notices_received', [errorHtml]); // $( document.body ).trigger( 'validation_message', [ $thisbutton, errorHtml ] );\n    } else if (data['qty'] < min) {\n      var errorHtml = '<ul class=\"woocommerce-error eaa2c-error eaa2c-message\" role=\"alert\"><li>cannot add product to cart, you are under the allowed minimum ' + qty.attr('min') + ' to add to your cart.</li></ul>';\n      $thisbutton.removeClass(\"loading\");\n      $(document.body).trigger('notices_received', [errorHtml]); // $( document.body ).trigger( 'validation_message', [ $thisbutton, errorHtml ] );\n    }\n  };\n  /**\n   * @deprecated Since version 2.0.0. Will be deleted in 3.0. Use AddToCartHandler.prototype.onAddAnyToCart instead.\n   * Handle the variable product add to cart event.\n   */\n\n\n  AddToCartHandler.prototype.onAddVariableToCart = function (e) {\n    console.warn(\"Calling deprecated function 'onAddVariableToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.\");\n    var $thisbutton = $(this);\n    e.preventDefault();\n    $thisbutton.removeClass(\"added\");\n    $thisbutton.addClass(\"loading\");\n    var data = {};\n\n    if (true === EAA2C.domCheck) {\n      data['pid'] = parseInt($thisbutton.data('pid'));\n      data['vid'] = parseInt($thisbutton.data('vid'));\n    } else {\n      $.each($(this).data(), function (key, value) {\n        data[key] = value;\n      });\n    }\n\n    data['qty'] = $thisbutton.siblings('.quantity-container').find('input').val();\n    data['action'] = 'variable_add_to_cart'; // Trigger event.\n\n    $(document.body).trigger('adding_to_cart', [$thisbutton, data]);\n    $.ajax({\n      url: EAA2C.ajax_url,\n      type: \"POST\",\n      data: {\n        product: data['pid'],\n        variable: data['vid'],\n        quantity: data['qty'],\n        action: 'variable_add_to_cart',\n        eaa2c_action: true,\n        'wc-ajax': true\n      },\n      success: function success(response) {\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" variation: \" + data['vid'] + \" quantity: \" + data['qty']);\n        }\n\n        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);\n\n        if (response.html) {\n          $(document.body).trigger('notices_received', [response.html]);\n        }\n      },\n      error: function error() {\n        console.error(\"Failure adding variable product to cart!\");\n\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" variation: \" + data['vid'] + \" quantity: \" + data['qty']);\n        }\n      }\n    });\n  };\n  /**\n   * @deprecated Since version 2.0.0. Will be deleted in 3.0. Use AddToCartHandler.prototype.onAddAnyToCart instead.\n   * Handle the simple product add to cart event.\n   */\n\n\n  AddToCartHandler.prototype.onAddSimpleToCart = function (e) {\n    console.warn(\"Calling deprecated function 'onAddSimpleToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.\");\n    var $thisbutton = $(this);\n    e.preventDefault();\n    $thisbutton.removeClass(\"added\");\n    $thisbutton.addClass(\"loading\");\n    var data = {};\n\n    if (true === EAA2C.domCheck) {\n      data['pid'] = parseInt($thisbutton.data('pid'));\n      data['vid'] = parseInt($thisbutton.data('vid'));\n    } else {\n      $.each($(this).data(), function (key, value) {\n        data[key] = value;\n      });\n    }\n\n    data['qty'] = $(this).siblings('.quantity-container').find('input.input-text.qty.text').val();\n    data['action'] = 'simple_add_to_cart'; // Trigger event.\n\n    $(document.body).trigger('adding_to_cart', [$thisbutton, data]);\n    $.ajax({\n      url: EAA2C.ajax_url,\n      type: \"POST\",\n      data: {\n        product: data['pid'],\n        quantity: data['qty'],\n        action: 'simple_add_to_cart',\n        eaa2c_action: true,\n        'wc-ajax': true\n      },\n      success: function success(response) {\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n\n        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);\n\n        if (response.html) {\n          $(document.body).trigger('notices_received', [response.html]);\n        }\n      },\n      error: function error() {\n        console.error(\"Failure adding non-variable product to cart!\");\n\n        if (EAA2C.debug) {\n          console.log(\"product id: \" + data['pid'] + \" quantity: \" + data['qty']);\n        }\n      }\n    });\n  };\n  /**\n   * Update cart page elements after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateButton = function (e, fragments, cart_hash, $button) {\n    $button = typeof $button === 'undefined' ? false : $button;\n\n    if ($button) {\n      $button.removeClass('loading');\n      $button.addClass('added'); // View cart text.\n\n      if (!wc_add_to_cart_params.is_cart && $button.parent().find('.added_to_cart').length === 0) {\n        $button.after(' <a href=\"' + wc_add_to_cart_params.cart_url + '\" class=\"added_to_cart wc-forward\" title=\"' + wc_add_to_cart_params.i18n_view_cart + '\">' + wc_add_to_cart_params.i18n_view_cart + '</a>');\n      }\n\n      $(document.body).trigger('wc_cart_button_updated', [$button]);\n    }\n  };\n  /**\n   * Update cart page elements after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateCartPage = function () {\n    var page = window.location.toString().replace('add-to-cart', 'added-to-cart');\n    $('.shop_table.cart').load(page + ' .shop_table.cart:eq(0) > *', function () {\n      $('.shop_table.cart').stop(true).css('opacity', '1').unblock();\n      $(document.body).trigger('cart_page_refreshed');\n    });\n    $('.cart_totals').load(page + ' .cart_totals:eq(0) > *', function () {\n      $('.cart_totals').stop(true).css('opacity', '1').unblock();\n      $(document.body).trigger('cart_totals_refreshed');\n    });\n  };\n  /**\n   * Update fragments after add to cart events.\n   */\n\n\n  AddToCartHandler.prototype.updateFragments = function (e, fragments) {\n    if (fragments) {\n      $.each(fragments, function (key) {\n        $(key).addClass('updating').fadeTo('400', '0.6').block({\n          message: null,\n          overlayCSS: {\n            opacity: 0.6\n          }\n        });\n      });\n      $.each(fragments, function (key, value) {\n        $(key).replaceWith(value);\n        $(key).stop(true).css('opacity', '1').unblock();\n      });\n      $(document.body).trigger('wc_fragments_loaded');\n    }\n  };\n\n  AddToCartHandler.prototype.showNotices = function (element, target) {\n    $('.woocommerce-error, .woocommerce-message').remove();\n    var domTarget = $('.content-area');\n    console.log(target);\n    console.log(\"showing notices\");\n    domTarget.before(target);\n    this.scrollToNotices(); // this.unblockButtons();\n  };\n\n  AddToCartHandler.prototype.scrollToNotices = function (e) {\n    var scrollElement = $('.woocommerce-error, .woocommerce-message');\n    var isSmoothScrollSupported = ('scrollBehavior' in document.documentElement.style);\n\n    if (!scrollElement.length) {}\n\n    if (scrollElement.length) {\n      if (isSmoothScrollSupported) {\n        scrollElement[0].scrollIntoView({\n          behavior: 'smooth'\n        });\n      } else {\n        $('html, body').animate({\n          scrollTop: scrollElement.offset().top - 100\n        }, 1000);\n      }\n    }\n  };\n\n  AddToCartHandler.prototype.showValidation = function (e, element, target) {\n    $('.eaa2c-error, .eaa2c-message').remove();\n    var domTarget = $(element).parent().find('>:first-child');\n    domTarget.before(target);\n  };\n  /**\n   * Init AddToCartHandler.\n   */\n\n\n  new AddToCartHandler();\n});\n\n//# sourceURL=webpack://trs.%5Bmodulename%5D/./assets/js/enhanced-ajax-add-to-cart-wc-public.js?");

/***/ })

/******/ });