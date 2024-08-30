/*
아이디
document.getElementById('아이디명');
태그명
document.getElementsByTagName('태그명'); //html collection, 유사배열
클래스명
document.getElementsByClassName('클래스명'); // html collection, 유사배열
css 선택자
document.querySelector('선택자');

document.querySelectorAll('선택자');

스타일 변경
대상.style.css속성명 = 값;
대상.style.color = 'blue';
text-Decoration -> textDecoration
font-size - > fontSize
*/
let title = document.getElementById('title'); // 아이디명
console.log(title);
title.style.color = 'blue';

let sec_tt = document.getElementsByTagName('h2'); // 태그명
console.log(sec_tt);
// 배열 [숫자]
for(let i = 0; i<sec_tt.length; i++){
  sec_tt[i].style.color = 'blue';
}

let list = document.getElementsByClassName("list");   //클래스명
console.log(list);
list[1].style.background = 'silver';

let target = document.querySelector('#list3 .red'); //선택자
console.log(target);
target.style.color = 'red';

let mybox = document.querySelector('#box div div');
mybox.style.background = 'silver';

let myPara = document.querySelectorAll('article p')
console.log(myPara);
// for(let i = 0; i<myPara.length; i++){
//   myPara[i].style.color = 'blue';
// }
for(item of myPara){
  item.style.color = 'blue';
  item.style.fontSize = '14px';
  item.style.backgroundColor = '#ebebeb';
}