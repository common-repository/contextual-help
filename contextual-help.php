<?php
/*
	Plugin Name: Contextual Help Plugin
	Description: An experimental plugin to address location and visibility of the dashboard contextual help. For more information about this project, check out the <a href="http://make.wordpress.org/docs/">Make/Docs</a> P2.
	Author: Chris Reynolds
	Author URI: http://chrisreynolds.io
	Plugin URI: http://make.wordpress.org/docs/
	Version: 0.1.1
	License: GPLv2
*/
function wp_admin_bar_contextual_help( $wp_admin_bar ) {
	$wp_admin_bar->add_menu( array(
		'parent' => 'top-secondary',
		'id'    => 'screen-help',
		'title' => 'Help<span class="ab-icon"></span>',
		'href'  => '#contextual-help-wrap',
		'meta'   => array(
		'class'    => 'screen-meta-toggle'
		)
	) );
}
add_action( 'admin_bar_menu', 'wp_admin_bar_contextual_help' );

function contextual_help_load_scripts() {
	wp_enqueue_script( 'contextual-help', plugins_url('js/admin.js', __FILE__), 'jquery', '201309061112' );
	wp_enqueue_style( 'contextual-help', plugins_url('css/admin.css', __FILE__), array(), '201309061113' );
}
add_action( 'admin_enqueue_scripts', 'contextual_help_load_scripts' );