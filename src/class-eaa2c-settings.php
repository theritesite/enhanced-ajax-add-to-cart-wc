<?php
/**
 * The settings functionality of the plugin.
 *
 * @link       www.theritesites.com
 * @since      1.0.0
 *
 * @package    Enhanced_Ajax_Add_To_Cart_Wc
 * @subpackage Enhanced_Ajax_Add_To_Cart_Wc/src
 * @author     TheRiteSites <contact@theritesites.com>
 */

class Enhanced_Ajax_Add_To_Cart_Wc_Settings {
	/**
	 * Parent plugin class.
	 *
	 * @var    CR_WC
	 * @since  1.0.0
	 */
	protected $plugin = null;

	/**
	 * Option key, and option page slug.
	 *
	 * @var    string
	 * @since  1.0.0
	 */
	protected static $key = 'cr_wc_settings';

	/**
	 * Options page metabox ID.
	 *
	 * @var    string
	 * @since  1.0.0
	 */
	protected static $metabox_id = 'cr_wc_settings_metabox';

	/**
	 * Options Page title.
	 *
	 * @var    string
	 * @since  1.0.0
	 */
	protected $title = '';

	/**
	 * Options Page hook.
	 *
	 * @var string
	 */
	protected $options_page = '';

	protected $settings_page;

	/**
	 * Constructor.
	 *
	 * @since  1.0.0
	 *
	 * @param  CR_WC $plugin Main plugin object.
	 */
	public function __construct( ) {
		// $this->plugin = $plugin;
		// $this->hooks();
		// $this->register_menu_item();
		// $this->register_settings();
	}

	public function register_menu_item() {
		$this->settings_page = add_submenu_page(
			'woocommerce',
			__( 'Add to Cart Button', EAA2C_NAME ),
			__( 'Add to Cart Button', EAA2C_NAME ),
			'manage_woocommerce',
			'eaa2c-page',
			array( $this, 'eaa2c_settings_page_callback' )
		);
	}

	public function register_settings() {
		register_setting(
			'eaa2c_settings',
			'eaa2c_button_blocking',
			array(
				'type' => 'boolean',
				'description' => '',
				// 'sanitize_callback' => array( $this, '' ),
				'show_in_rest' => true
				// 'default' => false
			)
		);
		register_setting(
			'eaa2c_settings',
			'eaa2c_dom_check',
			array(
				'type' => 'boolean',
				'description' => '',
				// 'sanitize_callback' => array( $this, '' ),
				'show_in_rest' => true
				// 'default' => false
			)
		);
		register_setting(
			'eaa2c_settings',
			'eaa2c_debug',
			array(
				'type' => 'boolean',
				'description' => '',
				// 'sanitize_callback' => array( $this, '' ),
				'show_in_rest' => true
				// 'default' => false
			)
		);
		register_setting(
			'eaa2c_settings',
			'eaa2c_custom_class',
			array(
				'type' => 'text',
				'description' => '',
				// 'sanitize_callback' => array( $this, '' ),
				'show_in_rest' => true
				// 'default' => false
			)
		);
		add_settings_section(
			'eaa2c_settings',
			// __( 'General Settings', EAA2C_NAME ),
			'',
			array( $this, 'display_all_settings_callback' ),
			$this->settings_page
			// 'eaa2c_settings'
		);
	}

	public function display_all_settings_callback( $args ) {
		$this->render_general_settings();
		$this->render_element_options();
		$this->render_display_options();
	}

	public function render_display_options() {
		add_settings_field(
			'eaa2c_display_subheading',
			// __( 'Display Options', EAA2C_NAME ),
			'',
			array( $this, 'subheading' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'title' => __( 'Display Options', EAA2C_NAME )
			)
		);
		add_settings_field(
			'eaa2c_custom_class',
			__( 'Enable custom class?', EAA2C_NAME ),
			array( $this, 'text_input' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_custom_class',
				'type' => 'text',
				'value' => get_option( 'eaa2c_custom_class')
			)
		);
		add_settings_field(
			'eaa2c_default_text',
			__( 'Change default "Add to Cart" text?', EAA2C_NAME ),
			array( $this, 'text_input' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_default_text',
				'type' => 'text',
				'value' => get_option( 'eaa2c_default_text'),
				'class' => 'disabled',
				'disabled' => true
			)
		);
	}

