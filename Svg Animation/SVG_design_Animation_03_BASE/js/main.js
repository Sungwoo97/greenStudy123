const notepads = document.querySelector('.notepads');

/*
윈도우에 스크롤이 생기면 할일
  스크롤양이 300보다 크면 notepads에 active 추가
  아니라면 active 제거
*/

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300){
    notepads.classList.add('active');
  }else{
    notepads.classList.remove('active');
  }
})