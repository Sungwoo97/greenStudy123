let header = document.querySelector('.page-header');
let headerOST = header.offsetTop;

/*
윈도우에 스크롤이 생기면 할일
  스크롤 양이 headerOST보다 크다면
    header에 클래스명 sticky 추가
  아니라면
    header에 클래스명 sticky 제거
*/
window.addEventListener('scroll', ()=>{
  if(headerOST < window.scrollY){
    header.classList.add('sticky');
  }
  else{
    header.classList.remove('sticky');
  }
});