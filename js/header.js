$(function(){
  // PC화면 lnb 호버 기능 섹션
  const lnbLi = $('.lnb .lnb_menu>li');
  const ul = $('.lnb .lnb_menu>li>ul');

  const headerMin = $('.lnb_inner_box').height();
  const headerMax = headerMin + ul.height();

  let lnbState = false;

  lnbLi.mouseenter($.throttle(50, function(){
    if(!lnbState) {
      $('.lnb_inner_box').stop().animate({
        height: headerMax
      },150, function(){
        ul.stop().fadeIn(150);
      });
      lnbState = true;
    }
    $(this).find('ul').addClass('on');
    $(this).find('.lnb_main_menu').addClass('lnb_underline');
  }));

  lnbLi.mouseleave($.throttle(50, function(){
    $(this).find('ul').removeClass('on');
    $(this).find('.lnb_main_menu').removeClass('lnb_underline');
  }));

  $('.lnb').mouseleave($.throttle(50, function(){
    ul.stop().fadeOut(150, function(){
      $('.lnb_inner_box').stop().animate({
        height: headerMin
      },150);
    });
    lnbState = false;
  }));

  // PC화면 lnb 상단 고정 섹션
  $(window).scroll($.throttle(50, function(){
    if ($(window).innerWidth() > 768) {
      if($(window).scrollTop() >= 260) {
        $('.lnb_outer_box_fixed').fadeIn(500);
      } else {
        $('.lnb_outer_box_fixed').fadeOut(300);
      }
    } else {
      $('.lnb_outer_box_fixed').fadeOut();
    }
  }));

});