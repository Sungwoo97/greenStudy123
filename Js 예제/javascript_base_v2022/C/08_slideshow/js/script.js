// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let nextBtn = slideWrapper.querySelector('#next');
let prevBtn = slideWrapper.querySelector('#prev');
let pager = slideWrapper.querySelector('.pager');
let pagerHTML = '';
let timer;
/*
새 값을 생성(교체)
대상.innerHTML = 값
대상.innerText = 값

값을 반환
대상.innerHTML
대상.innerText
*/
let title = document.querySelector('h1');
console.log(title.innerHTML);
console.log(title.innerText);

// pager.innerHTML = '<a href="">0</a>';
// pager.innerText = '<a href="">0</a>';

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
  pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
  console.log(pagerHTML);
});

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll('a');
console.log(pagerBtn);

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
  //gager 업데이트
  /* 모든 페이저에서 active 제거, 현재 슬라이드번호에 해당하는 그 요소에만 active 추가*/
  for(let pb of pagerBtn){
    pb.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');
  
  //슬라이드 활성화
  for(let slide of slides){
    slide.classList.remove('active');
  }
  slides[currentIdx].classList.add('active');

}

//nextBtn 버튼을 클릭하면 현재 슬라이드 번호에 1을 더해서 gotoSlide에 전달한다
nextBtn.addEventListener('click', ()=>{
  goToslide(currentIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
  goToslide(currentIdx - 1);
});

goToslide(0);

//페이저로 이동하기
/*
pagerBtn 두번째를 클릭하면 클릭된 그 요소의 숫자를 goToslide(1)에 전달

for(let i = 0;i<slideCount;i++){
  pagerBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();
    goToslide(i);
  });
}
*/
pagerBtn.forEach((pager,idx)=>{
  pager.addEventListener('click',(e)=>{
    e.preventDefault();
    goToslide(idx);
  });
})

//자동 슬라이드
/*
setInterval(할일, 시간);
할일 = 함수 = function(){..}
할일 = 함수 = ()=>{..}
시간 4000 = 4초
*/
function AutoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)%slideCount;

    goToslide(nextIdx);
  }, 4000);
}

AutoSlide();

slideWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
});
slideWrapper.addEventListener('mouseleave',()=>{
  AutoSlide();
});