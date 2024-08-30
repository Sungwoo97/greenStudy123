/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
const $window = $(window);
const header = $('#main-header');
const logo = $('#logo');
const smLogo = 'images/logo-shrink.svg';
const bigLogo = 'images/logo.svg';
let imgOn = false;
/* 
윈도우에 스크롤이 생기면
*/
$window.scroll(function(){
  if($(this).scrollTop() > 0){
    //logo.attr('src', smLogo);
    if(!header.hasClass('active')){
      header.addClass('active');
      changeLogo(smLogo);
    }
  }else{
    header.removeClass('active');
    //logo.attr('src', bigLogo);
    
    changeLogo(bigLogo);
  }
});

function changeLogo(url){
    logo.fadeOut(500, function(){
      logo.attr('src', url);
      logo.fadeIn();
    });
}