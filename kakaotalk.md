
이것을 위치에 복사

<!-- kakao api -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=당신의api아이디"></script>

  <!-- kakao 채널 버튼 -->
  <button type="button" id="kakao-talk-channel-chat-button" data-channel-public-id="_xcLqmC"
    style="border: 0px; background-color:transparent; cursor:pointer;" onclick="open_kakao_channel();">
    <!-- 본인이 제작한 이미지를 img에 연결하면 됨 -->
    <img alt="" src="http://bed072.godohosting.com/web/talk_btn01.png" style="width: 80px;">
  </button>

  <script>
    // 카카오 채널 열기
    function open_kakao_channel() {
      Kakao.Channel.addChannel({
        channelPublicId: '_xlnAzxj'
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//developers.kakao.com/sdk/js/kakao.plusfriend.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'kakao-js-sdk');
  </script>




  <!-- ------------------------ -->
  http://pf.kakao.com/_xlnAzxj


92586d929b2318839e6abdfde41a3aac