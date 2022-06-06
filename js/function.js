$(function (){
  const $search = $('.search')
  const $searchinput = $search.children('input')

  // 검색 아이콘 누르면 >> 포커스 처리
  $search.on('click', function() {
    $searchinput.focus();
  });

  // focus가 되면 >> 
  $searchinput.on('focus', function(){
    $search.addClass('focused');
    $searchinput.attr('placeholder', '통합검색');
  });

  // focus가 해제 되면
  $searchinput.on('blur', function(){
    $search.removeClass('focused');
    $searchinput.attr('placeholder', '');
  });

  // badge 스크롤 시 fadeout처리
  const badgeEl = $('header').find('.badges');
  $(window).on('scroll', _.throttle(function () {
    // scroll evt 사용 시 자주 사용 > _.throttle(함수, 시간) 
      if(this.scrollY > 500){
        // 배지 숨기기 > 실제로는 그 위치에 있음
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
          display: 'none',
          opacity: 0
        });
      } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
          display: 'block',
          opacity: 1
        });
      }
    }, 300));

  const fadeEls = $('.fade-in').index(this);
// 나타날 요소들을 하나씩 반복해서 처리!
$('.fade-in').eq().forEach(function (index, fadeEls) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEls, 1, {
    delay: ($('.fade-in').eq(fadeEls) + 1) * .7,
    // 0은 * 처리해도 0 >> +1 로 작성 > .7 초 뒤 (1) index 실행 > 1.4, 2.1, 2.7 초 뒤 동작
    opacity: 1
  })
})
});

