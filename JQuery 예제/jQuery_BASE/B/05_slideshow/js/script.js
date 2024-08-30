let slides = $('.slide-container li');
let slidesCount = slides.length;
let currentIdx = 0;
let nextBtn = $('#next');
let prevBtn = $('#prev');
/* 
대상.show() // 대상 display block
대상.hide() // 대상 display none

대상.fadeIn() // display block -> display none, opacity 0->1 로 부드럽게 나타남
대상.fadeOut() // display none -> display block, opacity 0->1 로 부드럽게 나타남
*/
slides.eq(currentIdx).fadeIn(500);
/* 
nextBtn.click(function(e){
  e.preventDefault();
  slides.eq(currentIdx).fadeOut();
  let nextIdx = (currentIdx + 1)%slidesCount;
  slides.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
})
prevBtn.click(function(e){
  e.preventDefault();
  slides.eq(currentIdx).fadeOut();
  
  slides.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
})*/

$('.controls').click(function(e){
  if($(this).attr('id') === 'prev'){
    showSlide(currentIdx - 1);
  }else{
    showSlide(currentIdx + 1);
  }
  e.preventDefault();
  
});

let pagerHTML = ''; //<a href="" data-num="0">0</a>
for(let i = 0; i < slidesCount; i++){
  pagerHTML += `<a href="">${i}</a>`;
}
$('.pager').html(pagerHTML);
let pagerBtn = $('.pager a');

pagerBtn.click(function(e){
  e.preventDefault();
  showSlide($(this).index());

});

function showSlide(num){
/*  if(num < 0){
    num = slidesCount-1;
  }
  if(num > slidesCount - 1){
    num = 0;
  }*/

  num = (num + slidesCount) % slidesCount;
  slides.fadeOut().eq(num).fadeIn();
  currentIdx = num;
  pagerBtn.removeClass('active');
  pagerBtn.eq(num).addClass('active');
}
showSlide(0);
/* 
대상.html() // 대상의 html 태그를 반환
대상.html(tag) // 대상의 html 태그를 생성(교체)

대상.text() // 대상의 text를 반환
대상.text(tag) // 대상의 tag 글씨를 생성(교체)
*/