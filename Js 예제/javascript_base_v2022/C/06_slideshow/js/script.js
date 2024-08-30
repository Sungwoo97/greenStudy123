// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let nextBtn = slideWrapper.querySelector('#next');
let prevBtn = slideWrapper.querySelector('#prev');

//슬라이드 배치
/*
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = `${i * 100}%`;
}
*/
//forEach
/*
대상.forEach(function(원소,인덱스,원소전체){...})
*/
//slides.forEach(function(slide,idx,all){...})
//slides.forEach((slide,idx,all)=>{...})

slides.forEach((slide,idx)=>{
  slide.style.left = `${idx * 100}%`;
});

//슬라이드 이동 함수
/*
goToslide 함수는 매개변수 num으로 숫자가 들어오면 슬라이드를 이동시킨다.
goToslide(0), slideContainer left 0%
goToslide(1), slideContainer left -100%

let 변수명 = 값;
function 함수명() {}
입력 할일 출력
*/
function goToslide(num){
  slideContainer.style.left = `${-num*100}%`;
  currentIdx = num;
  //마지막
  if(currentIdx === slideCount-1){
    nextBtn.classList.add('disabled');
  }else{
    nextBtn.classList.remove('disabled');
  }
  //처음이면
  if(currentIdx === 0){
    prevBtn.classList.add('disabled');
  }else{
    prevBtn.classList.remove('disabled');
  }
}

//nextBtn 버튼을 클릭하면 현재 슬라이드 번호에 1을 더해서 gotoSlide에 전달한다
nextBtn.addEventListener('click', ()=>{
  goToslide(currentIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
  goToslide(currentIdx - 1);
});

goToslide(0);