this.trs=this.trs||{},this.trs["[modulename]"]=function(t){var o={};function a(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=o,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)a.d(e,r,function(o){return t[o]}.bind(null,r));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="",a(a.s=63)}({63:function(t,o){jQuery((function(t){"use strict";var o=function(){this.showValidation=this.showValidation.bind(this),this.showNotices=this.showNotices.bind(this),this.scrollToNotices=this.scrollToNotices.bind(this),this.blockButtons=this.blockButtons.bind(this),this.unblockButtons=this.unblockButtons.bind(this),1==EAA2C.blocking&&t(document.body).on("click",".variable_add_to_cart_button",this.blockButtons).on("click",".simple_add_to_cart_button",this.blockButtons).on("click",".eaa2c_add_to_cart_button",this.blockButtons).on("added_to_cart",this.unblockButtons).on("notices_received",this.unblockButtons),t(document.body).on("click",".variable_add_to_cart_button",this.onAddAnyToCart).on("click",".simple_add_to_cart_button",this.onAddAnyToCart).on("click",".eaa2c_add_to_cart_button",this.onAddAnyToCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart",this.updateFragments).on("notices_received",this.showNotices).on("validation_message",this.showValidation)};o.prototype.blockButtons=function(o){t(".simple_add_to_cart_button").attr("disabled",!0),t(".variable_add_to_cart_button").attr("disabled",!0),t(".eaa2c_add_to_cart_button").attr("disabled",!0)},o.prototype.unblockButtons=function(o){t(".simple_add_to_cart_button").attr("disabled",!1),t(".variable_add_to_cart_button").attr("disabled",!1),t(".eaa2c_add_to_cart_button").attr("disabled",!1)},o.prototype.onAddAnyToCart=function(o){var a=t(this);o.preventDefault(),a.removeClass("added"),a.addClass("loading");var e,r={pid:0,vid:0,qty:0},n={},d=0,i={};if(!0===EAA2C.domCheck?(r.pid=parseInt(a.data("pid")),r.vid=parseInt(a.data("vid"))):t.each(t(this).data(),(function(t,o){r[t]=o})),n=t(this).siblings(".quantity-container").find("input.input-text.qty.text"),r.action="eaa2c_add_to_cart",i=t(this).siblings('input[name="lang"]'),console.log(i),console.log("stuffed here"),r.wpml_lang=i.val(),console.log(n),e=parseInt(n.attr("min")),d=parseInt(n.attr("max")),(isNaN(d)||""===d)&&(d=-1),r.qty=n.val(),EAA2C.debug&&console.log("quantity max: "+d+" and min: "+e+" and val: "+n.val()),t(document.body).trigger("adding_to_cart",[a,r]),-1===parseInt(d)&&r.qty>=e||r.qty<=d&&r.qty>=e)t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:r.pid,variable:r.vid,quantity:r.qty,action:"eaa2c_add_to_cart",eaa2c_action:!0,"wc-ajax":!0,wpml_lang:r.wpml_lang},success:function(o){EAA2C.debug&&console.log("product id: "+r.pid+" variable id: "+r.vid+" quantity: "+r.qty),t(document.body).trigger("added_to_cart",[o.fragments,o.cart_hash,a]),o.html&&t(document.body).trigger("notices_received",[o.html])},error:function(){console.error("Failure adding product to cart!"),EAA2C.debug&&console.log("product id: "+r.pid+" variable id: "+r.vid+" quantity: "+r.qty)}});else if(r.qty>d){var c='<ul class="woocommerce-error eaa2c-error eaa2c-message" role="alert"><li>cannot add product to cart, you are over the allowed maximum of '+n.attr("max")+" to add to your cart.</li></ul>";a.removeClass("loading"),t(document.body).trigger("notices_received",[c])}else if(r.qty<e){c='<ul class="woocommerce-error eaa2c-error eaa2c-message" role="alert"><li>cannot add product to cart, you are under the allowed minimum '+n.attr("min")+" to add to your cart.</li></ul>";a.removeClass("loading"),t(document.body).trigger("notices_received",[c])}},o.prototype.onAddVariableToCart=function(o){console.warn("Calling deprecated function 'onAddVariableToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.");var a=t(this);o.preventDefault(),a.removeClass("added"),a.addClass("loading");var e={};!0===EAA2C.domCheck?(e.pid=parseInt(a.data("pid")),e.vid=parseInt(a.data("vid"))):t.each(t(this).data(),(function(t,o){e[t]=o})),e.qty=a.siblings(".quantity-container").find("input").val(),e.action="variable_add_to_cart",t(document.body).trigger("adding_to_cart",[a,e]),t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:e.pid,variable:e.vid,quantity:e.qty,action:"variable_add_to_cart",eaa2c_action:!0,"wc-ajax":!0},success:function(o){EAA2C.debug&&console.log("product id: "+e.pid+" variation: "+e.vid+" quantity: "+e.qty),t(document.body).trigger("added_to_cart",[o.fragments,o.cart_hash,a]),o.html&&t(document.body).trigger("notices_received",[o.html])},error:function(){console.error("Failure adding variable product to cart!"),EAA2C.debug&&console.log("product id: "+e.pid+" variation: "+e.vid+" quantity: "+e.qty)}})},o.prototype.onAddSimpleToCart=function(o){console.warn("Calling deprecated function 'onAddSimpleToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.");var a=t(this);o.preventDefault(),a.removeClass("added"),a.addClass("loading");var e={};!0===EAA2C.domCheck?(e.pid=parseInt(a.data("pid")),e.vid=parseInt(a.data("vid"))):t.each(t(this).data(),(function(t,o){e[t]=o})),e.qty=t(this).siblings(".quantity-container").find("input.input-text.qty.text").val(),e.action="simple_add_to_cart",t(document.body).trigger("adding_to_cart",[a,e]),t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:e.pid,quantity:e.qty,action:"simple_add_to_cart",eaa2c_action:!0,"wc-ajax":!0},success:function(o){EAA2C.debug&&console.log("product id: "+e.pid+" quantity: "+e.qty),t(document.body).trigger("added_to_cart",[o.fragments,o.cart_hash,a]),o.html&&t(document.body).trigger("notices_received",[o.html])},error:function(){console.error("Failure adding non-variable product to cart!"),EAA2C.debug&&console.log("product id: "+e.pid+" quantity: "+e.qty)}})},o.prototype.updateButton=function(o,a,e,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),r.addClass("added"),wc_add_to_cart_params.is_cart||0!==r.parent().find(".added_to_cart").length||r.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[r]))},o.prototype.updateCartPage=function(){var o=window.location.toString().replace("add-to-cart","added-to-cart");t(".shop_table.cart").load(o+" .shop_table.cart:eq(0) > *",(function(){t(".shop_table.cart").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_page_refreshed")})),t(".cart_totals").load(o+" .cart_totals:eq(0) > *",(function(){t(".cart_totals").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_totals_refreshed")}))},o.prototype.updateFragments=function(o,a){a&&(t.each(a,(function(o){t(o).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})})),t.each(a,(function(o,a){t(o).replaceWith(a),t(o).stop(!0).css("opacity","1").unblock()})),t(document.body).trigger("wc_fragments_loaded"))},o.prototype.showNotices=function(o,a){t(".woocommerce-error, .woocommerce-message").remove();var e=t(".content-area");console.log(a),console.log("showing notices"),e.before(a),this.scrollToNotices()},o.prototype.scrollToNotices=function(o){var a=t(".woocommerce-error, .woocommerce-message"),e="scrollBehavior"in document.documentElement.style;a.length,a.length&&(e?a[0].scrollIntoView({behavior:"smooth"}):t("html, body").animate({scrollTop:a.offset().top-100},1e3))},o.prototype.showValidation=function(o,a,e){t(".eaa2c-error, .eaa2c-message").remove(),t(a).parent().find(">:first-child").before(e)},new o}))}});