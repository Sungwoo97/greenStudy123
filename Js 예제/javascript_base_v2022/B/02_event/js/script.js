/*
변수명 myBtn에 아이디 submit을 할당
*/

// let myBtn = document.getElementById('submit');
let myBtn = document.querySelector('#submit');
console.log(myBtn);

/*
addEventLisetner
대상.addEventListener('이벤트종류','할일');
이벤트 종류
 - 마우스 click, mouseover(지속적), mouseout, mouseenter(단발성), mouseleave, mousemove
 - 폼 change(입력창, 체크박스, 라디오버튼, 셀렉트) . focus, blur
 - 윈도우 resize, scroll, load, unload
*/
//클릭했을 때
myBtn.addEventListener('click', function(){
  alert('클릭');
})

let cp = document.querySelector('.container p');
console.log(cp);
//마우스가 올라왔을 때
cp.addEventListener('mouseenter',function(){
  cp.style.background = 'silver';
  console.log('실행');
});
//마우스가 내려왔을 때
cp.addEventListener('mouseleave',function(){
  cp.style.background = '';
});
//포커스가 왔을 때
let myInput = document.querySelector('input');
myInput.addEventListener('focus', function(){
  console.log(myInput);
  myInput.style.background = 'blue';
  myInput.style.color = 'white';
});
// 포커스를 지울 때
myInput.addEventListener('blur', function(){
  myInput.style.background = 'white';
  myInput.style.color = 'black  ';
});

let myLink = document.querySelectorAll('p a');
console.log(myLink);

//마우스가 올라왔을 때
// for(let i = 0; i<myLink.length; i++){
// myLink[i].addEventListener('mouseover', function(){
//     myLink[i].style.background = 'blue';
//     myLink[i].style.color = 'white';
//   });

// // 마우스가 내려왔을 때
// // for(let i = 0; i<myLink.length; i++){
//   myLink[i].addEventListener('mouseleave', function(){
//       myLink[i].style.background = 'white';
//       myLink[i].style.color = 'blue';
//   });
// }
//forEach문  
// myLink.forEach(function(item, idx, all){
//   console.log(item,idx,all);
//   item.addEventListener('mouseover', function(){
//     item.style.background = 'blue';
//     item.style.color = 'white';
//   });
//   item.addEventListener('mouseleave', function(){
//     item.style.background = 'white';
//     item.style.color = 'blue';
//   });
// });
//for of 문
for(let item of myLink){
  console.log(item);
  item.addEventListener('mouseover', function(){
    this.style.background = 'blue';
    this.style.color = 'white';
  });
  item.addEventListener('mouseout', function(){
    this.style.background = 'white';
    this.style.color = 'blue';
  });
}

let title = document.querySelectorAll('div h2, section h2');
console.log(title);

let myColor = document.querySelector('#color');
myColor.addEventListener('change', function(){
  let pickedColor = this.value;
  console.log(pickedColor);
  cp.style.background = pickedColor;
});
/*
대상 클래스명 추가, 제거
대상.classList.add('클래스명');
대상.classList.remove('클래스명');
*/

let btt = document.querySelector('.btt');
window.addEventListener('scroll', function(){
  let scrAmt = this.scrollY;
  console.log(scrAmt);
  if(scrAmt > 300){
    btt.classList.add('active');
  }else{ 
    btt.classList.remove('active');
  }
});