// 검색돋보기 아이콘
const gnbSearchIcon = document.querySelector('.header_box .header .gnb .pc_gnb_menu li.pc_gnb_search .search_icon');

gnbSearchIcon.addEventListener('click', () => {
  alert('준비중인 기능입니다');
})

// lnb 섹션
const lnbFixed = document.querySelector('.lnb_outer_box_fixed');

window.addEventListener('scroll', _.throttle(function () {
  if (window.matchMedia('screen and (min-width:769px)').matches) {
    if (window.scrollY > 500) {
      // lnb 보이기
      lnbFixed.style.visibility = 'visible';
      lnbFixed.style.opacity = '1';
    } else {
      // lnb 숨기기
      lnbFixed.style.opacity = '0';
      lnbFixed.style.visibility = 'hidden';
    }
  } else {
    // screen width 가 769 이하일 경우 PC버전 lnb 숨기기
    lnbFixed.style.opacity = '0';
    lnbFixed.style.visibility = 'hidden';
  }
}, 300));