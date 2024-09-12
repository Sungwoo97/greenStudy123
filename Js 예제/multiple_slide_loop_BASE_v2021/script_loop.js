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

//복사본 생성
let slidesHTML = slidecontainer.innerHTML;
let clonedSlidesHTML = slidesHTML.replace(/<li>/g, '<li class="clone">');
slidecontainer.innerHTML = clonedSlidesHTML + slidecontainer.innerHTML; 
slidecontainer.innerHTML += clonedSlidesHTML; 
const allSlideCount = slidecontainer.querySelectorAll('li').length;
console.log(slidecontainer.innerHTML);


/*for(let slide of slides){
  let cloneSlide = slide.cloneNode(true); // deep copy
  cloneSlide.classList.add('clone');
  slidecontainer.appendChild(cloneSlide);
}*/

// 슬라이드 전체 너비 반영
let slideMaxWidth = (slideWidth * allSlideCount) + (slideGap * (allSlideCount -1));
let slideOriginWidth = (slideWidth * slideCount) + (slideGap * slideCount);
slidecontainer.style.width = slideMaxWidth+'px';
slidecontainer.style.transform = `translateX(-${slideOriginWidth}px)`;

//이동함수

function moveSlide(num){
  /*
  7번이 마지막 => 2 -460px
  -5가 처음 = > 0 0px
  }*/
  let numTotal = -num *(slideWidth + slideGap);
  slidecontainer.style.left = numTotal +'px';
  currentIdx = num;
  console.log(currentIdx);
  if(currentIdx === slideCount*2-maxSlides){
    setTimeout(()=>{
      slidecontainer.classList.remove('animated');
      slidecontainer.style.left = `-${(num - slideCount)*(slideWidth + slideGap)}px`;
      currentIdx = num-slideCount;
    }, 500);
    setTimeout(()=>{
      slidecontainer.classList.add('animated');
    },600);
  }
  if(currentIdx === -slideCount){
    
    setTimeout(()=>{
      slidecontainer.classList.remove('animated');
      slidecontainer.style.left = `0px`;
      currentIdx = 0;
    }, 500);
    setTimeout(()=>{
      slidecontainer.classList.add('animated');
    },600);
  }
  
  
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
});


