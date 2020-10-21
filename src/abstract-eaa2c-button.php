<?php
/**
 * Abstract class for the AJAX Add to Cart button and associated fields.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/admin
 * @author     TheRiteSites <contact@theritesites.com>
 */

namespace TRS\EAA2C;

if ( ! class_exists( 'TRS\EAA2C\Abstract_Button' ) ) {
	abstract class Abstract_Button {

		/**
		 * The ID of this plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 * @var      string    $plugin_name    The ID of this plugin.
		 */
		protected $meta = array(
			'contentVisibility' => array(
				'title'  => true,
				'price'  => false,
				'quantity' => true,
				'button' => true,
				'separator' => false,
			),
			'contentOrder' => array(
				'title',
				'separator',
				'price',
				'quantity',
				'button',
			),
			'quantity' => array(
				'default' => 1,
				'min' => 1,
				'max' => -1,
			),
			'buttonText' => 'Add to cart',
			'products' => array(),
			'variations' => array(),
			'titleType' => 'full',
			'align'	=> '',
			'className' => '',
		);

		/**
		 * The version of this plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 * @var      string    $version    The current version of this plugin.
		 */
		private $version;

		/**
		 * Blocks
		 */
		public function render() {
			$raw_attributes	  = $this->meta;
			$attributes 	  = $this->parse_attributes( $raw_attributes );
			// $this->query_args = $this->parse_query_args();
			// $products         = $this->get_products();
			// $classes          = $this->get_container_classes();

			wp_enqueue_style( EAA2C_NAME );
			wp_enqueue_script( EAA2C_NAME . '-js-bundle' );

			if ( /*WP_DEBUG ||*/ EAA2C_DEBUG ) {
				error_log( "checking attributes" );
				error_log( wc_print_r( $attributes, true ) ) ;
			}

			return $this->renderHtml( $attributes );
		}

		protected function possibly_build_hidden_language_field() {

			ob_start();

			if ( function_exists( 'wpml_the_language_input_field' ) ) { 
				wpml_the_language_input_field(); 
			} else { 
				global $sitepress;
				if ( isset( $sitepress ) ) { 
					echo "<input class='eaa2clanguage sitepress' type='hidden' name='lang' value='" . $sitepress->get_current_language() . "' />"; 
				} 
				else if ( $res = apply_filters( 'wpml_current_language', false ) ) {
					echo "<input class='eaa2clanguage filtered' type='hidden' name='lang' value='" . $res . "' />"; 
				}
				else {
					echo "<input class='eaa2clanguage none' type='hidden' name='lang' value='en' />"; 
				}
				return null; 
			}
			$html = ob_get_contents();
			ob_end_clean();

			return $html;
		}

		/**
		 * This function reats in an array of attributes. This array is already sanitized but not validated.
		 * 
		 * @since 2.0.0
		 */
		protected function renderHtml( $attributes = array() ) {
			$contentOrder 	    = $attributes['contentOrder'];
			$contentVisibility  = $attributes['contentVisibility'];

			$available_elements = [ 'title', 'separator', 'price', 'quantity', 'button' ];
			if ( get_option( 'eaa2c_image_field' ) === 'on' ) {
				$available_elements[] = 'image';
			}
			if ( get_option( 'eaa2c_custom_field' ) === 'on' ) {
				$available_elements[] = 'custom';
			}
			if ( get_option( 'eaa2c_short_description' ) === 'on' ) {
				$available_elements[] = 'short_description';
			}

			$hidden_language_field = $this->possibly_build_hidden_language_field();

			ob_start();
				
			if ( is_array( $attributes['products'] ) && isset( $attributes['products'][0] ) ) {

				// If there is more than 1 product, by definition its a group block. We should wrap this block.
				// by default, and apply a filter allowing for an override of the wrap flag. Return false to disable the wrap.
				$wrap_group = apply_filters( 'eaa2c_button_row_wrap_override', 1 < count( $attributes['products'] ), count( $attributes['products'] ) );
				if ( $wrap_group === true ) {
					?>
					<div class="eaa2c-group">
					<?php
				}
				foreach( $attributes['products'] as $product_raw ) {
					// $product_raw   = $attributes['products'][0];
					$product_id		= isset( $product_raw['id'] ) ? $product_raw['id'] : 0;
					$product		= wc_get_product( $product_id );
					$variation_raw	= isset( $attributes['variations'][0] ) ? $attributes['variations'][0] : array();
					$variation_id 	= isset( $variation_raw['id'] ) ? $variation_raw['id'] : 0;
					$variation 		= wc_get_product( $variation_id );
					$buttonText		= $attributes['buttonText'];
					$quantity 	  	= $attributes['quantity'];
					$extraClasses	= isset( $attributes['className'] ) ? $attributes['className'] : '';
					$extraClasses  .= isset( $attributes['align'] ) && ! empty( $attributes['align'] ) ? ' align' . $attributes['align'] : '';
					$extraClasses  .= empty( get_option( 'eaa2c_custom_class') ) ? '' : ' ' . get_option( 'eaa2c_custom_class' );
					$titleType 	    = isset( $attributes['titleType'] ) ? $attributes['titleType'] : 'full';
					$titleAction	= isset( $attributes['titleAction'] ) ? $attributes['titleAction'] : '';

					$customText		= '';
					$image			= array();
					$imageType		= '';

					if ( $product instanceof \WC_Product ) {
						$sizes = apply_filters( 'image_size_names_choose',
							array(
								'thumbnail' => __( 'Thumbnail' ),
								'medium'    => __( 'Medium' ),
								'large'     => __( 'Large' ),
								'full'      => __( 'Full Size' ),
							)
						);

						$max_value      = apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product );
						$min_value      = apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product );
						$step           = apply_filters( 'woocommerce_quantity_input_step', 1, $product );
						$pattern        = apply_filters( 'woocommerce_quantity_input_pattern', has_filter( 'woocommerce_stock_amount', 'intval' ) ? '[0-9]*' : '' );
						$inputmode      = apply_filters( 'woocommerce_quantity_input_inputmode', has_filter( 'woocommerce_stock_amount', 'intval' ) ? 'numeric' : '' );
						$input_id       = 'product_' . ( false !== $variation_id ? $variation_id : $product_id ). '_qty';
						$disable_button = '';

						$out_of_stock_check = empty( get_option( 'eaa2c_out_of_stock') ) ? false : get_option( 'eaa2c_out_of_stock' );
						if ( false === $out_of_stock_check || strcmp( 'false', $out_of_stock_check ) === 0 ) {
							if ( $variation !== false && $variation instanceof \WC_Product_Variation ) {
								if ( false === $variation->is_in_stock() ) {
									$buttonText = __( 'Out of stock', 'enhanced-ajax-add-to-cart-wc' );
									$disable_button = 'disabled';
								}
							}
							elseif ( $product !== false && $variation === false && $product instanceof \WC_Product ) {
								if ( false === $product->is_in_stock() ) {
									$buttonText = __( 'Out of stock', 'enhanced-ajax-add-to-cart-wc' );
									$disable_button = 'disabled';
								}
							}
						}

						if ( true ) {
							if ( $quantity['min'] > $min_value ) {
								$min_value = $quantity['min'];
							}
							if ( $quantity['max'] ) {
								$max_value = $quantity['max'];
							}
						}

						if ( isset( $attributes['custom'] ) ) {
							$customText = ! empty( $attributes['custom'] ) ? $attributes['custom'] : '';
						}

						if ( isset( $attributes['image'] ) ) {
							if ( ! empty( $attributes['image'] ) && $contentVisibility['image'] === true && in_array( 'image', $available_elements ) ) {
								$imageType = $attributes['image'];
								if ( $product ) {
									$image_id = $product->get_image_id();
									if ( strcmp( 'inline', $imageType ) === 0 ) {
										$imageType = 'thumbnail';
									}

									if ( $image_id > 0 && in_array( $imageType , array_keys( $sizes ) ) ) {
										$temp = wp_get_attachment_image_src( $image_id, $imageType );
										if ( is_array( $temp ) ) {
											if ( isset( $temp[0] ) ) {
												$image['src'] = $temp[0];
											}
											if ( isset( $temp[1] ) ) {
												$image['width'] = $temp[1];
											}
											if ( isset( $temp[2] ) ) {
												$image['height'] = $temp[2];
											}
										}
									}
								}
							}
						}

						$priceDisplay = wc_price( $product->get_price() );
						$titleDisplay = $product->get_name();
						if ( $variation !== null && $variation !== false ) {
							$priceDisplay = get_woocommerce_currency_symbol() . $variation->get_price();

							if ( strcmp( $titleType, 'full' ) === 0 ) {
								$titleDisplay = $variation->get_name();
							}
							elseif ( strcmp( $titleType, 'att' ) === 0 ) {
								$titleDisplay = '';
								if ( $variation instanceof \WC_Product ) {
									foreach ( $variation->get_variation_attributes() as $key => $attribute )
										$titleDisplay .= ucfirst( $attribute ) . ' ';
								}
							}
						}

						$titleDisplay = esc_html( $titleDisplay );
						if ( '' !== $titleAction ) {
							if ( strcmp( $titleAction, 'link' ) === 0 ) {
								$titleDisplay = '<a href="' . $product->get_permalink() . '">' . $titleDisplay . '</a>'; 
							}
						}

						?>
						<div class="enhanced-woocommerce-add-to-cart <?php echo esc_attr( $extraClasses ); ?>">
							<?php foreach( $contentOrder as $item ) : ?>
								<?php if ( in_array( $item, $available_elements ) ) : ?>
									<?php if ( strcmp( $item, 'title' ) === 0 && $contentVisibility[ $item ] === true  ) : ?>
										<span class="ea-line ea-text ea-title">
											<span><?php echo $titleDisplay; ?></span>
										</span>
									<?php endif; ?>
									<?php if ( strcmp( $item, 'price' ) === 0 && $contentVisibility[ $item ] === true   ) : ?>
										<span class="ea-line ea-text ea-price">
											<?php echo $priceDisplay; ?>
										</span>
									<?php endif; ?>
									<?php if ( strcmp( $item, 'quantity' ) === 0 ) : ?>
										<?php $hidden = ( $contentVisibility[ $item ] ? 'number' : 'hidden' ); ?>
										<span class="ea-line quantity-container">
											<div class="quantity">
												<input
													type="<?php esc_attr_e( $hidden ); ?>"
													id="<?php esc_attr_e( $input_id ); ?>"
													class="input-text qty text"
													value="<?php esc_attr_e( $quantity['default'] ); ?>"
													step="<?php esc_attr_e( $step ) ?>"
													min="<?php esc_attr_e( $min_value ); ?>"
													max="<?php esc_attr_e( (int)$max_value === -1 ? '' : $max_value ); ?>"
													<?php if ( false === apply_filters( 'eaa2c_enable_qty_name_for_product_form_compatibility', false ) ) : esc_attr_e( 'name="quantity"' ); endif; ?>
													title="<?php esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ) ?>"
													size="4"
													pattern="<?php esc_attr_e( $pattern ) ?>"
													inputmode="<?php esc_attr_e( $inputmode ) ?>"
												/>
											</div>
										</span>
									<?php endif; ?>
									<?php if( strcmp( $item, 'separator' ) === 0 && true === $contentVisibility[ $item ] ) : ?>
										<span class="ea-line ea-separator">
										</span>
									<?php endif; ?>
									<?php if( strcmp( $item, 'button' ) === 0 && true === $contentVisibility[ $item ] ) : ?>
										<button
											type="submit"
											class="eaa2c_add_to_cart_button button alt"
											data-pid="<?php esc_attr_e( $product_id ); ?>"
											data-vid="<?php esc_attr_e( $variation_id ); ?>"
											<?php esc_attr_e( $disable_button ) ?>
										>
											<?php esc_html_e( $buttonText ); ?>
										</button>
									<?php endif; ?>
									<?php if ( strcmp( $item, 'custom' ) === 0 && $contentVisibility[ $item ] === true  ) : ?>
										<span class="ea-line ea-custom">
											<?php echo apply_filters( 'eaa2c_button_row_custom_field', '<span>' . esc_html_e( $customText ) . '</span>', $product_id ); ?>
										</span>
									<?php endif; ?>
									<?php if ( strcmp( $item, 'image' ) === 0 && $contentVisibility[ $item ] === true  ) : ?>
										<span class="ea-line ea-image">
											<?php if ( isset( $image['src'] ) ) : ?>
												<?php if ( strcmp( 'inline', $attributes['image'] ) === 0 ) : ?>
													<img class="<?php strcmp( 'inline', $attributes['image'] ) === 0 ? esc_attr_e( 'ea-inline-image' ) : ''; ?>" src="<?php echo $image['src']; ?>"/>
												<?php else : ?>
													<img src="<?php echo $image['src']; ?>" width="<?php esc_attr_e( $image['width'] ); ?>" height="<?php esc_attr_e( $image['height'] ); ?>"/>
												<?php endif; ?>
											<?php endif; ?>
										</span>
									<?php endif; ?>
									<?php if ( strcmp( $item, 'short_description' ) === 0 && $contentVisibility[ $item ] === true  ) : ?>
										<span class="ea-line ea-text ea-short_description">
											<!-- <span><?php /*esc_html_e( $product_raw[ 'short_description' ] );*/ ?></span> This would be for if we want these to be non-dynamic aka what the description was when the block was saved -->
											<span><?php echo $product->get_short_description(); ?></span>
										</span>
									<?php endif; ?>
								<?php endif; ?>
							<?php endforeach; ?>
							<?php echo apply_filters( 'eaa2c_button_row_additional_fields', '', $product_id ); ?>
							<?php echo $hidden_language_field; ?>
						</div>
						<?php
					}
				}
				if ( $wrap_group === true ) {
					?>
					</div>
					<?php
				}
			}
			$html = ob_get_contents();
			ob_end_clean();

			return $html;
			wp_die();
		}

		protected function parse_attributes( $attributes ) {
			// These should match what's set in JS `registerBlockType`.
			$buttonText = get_option( 'eaa2c_default_text' );
			$buttonText = empty( $buttonText ) ? __( 'Add to cart', 'enhanced-ajax-add-to-cart-wc' ) : $buttonText;

			$defaults = array(
				'contentVisibility' => array(
					'title'  => true,
					'price'  => true,
					'quantity' => true,
					'button' => true,
					'separator' => true,
				),
				'contentOrder' => array(
					'title',
					'separator',
					'price',
					'quantity',
					'button',
				),
				'quantity' => array(
					'default' => 1,
					'min' => 1,
					'max' => -1,
				),
				'buttonText' => $buttonText,
				'products' => array(),
				'variations' => array(),
				'titleType' => 'full',
				'align'	=> '',
				'className' => '',
			);

			return wp_parse_args( $attributes, $defaults );
		}

	}
}