## 데모
https://wb96choi.github.io/blaylist/

## 기능
- 스크롤을 감지하여 스크롤을 내릴땐 헤더가 사라지고 올릴때만 다시 보이는 기능
- 토글메뉴를 누르면 스크롤인디케이터가 나와 해당 영역으로 자동스크롤 되는 기능
    - 현재 페이지가 어디쯤인지 스크롤 인디케이터가 알려준다! 
- 랜덤으로 음악(json파일에서)을 추천해줌
- 카테고리별로 분류 가능
- about 섹션에서 카카오톡 버튼을 누르면 나랑 상담도 가능

## 피드백 받을거

- ~~#random .recommend .con-img 의 height값을 너비값에 맞춰 정사각형 (파란색 outline 참고)으로 만들고 싶음~~
    - 해결
- ~~toggle-btn을 눌러서 .indicator가 나오게 하고 싶은데 기능이 작동을 안함~~
    - 해결
- ..더보기.. 를 글자가 아닌 button태그를 사용하여 detail페이지로 이동시키고 싶은데 
$(this).each(function(){
            if($(this).text().length >= length ){
                $(this).text($(this).text().substr(0,length)+'..더 보기..');
            };
        });
이 태그에서 어떻게 append시켜야 할 지 모르겟음

- ~~쏘세지 메뉴버튼 디자인 고르기~~
    - 해결
- 쏘세지 메뉴버튼 overflow scroll이 안됨 왜


## 목표

768px 이하의 너비에서(스마트폰 환경) 레이아웃이 변화하는 개미친 반응형웹사이트를 만들 예정
