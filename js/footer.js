// -------- related_institution --------
let footerRelatedSlide = new Swiper(".related_institution_sheet", {
  loop: true,
  spaceBetween: 50,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320 : {
      slidesPerView: 2,
    },
    600 : {
      slidesPerView: 3,
    },
    768 : {
      slidesPerView: 2,
    },
    1360 : {
      slidesPerView: 3,
    }
  }
});

// -------- related_institution --------
let footerMecenatSlide = new Swiper(".mecenat_sheet", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320 : {
      slidesPerView: 2,
    },
    1360 : {
      slidesPerView: 3,
    }
  }
});






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