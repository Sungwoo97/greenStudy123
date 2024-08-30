const progress = $('.progress');
const progressBar = progress.find('.bar');
const progressSpan = progress.find('span');
let initNum = 0;
// const targetNum = Number(progress.attr('data-rate'));

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


