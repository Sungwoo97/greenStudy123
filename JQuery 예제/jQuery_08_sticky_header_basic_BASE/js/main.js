$(function () {
  const header = $('.page-header');
  const headerOST = header.offset().top;
  console.log(headerOST);

  $(window).scroll(function(){
    if($(this).scrollTop() > headerOST){
      header.addClass('sticky');
    }else{
      header.removeClass('sticky');
    }
  })
});
