<?php
/**
 * Template Name: 投稿ページ
 */
get_header(); ?>
<div class="container">
  <!--div class="contents"-->

    <?php if(is_category() || is_tag()): ?>
      <h1><?php single_cat_title() ?>の記事一覧</h1>
    <?php elseif(is_year()): ?>
      <h1><?php the_time("Y年") ?>の記事一覧</h1>
    <?php elseif(is_month()): ?>
      <h1><?php the_time("Y年m月") ?>の記事一覧</h1>
    <?php endif; ?>

<div id="main_blog">
  <h1 class="title_E">blog</h1>
  <h2 class="title_J">ブログ</h2>
<?php
$paged = (int) get_query_var('paged');
$args = array(
  'posts_per_page' => 5,
  'paged' => $paged,
  'orderby' => 'post_date',
  'order' => 'DESC',
  'post_type' => 'post',
  'post_status' => 'publish'
);
$the_query = new WP_Query($args);
if ( $the_query->have_posts() ) :
  while ( $the_query->have_posts() ) : $the_query->the_post();
?>

<div class="mainName">

<article class="blogArchive" style="visibility: visible; animation-name: fadeInUp;">
 
<div class="blogArchive_image"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/imgBlog.png" alt=""></a></div>
<div class="blogArchive_text">
<div class="blogArchive_info">
<time class="blogArchive_date">2018.8.20</time>
<p class="blogArchive_category">ご案内</p>
</div>
 
<h1 class="blogArchive_title"><a href="#">ブログリニューアルのお知らせ</a></h1>
<p class="blogArchive_snipet">あわしま占い部のブログリニューアルしました。あわしま占い部のブログリニューアルしました。あわしま占い部のブログリニューアルしました。</p>
 
<dl class="blog_share _line u-cf">
<dt class="blog_share_title">Share Contents</dt>
<dd>
<ul class="blog_share_list u-cf">
<li class="blog_share_item _hatena"><a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fszmg.jp%2Ftopics%2Farticle%2F389" target="_blank" title="この記事をはてブでシェア">この記事をはてブでシェア</a></li>
 
<li class="blog_share_item _twitter"><a href="https://twitter.com/intent/tweet?text=%E7%84%A1%E6%96%99%E3%82%B7%E3%83%A3%E3%83%88%E3%83%AB%E3%83%90%E3%82%B9%E9%81%8B%E4%BC%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E3%80%82+%7C+神勝寺 禅と庭のミュージアム+https%3A%2F%2Fszmg.jp%2Ftopics%2Farticle%2F389" target="_blank" title="この記事をTwitterでシェア">この記事をTwitterでシェア</a></li>
 
<li class="blog_share_item _line"><a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fszmg.jp%2Ftopics%2Farticle%2F389" target="_blank" title="この記事をLINEでシェア">この記事をLINEでシェア</a></li>
</ul>
</dd>
</dl>
</div>

</article><!-- blogArchive_text end -->

</div>


    <?php endwhile; endif; ?><!--ループ終了-->

<div class="pagination">
<?php
if ($the_query->max_num_pages > 1) {
  echo paginate_links(array(
    'base' => get_pagenum_link(3) . '%_%',
    'format' => 'page/%#%/',
    'current' => max(1, $paged),
    'total' => $the_query->max_num_pages,
    'prev_text' => __('« Previous'),
    'next_text' => __('Next »')

  ));
}
?>
</div>


  <!--/div -->

</div><!-- main_blog end -->
</div>
<?php get_footer(); ?>
