const progress = $('.progress');
const progressBar = progress.find('.bar');
const progressSpan = progress.find('span');
let initNum = 0;
const targetNum = Number(progress.attr('data-rate'));

var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
progressSpan.animateNumber(
  {
    number: targetNum,
    numberStep: percent_number_step
  },
  {
    easing: 'swing',
    duration: 2000
  }
);
progressBar.animate({width : targetNum + '%'}, 2000);

