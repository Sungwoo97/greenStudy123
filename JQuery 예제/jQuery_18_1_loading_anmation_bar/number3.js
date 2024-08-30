const progress = $('.progress');
const main = $('main');
const mainOST = main.offset().top - 300;
let oneTime = false;

/* 
윈도우에 스크롤이 생기면 할일
  스크롤양이 main 태그가 상단에서 떨어진 거리에서 -300보다 크면 숫자 애니메이션 작동
*/
$(window).scroll(function(){
  if($(this).scrollTop()> mainOST ){
    if(!main.hasClass('active')){
      main.addClass('active');
      progress.each(function(idx){
        let targetNum = Number($(this).attr('data-rate'));
        let initNum = 0;
        let timer = setInterval(()=>{
          initNum += 1;
          $(this).find('span').text(initNum);
          $(this).find('.bar').css({width:initNum+'%'});
          if(initNum === targetNum){
            clearInterval(timer);
          }
        }, 50);
      });
    }
  }
});

 