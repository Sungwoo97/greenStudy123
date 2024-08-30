let btt =  document.querySelector('.back-to-top');
let progressBox = document.querySelector('.progress-box');
let progressBoxOST = progressBox.offsetTop - 400;
//let progressRate = Number(progressBox.getAttribute('data-rate'));
let progressRate = Number(progressBox.dataset.rate);
let progressBar = progressBox.querySelector('.progress-bar');
let progressSpan = progressBox.querySelector('.content span');
let excuted = false;
let interval = 50;
let count = 0;
/*
윈도우에 스크롤이 생기면 할 일
  스크롤양이 300보다 크다면 btt가 나타나고
  아니면 사라진다

btt를 클릭하면 화면 상단으로 부드럽게 이동한다.
*/

window.addEventListener('scroll', ()=>{
  /*
  스크롤양이 progressBoxOST 보다 많다면 할일
  progressRate의 숫자만큼 숫자가 올라가도록
  progressRate의 숫자만큼 progressBar의 너비를 늘려준다    
  */
 
 if(window.scrollY > progressBoxOST){
  if(!excuted){
    progressBar.style.width = progressRate+'%';
    progressBar.style.transition = progressRate * (interval/1000) +'s';
    let progressInterval = setInterval(()=>{
      count++;
      progressSpan.innerText = count;
      
      if(count === progressRate){
        clearInterval(progressInterval);
      } 
    } , interval);
    excuted = true;
  }
   
  }
  if(window.scrollY > 300){
    btt.classList.add('active');
  }else{
    btt.classList.remove('active');
  }
});

btt.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top : 0,
    behavior:'smooth'
  });
});