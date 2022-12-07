

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

// -------- search_recommend_sheet --------
const searchRecommendSheet = document.querySelector('.fast_reserve .select_theater .search_recommend_sheet');
let searchRecommendSlide = new Swiper(searchRecommendSheet, {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  // breakpoints: {
  //   320 : {
  //     slidesPerView: 2,
  //   },
  //   1360 : {
  //     slidesPerView: 3,
  //   }
  // }
});

// -------- search_schedule_sheet --------
const theaterScheduleSheet = document.querySelector('.fast_reserve .select_theater .detail_info .theater_schedule_sheet');
let theaterScheduleSlide = new Swiper(theaterScheduleSheet, {
  // loop: true,
  slidesPerView: 1,
  // spaceBetween: 30,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  // breakpoints: {
  //   320 : {
  //     slidesPerView: 2,
  //   },
  //   1360 : {
  //     slidesPerView: 3,
  //   }
  // }
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

// ↓↓↓↓↓↓↓↓ jQuery ↓↓↓↓↓↓↓↓
$(function(){

  // -------- 퀵메뉴 버튼 기능 --------
  $('.btn_to_top').click(function(e){
    e.preventDefault;
    $(window).scrollTo(this.hash || 0, 1000);
  });

  $('.btn_to_bottom').click(function(e){
    e.preventDefault;
    $(window).scrollTo(this.hash || 5000, 1000);
  });

  const selectTheater = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater');
  const selectSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats');
  const selectPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay');

  const btnSearch = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater .search_icon');

  const btnNextInTheater = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater .btn_next');
  const btnNextInSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats .btn_next');
  const btnNextInPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay .btn_next');
  const btnPreviousInSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats .btn_previous');
  const btnPreviousInPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay .btn_previous');

  const paginationSeats = $('.fast_reserve .fast_reserve_contents .pagination_seats');
  const paginationPay = $('.fast_reserve .fast_reserve_contents .pagination_pay');

  const selectSeatsDisplay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats_box .select_seat_display');

  // --------  빠른예매 섹션 --------
  btnNextInTheater.click(function() {
    selectTheater.css('display', 'none');
    selectSeats.css('display', 'block')
    paginationSeats.addClass('proceeding')
  })

  btnNextInSeats.click(function() {
    selectSeats.css('display', 'none');
    selectPay.css('display', 'block')
    paginationPay.addClass('proceeding')
  })

  btnPreviousInSeats.click(function() {
    selectSeats.css('display', 'none');
    selectTheater.css('display', 'block')
    paginationSeats.removeClass('proceeding')
  })

  btnPreviousInPay.click(function() {
    selectPay.css('display', 'none');
    selectSeats.css('display', 'block')
    paginationPay.removeClass('proceeding')
  })

  btnNextInPay.click(function() {
    alert('사이트 점검중입니다. 나중에 다시 시도하세요.')
  })

  btnSearch.click(function() {
    alert('사이트 점검중입니다. 추천 작품에서 선택해주세요.')
  })

  // -------- 빠른예매 내부 페이지 이동 정의 --------
  // 좌석선택 기능 ( pseudo )
  selectSeatsDisplay.click(function() {
    selectSeats.addClass('chose');
  })



});
// ↑↑↑↑↑↑↑↑ jQuery ↑↑↑↑↑↑↑↑