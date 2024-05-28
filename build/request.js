jQuery((function(t){"use strict";var a=function(){var a=this;a.showValidation=a.showValidation.bind(a),a.showNotices=a.showNotices.bind(a),a.scrollToNotices=a.scrollToNotices.bind(a),a.blockButtons=a.blockButtons.bind(a),a.unblockButtons=a.unblockButtons.bind(a),1==EAA2C.blocking&&t(document.body).on("click",".variable_add_to_cart_button",this.blockButtons).on("click",".simple_add_to_cart_button",this.blockButtons).on("click",".a2cp_button",this.blockButtons).on("a2cp_added_to_cart",this.unblockButtons).on("notices_received",this.unblockButtons),t(document.body).on("click",".variable_add_to_cart_button",this.onAddAnyToCart).on("click",".simple_add_to_cart_button",this.onAddAnyToCart).on("click",".a2cp_button",this.onAddAnyToCart).on("a2cp_added_to_cart",this.updateButton).on("a2cp_added_to_cart",this.updateCartPage).on("a2cp_added_to_cart",this.updateFragments).on("notices_received",this.showNotices).on("validation_message",this.showValidation)};a.prototype.blockButtons=function(a){t(".simple_add_to_cart_button").attr("disabled",!0),t(".variable_add_to_cart_button").attr("disabled",!0),t(".a2cp_button").attr("disabled",!0)},a.prototype.unblockButtons=function(a){t(".simple_add_to_cart_button").attr("disabled",!1),t(".variable_add_to_cart_button").attr("disabled",!1),t(".a2cp_button").attr("disabled",!1)},a.prototype.onAddAnyToCart=function(a){var o=t(this);a.preventDefault(),o.removeClass("added"),o.addClass("loading");var e,d={pid:0,vid:0,qty:0},r={},n=0;if(!0===EAA2C.domCheck?(d.pid=parseInt(o.data("pid")),d.vid=parseInt(o.data("vid"))):t.each(t(this).data(),(function(t,a){d[t]=a})),r=t(this).siblings(".quantity-container").find("input.input-text.qty.text"),d.action="eaa2c_add_to_cart",e=parseInt(r.attr("min")),n=parseInt(r.attr("max")),(isNaN(n)||""===n)&&(n=-1),d.qty=r.val(),EAA2C.debug&&console.log("quantity max: "+n+" and min: "+e+" and val: "+r.val()),t(document.body).trigger("adding_to_cart",[o,d]),-1===parseInt(n)&&d.qty>=e||d.qty<=n&&d.qty>=e)t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:d.pid,variable:d.vid,quantity:d.qty,action:"eaa2c_add_to_cart",eaa2c_action:!0,"wc-ajax":!0},success:function(a){EAA2C.debug&&console.log("product id: "+d.pid+" variable id: "+d.vid+" quantity: "+d.qty),a.added&&(t(document.body).trigger("a2cp_added_to_cart",[a.fragments,a.cart_hash,o]),t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o])),a.error&&o.removeClass("loading"),a.html&&t(document.body).trigger("notices_received",[a.html])},error:function(){console.error("Failure adding product to cart!"),EAA2C.debug&&console.log("product id: "+d.pid+" variable id: "+d.vid+" quantity: "+d.qty)}});else if(d.qty>n){var i='<ul class="woocommerce-error eaa2c-error eaa2c-message" role="alert"><li>cannot add product to cart, you are over the allowed maximum of '+r.attr("max")+" to add to your cart.</li></ul>";o.removeClass("loading"),t(document.body).trigger("notices_received",[i])}else d.qty<e&&(i='<ul class="woocommerce-error eaa2c-error eaa2c-message" role="alert"><li>cannot add product to cart, you are under the allowed minimum '+r.attr("min")+" to add to your cart.</li></ul>",o.removeClass("loading"),t(document.body).trigger("notices_received",[i]))},a.prototype.onAddVariableToCart=function(a){console.warn("Calling deprecated function 'onAddVariableToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.");var o=t(this);a.preventDefault(),o.removeClass("added"),o.addClass("loading");var e={};!0===EAA2C.domCheck?(e.pid=parseInt(o.data("pid")),e.vid=parseInt(o.data("vid"))):t.each(t(this).data(),(function(t,a){e[t]=a})),e.qty=o.siblings(".quantity-container").find("input").val(),e.action="variable_add_to_cart",t(document.body).trigger("adding_to_cart",[o,e]),t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:e.pid,variable:e.vid,quantity:e.qty,action:"variable_add_to_cart",eaa2c_action:!0,"wc-ajax":!0},success:function(a){EAA2C.debug&&console.log("product id: "+e.pid+" variation: "+e.vid+" quantity: "+e.qty),t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o]),a.html&&t(document.body).trigger("notices_received",[a.html])},error:function(){console.error("Failure adding variable product to cart!"),EAA2C.debug&&console.log("product id: "+e.pid+" variation: "+e.vid+" quantity: "+e.qty)}})},a.prototype.onAddSimpleToCart=function(a){console.warn("Calling deprecated function 'onAddSimpleToCart'. Deprecated in 2.0.0 of Enhanced AJAX Add to Cart.");var o=t(this);a.preventDefault(),o.removeClass("added"),o.addClass("loading");var e={};!0===EAA2C.domCheck?(e.pid=parseInt(o.data("pid")),e.vid=parseInt(o.data("vid"))):t.each(t(this).data(),(function(t,a){e[t]=a})),e.qty=t(this).siblings(".quantity-container").find("input.input-text.qty.text").val(),e.action="simple_add_to_cart",t(document.body).trigger("adding_to_cart",[o,e]),t.ajax({url:EAA2C.ajax_url,type:"POST",data:{product:e.pid,quantity:e.qty,action:"simple_add_to_cart",eaa2c_action:!0,"wc-ajax":!0},success:function(a){EAA2C.debug&&console.log("product id: "+e.pid+" quantity: "+e.qty),t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o]),a.html&&t(document.body).trigger("notices_received",[a.html])},error:function(){console.error("Failure adding non-variable product to cart!"),EAA2C.debug&&console.log("product id: "+e.pid+" quantity: "+e.qty)}})},a.prototype.updateButton=function(t,a,o,e){if((e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),!wc_add_to_cart_params.is_cart&&0===e.parent().find(".added_to_cart").length)){var d=wc_add_to_cart_params.i18n_view_cart,r=wc_add_to_cart_params.cart_url;EAA2C.afterAddText&&(d=EAA2C.afterAddText),EAA2C.afterAddUrl&&(r=EAA2C.afterAddUrl),e.after(' <a href="'+r+'" class="added_to_cart wc-forward" title="'+d+'">'+d+"</a>")}},a.prototype.updateCartPage=function(){var a=window.location.toString().replace("add-to-cart","added-to-cart");t(".shop_table.cart").load(a+" .shop_table.cart:eq(0) > *",(function(){t(".shop_table.cart").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_page_refreshed")})),t(".cart_totals").load(a+" .cart_totals:eq(0) > *",(function(){t(".cart_totals").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_totals_refreshed")}))},a.prototype.updateFragments=function(a,o){o&&!EAA2C.stopRefreshFrags&&(t.each(o,(function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})})),t.each(o,(function(a,o){t(a).replaceWith(o),t(a).stop(!0).css("opacity","1").unblock()})),t(document.body).trigger("wc_fragments_loaded"))},a.prototype.showNotices=function(a,o){t(".woocommerce-error, .woocommerce-message").remove(),t(".content-area").before(o),this.scrollToNotices()},a.prototype.scrollToNotices=function(a){var o=t(".woocommerce-error, .woocommerce-message"),e="scrollBehavior"in document.documentElement.style;o.length,o.length&&(e?o[0].scrollIntoView({behavior:"smooth"}):t("html, body").animate({scrollTop:o.offset().top-100},1e3))},a.prototype.showValidation=function(a,o,e){t(".eaa2c-error, .eaa2c-message").remove(),t(o).parent().find(">:first-child").before(e)},new a}));