	public function render_element_options() {
		add_settings_field(
			'eaa2c_element_subheading',
			// __( 'Element Options', EAA2C_NAME ),
			'',
			array( $this, 'subheading' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'title' => __( 'Element Options', EAA2C_NAME )
			)
		);
		$image_field = empty( get_option( 'eaa2c_image_field') ) ? 0 : get_option( 'eaa2c_image_field');
		add_settings_field(
			'eaa2c_image_field',
			__( 'Allow images to be used on shortcodes and blocks?', EAA2C_NAME ),
			array( $this, 'toggle_button' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_image_field',
				'type' => 'checkbox',
				'value' => $image_field,
				'class' => 'disabled',
				'disabled' => true
			)
		);
		$custom_field = empty( get_option( 'eaa2c_custom_field') ) ? 0 : get_option( 'eaa2c_custom_field');
		add_settings_field(
			'eaa2c_custom_field',
			__( 'Allow custom text input to be used on blocks?', EAA2C_NAME ),
			array( $this, 'toggle_button' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_custom_field',
				'type' => 'checkbox',
				'value' => $custom_field,
				'class' => 'disabled',
				'disabled' => true
			)
		);
		add_settings_field(
			'eaa2c_default_text',
			__( 'Change default "Add to Cart" text?', EAA2C_NAME ),
			array( $this, 'text_input' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_default_text',
				'type' => 'text',
				'value' => get_option( 'eaa2c_default_text'),
				'class' => 'disabled',
				'disabled' => true
			)
		);
	}

	public function render_general_settings() {
		
		add_settings_field(
			'eaa2c_general_subheading',
			'',
			array( $this, 'subheading' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'title' => __( 'General Settings', EAA2C_NAME )
			)
		);
		$blocking = empty( get_option( 'eaa2c_button_blocking') ) ? 0 : get_option( 'eaa2c_button_blocking');
		add_settings_field(
			'eaa2c_button_blocking',
			__( 'Block buttons per request?', EAA2C_NAME ),
			array( $this, 'toggle_button' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_button_blocking',
				'type' => 'checkbox',
				'value' => $blocking
			)
		);
		add_settings_field(
			'eaa2c_custom_class',
			__( 'Enable custom class?', EAA2C_NAME ),
			array( $this, 'text_input' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_custom_class',
				'type' => 'text',
				'value' => get_option( 'eaa2c_custom_class')
			)
		);
		$debug = empty( get_option( 'eaa2c_debug') ) ? 0 : get_option( 'eaa2c_debug');
		add_settings_field(
			'eaa2c_debug',
			__( 'Enable debug mode?', EAA2C_NAME ),
			array( $this, 'toggle_button' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_debug',
				'type' => 'checkbox',
				'value' => $debug
			)
		);
		$dom_check = empty( get_option( 'eaa2c_dom_check') ) ? 0 : get_option( 'eaa2c_dom_check');
		add_settings_field(
			'eaa2c_dom_check',
			__( 'Check if DOM was updated per request?', EAA2C_NAME ),
			array( $this, 'toggle_button' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_add_to_cart_text',
				'type' => 'checkbox',
				'value' => $dom_check,
				'class' => 'disabled',
				'disabled' => true
			)
		);
		add_settings_field(
			'eaa2c_default_text',
			__( 'Change default "Add to Cart" text?', EAA2C_NAME ),
			array( $this, 'text_input' ),
			$this->settings_page,
			'eaa2c_settings',
			array(
				'name' => 'eaa2c_default_text',
				'type' => 'text',
				'value' => get_option( 'eaa2c_default_text'),
				'class' => 'disabled',
				'disabled' => true
			)
		);
	}

	public function toggle_button( $args ) {
		$checked = $args['value'] === 0 || empty( $args['value'] ) ? '' : ' checked';
		$disabled = isset( $args['disabled'] ) && $args['disabled'] === true ? ' disabled ' : '';
		echo '<input type="' . esc_attr($args['type'] ) . '" name="' . esc_attr($args['name'] ) . '"' . esc_attr( $checked . $disabled ) . '/>';
	}

	public function text_input( $args ) {
		$disabled = isset( $args['disabled'] ) && $args['disabled'] === true ? ' disabled ' : '';
		echo '<input name="' . esc_attr($args['name'] ) . '" type="' . esc_attr($args['type'] ) . '" value="' . esc_attr( $args['value'] ) . '"' . esc_attr( $disabled ) . ' />';
	}

	public function subheading( $args ) {
		echo '<h3>' . $args['title'] . '</h3>';
	}

	public function eaa2c_settings_page_callback() {
		?>
		<form action="options.php" method="post">
			<div class="eaa2c-settings">
				<h1>Enhanced AJAX Add to Cart Settings</h1>
			</div>
			<?php
			// settings_fields( 'eaa2c_element_options_group' );
			// settings_fields( 'eaa2c_general_settings_group' );
			settings_fields( 'eaa2c_settings' );
			do_settings_sections( $this->settings_page );
			submit_button();
			?>
		</form>
		<?php
	}
}