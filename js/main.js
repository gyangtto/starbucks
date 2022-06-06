/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

// 검색 아이콘 누르면 >> 포커스 처리
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
});


/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절('scroll', _.throttle(함수, 시간))
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기! > 실제로는 그 위치에 있음
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    // to-top 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    
    // to-top 버튼 숨기기!
    // 첫번째 인수(=요소)부분에 변수 선언 후 삽입 했으나, 
    // gsap 자바스크립트 라이브러리는 css 선택자만 적어도 사용이 가능
    // gsap.to('#to-top', .2, {{});
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300))

// toTopEl (#to-top 선택자)를 클릭하면 맨 위로!
toTopEl.addEventListener('click', function (){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  // 자동 재생
  autoplay: true,
  // 무한 슬라이드
  loop: true
});

new Swiper('.promotion .swiper-container',{
  // 수평, 수직 옵션 > 수평은 기본으로 적용되어 따로 작성 필요 X
  // direction: 'horizontal',
  // 한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백 
  spaceBetween: 10,
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 사용자의 페이지 번호 요소 제어 가능 여부
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
  // ! = 반대가 되게 만들어주세요 ex) false -> true 로
  isHidePromotion = !isHidePromotion
  // if 조건문에 isHidePromotion 상태가 true라면
  if(isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자  
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      // x=너비, y=높이 : 값
      y: size,
      // 무한 반복
      repeat: -1,
      // 한번 재생된 애니메이션을 다시 뒤로 재생하게 하는 옵션
      yoyo: true,
      // gsap easing을 통해 애니메이션 추가 설정 가능
      ease: Power1.easeInOut,
      // 지연시간 추가
      delay: random(0, delay)
    }
  );
};

// 실행하면서 선택자 함수를 인수로 넣어야 함
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 클래스(.scroll-spy)가 붙어있는 모든 section spyEls 에 할당될 것임
const spyEls = document.querySelectorAll('section.scroll-spy');
// spyEls.forEach로 반복될 때 마다 spyEl라는 매개변수에 그 값이 들어가 있을 것임
spyEls.forEach(function (spyEl){
  // new ScrollMagic.메소드()
  // new라는 키워드 사용 후 ScrollMagic 자바스크립트 라이브러리 실행
  // Scene = 특정한 요소를 감시하는 메소드
  // setClassToggle() = 클래스를 토글제어하는 역할
  // addTo() = 컨트롤러 메소드
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // trigger는 강제발생 > 보여짐 여부를 감시할 요소를 지정
    triggerHook : .8 // 뷰포트의 지정 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
// 날짜를 가져오고 싶을 때 : new라는 생성자 함수로 Date 객체를 사용
// 그 안의 .getFullYear() 메소드 작성 시 연도 데이터를 반환 
thisYear.textContent = new Date().getFullYear();