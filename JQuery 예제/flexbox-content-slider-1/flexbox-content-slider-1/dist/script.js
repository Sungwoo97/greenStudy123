const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const slides = $('.slides');
const slide = slides.find('.slide');
// const slideCount = $('.slide').length;
const slideWidth = $('.slide').width();
const positions = [];
let currentPos = 0;

slide.each(function(idx){
  let value = -slideWidth * idx
  positions.push(value);
})
/*for(let i = 0; i < slideCount; i++){
  let value = -slideWidth * i
  positions.push(value);
}*/
console.log(positions);

nextBtn.click(function(){
  if(currentPos < positions.length - 1){
      currentPos++;
  }else {
    currentPos = 0;
  }
  slides.animate({left : positions[currentPos] + 'px'}, 500);
});
prevBtn.click(function(){
  if(currentPos > 0){
      currentPos--;
  }else {
    currentPos = positions.length - 1;
  }
  slides.animate({left : positions[currentPos] + 'px'}, 500);
});