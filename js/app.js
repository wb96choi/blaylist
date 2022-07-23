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
      $('#indicator').addClass('on');
    });

    $('#indicator #close-btn').click(function(){
      $('#indicator').removeClass('on');
    });
  
  
});


// 스크롤 좌표 찾아서 이동시키기
$(function(){

    // 해당 #id값의 Top좌표값 찾아주기
    var movetoMV = document.querySelector("#main-visual").offsetTop;
    var movetoRD = document.querySelector("#random").offsetTop;
    var movetoCG = document.querySelector("#category").offsetTop;
    var movetoAB = document.querySelector("#about").offsetTop;

    // 클릭하면 scrollTo
    $('.movetoMV').click(function(){
        window.scrollTo({top:movetoMV, behavior:'smooth'});
    });
    $('.movetoRD').click(function(){
        window.scrollTo({top:movetoRD, behavior:'smooth'});
    });
    $('.movetoCG').click(function(){
        window.scrollTo({top:movetoCG, behavior:'smooth'});
    });
    $('.movetoAB').click(function(){
        window.scrollTo({top:movetoAB, behavior:'smooth'});
    });
});


// window.scrollTo({top:location - menuHeight, behavior:'smooth'});