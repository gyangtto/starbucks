// Youtube IFrame API를 비동기로 로드
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 외부에서 가져온 'tag.src' youtube 라이브러리가 자체적으로 onYouTubeIframeAPIReady 함수를 찾는 것이기 때문에 절대 바꾸면 안됨 
 // 무조건 onYouTubeIframeAPIReady 유지 필요
function onYouTubeIframeAPIReady() {
  // new 라는 키워드 안에 YT(youtube) 객체부분에 player 라는 메소드 실행
  // player = ID속성 player / #player X
  new YT.Player('player', {
    // 출력하려는 비디오의 ID > url의 끝부분 = ID 값
    videoId: 'An6LvWQuj_8',
    // Vars = valuable 이라는 변수의 약어
    // playerVars = 재생하기 위한 변수들
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 무한 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    
    },
    events: {
      // onReady 라는 메소드가 실행되면 evt 매개변수 실행
      onReady: function(event){
        // target 이라는 속성 > mute(음소거) 실행
        event.target.mute() 
      } 
    }
  });
}