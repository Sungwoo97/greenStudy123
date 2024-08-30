/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

let header = document.querySelector('#main-header'); 
let logo = header.querySelector('#logo');
let largeLogo = 'images/logo.svg';
let smallLogo = 'images/logo-shrink.svg'
let excuted = false;  //실행 여부 없음
console.log(excuted);
/* 
윈도우에 스크롤이 생기면 할일 
  스크롤양이 0보다 크면 header에 shrink 추가
  아니면 제거
*/

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 5){
    if(!excuted){   // logo를 변경한 적이 없을 때
      header.classList.add('shrink');
      changeLogo(smallLogo);
      excuted = true;
      console.log(excuted);
    }
  }else{
    header.classList.remove('shrink');
    changeLogo(largeLogo);
    excuted = false;
  }
});

function changeLogo(url){
  logo.classList.add('hide');
  setTimeout(() =>{
    logo.setAttribute('src', url);
    logo.classList.remove('hide');
  }, 300);

}