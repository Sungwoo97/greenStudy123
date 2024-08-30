const slideWrapper = document.querySelector('.slide_wrapper');
const slidecontainer = slideWrapper.querySelector('.slides');
const slides = slidecontainer.querySelectorAll('li');
const slideCount = slides.length;
let currentIdx = 0;
const slideWidth = 200;
const slideGap = 30;
const maxSlides = 3;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');

// 슬라이드 전체 너비 반영
let slideMaxWidth = (slideWidth * slideCount) + (slideGap * (slideCount -1));
slidecontainer.style.width = slideMaxWidth+'px';

//이동함수
/*
moveSlide 함수는 숫자가 들어오면 슬라이드 이동
num = 1 slidecontainer left : -230,  
*/

function moveSlide(num){
  if(num > slideCount - maxSlides){
    num = 0;
  }
  if(num < 0){
    num = slideCount - maxSlides;
  }
  let numTotal = (slideWidth + slideGap) * -num ;
  slidecontainer.style.left = numTotal +'px';
  currentIdx = num;
  console.log(currentIdx);
}


nextBtn.addEventListener('click', ()=>{
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
    moveSlide(currentIdx - 1);
});

window.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight'){  
    moveSlide(currentIdx + 1);  
  }
  if(e.key === 'ArrowLeft'){
    moveSlide(currentIdx - 1);
  }
})
