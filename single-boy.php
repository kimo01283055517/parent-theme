<?php
get_header();

?>
<h1><?php echo get_the_ID(); ?></h1>
<h1><?php echo get_the_title(); ?></h1>
<h1><?php echo get_the_title(get_field('parent')[0]); ?></h1>
<h1><?php echo get_the_ID(); ?></h1>
<img class="image" src="<?php the_post_thumbnail_url( 'custom-size' )?>" alt="">

<img class="image" src="<?php echo get_field('background')['sizes']['custom-size']?>" alt="">

<h1></h1>
<h1><a href="<?php echo get_post_type_archive_link(get_post_type(  )) ; ?>"><?php echo get_post_type(  ) ; ?></a></h1>

<?php
var_dump(get_field('background'));
get_footer(  );

?>