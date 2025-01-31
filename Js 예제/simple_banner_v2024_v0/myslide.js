function mySlide(target){
  const slideTargets = document.querySelectorAll(target);
  
  for(let slideTarget of slideTargets){
    const slideWrapper = slideTarget;
    let slideContainer = slideWrapper.querySelector('.slidecontainer');
    let slides = slideWrapper.querySelectorAll('.slide');
    let prevBtn = slideWrapper.querySelector('.prev');
    let nextBtn = slideWrapper.querySelector('.next');
    let slideCount = slides.length;
    let currentIdx = 0;
    let timer;
    
    //slides[1].querySelector('h2').style.color = 'red';
    
    let slideWidth = slideWrapper.offsetWidth;
    //복사본 생성
    //증가하면서 기존요소의 뒤쪽에 생성
    for (var i = 0; i < slideCount; i++) {
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.appendChild(cloneSlide);
    }
    //차감하면서 기존 요소의 앞쪽에 생성
    for (var i = slideCount - 1; i >= 0; i--) {
      var cloneSlide = slides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      slideContainer.prepend(cloneSlide);
    }
    
    
    //슬라이드 너비
    const newslides = slideWrapper.querySelectorAll('.slide');
    const newslidesCount = newslides.length;
    console.log(newslidesCount);
    
    
    slideContainer.style.width = `${slideWidth*newslidesCount}px`;
    
    
    function showSlide(idx) {
      for (let slide of slides) {
        slide.classList.remove('active');
      }
      slideContainer.style.left = `${slideWidth * -idx}px`;
      currentIdx = idx;
    
    
      if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function () {
          slideContainer.classList.remove('animated');
          slideContainer.style.left = '0px';
          currentIdx = 0;
        }, 500);
        //다음 클릭시 transition이 작동하도록 다시 animated 클래스명 추가
        setTimeout(function () {
          slideContainer.classList.add('animated');
        }, 600);
      }
      let videos = slideWrapper.querySelectorAll('video');
      for(let video of videos){
        video.pause();
      }
     
     
      // 슬라이드 배열의 유효한 인덱스인지 확인
      if (currentIdx >= 0 && currentIdx < slides.length) {
        const currentSlide = slides[currentIdx];
        const videoElement = currentSlide ? currentSlide.querySelector('video') : null;
    
        // videoElement가 존재하는지 확인
        if (videoElement) {    
          videoElement.play();
        }
      }
    
    }
    showSlide(0);
    
    
    function setSlide() {
      let ulMoveAmt = `${-slideCount * slideWidth}px`;
    
    
      slideContainer.style.transform = `translateX(${ulMoveAmt})`;
      slideContainer.classList.add('animated');
    }
    setSlide();
    
    
    
    
    nextBtn.addEventListener('click', () => {
      showSlide(currentIdx + 1);
    
    
    })
    prevBtn.addEventListener('click', () => {
      showSlide(currentIdx - 1);
    })
  
  }  
}
