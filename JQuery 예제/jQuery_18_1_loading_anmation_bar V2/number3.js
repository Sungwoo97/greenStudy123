const progress = $('.progress');
const main = $('main');
const mainOST = main.offset().top - 300;
console.log(mainOST);

$(window).scroll(function(){
  if($(this).scrollTop() > mainOST){
    if(!main.hasClass('active')){
      main.addClass('active');
      progress.each(function(){
        let targetNum = Number($(this).attr('data-rate'));
        let $this = $(this);    // 변수 안에 담으면 아래의 함수에서도 사용할 수 있다
        $this.find('.bar').animate({width : targetNum + '%'},2000);
      
        $({initNum:0}).animate({initNum:targetNum}, {
          duration: 2000,
          progress:function(){
            let now = Math.floor(this.initNum);
            $this.find('span').text(now);
          }
        });
      })
    }
    
  }
  else{
    main.removeClass('active');
    progress.find('.bar').css({ width:0});
  }
})
