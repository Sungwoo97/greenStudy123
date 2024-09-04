let target = document.querySelector('#line')
var lineBar = new ProgressBar.Line(target, { 
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  //trailColor: '#eee',
  //trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
lineBar.animate(1, function(){
  target.classList.add('complete');
});  // Number from 0.0 to 1.0

var circleBar = new ProgressBar.Circle('#circle', {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});
circleBar.animate(1.0); 

var numberCircle = new ProgressBar.Circle('#number-circle', {
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
    let num = document.querySelector('#number-circle').getAttribute('data-num');
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

var house = new ProgressBar.Path('#house-path', {
  easing: 'easeInOut',
  duration: 1400
});

house.set(0);
house.animate(0); 

const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const rewind = document.querySelector('#rewind');

play.addEventListener('click', ()=>{
  house.animate(1);
})
pause.addEventListener('click', ()=>{
  house.stop();
})
rewind.addEventListener('click', ()=>{
  house.animate(0);
})