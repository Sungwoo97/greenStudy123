let target = $('.animate__animated');

//  윈도우 스크롤이 생기면 할 일
$(window).scroll(function(){
  let $this = $(this);
  let sct = $this.scrollTop();
  target.each(function(){
    if($(this).offset().top - 400 <= sct){
      let effectName = $(this).attr('data-effect');
      $(this).addClass(effectName);
    }
  });
});
