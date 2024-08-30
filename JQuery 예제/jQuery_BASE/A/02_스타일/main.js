$(function(){
  // $(선택자).css('속성명', '값'); 한번에 하나의 속성을 변경
  // $(선택자).css({속성명 : 값, 속성명 : 값, 속성명 : 값}); 한번에 여러 속성을 변경
  $('h1').css('color','blue');
  $('.list').css('background','silver');
  $('#box div div').css('background', 'silver');
  /* $('h2').css('opacity', '.5');
  $('h2').css('transform', 'rotate(20deg)');
  $('h2').css('transform-origin', '0 0'); */
  $('h2').css({
    opacity: '.5', 
    transform: 'rotate(20deg)', 
    transformOrigin: '0 0'
  });
  const myP = $('p');
  /* myP.css('font-size', '1.5em');
  myP.css('font-style', 'italic'); */
  myP.css({
    fontSize : '1.5em', 
    fontStyle : 'italic'
  });
})