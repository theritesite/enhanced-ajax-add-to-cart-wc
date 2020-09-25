=== Enhanced AJAX Add to Cart for WooCommerce ===
Contributors: theritesites
Donate link: https://www.theritesites.com
Tags: ajax button, add to cart, AJAX add to cart, shortcode, block, woocommerce, gutenberg, theritesites, The Rite Sites
Requires at least: 4.8.1
Tested up to:      5.4
Requires PHP:      5.6+
Stable tag:        trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Creates a new block and shortcode that allows customers to add WooCommerce products to their cart without leaving or reloading the current page.

== Description ==

This extension for [WooCommerce](https://www.woocommerce.com) allows you to render a non-redirect button with an associated quantity field. Create effective and functional buttons to use for your or your customers convenience anywhere on your site you want!

**Breaking Changes in 2.0**
We have changed the design to condense some code and make things more simple. We have deprecated some javascript and server side PHP functions and have added deprecated notices.
These are from how the Add to Cart button was different between variations and other types of products. They now use the same code for different product types. This will effect the selectors for styling or any other custom code relying on classes used by this plugin.

= Block Documentation =
**New "AJAX Add to Cart Block"!** and **New "Group AJAX Add to Cart Block"!**
New and improved interface to create flexible components on any page of your website that has the block editor enabled!
Easily toggle displays and drag-and-drop to move around objects to change the appearance of the add to cart component on the front end.

The major difference between the blocks is the Group AJAX add to cart block allows the selection of multiple products. The selected display settings and styling will be applied to all products the same in that block.

Not only does the block have all the features the shortcode does, but expands further upon that allowing you to change the display order of each individual component using a visual editor!
The block also has a product select tool so you no longer have to remember individual product or variation IDs

Block fields available:
- Title
- Separator
- Price
- Quantity
- Button
- Image (premium setting)
- Custom text field (premium setting)
- Short Description (premium setting)

= Shortcode Documentation =
**New Shorter Shortcode: [ajax_add_to_cart /] is now an option for [enh_ajax_add_to_cart_button /]**
The required field for every button is the product, with six optional fields:
- variation (used for variable products)
- title (to reflect the label before the button)
- quantity (sets the default quantity **AND hides the quantity checkbox**)
- show_quantity (**if quantity is specified**, re-enables the checkbox)
- show_price
- button_text

`[enh_ajax_add_to_cart_button product={pid} variation={vid} show_price={beginning|b|after|a|rear|r} button_text={STRING} title={none|attributes|att|attribute} quantity={INTEGER} show_quantity={yes} ]
[ajax_add_to_cart product={pid} variation={vid} show_price={beginning|b|after|a|rear|r} button_text={STRING} title={none|attributes|att|attribute} quantity={INTEGER} show_quantity={yes} ]`


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
Use double quotes ( "like this" ) to get a phrase with spaces

`[ajax_add_to_cart product=3312 variation=3313 button_text="Add this to cart!" ]`


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
2. Activate Enhanced AJAX Add to Cart for WooCommerce through the 'Plugins' menu in WordPress.
3. Enjoy the easy input of the flexible AJAX add to cart buttons on any page on your site!


== Frequently Asked Questions ==

= Can I put multiple words on the button? =

Yes!
Shortcode: By using the button_text parameter using double quotes around your phrase. button_text="quickly add this product!"
Block: Just put your phrase in the input box!

= How can I change the separator between the price and the button or text? =

There is a CSS selector available for changing the separator for the plugin as a whole. You can put this in your themes styles.css or "Additional CSS" section of theme customizer
The default is shown below. To change the character, change the content value from " - " to whatever you see fit. Leave blank quotes for removing it all together (e.g. content: "";)
This is the same for blocks and shortcodes.

`
.ea-separator::before {
    content: " - ";
}
`

= Can I change the styling of the quantity input? =

Of course! Currently, there are no standard options for styling.
We realize that many websites want their own styling or have already hired a designer. We let our elements be as broad and blank as possible while picking up theme standards.

If your theme styles are not being applied to the quantity input, you can use the following css selector to edit all of the quantity inputs:
`

`

= Does this work for variable products? =

Yes!
Shortcode: To use variable products, you must specify both the product id and the variation id in the shortcode parameters.
Block: Select the product(s) you want to use in the product selector!

= Some attributes for variable products are not appearing =

This can be a compatibility issue with how the store is set up. This plugin uses the variation ID to add the products to the cart. If the variable product with **back end** selected attributes is not a defined variation, then the product will not be able to be used correctly.

In short: all variable products to be used by this must be defined variations and have a unique id.

= How are different variations uniquely identified? =

The title attributes are how you can define what is displayed on the frontend. Options are the standard product title (no product attributes), product title + product attributes, or just the product attributes.
Alternatively, in the premium version, there is a blank text input that can be used in the block editor. This can be used for any text and can be a unique identifier.

= Can there be multiple ajax buttons on the same page? =

Yes! You can safely use multiple buttons on the same page with confirmed results.

= Does this replace the add to cart button on product pages or archives? = 

At this point, no. This is designed to supplement your store to let the buttons be anywhere.

== Screenshots ==

1. Minimum parameter requirements for shortcode and output
2. Variable product shortcode parameters and output
3. Variable product variation only title (no product base name)
4. No title for quantity and button inputs

== Changelog ==

= 2.0.0 =
* Added AJAX Add to Cart block.
* Added additional display order controls, only available in the block.
* Added "base" title option for variable products.
* Added extra class parameter "class" to add to the wrapper element for all button blocks/shortcodes.
* Added min/max fields for quantity to have basic controls.
* Added "custom", "image", and "short description" fields to be displayable.
* Added php filter 'eaa2c_button_row_additional_fields' to display additional content on a shortcode or block (filter is passed a blank string and the product id).
* Added php filter 'eaa2c_button_row_custom_field' to allow for the custom field to be flexible with the product (filter is passed default html and the product id).
* Added php filter 'eaa2c_button_row_wrap_override' to disable the new Group EAA2C display wrapping element.
* Added Namespacing to the project.
* Standardized printing of shortcodes and blocks, along with product types.
* Fixed bug when attribute title was selected but undefined, now printing parent product name rather than nothing.

= 1.5.0 =
* Added button blocking using the disabled html parameter. This prevents requests being skipped when many buttons pressed within short time.
* Tweaked how assets are enqueued to only enqueue on pages when the shortcode is on it. This prevents overriding the AJAX setting in WooCommerce settings page.
* Fixed bug where variation was showing with parent product default cost. Now shows correct variation price.

= 1.4.0 =
* Added feature where when product is out of stock the add to cart button displays as "out of stock" instead.

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
= 2.0.0 =
* Styling changes: Button classes have changed to make buttons more uniform
* Styling changes: Added spacing around the separator
* Deprecated function: Enhanced_Ajax_Add_To_Cart_Wc_Admin::display_variable_product_add_to_cart()
* Deprecated function: Enhanced_Ajax_Add_To_Cart_Wc_AJAX::variable_add_to_cart_callback()
* Deprecated function: Enhanced_Ajax_Add_To_Cart_Wc_AJAX::simple_add_to_cart_callback()

= 1.1 =
* Update now to be able to hide or show the quantity input box!

= 1.0 =
* First release!
