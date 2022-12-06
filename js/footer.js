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


// 스크롤시 퀵메뉴 보이게 하는 섹션
const quickMenu = document.querySelector('.quick_menu');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 퀵메뉴 보이기
    gsap.to(quickMenu, .2, {
      x: 0
    });
  } else {
    // 퀵메뉴 숨기기
    gsap.to(quickMenu, .2, {
      x: 100
    });
  }
}, 300));


$(function(){

  $('.btn_to_top').click(function(e){
    e.preventDefault;
    $(window).scrollTo(this.hash || 0, 1000);
  });

  $('.btn_to_bottom').click(function(e){
    e.preventDefault;
    $(window).scrollTo(this.hash || 5000, 1000);
  });

});