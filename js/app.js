// // 스크롤 감지해서 헤더 숨기기
// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta >= 0) {
//         console.log('Scroll up');
//         $('#header').slideDown(500);
//         $('#header .logo').slideDown(500);        
//     }
//     else {
//         console.log('Scroll down');
//         $('#header').slideUp(500);
//         $('#header .logo').slideUp(500);
//     }
// });




// 스크롤 감지해서 헤더 숨기기
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
        $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(0)');
        $('#header .logo').css('transition-duration', '0.5s').css('transform', 'translateY(0)');
    }
    else {
        console.log('Scroll down');
        $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(-100%)');
        $('#header .logo').css('transition-duration', '0.5s').css('transform', 'translateY(-100%)');
    }
});