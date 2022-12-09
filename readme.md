
# 2022.12.09 dureraum_project 여덟번째 업로드

마크다운 문서를 최신순이 위로 오도록 정렬하고 마크다운 문법도 수정했다.

------

# 2022.12.09 dureraum_project 일곱번째 업로드

### 수정사항 세가지

1. 빠른예매 두번째단계 - 티켓 수량 판별 기능에 오류가있어 완벽하진않지만 간단히 수정했습니다 ( footer.js )
  1. 261 ~ 314번째 줄 수정

1. 빠른예매 기본 스크롤바의 모양이 어울리지않아, 처음에는 스크롤바가 보이지않다가,  width : 600px 부터 반응형으로 스크롤바가 보이도록 수정했습니다. ( footer.css )
  1. 418 ~ 431번째 줄 수정
  1. 1006 ~ 1026번째 줄 수정
  1. 1102 ~ 1105번째 줄 수정
  1. 1141 ~ 1144번째 줄 수정

1. 월간 스케줄의 스크롤바의 모양을 약간 수정했습니다. ( width 768px 부터 보이는 섹션임 ) ( main.css )
  1. 374 ~ 408번째 줄 수정

------

# 2022.12.08 dureraum_project 여섯번째 업로드

js 폴더 안에 있는 플러그인들을 plugins 폴더를 따로 만들어 정리해주었다.

------

# 2022.12.08 dureraum_project 다섯번째 업로드

빠른 예약 섹션 제작을 완료했다. 그 이외에도 스타일등을 반응형에 맞게 조금 더 다듬었으며 캘린더의 로직을 좀 더 효율적으로 변경했다.

추후 캘린더는 Date() 내장 객체를 이용해 무한 달력으로 변경해볼 예정이다.

------

# 2022.12.08 2차 업로드

마크다운 문서 정리를 위해 추가 업로드함.

------

# 2022.12.08  dureraum_project 네번째 업로드

빠른 예약 섹션의 반응형 레이아웃을 구현하고, 각 페이지를 건너갈 수 있도록 jQuery 클릭이벤트를 이용해 페이지 넘김 기능을 구현했다.

하지만 아직 빠른 예약 섹션 내부의 달력을 컨트롤하는 기능은 구현중이다.

빠른 예약 섹션의 달력 선택 기능을 구현하고 나서 다시 업데이트할 예정이다.

------

# 2022.12.06  dureraum_project 세번째 업로드

네이버지도 맵 api를 이용해 지도맵 api를 추가했다. 하지만 바닐라 js에서 키값을 숨기는 방법을 아직까지는 찾지 못해 이부분은 추후 해결이 필요하다.

메인페이지는 메인비주얼의 날개를 다듬고 스와이퍼의 컨트롤러를 이용해 제어하도록 만들었다

추천, 비평, 이벤트, SNS 섹션은 호버시 애니메이션을 추가했고, 전체적으로 마진과 간단한 기능들을 다듬었다.

서브페이지는 스크롤매직 라이브러리를 이용한 애니메이션을 추가했다.

이제 거의 마지막단계로 퀵메뉴 클릭시 빠른 예약 창이 (페이지이동없이) fixed 되어 나오는 기능을 구현중인데, 현재는 클릭시 박스가 나오게만 만들었고
구체적으로 그 박스 내부 컨텐츠는 만들지않았다.

빠른 예약 섹션을 완성하고나면 또 다시 업데이트 예정이다.

------

# 2022.12.04  dureraum_project 두번째 업로드

영화의전당 사이트를 참고해 리뉴얼 프로젝트를 진행중이다. (반응형 사이트)

저번에 미처 제작하지못했었던 map, notice, footer 섹션을 제작했고 화면이 깔끔하게 보이도록 12칼럼을 고려해 마진과 비율을 적절하게 조정했다.

그리고 jQuery로 제작했었던 PC버전 헤더의 애니메이션이 반응속도가 느리고 쓰로틀 처리가 어려워 깔끔하게 CSS 애니메이션으로 변경했다.

메인비주얼, 영화 비평, 이벤트, 푸터 섹션 등의 컨텐츠 내용물도 핍진성 있는 사진과 글귀를 넣어 꼼꼼하게 변경했다.

메인페이지는 지도맵 api와 추가해야할 자잘한 애니메이션(상호작용)을 제외하면 거의 다 완성했다고 볼 수 있으며, 현재 단계는 서브페이지 제작 진행중에 있다.

지도맵 api는 어느것을 써야할지 고민중이다.