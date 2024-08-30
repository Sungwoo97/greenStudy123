// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let nextBtn = slideWrapper.querySelector('#next');
let prevBtn = slideWrapper.querySelector('#prev');
let pager = slideWrapper.querySelector('.pager');
let autoFade;
let pagerHTML = '';
/*
태그 생성하기
새 값을 생성(교체)
대상.innerHTML = 값;
대상.innerText = 값;

값을 반환
대상.innerHTML HTML 태그까지 반환
대상.innerText Text만 반환
*/


// pager.innerText = '<a href="">0</a>';
let title = document.querySelector('h1');
console.log(title.innerHTML);
console.log(title.innerText);

/*
시간을 한번체크
let 대상 = setTimeout (할일, 시간);
clearTimeout(대상);

일정시간마다 할일
let 대상 = setInterval(할일, 시간);
clearInterval(대상);
*/
slides[0].classList.add('active');

function autoFadeStart(){
  autoFade = setInterval(function(){
    let nextIdx = (currentIdx + 1) % slideCount;
    // if(nextIdx == 5){
    //   nextIdx = 0;
    // }
    slides[currentIdx].classList.remove('active');
    slides[nextIdx].classList.add('active');
    currentIdx = nextIdx;
  }, 4000);
}
autoFadeStart();
slideWrapper.addEventListener('mouseenter',() => {
  clearInterval(autoFade);
});
slideWrapper.addEventListener('mouseleave',() => {
  autoFadeStart();
});


// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
/*
for(let i = 0; i<slideCount; i++){
  slides[i].style.left = `${i * 100}%`;
}*/
slides.forEach((item,idx) =>{
  item.style.left = `${idx * 100}%`;
  pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
  console.log(pagerHTML);
});
pager.innerHTML = pagerHTML;  // 반복문 내에 반복하는 것은 비효율적
let pagerBtn = pager.querySelectorAll('a'); // 생성 주기가 중요하다
console.log(pagerBtn);

// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)
/*
goToslide 함수는 매개변수 num으로 숫자가 들어오면 슬라이드를 이동시킨다.

*/

// slides.forEach(function (item, idx){
//   goToSlide(idx);
// });

function goToSlide(num){
  
  currentIdx = num;
  slideContainer.style.left = `${-num * 100}%`;
  /* 마지막이면 다음 버튼이 안보인다  */
  if(currentIdx === (slideCount - 1)){
    nextBtn.classList.add('disabled');
  }else{
    nextBtn.classList.remove('disabled');
  }
  //처음이면
  if(currentIdx === 0 ){
    prevBtn.classList.add('disabled');
  }else{
    prevBtn.classList.remove('disabled');
  }
  //pager 업데이트
  /* 모든 페이저에서 active 제거 현재 슬라이드 번호에 해당하는 그요소에만 active 추가  */
  for(let item of pagerBtn){
    item.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');

  
}
// 좌우 버튼 클릭으로 슬라이드 이동시키기
nextBtn.addEventListener('click', ()=>{
  goToSlide(currentIdx + 1);
})
prevBtn.addEventListener('click', ()=>{
  goToSlide(currentIdx - 1);
})

goToSlide(0); // 한번도 호출되지 않았기 때문에 임의로 한번 호출


// 페이저로 슬라이드 이동하기
/* 
pagerBtn을 클릭하면 클릭된 그 요소의 숫자를 goToSlide에 전달
*/
pagerBtn.forEach((item,idx) =>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    goToSlide(idx);
    
  });  
});


// 자동 슬라이드 
