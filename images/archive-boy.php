<?php
get_header();

while(have_posts()):the_post(  );
?>
<h1><?php echo get_the_ID(); ?></h1>
<h1><?php echo get_the_title(); ?></h1>
<h1><?php echo get_the_archive_title(); ?></h1>
<h1><a href="<?php echo get_the_permalink( get_field('parent')[0] ) ; ?>">
    <?php echo get_the_title( get_field('parent')[0] ) ; ?>
    </a>
</h1>
<h1>---------------------------------------------------</h1>
<?php
endwhile;
get_footer(  );

?>