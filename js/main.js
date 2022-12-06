// -------- main_visual_initialize_Swiper --------
let mainThumbnail = new Swiper(".thumbnail_innerbox", {
  spaceBetween: 10,
  slidesPerView: 4,
});

let mainSheet = new Swiper(".main_visual_sheet", {
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: mainThumbnail,
  },
  pagination: {
    el: ".main_pagination_bar",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div style="width:23.5%; height:6px; border-radius: 0;" class="' + className + '">' + "</div>";
    }}
});

// width:768px까지 사용되는 fraction(우측 하단 페이지넘버링)
let mainFraction = new Swiper(".main_pagination_fraction", {});
// width:1360px 부터 사용되는 메인비주얼 배경 색상 날개 (width: 100%)
let mainBackgroundColor = new Swiper(".main_background_color", {
  effect: "fade"
});

// SwiperJS의 controller 메서드는 한번에 하나씩만 연결 할 수 있기 때문에, 불가피하게 아래와 같은 코드를 작성했다.
// 화면에 구현해야하는 것의 가짓수는 바, 프랙션, 썸네일, 배경 총 4가지이므로 아래와 같은 if문 없이는 하나가 부족해 남는 하나를 컨트롤할 여력이 없다.
// -------- 화면 최초 로드시, 실행되는 if문. 1359px 이하라면 프랙션을 메인시트와 이중으로 연결시켜준다(SwiperJS two-way control), 1360px 이상이라면 바를 메인시트와 이중으로 연결시켜준다.
if (window.matchMedia('screen and (min-width:321px) and (max-width:1359px)').matches) {
  mainSheet.controller.control = mainFraction;
  mainFraction.controller.control = mainSheet;
} else if (window.matchMedia('screen and (min-width:1360px)').matches) {
  mainSheet.controller.control = mainBackgroundColor;
  mainBackgroundColor.controller.control = mainSheet;
}

// 아래 해결책의 부작용(side-effect)으로는, 화면 리사이즈시 메인비주얼이 무조건 맨 처음시트로 바뀐다는 점이 있다.
// -------- 화면 크기 변경시 실행되는 이벤트리스너. 1359px 이하라면 프랙션을 메인시트와 이중으로 연결시켜준다(SwiperJS two-way control), 1360px 이상이라면 바를 메인시트와 이중으로 연결시켜준다.
window.addEventListener("resize", function(){
  if (window.matchMedia('screen and (min-width:321px) and (max-width:1359px)').matches) {
    mainSheet.controller.control = mainFraction;
    mainFraction.controller.control = mainSheet;
  } else if (window.matchMedia('screen and (min-width:1360px)').matches) {
    mainSheet.controller.control = mainBackgroundColor;
    mainBackgroundColor.controller.control = mainSheet;
  }
})

// -------- schedule_weekly --------
let scheduleWeekly = new Swiper(".schedule_sheet_innerbox", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".schedule_angle_right",
    prevEl: ".schedule_angle_left",
  }
});

let scheduleWeeklyTitle = new Swiper(".schedule_slide_bar_weekly", {})
scheduleWeekly.controller.control = scheduleWeeklyTitle;

let scheduleWeeklyBanner = new Swiper(".schedule_banner", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  }
});

// -------- ↓↓↓ jQuery --------
$(function(){
  // -------- schedule_monthly --------
  let btnScheduleAll = $('.schedule_shadow_box .schedule_calendar .schedule_calendar_sheet li a');
  let allUnitOfSchedule = $('.schedule_shadow_box .schedule_monthly_sheet .schedule_monthly_sheet_unit');

  // -------- 실제로 만들어진 시트 ( * 7개 : calendar_221120 ~ calendar_221126 ) --------
  $('#btn_calendar_221120').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221120').addClass('calendar_visible');
  });

  $('#btn_calendar_221121').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221121').addClass('calendar_visible');
  });

  $('#btn_calendar_221122').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221122').addClass('calendar_visible');
  });

  $('#btn_calendar_221123').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221123').addClass('calendar_visible');
  });

  $('#btn_calendar_221124').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221124').addClass('calendar_visible');
  });

  $('#btn_calendar_221125').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221125').addClass('calendar_visible');
  });

  $('#btn_calendar_221126').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221126').addClass('calendar_visible');
  });

  // -------- 더미 시트 (임시 시트) --------
  $('#btn_calendar_221101').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221122').addClass('calendar_visible');
  });

  $('#btn_calendar_221102').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221123').addClass('calendar_visible');
  });

  $('#btn_calendar_221103').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221124').addClass('calendar_visible');
  });

  $('#btn_calendar_221104').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221125').addClass('calendar_visible');
  });

  $('#btn_calendar_221105').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221126').addClass('calendar_visible');
  });

  $('#btn_calendar_221106').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221120').addClass('calendar_visible');
  });

  $('#btn_calendar_221107').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221121').addClass('calendar_visible');
  });

  $('#btn_calendar_221108').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221122').addClass('calendar_visible');
  });

  $('#btn_calendar_221109').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221123').addClass('calendar_visible');
  });

  $('#btn_calendar_221110').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221124').addClass('calendar_visible');
  });

  $('#btn_calendar_221111').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221125').addClass('calendar_visible');
  });

  $('#btn_calendar_221112').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221126').addClass('calendar_visible');
  });

  $('#btn_calendar_221113').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221120').addClass('calendar_visible');
  });

  $('#btn_calendar_221114').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221121').addClass('calendar_visible');
  });

  $('#btn_calendar_221115').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221122').addClass('calendar_visible');
  });

  $('#btn_calendar_221116').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221123').addClass('calendar_visible');
  });

  $('#btn_calendar_221117').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221124').addClass('calendar_visible');
  });

  $('#btn_calendar_221118').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221125').addClass('calendar_visible');
  });

  $('#btn_calendar_221119').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221126').addClass('calendar_visible');
  });

  $('#btn_calendar_221127').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221120').addClass('calendar_visible');
  });

  $('#btn_calendar_221128').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221121').addClass('calendar_visible');
  });

  $('#btn_calendar_221129').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221122').addClass('calendar_visible');
  });

  $('#btn_calendar_221130').click(function(e){
    e.preventDefault;
    btnScheduleAll.removeClass('calendar_on');
    $(this).addClass('calendar_on');
    allUnitOfSchedule.removeClass('calendar_visible');
    $('.calendar_221123').addClass('calendar_visible');
  });

})
// -------- ↑↑↑ jQuery --------


