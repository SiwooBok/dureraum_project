// -------- footer - related_institution --------
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
    601 : {
      slidesPerView: 3,
    },
    769 : {
      slidesPerView: 2,
    },
    1360 : {
      slidesPerView: 3,
    }
  }
});

// -------- footer - related_institution --------
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

// -------- fast_reserve - search_recommend_sheet --------
const searchRecommendSheet = document.querySelector('.fast_reserve .select_theater .search_recommend_sheet');
let searchRecommendSlide = new Swiper(searchRecommendSheet, {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    320 : {
      slidesPerView: 3,
    },
    769 : {
      slidesPerView: 4,
    }
  }
});

// -------- fast_reserve - search_schedule_sheet --------
const theaterScheduleSheet = document.querySelector('.fast_reserve .select_theater .detail_info .theater_schedule_sheet');
let theaterScheduleSlide = new Swiper(theaterScheduleSheet, {
  slidesPerView: 1,
  navigation: {
    nextEl: ".fast_reserve .theater_schedule_control_box .icon_right",
    prevEl: ".fast_reserve .theater_schedule_control_box .icon_left",
  },
  breakpoints: {
    320 : {
      allowTouchMove : true
    },
    769 : {
      allowTouchMove : false
    }
  }
});

// -------- fast_reserve - fast_reserve_sheet_box --------
const fastSheetBox = document.querySelector('.fast_reserve .fast_reserve_sheet_box');
let fastSheetSlide = new Swiper(fastSheetBox, {
  slidesPerView: 1,
  allowTouchMove : false,
  navigation: {
    nextEl: ".fast_reserve_sheet_box .hidden_btn_next",
    prevEl: ".fast_reserve_sheet_box .hidden_btn_previous",
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

  // --------  빠른예매 섹션 --------
  // -------- 날짜 선택 기능 ( 달력은 추후 자바스크립트를 이용한 무한달력으로 개편 예정 ) --------
  const btnFastAll = $('.fast_reserve .fast_reserve_contents .select_theater .theater_schedule_sheet .schedule_unit ul li a');
  const unitFastAll = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .theater_available_unit');

  const unitFastSunday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_sunday');
  const unitFastMonday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_monday');
  const unitFastTuesday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_tuesday');
  const unitFastWednesday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_wednesday');
  const unitFastThursday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_thursday');
  const unitFastFriday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_friday');
  const unitFastSaturday = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .available_saturday');

  // availableUnit 시트 변환 함수 - 요일에 맞게 변환 (최종 switch문에서 호출되는 함수)
  function displayAvailableUnit (dayNumber) {
    let day = (dayNumber%7) + 1;
    unitFastAll.removeClass('selected_available');
    switch (day) {
      case 1:
        unitFastMonday.addClass('selected_available');
        break;
      case 2:
        unitFastTuesday.addClass('selected_available');
        break;
      case 3:
        unitFastWednesday.addClass('selected_available');
        break;
      case 4:
        unitFastThursday.addClass('selected_available');
        break;
      case 5:
        unitFastFriday.addClass('selected_available');
        break;
      case 6:
        unitFastSaturday.addClass('selected_available');
        break;
      case 7:
        unitFastSunday.addClass('selected_available');
        break;
    }
  }

  // 선택된 날짜 변환 함수 (콜백함수 호출)
  function changeDate(date) {
    // 표시된 달력 날짜 변경
    btnFastAll.removeClass('day_selected');
    date.addClass('day_selected');

    // 월 계산 후 유닛 변경
    let idValue = date.attr('id');
    let whatMonth = idValue.slice(idValue.length-4, idValue.length-2);
    let whatDate = idValue.slice(idValue.length-2, idValue.length);
    let dateValue = parseInt(whatDate);
    
    switch(whatMonth) {
      case '11':
        displayAvailableUnit(dateValue);
        break;
      case '12':
        dateValue+= 2;
        displayAvailableUnit(dateValue);
        break;
      case '01':
        dateValue+= 5;
        displayAvailableUnit(dateValue);
        break;
    }
  }

  // 버튼 클릭시 함수 호출
  btnFastAll.click(function(e) {
    e.preventDefault;
    changeDate($(this));
  })

  // -------- 빠른예매 내부 페이지 이동 --------
  // 빠른예매 버튼
  // const btnFastReserve = $('.quick_menu .btn_fast_reserve');

  // 페이지 ( 총 3페이지 - select_theater, select_seats, pay )
  const selectTheater = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater');
  const selectSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats');
  const selectPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay');

  // 검색하기 박스
  const btnSearch = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater .search_icon');
  // const inputSearch = $('.fast_reserve .select_theater #fast_reserve_search_input');

  // swiper 제어 버튼 (안보임)
  const hiddenBtnNext = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .hidden_btn_next');
  const hiddenBtnPrevious = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .hidden_btn_previous');

  // Next, Previous 버튼
  const btnNextInTheater = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_theater .btn_next');
  const btnNextInSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats .btn_next');
  const btnNextInPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay .btn_next');
  const btnPreviousInSeats = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats .btn_previous');
  const btnPreviousInPay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .pay .btn_previous');

  // 상단 페이지네이션
  const paginationSeats = $('.fast_reserve .fast_reserve_contents .pagination_seats');
  const paginationPay = $('.fast_reserve .fast_reserve_contents .pagination_pay');

  // -------- select_theater 섹션 --------
  // btnFastReserve.click(function() {
  //   inputSearch.focus();
  // });

  // 검색 돋보기 클릭
  btnSearch.click(function() {
    alert('사이트 점검중입니다. 추천 작품에서 선택해주세요.');
  });

  // theater_available_unit 섹션
  const nowAvailableListAll = $('.fast_reserve .fast_reserve_contents .select_theater .detail_info .theater_schedule_available_box .theater_available_unit .now_available');
  let stateTheater = false;

  nowAvailableListAll.click(function(){
    nowAvailableListAll.removeClass('available_selected');
    $(this).addClass('available_selected');
    stateTheater = true;
  });

  // Next 버튼
  btnNextInTheater.click(function() {
    if (stateTheater) {
      paginationSeats.addClass('proceeding'); // 오류 방지 위해 pagination 전체 설정. ( jQuery가 느려서 그런건지, paginationPay는 proceeding 클래스가 남아있는데 paginationSeats는 클래스가 남아있지않은 증상이 있어서, 버튼 클릭시마다 pagination 전체를 설정해주기로 했다. )
      paginationPay.removeClass('proceeding');
      hiddenBtnNext.click();
    } else {
      alert('이용할 극장을 선택해주세요');
    }
  });

  // -------- select_seats 섹션 --------
  const selectSeatsDisplay = $('.fast_reserve .fast_reserve_contents .fast_reserve_sheet_box .select_seats_box .select_seat_display');

  const inputMorningTicket = $('.fast_reserve .select_seats #ticket_morning');
  const inputDisabledPeopleTicket = $('.fast_reserve .select_seats #ticket_disabled_people');
  const inputAdvanceTicket = $('.fast_reserve .select_seats #ticket_advance');

  const seatsNumberLimit = $('.fast_reserve .fast_reserve_contents .select_seats .number_limit');

  let valueMorning = 0;
  let valueDisabledPeople = 0;
  let valueAdvance = 0;
  let sumOfValue = 0;
  let stateSeats = false;

  // 좌석선택 기능 ( 임시 )
  selectSeatsDisplay.click(function() {
    selectSeats.addClass('chose');
    stateSeats = true;
  });
  
  // 티켓 수량 판별 기능 - 완벽하진않지만 간단하게 구조를 만들어보았다.
  // 버튼클릭시 seatsNumberLimit의 텍스트가 변경된다. ( 1/1 ) → ( 0/1 ) or ( 0/1 ) → ( 1/1 )로.
  inputMorningTicket.change(function(){
    if (inputMorningTicket.val().length == 0) {
      valueMorning = 0;
    } else if (parseInt(inputMorningTicket.val()) < 0) {
      alert('1 이상의 수를 입력해주세요');
      seatsNumberLimit.text('( 0/1 )'); // seatsNumberLimit의 텍스트변경
      inputMorningTicket.val('');
      inputDisabledPeopleTicket.val('');
      inputAdvanceTicket.val('');
      valueMorning = 0; // 초기화 - seatsNumberLimit의 표기를 바꾸기 때문에 불가피하게 3개 전부 초기화했다. (현재 구조에서는)
      valueDisabledPeople = 0; // 초기화
      valueAdvance = 0; // 초기화
      // inputMorningTicket.focus(); // 포커스가 정상적으로 작동하지않아 원인분석까지 주석처리해놓았다.
    } else if (parseInt(inputMorningTicket.val()) > 0) {
      valueMorning = parseInt(inputMorningTicket.val());
    }
  });

  inputDisabledPeopleTicket.change(function(){
    if (inputDisabledPeopleTicket.val().length == 0) {
      valueDisabledPeople = 0;
    } else if (parseInt(inputDisabledPeopleTicket.val()) < 0) {
      alert('1 이상의 수를 입력해주세요');
      seatsNumberLimit.text('( 0/1 )'); // seatsNumberLimit의 텍스트변경
      inputMorningTicket.val('');
      inputDisabledPeopleTicket.val('');
      inputAdvanceTicket.val('');
      valueMorning = 0; // 초기화 - seatsNumberLimit의 표기를 바꾸기 때문에 불가피하게 3개 전부 초기화했다. (현재 구조에서는)
      valueDisabledPeople = 0; // 초기화
      valueAdvance = 0; // 초기화
      // inputDisabledPeopleTicket.focus(); // 포커스가 정상적으로 작동하지않아 원인분석까지 주석처리해놓았다.
    } else if (parseInt(inputDisabledPeopleTicket.val()) > 0) {
      valueDisabledPeople = parseInt(inputDisabledPeopleTicket.val());
    }
  });
  
  inputAdvanceTicket.change(function() {
    if (inputAdvanceTicket.val().length == 0) {
      valueAdvance = 0;
    } else if (parseInt(inputAdvanceTicket.val()) < 0) {
      seatsNumberLimit.text('( 0/1 )'); // seatsNumberLimit의 텍스트변경
      inputMorningTicket.val('');
      inputDisabledPeopleTicket.val('');
      inputAdvanceTicket.val('');
      valueMorning = 0; // 초기화 - seatsNumberLimit의 표기를 바꾸기 때문에 불가피하게 3개 전부 초기화했다. (현재 구조에서는)
      valueDisabledPeople = 0; // 초기화
      valueAdvance = 0; // 초기화
      // inputAdvanceTicket.focus(); // 포커스가 정상적으로 작동하지않아 원인분석까지 주석처리해놓았다.
    } else if (parseInt(inputAdvanceTicket.val()) > 0) {
      valueAdvance = parseInt(inputAdvanceTicket.val());
    }
  });
  
  // Next 버튼
  btnNextInSeats.click(function() {
    if (stateSeats) {
      sumOfValue = valueMorning + valueDisabledPeople + valueAdvance;
      if (sumOfValue == 1) {
        seatsNumberLimit.text(`( ${sumOfValue}/1 )`); // 텍스트변경
        paginationSeats.addClass('proceeding'); // 오류 방지위해 pagination 전체를 설정해줌.
        paginationPay.addClass('proceeding');
        hiddenBtnNext.click();
      } else {
        alert('선택한 좌석수만큼 수량을 정확히 입력해주세요.');
        sumOfValue = 0; // 초기화
        seatsNumberLimit.text(`( ${sumOfValue}/1 )`); // 텍스트변경
        inputMorningTicket.val('');
        inputDisabledPeopleTicket.val('');
        inputAdvanceTicket.val('');
        valueMorning = 0; // 초기화
        valueDisabledPeople = 0; // 초기화
        valueAdvance = 0; // 초기화
        inputMorningTicket.focus();
      }
    } else {
      alert('좌석을 선택해주세요.');
    }
  });

  // Previous 버튼
  btnPreviousInSeats.click(function() {
    paginationSeats.removeClass('proceeding'); // 오류 방지위해 pagination 전체를 설정해줌.
    paginationPay.removeClass('proceeding');
    hiddenBtnPrevious.click();
  });

  // -------- pay 섹션 --------
  // Next 버튼
  btnNextInPay.click(function() {
    alert('사이트 점검중입니다. 나중에 다시 시도하세요.');
  });

  // Previous 버튼
  btnPreviousInPay.click(function() {
    paginationSeats.addClass('proceeding'); // 오류 방지위해 pagination 전체를 설정해줌.
    paginationPay.removeClass('proceeding');
    hiddenBtnPrevious.click();
  });

});
// ↑↑↑↑↑↑↑↑ jQuery ↑↑↑↑↑↑↑↑