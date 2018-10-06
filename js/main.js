// JavaScript Document
 console.log("mainが読み込まれている");
//イントロ文章がスラスラ
jQuery(function() {
    var jQueryallMsg = jQuery('#text1');
    var jQuerywordList = jQuery('#text1').html().split("");
    jQuery('#text1').html("");
    var jQueryidx = 0;
 
    jQuery.each(jQuerywordList, function(idx, elem) {
        var newEL = jQuery("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo(jQueryallMsg);
        newEL.delay(jQueryidx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        jQueryidx += 1;
    });
 
    jQueryallMsg = jQuery('#text2');
    jQuerywordList = jQuery('#text2').html().split("");
    jQuery('#text2').html("");
 
    jQuery.each(jQuerywordList, function(idx, elem) {
        var newEL = jQuery("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo(jQueryallMsg);
        newEL.delay(jQueryidx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        jQueryidx += 1;
    });
 
    jQueryallMsg = jQuery('#text3');
    jQuerywordList = jQuery('#text3').html().split("");
    jQuery('#text3').html("");
 
    jQuery.each(jQuerywordList, function(idx, elem) {
        var newEL = jQuery("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo(jQueryallMsg);
        newEL.delay(jQueryidx * 200);
        newEL.animate({ opacity: 1 }, 1100);
        jQueryidx += 1;
    });
});
 
//テキストが終わったら背景を表示する
 
 
 
 
//一定期間後非表示にする
setTimeout(function() {
    jQuery('#text1').fadeOut(3000);
    jQuery('#text2').fadeOut(3000);
    jQuery('#text3').fadeOut(3000);
}, 7000);
//3000 と　7000にそれぞれ修正
 
setTimeout(function() {
    jQuery('#wrapper').fadeIn('slow');
},
11000);
//  11000に修正
 
 
//画像切替 5秒ごと
 
jQuery(function(){
// 設定
 
var jQueryinterval = 5000; // 切り替わりの間隔（ミリ秒）
var jQueryfade_speed = 3000; // フェード処理の早さ（ミリ秒）
jQuery("#slide ul li").css({"position":"relative","overflow":"hidden"});
jQuery("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
jQuery("#slide ul li:first").addClass("active").show();
setInterval(function(){
var jQueryactive = jQuery("#slide ul li.active");
var jQuerynext = jQueryactive.next("li").length?jQueryactive.next("li"):jQuery("#slide ul li:first");
jQueryactive.fadeOut(jQueryfade_speed).removeClass("active");
jQuerynext.fadeIn(jQueryfade_speed).addClass("active");
},jQueryinterval);
});
 
//クリックされたら表示する
jQuery(function(){
    jQuery('#gnavi').hide();
    jQuery('.fa').on('click', function() {
        jQuery("#gnavi").fadeIn('slow');
        //jQuery('.interval').hide();
        jQuery('#wrapper').animate({'top':'-100vh'},300);
    });
});
 
/*
//下にスクロールしたらイントロ画面に戻れないようにする
var startPos = 0,winScrollTop = 0;
jQuery(window).on('scroll',function(){
    winScrollTop = jQuery(this).scrollTop();
    if (winScrollTop >= startPos) {
        jQuery("#gnavi").fadeIn('slow');
        jQuery('#wrapper').animate({'top':'-100vh'},300);
    }
    startPos = winScrollTop;
});
 
*/
 
//とグルをクリックしたら表示させる シングルクオテーションで囲まれた場合、中身を維持しようとする
jQuery(function(){
    jQuery('.smallSize').hide();
    jQuery('.toggle').on('click', function() {
        jQuery(this).toggleClass("clicked");
 
        if (jQuery('.smallSize').css('display') == 'block') {
            // 表示されている場合の処理
            jQuery(".smallSize").fadeOut('slow');
        } else {
            // 非表示の場合の処理
            jQuery(".smallSize").fadeIn('slow');
        }
    });
});
 
 
 
//画面サイズが1024px以下になったらメニュー非表示
 
jQuery(window).resize(function(){
    var w = jQuery(window).width();
    var x = 1024;
    if (w <= x) {
        jQuery('#header').css({
            display: 'none'
        });
    } else {
        jQuery('#header').css({
            display: 'flex'
        });
    }
});
 
 
//toggle navi 画面サイズが1024px以上になったらメニュー非表示
 
jQuery(window).resize(function(){
    var w = jQuery(window).width();
    var x = 1024;
    if (w >= x) {
        jQuery('#toggle-nav').css({
            display: 'none'
        });
    } else {
        jQuery('#toggle-nav').css({
            display: 'block'
        });
    }
});
 
 
//toggle-nav_body 画面サイズが1024px以上になったら消え、1024px以下で表示
jQuery(window).resize(function(){
    var w = jQuery(window).width();
    var x = 1024;
    if (w >= x) {
        jQuery('.toggle-nav_body').css({
            display: 'none'
        });
    } else {
        jQuery('.toggle-nav_body').css({
            display: 'block'
        });
    }
});
 
 
//クリックしたらスクロール
jQuery(function(){
        jQuery('a[href^=#]').click(function(){
                //スクロールスピード
                var speed = 700;
                var href= jQuery(this).attr("href");
                var target = jQuery(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                jQuery("html, body").animate({scrollTop:position}, speed, "swing");
                return false;
        });
});
 
//下にスクロールでヘッダー非表示・上にスクロールでヘッダー表示
jQuery(function() {
  var jQuerywin = jQuery(window),
      jQueryheader = jQuery('#header'),
      headerHeight = jQueryheader.outerHeight(),
      startPos = 0;
 
  jQuerywin.on('load scroll', function() {
    var value = jQuery(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      jQueryheader.css('top', '-' + headerHeight + 'px');
    } else {
      jQueryheader.css('top', '0');
    }
    startPos = value;
  });
});
 
 
/* page_topボタン*/
 
jQuery(function() {
    var pagetop = jQuery('#page_top');  
    pagetop.hide();
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1000) {  //2000pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});
 
/*
//slick sliderの設定
jQuery('.home-blog-list').slick({
  // 矢印キーでスライドを切り替えるか [初期値:true]
  accessibility: true,
  // スライドの高さが違うときに自動調整するか [初期値:false]
  adaptiveHeight: false,
  // 自動再生するか [初期値:false]
  autoplay: true,
  // 自動再生で切り替えする時間(ミリ秒) [初期値:3000]
  autoplaySpeed: 3500,
  // 前次ボタンを表示するか [初期値:true]
  arrows: true,
  // 別のスライドと連携したいときにクラス名を指定 [初期値:null]
  asNavFor: null,
  // 矢印ボタンの生成位置を変更 [初期値:jQuery('.my-slide)]
  appendArrows: jQuery('.my-slide'),
  // ドットナビゲーションの生成位置を変更 [初期値:jQuery('.my-slide)]
  appendDots: jQuery('.my-slide'),
  // 前ボタンの要素を変更 [初期値:'<button type="button" class="slick-prev">Previous</button>']
  prevArrow: '<a class="slick-prev" href="#">前へ</a>',
  // 次ボタンの要素を変更 [初期値:'<button type="button" class="slick-next">Next</button>']
  nextArrow: '<a class="slick-next" href="#">次へ</a>',
  // slidesToShowが奇数のとき、現在のスライドを中央に表示するか [初期値:false]
  centerMode: false,
  // centerMode:trueのとき、左右のスライドをチラ見せさせる幅 [初期値:'50px']
  centerPadding: '60px',
  // ease-in,ease-in-outなどCSSのイージング [初期値:'ease']
  cssEase: 'linear',
  // dots:trueのとき、ドットをサムネイルなどにカスタマイズ [初期値:n/a]
  customPaging: function(slick, index){
    var num = slick.jQueryslides.eq(index).html();
    return '<b>' + num + '</b>';
  },
  // ドットナビゲーションを表示するか [初期値:false]
  dots: false,
  // ドットナビゲーションのクラス名を変更 [初期値:slick-dots]
  dotsClass: 'my-dots',
  // マウスドラッグでスライドの切り替えをするか [初期値:true]
  draggable: true,
  // スライド切り替えをフェードするか [初期値:false]
  fade: false,
  // クリックでメインのスライドを切り替えるか
  focusOnSelect: true,
  // jQueryのイージング [初期値:'linear']
  easing: 'linear',
  // スライドをループさせるか [初期値:true]
  infinite: false,
  // infinite:falseのとき、両端のスライドをドラッグしようとした際のバウンドスクロール値 [初期値:0.15]
  edgeFriction: 0.2,
  // 開始スライド（0から始まるので注意） [初期値:0]
  initialSlide: 2,
  // 画像の遅延表示タイプ（ondemand/progressive) [初期値:'ondemand']
  lazyLoad: 'ondemand',
  // モバイルファーストにするか [初期値:false]
  mobileFirst: false,
  // autoplay:trueのとき、マウスフォーカスしたら一時停止させるか [初期値:true]
  pauseOnFocus: true,
  // autoplay:trueのとき、マウスホバーしたら一時停止させるか [初期値:true]
  pauseOnHover: true,
  // autoplay:trueのとき、ドットナビゲーションをマウスホバーしたら一時停止させるか [初期値:false]
  pauseOnDotsHover: false,
  // レスポンシブ設定の基準（window/slider/min） [初期値:'window']
  respondTo: 'window',
  // レスポンシブ設定
  responsive: [
    {
      breakpoint: 1024,     // 600〜1023px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,      // 480〜599px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,      // 〜479px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  // 行数 [初期値:1]
  rows: 1,
  // スライド部分の要素のタグ名 [初期値:'']
  slide: 'div',
  // rowsの値が2以上のとき、1行あたりに表示させるスライド数 [初期値:1]
  slidesPerRow: 2,
  // 表示させるスライド数 [初期値:1]
  slidesToShow: 2,
  // 一度に移動させるスライド数 [初期値:1]
  slidesToScroll: 2,
  // スライド/フェードさせるスピード（ミリ秒） [初期値:300]
  speed: 400,
  // スワイプを検知するか [初期値:true]
  swipe: true,
  // slidesToScrollの値に関係なく、マウスドラッグやスワイプでスライドさせる際は1スライドずつ動かす [初期値:false]
  swipeToSlide: false,
  // タッチでスライドさせるか [初期値:true]
  touchMove: true,
  // (1/touchThreshold)*スライダーの横幅 分マウスドラッグするとスライドされる [初期値:5]
  touchThreshold: 5,
  // CSSのtransitionを使用するか [初期値:true]
  useCSS: true,
  // CSSのtransformを使用するか [初期値:true]
  useTransform: true,
  // 横幅がバラバラなスライドにするか [初期値:false]
  variableWidth: false,
  // 縦方向にスライドさせるか [初期値:false]
  vertical: true,
  // 縦方向のスワイプを有効にするか [初期値:false]
  verticalSwiping: false,
  // スライドの順番を逆にするか [初期値:false]
  rtl: false,
  // スライドアニメーション中サムネイルをクリックしたとき反応させないか [初期値:true]
  waitForAnimate: true,
  // z-index値 [初期値:1000]
  zIndex: 1000
});
 
 
 
jQuery('.slider multiple-items slick-initialized slick-slider slick-dotted').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
 
*/
/*
//クッキー処理
jQuery(function(){
    if(jQuery.cookie("access")){
        jQuery('#first').css({display:'none'});
    }
    jQuery(window).load(function(){
        jQuery.cookie("access",jQuery('body').addClass('access'));
    })
});
 
*/

