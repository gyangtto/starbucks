/**
 * 페이지 스크롤에 따른 badge 스크롤 이벤트 추가
 */

// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl = document.querySelector('header .badges');
// #to-Top 버튼을 toTopEl 변수로 선언
const toTopEl = document.querySelector('#to-top')

// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', 
// _.throttle(함수, 시간)
_.throttle(function () {
  console.log(window.scrollY);
  // 페이지 스크롤 위치가 500px이 넘으면,
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    // 애니메이션 처리해 주는 라이브러리에서 제공하는 기능
    gsap.to(badgeEl, .6, {
      opacity: 0,
      // opacity 1 속성만 넣을 경우 → 상태 값은 동일함 ex) 마우스 상태 값 중첩 적용 불가
      display: 'none'
      // display 1 속성만 넣을 경우 전/후 상태의 중간 값 X → 자연스러운 전환효과 불가
    });
        // #to-top 버튼 보이기
    // gsap.to(요소, 지속시간, 옵션);
        gsap.to(toTopEl, .2, {
          x: 0
        });
    // 페이지 스크롤 위치가 500px이 넘지 않으면,
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // #to-top 버튼 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    window, .7, 
    {
      scrollTo: 0
    }
  );
});

/**
 * 순서대로 fade 효과주기
 */

// querySelectorAll이라는 메소드의 첫 번째 인수로 
// [문자데이터 .visal이라는 클래스 요소의 후손 클래스 fade-in 클래스 요소들 전부] 찾아서 
// fade-elements라는 변수에다가 이렇게 할당하겠습니다. 라고 정의
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 실제로 html에서 찾은 fade-in이라는 요소들의 갯수 만큼 
// forEach라는 메소드의 인수로 적은 함수가 실행이 된다

// 나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  // function(★,■) 
  // ★ → 첫번째 매개변수  
  // 반복 처리하는 함수는 기본적으로 .fade-in이라는 클래스 요소들을 순차적으로 함수로 사용할 수 있게 데이터로 내어 줌 
  // 단수 형태로 작성 가능 (ex. fadeEls 라고 선언할 경우 fadeEl로 사용) / 내가 원하는 이름으로 대체도 가능 (ex. good or fade)
  // ■ → 두번째 매개변수
  // 반복되는 횟수를 index라는 이름으로 받아서 사용할 수 있음

  // 각 요소들을 순서대로(delay) 보여지게 함
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    // gsap이라는 애니메이션 라이브러리에서 제공하는 delay 옵션 추가 가능
    // index 는 첫번째 시작 숫자가 0이므로 숫자 1을 더해서 0.7을 곱하면
    // 처음 반복되는 fade-in이라는 클래스를 가진 요소는 0.7초 후에 애니메이션이 동작
    opacity: 1
  });
});

/**
 * 슬라이드 요소 관리
 */

// 공지사항 → 세로 Swiper 기능 구현
// new = 자바스크립트 생성자
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  // 방향: 수직
  autoplay: true,
  // 자동 재생
  loop: true
  // 반복
});


// 프로모션 → 가로 Swiper 기능 구현
new Swiper('.promotion .swiper', {
  // Swiper 기본값 : direction: 'horizontal', // 수평 슬라이드
  slidesPerView: 3,
  //한 번에 보여줄 슬라이드 갯수 
  spaceBetween: 10,
  // 슬라이드 사이 여백
  centeredSlides: true,
  // 1번 슬라이드가 가운데
  loop: true,
  // 반복
  autoplay: {
    delay: 5000
  },
  // 자동 재생 {딜레이 5초}
  pagination: {
    el: '.promotion .swiper-pagination',
    // 페이지 번호 요소 선택자
    clickable: true
    // 사용자의 페이지 번호 요소 제어
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

new Swiper('.awards .swiper',{
  // direction: 'horizontal'
  // 수평을 의미하는 문자 데이터가 이미 기본 값이라 생략
  slidesPerView: 5, //한 번에 보여줄 슬라이드 갯수 
  spaceBetween: 30, // 슬라이드 사이 여백
  loop: true, // 반복
  autoplay: true, // 자동
  navigation: {
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});

/**
 * 슬라이드 요소 관리 끝
 */

/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역를 토글하는 버튼 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 슬라이드 영역 숨김 여부 기본값
let isHidePromotion = false;
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당 
  // a=!a >> a라는 변수의 값을 지속적으로 반대값으로 전환시켜줄 수 있는 코드
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    // 숨김 처리
    // hide 클래스 추가해줘
    promotionEl.classList.add('hide')

    // 요소가 보여야 하면,
  } else {
    // 보임 처리
    // hide 클래스 지워줘
    promotionEl.classList.remove('hide')
  }
});


/**
 * 부유하는 요소 관리
 */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 부유하는(떠 다니는) 요소를 만드는 함수 floatingObject
function floatingObject(selector, delay, size) {
  // selctor라는 선택자 매개변수에 열어 // delay 지연 시간이고 // size 는 Y축 크기다 바깥 하단 floatingObject () 함수에서 가져오게 된다
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 지속시간을 random() 함수로 실행 >> 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true, // 자동으로 올라가는 애니메이션 값
      ease: "power1.inOut", // gsap easing
      delay: random(0, delay) // 지연시간 추가
    });

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */

// 관리할 요소들 검색
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  // new라는 키워드를 사용하여 스크롤매직을 사용할거임
  new ScrollMagic
    // .Scene() 메소드 사용 (감시하는 역할)
    // 감시할 장면(Scene)을 추가
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      // 감시하려고하는 section.scroll-spy 요소에 강제적으로 실행시킴
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
      // 뷰포트가 80% 지점에 걸리면 아래 내용들 강제 실행 시켜!
    })
    // 메소드 체이닝을 통해 .setClassToggle() 메소드 추가 
    // set이라는 클래스를 토글(넣었다 뺐다) 제어 할거야!
    .setClassToggle(spyEl, 'show')
    //setClassToggle에 인수 2개 작성, 토글할 그 요소(spyEl) 지정, 토글할 클래스(show) 이름 지정
    // .ScrollMagic이라는 자바스크립트 라이브러리가 필요한 컨트롤러라는 개념의 내용 추가를 위해 addTo() 메소드가 필요함
    .addTo(new ScrollMagic.Controller());  // 컨트롤러에 장면을 할당(필수!)
    // ScrollMagic에서 기본적으로 우리가 추가한 옵션들을 내부의 컨트롤러의 내용에 할당해서 실제로 동작할 수 있는 구조를 만들어줌
});
