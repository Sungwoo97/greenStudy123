const box = $('#box');
const boxOST = box.offset().top - 300;

$(window).scroll(()=>{
  if(boxOST > $(this).scrollTop()){
    box.addClass('animate__animated animate__fadeInLeft');
  }
})