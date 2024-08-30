const triggerBtn = document.querySelector('.trigger-menu');
// const body = document.querySelector('body');
const body = document.body;
let lastScroll = 0;
/*
triggerBtn을 클릭하면 할 일
  body에 menu-opened 클래스명이 없으면 추가 있으면 제거
*/

triggerBtn.addEventListener('click', ()=>{
  body.classList.toggle('menu-opened');
});

window.addEventListener('scroll', ()=>{
  let currentScroll = window.scrollY;
  //스크롤 이벤트
  console.log(currentScroll,lastScroll);
  if(currentScroll > lastScroll){
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  }else if(currentScroll < lastScroll){
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
})