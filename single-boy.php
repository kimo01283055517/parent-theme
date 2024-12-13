<?php
get_header();

?>
<h1><?php echo get_the_ID(); ?></h1>
<h1><?php echo get_the_title(); ?></h1>
<h1><?php echo get_the_title(get_field('parent')[0]); ?></h1>
<h1><?php echo get_the_ID(); ?></h1>

<h1></h1>
<h1><a href="<?php echo get_post_type_archive_link(get_post_type(  )) ; ?>"><?php echo get_post_type(  ) ; ?></a></h1>

<?php
var_dump(get_field('parent')[0]);
get_footer(  );

?>