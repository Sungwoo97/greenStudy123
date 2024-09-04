
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
let progressCharts = document.querySelectorAll('.charts .chart');
function startAnimation(){
  progressCharts.forEach(chart=>{
    let num = chart.getAttribute('data-num');
    var numberCircle = new ProgressBar.Circle(chart, {
      color: '#aaa',
    
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * num);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
    
      }
    });
    numberCircle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    numberCircle.text.style.fontSize = '2rem';
    
    numberCircle.animate(1.0);  // Number from 0.0 to 1.0
  });

}
  

  
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


/* const charts = document.querySelectorAll('.charts .chart');
console.log(charts);
for(let ch of charts){
  let target = ch.getAttribute('data-num');
  console.log(target);
  var bar = new ProgressBar.Circle(ch, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * target);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);  // Number from 0.0 to 1.0
}*/