$(function(){

  
  /* ---------- 기본 사용 ---------- */
  
  $(".basic .slider").bxSlider();

	/* ---------- 좌우 컨트롤 ---------- */

  $(".control .slider").bxSlider({
    //controls:false
    // nextText: '다음',
    // prevText: '이전'
    prevSelector: $('.control .prev'),
    nextSelector: $('.control .next')
  });

	/* ---------- 멀티플 슬라이드 ---------- */

  $(".multiple .slider").bxSlider({
    pager:false,
    minSlides:2,
    maxSlides:3,
    slideWidth:320,
    slideMargin:20,
    moveSlides:1
  });

	/* ---------- 현재 슬라이드 구분하기 ---------- */

  $('.activeSlide .slider').bxSlider({
    pager:false

  });


	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */

  $('.option .slider').bxSlider({
    pager:false,
    auto:true,
    autoHover:true,
    pause:5000,
    speed:800,
    onSliderLoad:function(currentIndex){
      $('.option .slide').eq(currentIndex+1).addClass('active');
    },
    onSlideAfter:function($slideElement){
      $('.option .slide').removeClass('active');
      $slideElement.addClass('active');
    }
  });

	/* ---------- 함수 활용 ---------- */
  let methodSlider = $('.methods .slider').bxSlider({
    pager:false,
    controls:false
  });
  $('#prev').click(function(){
    methodSlider.goToPrevSlide();
  })
  $('#next').click(function(){
    methodSlider.goToNextSlide();
  })
  $('.pager button').click(function(){
    methodSlider.goToSlide($(this).index());
  })
  

	/* ---------- 동영상 제어하기 ---------- */
    $('.video .slider').bxSlider({
      pager:false,
      onSlideAfter:function($slideElement){
        $('.video .slide').each(function(){
          if($(this).find('video').length > 0){
            $(this).find('video').get(0).pause();
            $(this).find('video').get(0).currentTime = 0;
          }
        });
        if($slideElement.find('video').length > 0 ){
          $slideElement.find('video').get(0).play();
        }
      }
    }
    
  );
  $( ".tabsslider" ).bxSlider();

  $( "#tabs" ).tabs();

});//document ready jquery 