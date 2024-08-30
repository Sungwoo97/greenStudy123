/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

let header = document.querySelector('#main-header'); 
let logo = header.querySelector('#logo');
let largeLogo = 'images/logo.svg';
let smallLogo = 'images/logo-shrink.svg'

/* 
윈도우에 스크롤이 생기면 할일 
  스크롤양이 0보다 크면 header에 shrink 추가
  아니면 제거
*/

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 0){
    if(!header.classList.contains('shrink')){   // shrink가 없다면
      header.classList.add('shrink');
      changeLogo(smallLogo);
    }
  }else{
    header.classList.remove('shrink');
    changeLogo(largeLogo);
  }
});

function changeLogo(url){
  logo.classList.add('hide');
  setTimeout(() =>{
    logo.setAttribute('src', url);
    logo.classList.remove('hide');
  }, 300);

}