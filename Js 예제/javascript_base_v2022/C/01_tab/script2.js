let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');

/*
대상.forEach(function(원소, 인덱스, 전체){ 반복할 일 });
대상.forEach((item, idx, all) => { 반복할 일 });
*/

tabMenu.forEach((item, i) => { 
  item.addEventListener('click', function (e) {
    e.preventDefault();     // 링크의 기본 기능을 없앰
    tabMenu.forEach(item => { 
      item.classList.remove('active');
    });
    
    item.classList.add('active');  
    tabContent.forEach(item => { 
      item.classList.remove('active');
    });
    tabContent[i].classList.add('active');
  });
});