$(function(){

  // 뷰포트 가로너비 769px부터 퀵메뉴 안보였다 보이는 기능 구현 섹션
  $(window).scroll(function(){
    if ($(window).innerWidth() > 768) {
      if($(window).scrollTop() >= 260) {
        $('.quick_menu').fadeIn(500);
      } else {
        $('.quick_menu').fadeOut(300);
      }
    } else {
      $('.quick_menu').fadeIn(100);
    }
  });

  // 퀵메뉴 이동 기능 섹션
  $('.btn_to_top').click(function(e){
    e.preventDefault;
    // $('html, body').stop().animate({scrollTop: 0}, 1000);
    $(window).scrollTo(this.hash || 0, 1000);
  });

  $('.btn_to_bottom').click(function(e){
    e.preventDefault;
    $(window).scrollTo(this.hash || 5000, 1000);
  });

});