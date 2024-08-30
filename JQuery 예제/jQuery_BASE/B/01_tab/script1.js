/* 
클래스명 추가
  대상.addClass('클래스명');
제거
  대상.removeClass('클래스명');
있으면 추가, 없으면 제거
  대상.toggleClass('클래스명');
있는지 여부
  대상.hasClass('클래스명');
*/
/*
속성값 확인 
  let c = a.attr('b');
속성값 변경
  a.attr('b', 'c');

*/ 

// 첫번째 방법  (this로 attr의 가져와 사용하는 방법)
const tabMenu = $('.tab-menu a');
const tabContent = $('#tab-content > div');

tabMenu.click(function(e){
  e.preventDefault();
  tabMenu.removeClass('active');
  $(e.target).addClass('active');
  tabContent.removeClass('active');
  let target = $(this).attr('href');
  $(target).addClass('active');
});