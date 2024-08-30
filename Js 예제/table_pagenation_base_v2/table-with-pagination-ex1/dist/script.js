const rowsPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');
const maxPageNum = 3;
let pageActiveIdx = 0;
const prevBtn = document.querySelector('.fa-arrow-left');
const nextBtn = document.querySelector('.fa-arrow-right');

 
// pager를 출력(생성) 

let numbersHTML = '';
for(let i = 1; i <= pageCount; i++){
  numbersHTML += `<li><a href="">${i}</a></li>`;
}
numbers.innerHTML = numbersHTML;

const numberBtn = numbers.querySelectorAll('a');
const pageGroupCount = Math.ceil(pageCount / maxPageNum);
console.log(pageCount);

function displayRow(num){
  //모든 tr을 보이지 않도록 한다.
  for(let row of rows){
    row.style.display = 'none';
  }
  /* 
  대상.slice(start, end);
  유사배열(배열이 아닌 것)을 배열로 변경
  Array.from(대상);
  [...대상]
  */
  // num 1 일때 0~9번째 display
  let start = num * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];
  let newRows = rowsArray.slice(start, end);
  console.log(newRows);
  for(let item of newRows){
    item.style.display= '';
  }
}
displayRow(0);
/* 
numberBtn을 클릭하면 할일
  displayRow(idx);
*/
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    displayRow(idx);
    for(let btn of numberBtn){
      btn.classList.remove('active');
    }
    item.classList.add('active');
  })
})

function displayPagination(num){
  for(let number of numberBtn){
    number.style.display = 'none';
  }
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let newNp = [...numberBtn];
  let np = newNp.slice(start, end);
  for(let item of np){
    item.style.display= '';
  }
  for(let number of numberBtn){
    number.classList.remove('active');
  }
  numberBtn[start].classList.add('active');
  displayRow(start);

  pageActiveIdx = num;
  console.log(pageActiveIdx);
  if(pageActiveIdx === 0){
    prevBtn.style.display = 'none';
  }else{
    prevBtn.style.display = 'block';
  }
  if(pageActiveIdx === pageGroupCount -1){
    nextBtn.style.display = 'none';
  }else{
    nextBtn.style.display = 'block';
  }
}
displayPagination(0);

nextBtn.addEventListener('click', ()=>{
  displayPagination(pageActiveIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
  displayPagination(pageActiveIdx - 1);
})