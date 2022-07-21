// 스크롤 감지해서 헤더 숨기기
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
        $('#header').slideDown(500);
    }
    else {
        console.log('Scroll down');
        $('#header').slideUp(500);
    }
});