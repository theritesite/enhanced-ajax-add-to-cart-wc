=== Enhanced AJAX Add to Cart for WooCommerce ===
Contributors: theritesites
Donate link: https://www.theritesites.com
Tags: ajax button, add to cart, AJAX add to cart, shortcode, woocommerce, quantity, wc, AJAX, variable, variable product, theritesites, The Rite Sites
Requires at least: 4.8.1
Tested up to:      5.4
Requires PHP:      5.6+
Stable tag:        trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Creates a shortcode for you to be able to add an AJAX button with an associated quantity for you WooCommerce Product

== Description ==

This extension for [WooCommerce](https://www.woocommerce.com) allows you to render an AJAX button with an associated quantity field. Create effective and functional buttons to use for your or your customers convenience anywhere on your site you want!

= Shortcode Documentation =
**New Shorter Shortcode: ajax_add_to_cart is now an option for enh_ajax_add_to_cart_button**
The required field for every button is the product_id, with six optional fields:
- variation_id (used for variable products)
- title (to reflect the label before the button)
- quantity (sets the default quantity **AND hides the quantity checkbox**)
- show_quantity (**if quantity is specified**, re-enables the checkbox)
- show_price
- button_text

`[enh_ajax_add_to_cart_button product_id={pid} variation_id={vid} show_price={beginning|b|after|a|rear|r} button_text={STRING} title={none|attributes|att|attribute} quantity={INTEGER} show_quantity={yes} ]`


SIMPLE PRODUCT: Use only the required parameters to make a quantity box and add to cart button for a simple product with the title to the left:

`[enh_ajax_add_to_cart_button product=42 ]`
Refer to screenshot 1 below to see the output


VARIABLE PRODUCT: Use the product and variation parameters to make a quantity box and add to cart button for a specific variation of a variable product, with the fully qualified name:

`[enh_ajax_add_to_cart_button product=3312 variation=3313 ]`
Refer to screenshot 2 below to see the output


Use the product and variation parameters to make a quantity box and add to cart button for a specific variation of a variable product, with only the variation attributes listed separated with a space as the name:

`[enh_ajax_add_to_cart_button product=3312 variation=3313 title=attributes ]`
Refer to screenshot 3 below to see the output


Use the product and variation parameters to make a quantity box and add to cart button for a specific variation of a variable product, with no name listed:

`[enh_ajax_add_to_cart_button product=3312 variation=3313 title=none ]`
Refer to screenshot 4 below to see the output

Use the button_text parameter to change the text on the Add to Cart button! (Strips out HTML tags)

`[ajax_add_to_cart product=3312 variation=3313 button_text=Add! ]`


Use the show_price parameter to make a price field appear, with the options being before the title, after the title but before the quantity/add to cart button, or at the very rear of the line!

Beginning

`[ajax_add_to_cart product=3312 variation=3313 show_price=b ]`

After Title

`[ajax_add_to_cart product=3312 variation=3313 show_price=a ]`

Rear (After Button)

`[ajax_add_to_cart product=3312 variation=3313 show_price=r ]`



== Installation ==
= Minimum Requirements =

* PHP version 5.2.4 or greater (PHP 7.2 or greater is recommended)

= Automated Installation =
1. Download, install and activate through the WP Admin panels plugin directory
2. Enjoy!

Or...

= Manual Installation =
1. Upload the entire `/enhanced-ajax-add-to-cart-wc` directory to the `/wp-content/plugins/` directory.
2. Activate WooCommerce Cost of Shipping through the 'Plugins' menu in WordPress.
3. Enjoy the easy input of the flexible AJAX add to cart buttons on any page on your site!


== Frequently Asked Questions ==

= How can I change the separator between the price and the button or text? =

There is a CSS selector available for changing the separator for the plugin as a whole. You can put this in your themes styles.css or "Additional CSS" section of theme customizer
The default is shown below. To change the character, change the content value from " - " to whatever you see fit. Leave blank quotes for removing it all together (e.g. content: "";)

`
.ea-separator::before {
    content: " - ";
}
`

= Does this work for variable products? =

Yes! To use variable products, you must specify both the product id and the variation id in the shortcode parameters.

= Can there be multiple ajax buttons on the same page? =

Yes! You can only safely do the same variation of a variable product once on the same page, or one simple (of the same product) product button on the same page. The reason being, the JavaScript used to pass the quantity to the server is using either the variation id or the product id (respectively) to find which quantity box should be used.

= Does this replace the add to cart button on product pages or archives? = 

At this point, no. This is designed to supplement your store to let the buttons be anywhere.

== Screenshots ==

1. Minimum parameter requirements for shortcode and output
2. Variable product shortcode parameters and output
3. Variable product variation only title (no product base name)
4. No title for quantity and button inputs

== Changelog ==

= 1.3.4 =
* Fixed bug when using shortcodes in blocks - blocks try to run shortcode earlier than classic editor.

= 1.3.3 =
* Fixed bug when quantity input was hidden the add to cart button was no longer working.

= 1.3.2 =
* Changed how javascript selector worked for grabbing quantity from input. Only a bug in custom implementations around this plugin.

= 1.3.1 =
* Added class names to spans around ajax button title lines to allow for better styling
* Added new span around separator to allow for customized styling
* Fixed minor bug in how javascript files are enqueued to support themes that selectively enqueue WooCommerce assets
* Fixed bug when same product is on the same page, only one quantity field was working

= 1.3.0 =
* Added way to display price alongside button or quantity box or at the beginning of the line
* Added shorter shortcode name
* Added a way to change the text on the add to cart button

= 1.2.2 =
* Fixed bug where non-logged in users were not able to add multiple products to cart, especially on mobile.

= 1.2.1 =
* Fixed bug where minimized javascript entry point was using the wrong location

= 1.2.0 =
* Added notices to show if and why a product could not be added to cart
* Added minimized JavaScript files and enqueued if file exists
* Added some debugging tools and constant
* Added security nonces
* Fixed bug where on some browsers the event of clicking a button would trigger a page reload
* Tweaked how AJAX is enqueued in the plugin
* Tweaked files to take out unnecessary lines and repeated words
* Tested for new versions of WooCommerce and WordPress

= 1.1.1 =
* Fixed bug that unnecessarily changed the global product on variable product pages
* Added action to allow ajax buttons for non-logged in users
* Changed styling of title slightly

= 1.1.0 =
* Added feature to be able to hide the quantity input box
* Added feature to be able to change the default quantity

= 1.0.1 =
* Updated readme.txt

= 1.0 =
* First release
* Creates shortcode to create AJAX add to cart button for simple and variable products
* Shortcode allows for title to be fully qualified product name (including variation attributes)
* Shortcode allows for title to be only the variation attributes
* Shortcode allows for title to be hidden
* Shortcode associates quantity with AJAX button

== Upgrade Notice ==
= 1.1 =
* Update now to be able to hide or show the quantity input box!

= 1.0 =
* First release!
