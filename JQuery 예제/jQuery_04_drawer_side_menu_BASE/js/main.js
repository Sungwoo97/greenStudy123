$(function(){

  const aside = $('.page-main > aside');
  const asideBtn = aside.find('button');
  
  asideBtn.click(function(){
    aside.toggleClass('open');
    if(aside.hasClass('open')){
      aside.animate({ left : '-70px' }, 300 ,'easeOutBack' );
      asideBtn.find('img').attr('src', 'img/btn_close.png');
    }else{
      aside.animate({ left : '-350px' }, 300, 'easeInBack');
      asideBtn.find('img').attr('src', 'img/btn_open.png');
    }
  });
});