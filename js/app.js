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



// 설명란 길면 자르기 
$(function(){
    $('#random .recommend article .con-comment').each(function(){
        // 100글자 넘어가면 잘림
        var length = 100;

        $(this).each(function(){
            if($(this).text().length >= length ){
                $(this).text($(this).text().substr(0,length)+'..더 보기..');
            };
        });
    });
});



// 토글메뉴
$(function(){

    $('#header .toggle-btn').click(function(){
      $('.indicator').addClass('on');
    });

    $('#header .toggle-btn').click(function(){
      $('.indicator').removeClass('on');
    });
  
  
  });