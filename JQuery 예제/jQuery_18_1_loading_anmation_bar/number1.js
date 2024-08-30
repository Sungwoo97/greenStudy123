const progress = $('.progress');
const progressBar = $('.bar');
const progressSpan = $(' span');
let initNum = 0;
const targetNum = Number(progress.attr('data-rate'));
 // 주의) 문자열

/*
setInterval(할일, 시간)
할일 function(){ . . . } ()=>{}
시간 1000 1s
*/

 
  let timer = setInterval(()=>{
    initNum += 1;
    progressBar.text(initNum);
    progressSpan.css({width:initNum+'%'});
    if(initNum === targetNum){
      clearInterval(timer);
    }
  }, 50);
