const progress = $('.progress');

 // 주의) 문자열

/*
setInterval(할일, 시간)
할일 function(){ . . . } ()=>{}
시간 1000 1s
*/
progress.each(function(idx){
  let targetNum = Number($(this).attr('data-rate'));
  let initNum = 0;

  let timer = setInterval(()=>{
    initNum += 1;
    console.log(initNum);
    $(this).find('span').text(initNum);
    $(this).find('.bar').css({width:initNum+'%'});
    if(initNum === targetNum){
      clearInterval(timer);
    }
  }, 50);
});

 