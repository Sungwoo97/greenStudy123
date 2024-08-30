const progress = $('.progress');
const progressBar = progress.find('.bar');
const progressSpan = progress.find('span');
let initNum = 0;
const targetNum = Number(progress.attr('data-rate'));

progressBar.animate({width : targetNum + '%'},2000);
$({rate:0}).animate({rate:targetNum}, {
  duration: 2000,
  progress:function(){
    let now = Math.floor(this.rate);
    progressSpan.text(now);
  }
});
/* 
대상.animate({속성:값, 속성:값}, 시간, 이징, 끝나면 할일);
대상.animate({속성:값, 속성:값}, {
  duration : 2000,
  easgin : 'linear',
  progress:function(){
    let now = Math.floor(this.rate);
    progressSpan.text(now);
  }
  complete : function(){. . .}
});
progressBar.animate({width : targetNum + '%'}, 2000, linear);
*/

