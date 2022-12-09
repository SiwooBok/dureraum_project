// history 섹션 진입시 라벨 제어 (ScrollMagic)
const wrap = document.querySelector('.wrap');
const isEnterHistory = document.querySelector('.history.is_enter_history');
let sceneLabelHistory = new ScrollMagic
    .Scene({
      triggerElement: isEnterHistory, // 트리거엘리먼트 : isEnterHistory
      triggerHook: .1
    })
    .setClassToggle(wrap, 'scrolled_wrap') // 클래스토글은 wrap에 부여 (전체(그 하위요소들)를 컨트롤하기위해서)
    .addTo(new ScrollMagic.Controller());


// history 섹션 진입시 history_sheet 순차 애니메이션 (ScrollMagic)
const scrollObservers = document.querySelectorAll('.history_sheet.scroll_observer');
let sceneHistorySheets = scrollObservers.forEach(function (scrollObserver) {
  new ScrollMagic
    .Scene({
      triggerElement: scrollObserver, // 트리거엘리먼트 : spyEl (여러개라서 forEach문 사용)
      triggerHook: .8
    })
    .setClassToggle(scrollObserver, 'exposed') // 클래스토글은 각각의 spyEl들에 부여함
    .addTo(new ScrollMagic.Controller());
});

// 푸터 진입시 라벨 제어 (ScrollMagic)
const footer = document.querySelector('.footer');
const isEnterfooter = document.querySelector('.footer.is_enter_footer');
let sceneEnterFooter = new ScrollMagic
    .Scene({
      triggerElement: isEnterfooter, // 트리거엘리먼트 : isEnterfooter
      triggerHook: 1
    })
    .setClassToggle(wrap, 'wrap_entered_footer') // 클래스토글은 wrap에 부여 (그 하위요소를 컨트롤하기위해서)
    .addTo(new ScrollMagic.Controller());


// -------- 스크롤 이동 이벤트 (year 버튼) --------
$(function(){
  // year Bar 변수 선언부
  let scrollOf2022 = $('.history .history_title').offset().top + $('.history .history_title').outerHeight();
  let scrollOf2018 = $('.history .history_sheet_box .scroll_point_2018').offset().top;
  let scrollOf2014 = $('.history .history_sheet_box .scroll_point_2014').offset().top;
  // 스크롤시 감지 (jQuery throttle 라이브러리 - 최대빈도 50ms로 쓰로틀링)
  $(window).scroll($.throttle(50, function(){
    scrollOf2022 = $('.history .history_title').offset().top + $('.history .history_title').outerHeight();
    scrollOf2018 = $('.history .history_sheet_box .scroll_point_2018').offset().top;
    scrollOf2014 = $('.history .history_sheet_box .scroll_point_2014').offset().top;
  }));

  let yearRecent = $('.year .year_recent');
  let year2018 = $('.year .year_2018');
  let year2014 = $('.year .year_2014');

  yearRecent.click(function(e){
    e.preventDefault;
    $('html, body').stop().animate({scrollTop: scrollOf2022 - 100}, 1000);
    // $(window).scrollTo(this.hash || 0, 2000);
  });
  year2018.click(function(e){
    e.preventDefault;
    $('html, body').stop().animate({scrollTop: scrollOf2018 - 120}, 1000);
  });
  year2014.click(function(e){
    e.preventDefault;
    $('html, body').stop().animate({scrollTop: scrollOf2014 - 120}, 1000);
  });
});