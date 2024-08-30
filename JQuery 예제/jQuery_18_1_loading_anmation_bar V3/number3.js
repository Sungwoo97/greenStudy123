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
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
        $(this).find('span').animateNumber(
          {
            number: targetNum,
            numberStep: percent_number_step
          },
          {
            easing: 'swing',
            duration: 2000
          }
        );
        $(this).find('.bar').animate({width : targetNum + '%'}, 2000);
      });
    }
  }
})
