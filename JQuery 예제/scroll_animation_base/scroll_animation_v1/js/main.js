let target = $('.animation');

// 윈도우에 스크롤이 생기면 할일
$(window).scroll(function(){
  let sct = $(this).scrollTop();
  target.each(function(){
    if(sct >= $(this).offset().top - 400){
      $(this).addClass('active');
    }
  })
})

