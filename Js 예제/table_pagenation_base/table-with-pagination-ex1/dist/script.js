const rowsPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');

 
// pager를 출력(생성) 

let numbersHTML = '';
for(let i = 1; i <= pageCount; i++){
  numbersHTML += `<li><a href="">${i}</a></li>`;
}
numbers.innerHTML = numbersHTML;

const numberBtn = numbers.querySelectorAll('a');


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
  })
})
