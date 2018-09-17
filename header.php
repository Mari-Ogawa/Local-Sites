<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">

<!-- original css -->
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:300|Julius+Sans+One|Montserrat:300|Nunito+Sans:200|Quicksand:300" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Cormorant+Upright:600|Italianno|Parisienne|Petit+Formal+Script|Sofia|Spirax|Stalemate|Tangerine:700" rel="stylesheet">
<link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet" />
<link href="https://fonts.googleapis.com/earlyaccess/sawarabimincho.css" rel="stylesheet" />
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >
<script type="text/javascript" src="js/titleLogoAnimation.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- css end -->


<meta name="viewport"
content="width=device-width, initial-scale=1.0 ">

<?php if(is_tag() || is_date() || is_search() || is_404()) : ?>
  <meta name="robots" content="noindex"/>
<?php endif; ?>

<meta property="og:site_name" content="<?php bloginfo( 'name' ); ?>">
<meta property="og:locale" content="ja_JP">

<!--個別ページ用のmetaデータ-->
<?php if( is_single() || is_page() ): ?>
  <?php setup_postdata($post) ?>
  <meta name="description" content="<?php echo strip_tags( get_the_excerpt() ); ?>"/>

  <?php if ( has_tag() ): ?>
    <?php $tags = get_the_tags();
    $kwds = array();
    foreach($tags as $tag){
      $kwds[] = $tag->name;
    } ?>
    <meta name="keywords" content="<?php echo implode( ',',$kwds ); ?>">
  <?php endif; ?>
  <meta property="og:type" content="article">
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:url" content="<?php the_permalink(); ?>">
  <meta property="og:description" content="<?php echo strip_tags( get_the_excerpt() ); ?>">
  <?php if( has_post_thumbnail() ): ?>
    <?php $postthumb = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large' ); ?>
    <meta property="og:image" content="<?php echo $postthumb[0]; ?>">
  <?php endif; ?>
<?php else: ?><!--個別ページ以外のメタデータ-->
  <meta name="description" content="<?php bloginfo( 'description' ); ?>">
  <?php $allcats = get_categories();
  $kwds = array();
  foreach($allcats as $allcat) {
    $kwds[] = $allcat->name;
  } ?>
  <meta name="keywords" content="<?php echo implode( ',',$kwds ); ?>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php bloginfo( 'name' ); ?>">
  <?php
  $http = is_ssl() ? 'https' . '://' : 'http' . '://';
  $url = $http . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
  ?>
  <meta property="og:url" content="<?php echo $url; ?>">
  <meta property="og:description" content="<?php bloginfo( 'description' ) ?>">
  <!-- <meta property="og:image" content="表示したい画像のパス"> -->
<?php endif; ?>

<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" />
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/originalstyle.css" type="text/css" />
<!--script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script-->
<script src="<?php echo get_template_directory_uri(); ?>/js/menu.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri() ?>/images/webclipicon.png" />
<link rel="shortcut icon" href="<?php echo get_template_directory_uri() ?>/images/favicon.ico" />


<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
<div id="headerWrap">
<div id="header">
        <h1 id="logo" style="display:block"><a href="#top">
<img src="<?php echo get_template_directory_uri(); ?>/images/headerLogoS_b.png"  width="155" height="52" alt="四柱推命・九星気学の専門鑑定師　あわしま占い部"/></a></h1>
        <ul id="gnavi">
                <li><a href="#reservation">reservation</a></li>
                <li><a href="#main_contact">contact</a></li>
                <li><a href="#main_blog">blog</a></li>
                 <li><a href="#main_services">services&amp;price</a></li>
                <li class="current"><a href="#main_profile">profile</a></li>
        </ul>
</div><!-- header end -->
 
<div class="toggle">
    <span class="toggle_line _1"></span>
        <span class="toggle_line _2"></span>
        <!--span class="toggle_line _3"></span-->
</div><!--toggle end-->
 
 
<nav class="smallSize">
    <div class="toggle-nav_body">
        <h1 class="toggle-logo"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/coccinelli_s.png" width="41" height="46" alt="四柱推命・九星気学の専門鑑定師　あわしま占い部"></a></h1>
            <ul id="toggle-nav">
            <li><a href="#main_profile">profile</a></li>
            <li><a href="#main_services">services&amp;price</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">reservation</a></li>
            </ul>
 
    </div>
</nav>
 
 
</div><!-- headerWrap end -->



</header>
