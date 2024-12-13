<?php 
    function add_style(){
        wp_enqueue_script( "style", get_theme_file_uri( "style.css" ) );
    }

    add_action( 'wp_enqueue_scripts','add_style');



?>