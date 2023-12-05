// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubeIframeAPIReady() {
  // <div id="player"></div> 
  // id 선택자 # 작성 X / 유튜브 명령이 내부적으로 player id를 찾게 됨
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜뷰 영상 ID
    playerVars : {
      autoplay: true, // 자동 재생
      loop: true, // 반복
      playlist:'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때 이 함수를 실행해 줘
      onReady: function (event) {
        // onReady 라는 메소드가 실행되면 어떻게 할거니
        // 이것을 event라는 매개 변수의 이름으로 받아서 함수 내부에서 활용해 줘
        event.target.mute()
        // targetn 은 지금 재생되고 있는 영상 그 자체 의미
        // mute라는 음소거 메소드를 작성
      }
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
const done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}