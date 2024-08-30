$(function(){
  const btn = $('#go-top');
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop() > 300){
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  btn.click(function(){
    $('html, body').stop().animate({scrollTop:0}, 500, 'easeOutBounce');    //둘다 넣지 않으면 안되는 브라우저 모델도 있음
  });
});