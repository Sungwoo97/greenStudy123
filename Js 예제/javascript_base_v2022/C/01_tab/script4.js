/*
대상.getAttribute('속성명') 속성명의 값을 반환
let a = b.getAttribute('c'); b 요소의 c라는 속성의 값을 a에 할당
let target = a.getAttribute('href');
*/

let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');

/*
대상.forEach(function(원소, 인덱스, 전체){ 반복할 일 });
대상.forEach((item, idx, all) => { 반복할 일 });
*/
for(let tm of tabMenu){
  tm.addEventListener('click', function (e) {
    e.preventDefault();     // 링크의 기본 기능을 없앰
    for(let tm of tabMenu){
      tm.classList.remove('active');
    }
    tm.classList.add('active');
    for(let tc of tabContent){
      tc.classList.remove('active');
    }
    // tabContent[i].classList.add('active');
    let target = tm.getAttribute('href');
    console.log(target);
    document.querySelector(target).classList.add('active');
  });
}

