$(function(){
  $('.basic .slider').slick();

  $('.control-slide .control').slick();

  
  $('.control-slide2 .control2').slick({
    //arrows:false,
    prevArrow:'.control-slide2 .prev',
    nextArrow:'.control-slide2 .next'
  });
  let control3 = $('.control-slide3 .control3').slick({
    arrows: false
  });
  $('.control-slide3 .prev').click(function(){
    control3.slick('slickPrev');
  });
  $('.control-slide3 .next').click(function(){
    control3.slick('slickNext');
  });
  
  $('.multiple-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $('.active-slider').slick();
  
  let optionSlide= $('.option-slider').slick();
  
  $('.option p span').click(function(){
    let idx = $(this).index();
    optionSlide.slick('slickGoTo', idx);
  });
  
  $('.auto-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000
  });
  
  $('.multiple-slider2').slick({

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

});
