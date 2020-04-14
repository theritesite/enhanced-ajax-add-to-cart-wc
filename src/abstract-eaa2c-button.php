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

abstract class Abstract_EAA2C_Button {

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

		if ( WP_DEBUG || EAA2C_DEBUG ) {
			error_log( "checking attributes" );
			error_log( wc_print_r( $attributes, true ) ) ;
		}

		return $this->renderHtml( $attributes );
	}

	/**
	 * This function reats in an array of attributes. This array is already sanitized but not validated.
	 * 
	 * @since 2.0.0
	 */
	protected function renderHtml( $attributes = array() ) {
		$contentOrder 	   = $attributes['contentOrder'];
		$contentVisibility = $attributes['contentVisibility'];

		ob_start();
			
		if ( is_array( $attributes['products'] ) && isset( $attributes['products'][0] ) ) {
			$product_raw = $attributes['products'][0];
			$product_id = isset( $product_raw['id'] ) ? $product_raw['id'] : 0;
			$product = wc_get_product( $product_id );
			$variation_raw = isset( $attributes['variations'][0] ) ? $attributes['variations'][0] : array();
			$variation_id = isset( $variation_raw['id'] ) ? $variation_raw['id'] : 0;
			$variation = wc_get_product( $variation_id );
			$buttonText = $attributes['buttonText'];
			$quantity = $attributes['quantity'];
			$extraClasses = isset( $attributes['className'] ) ? $attributes['className'] : '';
			$extraClasses .= isset( $attributes['align'] ) && ! empty( $attributes['align'] ) ? ' align' . $attributes['align'] : '';
			$titleType = isset( $attributes['titleType'] ) ? $attributes['titleType'] : 'full';

			$priceDisplay = get_woocommerce_currency_symbol() . $product->get_price();
			$titleDisplay = $product->get_name();
			if ( $variation !== null && $variation !== false ) {
				$priceDisplay = get_woocommerce_currency_symbol() . $variation->get_price();

				if ( strcmp( $titleType, 'full' ) === 0 ) {
					$titleDisplay = $variation->get_name();
				}
				elseif ( strcmp( $titleType, 'att' ) === 0 ) {
					$titleDisplay = '';
					if ( $variation instanceof WC_Product ) {
						foreach ( $variation->get_variation_attributes() as $key => $attribute )
							$titleDisplay .= ucfirst( $attribute ) . ' ';
					}
				}
			}

			?>
			<div class="enhanced-woocommerce-add-to-cart <?php echo esc_attr( $extraClasses ); ?>">
				<?php foreach( $contentOrder as $item ) : ?>
					<?php if ( strcmp( $item, 'title' ) === 0 && $contentVisibility[ $item ] === true  ) : ?>
						<span class="ea-line ea-text">
							<span><?php esc_html_e( $titleDisplay ); ?></span>
						</span>
					<?php endif; ?>
					<?php if ( strcmp( $item, 'price' ) === 0 && $contentVisibility[ $item ] === true   ) : ?>
						<span class="ea-line ea-text">
							<span><?php esc_html_e( $priceDisplay ); ?></span>
						</span>
					<?php endif; ?>
					<?php if( strcmp( $item, 'quantity' ) === 0 ) : ?>
						<?php $hidden = ( $contentVisibility[ $item ] ? '' : 'hidden="true"' ); ?>
						<span class="ea-line quantity-container">
							<div class="quantity">
								<input
									type="number"
									id="<?php esc_attr_e( $product_id ); ?>"
									class="input-text qty text"
									value="<?php esc_attr_e( $quantity['default'] ); ?>"
									step="1"
									min="<?php esc_attr_e( $quantity['min'] ); ?>"
									max="<?php esc_attr_e( $quantity['max'] ); ?>"
									name=''
									title='quantity'
									<?php esc_attr_e( $hidden ); ?>
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
						>
							<?php /* data-pid="<?php esc_attr_e( $product_raw['parent_id'] > 0 ? $product_raw['parent_id'] : $product_raw['id'] ); ?>" */ ?>
							<?php esc_html_e( $buttonText ); ?>
						</button>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>
			<?php
		}
		$html = ob_get_contents();
		ob_end_clean();

		return $html;
		wp_die();
	}

	protected function parse_attributes( $attributes ) {
		// These should match what's set in JS `registerBlockType`.
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
			'buttonText' => 'Add to cart',
			'products' => array(),
			'variations' => array(),
			'titleType' => 'full',
			'align'	=> '',
			'className' => '',
		);

		return wp_parse_args( $attributes, $defaults );
	}

}