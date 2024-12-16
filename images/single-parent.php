<?php
get_header();

?>
<h1><?php echo get_the_ID(); ?></h1>
<h1><?php echo get_the_title(  ); ?>---</h1>
<h1><?php echo get_the_archive_title(); ?></h1>

<?php
$arr = array('post_type'=>'boy',
"meta_query"=>
array(array(
    'key'=>'parent',
    'compare'=>'LIKE',
    'value'=>'"'.get_the_ID().'"'
)));
$qu =new WP_Query($arr);

while($qu->have_posts()):$qu->the_post();
 
?>
<h1><a href="<?PHP the_permalink(  )?>">
<?php echo get_the_title(  ); ?>
</a></h1>
<?PHP
    
endwhile;wp_reset_postdata(  );
get_footer(  );

?>