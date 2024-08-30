let header = document.querySelector('header');
let slidewrapper= document.querySelector('.slidewrapper');
let slidecontainer= slidewrapper.querySelector('.slidecontainer');
let slides = slidecontainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slidewrapper.querySelector('.prev');
let nextBtn = slidewrapper.querySelector('.next');

//슬라이드
/*
슬라이드 배치
  slidewrapper의 너비를 파악하고 슬라이드 개수 곱, 그 수치를 slidecontainer의 너비로 지정
*/
function slideLayout(){
slidecontainer.style.width = (slidewrapper.offsetWidth * slideCount)+'px';
}
slideLayout();    // 임의로 1회 호출

window.addEventListener('resize',()=>{      // 브라우저 크기가 바꿀때도 호출
  slideLayout();
})

//좌우 버튼으로 이동하기
/*
다음버튼을 클릭하면 할일
  마지막이 아니면
    다음 슬라이드로 이동
  마지막이면
    첫 슬라이드로 이동
이전버튼을 클릭하면 할일
  첫 슬라이드가 아니면
    이전 슬라이드로 이동
  첫 슬라이드이면
    마지막 슬라이드로 이동
*/


prevBtn.addEventListener('click',()=>{
  if(currentIdx === 0){
    goToSlide(slideCount - 1);
  }else{
    goToSlide(currentIdx - 1);
  }
})

nextBtn.addEventListener('click',()=>{
  if(currentIdx === slideCount - 1){
    goToSlide(0); 
  }else{
    goToSlide(currentIdx + 1);
  }
})

function goToSlide(num){
  slidecontainer.style.left = `${-num*100}%`
  currentIdx = num;
  console.log(currentIdx);
}
goToSlide(0);
/*
스크롤양이 0보다 크다면 header 고정
아니라면 고정 풀기
*/


window.addEventListener('scroll', ()=>{
  if(window.scrollY > 0 ){
    header.classList.add('sticky');
  }
  else{ 
    header.classList.remove('sticky');
  }
})