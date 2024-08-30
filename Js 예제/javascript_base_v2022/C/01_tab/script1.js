/*
대상.classList.add('클래스명'); // 추가
대상.classList.remove('클래스명'); // 제거
대상.classList.contains('클래스명'); // 있으면 true, 없으면 false, 조건문
대상.classList.toggle('클래스명'); // 클래스명이 있으면 제거, 없으면 추가
*/
// let title = document.getElementsByTagName('h1');
let title = document.querySelector('h1');
let toggleBtn = document.querySelector('#toggle');
console.log(title);
title.classList.add('active');
title.classList.remove('title');



toggleBtn.addEventListener('click', () => {
  title.classList.toggle('logo');
  if(title.classList.contains('logo')){
    console.log('logo 클래스명이 있다');
  }else{
    console.log('logo 클래스명이 없다');
  }
});
/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/
let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');
/*
tabMenu를 클릭하면 할일
  모든 tabMenu에서 active를 제거한다
*/
console.log(tabMenu);
  for(let i = 0; i<tabMenu.length; i++){
    tabMenu[i].addEventListener('click', function (e) {
      e.preventDefault();     // 링크의 기본 기능을 없앰
      for(let i = 0; i<tabMenu.length; i++){  
        //모든 요소의 active를 지움  
        tabMenu[i].classList.remove('active');
      }
      //클릭한 그 요소에 active 추가
      tabMenu[i].classList.add('active');  
      //모든 tab-content에서 모든 active를 제거
      for(let i = 0; i<tabContent.length; i++){
        tabContent[i].classList.remove('active');
      }
      tabContent[i].classList.add('active');
    });
  }


  // tabMenu.forEach(function(item){
  //   item.addEventListener('click', function () {
  //   console.log(item);
  //   item.classList.remove('active');
  //   });
  // });


// for (item of tabMenu)
//   console.log(item);
//   tabMenu[item].addEventListener('click', function() {
//   item.classList.remove('active');
// });