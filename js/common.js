/**
 * 검색창 search 이벤트 포커스 추가
 */

// 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search');
// document → DOCTYPE!의 doc이 HTML 자체 > HTML 내에서 찾아줘 명령어
const searchInputEl = searchEl.querySelector('input');
// div.input 클래스 요소를 찾을 때 const searchInputEl = document.querySelector('.search input'); 사용해도 되나,
// document.querySelector → searchEl.querySelecto로 교체
// 첫번째는 doc을 통해 HTML 내에서부터 찾지만, 이후로는 최적화된 상태에서 찾는다 

// .search 요소에 이벤트를 추가하는 개념 
// 클릭 이벤트 searchEl.addEventListener('click', 핸들러 ▶ function (){});
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
  // input 요소를 포커스 하겠다는 명령어 실행 
  // focus는 자바스크립트를 통해 포커스가 가능한 대표적인 input과 같은 요소에 
  // 포커스를 강제 적용하는 명령어
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
// input 요소에 focus 실행 시 이벤트 추가
// earchInputEl.addEventListener('focus', function () {});
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // searchEl.classList.add = 클래스 정보를 가지고 있는 객체에서 어떤 클래스를 추가하겠다.
  // focused를 추가하겠다
  searchInputEl.setAttribute('placeholder', '통합검색');
  // searchInputEl.setAttribute(input 요소의 속성, 실제 값) = html 속성을 지정한다
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 요소 검색 → thisYear 라고 선언
const thisYear = document.querySelector('.this-year');

// textContent라는 속성에는 그 요소가 가지고 있는 말 그대로 글자 내용들의 값을 알아내거나 값을 지정하는 용도로 사용 가능
thisYear.textContent = new Date().getFullYear(); // 올해의 연도를 숫자로 가져옴