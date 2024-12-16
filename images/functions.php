<?php 
    function add_style(){
        wp_enqueue_script('my-theme-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
        wp_enqueue_style('my-theme-style', get_theme_file_uri('/build/index.css'));
        wp_enqueue_style('my-style', get_theme_file_uri('style.css'));
    }

    add_action( 'wp_enqueue_scripts','add_style');



?>