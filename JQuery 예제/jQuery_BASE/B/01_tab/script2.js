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
/*
li .active
$('li').find('.active') a 요소의 자식 요소를 선택

li.active
$('li').fliter('.active') a 요소 중의 b를 선택
li:last-child
$('li').fliter(':last-child')

자식요소 선택 
find, children

부모요소 선택
a.parent() a의 바로 위 부모

형제요소 선택
a.siblings() a 의 모든 형제 
a.prev() a의 이전 요소
a.next() a의 다음 요소

인덱스 번호 확인
a.index() a의 인덱스 확인
*주의사항 형제가 있어야 인덱스 번호가 나온다

인덱스 번호로 요소 선택 (equivalent, 동등)
a.eq(0) 0번째를 선택
*/


// 두번째 방법 (인덱스 번호를 이용하는 방법)
const tabMenu = $('.tab-menu a');
const tabContent = $('#tab-content > div');

tabMenu.click(function(e){
  e.preventDefault();
  console.log($(this).index());
  tabMenu.find('a').removeClass('active');
  $(this).children('a').addClass('active');
  tabContent.removeClass('active');
  tabContent.eq($(this).index()).addClass('active');

});