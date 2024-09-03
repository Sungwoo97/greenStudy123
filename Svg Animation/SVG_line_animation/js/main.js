const charts = $('.charts .chart');
const chartOST = charts.offset().top - 700;
let excuted = false;
console.log(chartOST);


$(window).scroll(function(){
  if(chartOST < $(this).scrollTop()){
    if(!excuted){
      startAnimation();
      excuted = true;
    }
  }
})
function startAnimation(){
  charts.each(function(idx){
    let num = Number($(this).attr('data-num'));
    let target = $(this).find('h2');
    let circle = $(this).find('svg');
  
    $({rate:0}).animate({rate:num},
      {
      duration:1500,
      progress:function(){
        var now = Math.floor(this.rate);
        target.text(now);
        let offset = 628 - (6.28 * now);
        circle.css({strokeDashoffset: offset});
      }
    });
  });
}