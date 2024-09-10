// init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%" // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  
  //메뉴 클릭 시 이동
  const menu = $('.slidemenu li');
  const section = $('.panel');
  const sectionOstArr = [];
  let currentPos = 0;
  
  section.each(function(){
    sectionOstArr.push($(this).offset().top);
  });
  console.log(sectionOstArr);
  

  menu.click(function(e){
    e.preventDefault();
    let idx = $(this).index();
    $('html,body').animate({scrollTop:sectionOstArr[idx]},800,'easeInOutCubic');
  })
  
  //휠 이벤트시 이동
  let excuted = false;
  $('#section-wipes').mousewheel(function(event) {
    if(!excuted){
      excuted = true;
      if(event.deltaY === -1 && currentPos < sectionOstArr.length - 1){
        // 휠을 아래로
        $('html,body').stop().animate({scrollTop:sectionOstArr[currentPos + 1]}, 800,'easeInOutCubic');
      }else if(event.deltaY === 1 && currentPos > 0){
        //휠을 위로
        $('html,body').stop().animate({scrollTop:sectionOstArr[currentPos - 1]}, 800,'easeInOutCubic');
      }
      setTimeout(()=>{
        excuted = false;
      }, 500);
    }
  });

//윈도우 스크롤 시
$(window).scroll(function(){
  let currentSCT = $(this).scrollTop();
  
  sectionOstArr.forEach((item,idx)=>{
    if(item <= currentSCT){
      currentPos = idx;
    }
  });
});
