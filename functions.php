<?php 
    function add_style(){
        wp_enqueue_style( "style", get_theme_file_uri( "style.css" ) );
    }

    add_action( 'wp_enqueue_scripts','add_style');
    add_theme_support( 'post-thumbnails' );
    add_image_size( 'custom-size', 300, 200, true ); 

?>