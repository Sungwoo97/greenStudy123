$(function(){
  /* Event 문법 대상.on('이벤트 종류', 할일); 
  */
  /* $('h1').on('mouseover',()=>{
    $('h1').css({
      color: 'blue'
    });
  }).
  $('h1').on('mouseout',()=>{
    $('h1').css({
      color: 'black'
    });
  }); 
  //메서드 체인
  $('h1').on('mouseover',()=>{
    $('h1').css({
      color: 'blue'
    });
  }).on('mouseout',()=>{
    $('h1').css({
      color: 'black'
    });
  }).css({fontSize:'3em'}); 
  //this
  $('h1').mouseover(function(){
    $(this).css({color: 'blue'});
  });
  $('h1').mouseout(function(){
    $(this).css({color: 'black'});
  }); */
  // 대상.hover(할일, 할일);
  $('h1').hover(
    function(){
      $(this).css({color: 'blue'});
    },
    function(){
      $(this).css({color: 'black'});
    }
  );
  $('h2, h3').hover(
    function(){
      $(this).css({background: 'silver'});
    },
    function(){
      $(this).css({background: ''});
    }
  );
  $('button').click(
    (e)=>{
      console.log(e.target, $(e.target), $('button'));
      $(e.target).css({background: 'black', color: 'white'});
    }
  );
  
/* const selectMenu = document.querySelector('#color');
const target = document.querySelector('#target'); 

selectMenu.addEventListener('change',(e)=>{
  let selectedValue = e.target.value;
  target.style.background = selectedValue;
}); */
const selectMenu = $('#color');
const target = $('#target');

selectMenu.change((e)=>{
  let selectedValue = $(e.target).val();
  target.css({background: selectedValue});
});


});