// -------- trailer --------
let trailerSlide = new Swiper(".trailer", {
  // slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 60000,
    disableOnInteraction: true,
  }
});

// -------- recommend --------
let recommendMovie = new Swiper(".recommend_sheet_movie", {
  loop: true,
  navigation: {
    nextEl: ".movie_pagination .angle_right",
    prevEl: ".movie_pagination .angle_left",
  },
  breakpoints: {
    320 : {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove : true
    },
    600 : {
      slidesPerView: 3,
      spaceBetween: 25,
      allowTouchMove : true
    },
    768 : {
      slidesPerView: 4,
      spaceBetween: 29,
      allowTouchMove : false
    },
    1024 : {
      slidesPerView: 4,
      spaceBetween: 37,
      allowTouchMove : false
    }
  },
})

let recommendConcert = new Swiper(".recommend_sheet_concert", {
  loop: true,
  navigation: {
    nextEl: ".concert_pagination .angle_right",
    prevEl: ".concert_pagination .angle_left",
  },
  breakpoints: {
    320 : {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove : true
    },
    600 : {
      slidesPerView: 3,
      spaceBetween: 25,
      allowTouchMove : true
    },
    768 : {
      slidesPerView: 4,
      spaceBetween: 29,
      allowTouchMove : false
    },
    1024 : {
      slidesPerView: 4,
      spaceBetween: 37,
      allowTouchMove : false
    }
  },
})

let recommendExhbition = new Swiper(".recommend_sheet_exhibition", {
  loop: true,
  navigation: {
    nextEl: ".exhibition_pagination .angle_right",
    prevEl: ".exhibition_pagination .angle_left",
  },
  breakpoints: {
    320 : {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove : true
    },
    600 : {
      slidesPerView: 3,
      spaceBetween: 25,
      allowTouchMove : true
    },
    768 : {
      slidesPerView: 4,
      spaceBetween: 29,
      allowTouchMove : false
    },
    1024 : {
      slidesPerView: 4,
      spaceBetween: 37,
      allowTouchMove : false
    }
  },
})

// -------- critic --------
let criticSlide = new Swiper(".critic_slide_sheet", {
  loop: true,
  slidesPerView: 2,
  allowTouchMove : false,
  navigation: {
    nextEl: ".critic_control_box .angle_right",
    prevEl: ".critic_control_box .angle_left",
  },
  breakpoints: {
    768 : {
      spaceBetween: 29
    },
    1024 : {
      spaceBetween: 37
    }
  }
});

// -------- event --------
let eventSlide = new Swiper(".event_sheet", {
  loop: true,
  breakpoints: {
    320 : {
      slidesPerView: 1.2,
      spaceBetween: 20,
      allowTouchMove : true
    },
    600 : {
      slidesPerView: 2,
      spaceBetween: 25,
      allowTouchMove : true
    },
    768 : {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove : false
    },
    1024 : {
      slidesPerView: 2.01, // box-shadow를 보이게하기 위해서 2대신 입력
      spaceBetween: 40,
      allowTouchMove : false
    }
  },
  navigation: {
    nextEl: ".event_control_box .angle_right",
    prevEl: ".event_control_box .angle_left",
  },
});


// -------- map --------
// 바닐라 js에서 key를 숨기는 방법을 찾지못해 일단은 그냥 사용했다 (추후 변경 예정)
var mapOptions = {
    center: new naver.maps.LatLng(35.1710632, 129.127096),
    zoom: 12
};

var map = new naver.maps.Map('map', mapOptions);