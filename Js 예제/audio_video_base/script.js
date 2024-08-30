const video = document.querySelector('#vivaldi');
const vPlayBtn = document.querySelector('#vplay');
const vPauseBtn = document.querySelector('#vpause');
const vStopBtn = document.querySelector('#vstop');

const bee = document.querySelector('#bee');
const aPlayBtn = document.querySelector('#aplay');
const aPauseBtn = document.querySelector('#apause');

const vcontrols = document.querySelector('.vwrapper #controls');
const bar = document.querySelector('.progress .bar');




vcontrols.addEventListener('click',()=>{
  vcontrols.classList.toggle('active')
  if(vcontrols.classList.contains('active')){
    video.pause();
  }else{
    video.play();
    const duration = video.duration;
    
  
    let timer = setInterval(()=>{
      let ct = video.currentTime;
      let percent = ct/duration*100;
      bar.style.width = percent + '%';
      if(percent === 100){
        percent = 0;
        clearInterval(timer);
        
      }
    },100);

  }
});



/* 
대상.play();
대상.pause();
*/


vPlayBtn.addEventListener('click', ()=>{
  video.play();

});

vPauseBtn.addEventListener('click', ()=>{
  video.pause();
});
vStopBtn.addEventListener('click', ()=>{
  video.pause();
  video.currentTime = 0;
});

aPlayBtn.addEventListener('click', ()=>{
  bee.play();
});

aPauseBtn.addEventListener('click', ()=>{
  bee.pause();
});