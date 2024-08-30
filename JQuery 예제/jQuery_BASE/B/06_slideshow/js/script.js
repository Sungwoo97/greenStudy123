let slideWrapper = $('.slide-wrapper'),
  slideContainer = slideWrapper.find('.slide-container'),
  slides = slideContainer.find('li'),
  slideCount = slides.length,
  prevBtn = slideWrapper.find('#prev'),
  nextBtn = slideWrapper.find('#next'),
  pager = slideWrapper.find('.pager'),
  pagerHTML = '',
  currentIdx = 0;

// 대상.width() 컨텐츠의 너비
// 대상.innerwidth() 패딩까지의 너비
// 대상.outerwidth() 보더까지의 너비
// 대상.outerwidth(true) 마진까지의 너비

function setLayout(){
  //slideContainer의 너비를 지정
  let maxWidth = slideWrapper.outerWidth() * slideCount ;
  slideContainer.css({width: maxWidth + 'px'});
}
setLayout();

$(window).resize(function(){
  setLayout();
})

/* 
javascript forEach
대상.forEach((item,idx,all) =>{
});

jquery Each
대상.each(fucntion(idx){
});
*/

slides.each(function(idx){
  pagerHTML += `<a href="">${idx}</a>`;
});
pager.html(pagerHTML);
let pagerBtn = pager.find('a');


//슬라이드 이동함수
function moveSlide(num){
  num = (num + slideCount) % slideCount;
  slideContainer.animate({left : -num * 100 + '%' });
  currentIdx = num;
  slides.removeClass('active');
  slides.eq(num).addClass('active');
  pagerBtn.removeClass('active');
  pagerBtn.eq(num).addClass('active');
}
moveSlide(0);
nextBtn.click(function(e){
  e.preventDefault();
  moveSlide(currentIdx + 1);
});
prevBtn.click(function(e){
  e.preventDefault();
  moveSlide(currentIdx - 1);
});
pagerBtn.click(function(e){
  e.preventDefault();
  let target= $(this).index();
  moveSlide(target);
})