<?php

/**
 * Display conditions control
 *
 * @package Botiga
 *
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

class Botiga_Display_Conditions_Control extends WP_Customize_Control {

	/**
	 * The type of control being rendered
	 */
	public $type = 'botiga-display-conditions-control';

	public $title = '';

	/**
	 * Constructor
	 */
	public function __construct($manager, $id, $args = array(), $options = array()) {
		parent::__construct($manager, $id, $args);
	}

	/**
	 * Enqueue our scripts and styles
	 */
	public function enqueue() {
		wp_enqueue_script('botiga-select2', get_template_directory_uri() . '/assets/vendor/select2/select2.full.min.js', array('jquery'), '4.0.13', true);
		wp_enqueue_style('botiga-select2', get_template_directory_uri() . '/assets/vendor/select2/select2.min.css', array(), '4.0.13', 'all');
	}

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {

		$values = (!empty($this->value())) ? json_decode($this->value(), true) : array();

		$labels = array();

		foreach ($values as $value) {
			if (!empty($value['id'])) {
				$labels[$value['id']] = botiga_get_display_condition_value_text( $value );
			}
		}

		$settings = array(
			'title'  => $this->title,
			'label'  => $this->label,
			'values' => $values,
			'labels' => $labels,
		);

		?>
		<div class="botiga-display-conditions-control" data-condition-settings="<?php echo esc_attr(json_encode($settings)); ?>">
			<?php if (!empty($this->label)) { ?>
				<span class="customize-control-title"><?php echo wp_kses_post($this->label); ?></span>
			<?php } ?>
			<?php if (!empty($this->description)) { ?>
				<span class="customize-control-description"><?php echo wp_kses_post($this->description); ?></span>
			<?php } ?>
			<a href="#" class="botiga-display-conditions-modal-button botiga-display-conditions-modal-toggle"><span><?php esc_html_e( 'Add/Edit Conditions', 'botiga' ); ?></span></a>
			<textarea id="<?php echo esc_attr( $this->id ); ?>" name="<?php echo esc_attr( $this->id ); ?>" class="botiga-display-conditions-textarea hidden" <?php $this->link(); ?>><?php echo wp_kses( $this->value(), array() ); ?></textarea>
		</div>
		<?php
	}
}