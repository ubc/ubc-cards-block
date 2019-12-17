<?php
/**
 * UBC Cards Block
 *
 * @package     SauderBlocks
 * @author      Christy Yao
 * @copyright   2019 Christy Yao
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: UBC Cards Block
 * Plugin URI:  https://sauder.ubc.ca/
 * Description: cards Block for UBC Sauder
 * Version:     1.0.0
 * Author:      Christy Yao
 * Author URI:  https://christyyao.com
 * Text Domain: ubc-cards-block
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

 add_action('plugins_loaded', 'ubc_cards_blocks_asset_load', 10);

 function ubc_cards_blocks_asset_load(){
     wp_register_script(
         'ubc-cards-block',
         plugins_url( '/build/index.js', __FILE__ ),
         array(
             'wp-blocks',
             'wp-i18n',
             'wp-element',
             'wp-editor',
             'wp-plugins',
             'wp-edit-post',
         ),
         filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js'),
         true
    );

    wp_register_style(
        'ubc-cards-editor',
        plugins_url( '/src/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
    );

    wp_register_style(
        'ubc-cards-style',
        plugins_url( '/src/style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
    );

    wp_enqueue_script( 'ubc-cards-block' );
    wp_enqueue_style( 'ubc-cards-editor' );
    wp_enqueue_style( 'ubc-cards-style' );
 }

