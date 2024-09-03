const productList = document.querySelector('.product_list');
const items = productList.querySelectorAll('.item');
const filterBtns = document.querySelectorAll('.filters button');
const sortBtns = document.querySelectorAll('.sorts button');
const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

//필터링
/* 
filterBtns를 클릭하면 할 일
  모든 item을 안보이도록하고
  클릭한 그 버튼의 data-filter의 값에 해당하는 요소들을 선택하여 보이도록
*/

for(let filters of filterBtns){
  filters.addEventListener('click', (e)=>{
   let targetClass = filters.getAttribute('data-filter')
   doFilter(targetClass);
  });
}

filterSelect.addEventListener('change', (e)=>{
  let targetClass = filterSelect.value;
    doFilter(targetClass);
  });

  sortSelect.addEventListener('change', (e)=>{
    let itemsArr = [...items];
    let targetList = itemsArr.filter(item=> {
      if(!item.getAttribute('style') || item.style.display === 'block'){
        return item;
      }
    });
    let direction = sortSelect.value;
    doSort(targetList, direction);
    });
  

sortBtns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    let itemsArr = [...items];
    let targetList = itemsArr.filter(item=> {
      if(!item.getAttribute('style') || item.style.display === 'block'){
        return item;
      }
    });
    let direction = btn.getAttribute('data-sort');
    doSort(targetList, direction);
  });
});


function doFilter(targetClass){

  productList.innerHTML = ''; //기존 리스트 비우기
  //원본 리스트를 재 생성
  for(let item of items){
    productList.appendChild(item);
  }
  for(let item of items){
    item.style.display = 'none';
  }
  let get = productList.querySelectorAll(targetClass);
  if(targetClass === '*'){
    for(let item of items){
      item.style.display = 'block';
    }
  }else{
    for(let item of get){
      item.style.display = 'block';
    }
  }
}

function doSort(arr, direction){
  if(direction === 'asc'){
    arr.sort(function (a, b) { // 내림 차순
      return a.getAttribute('data-order') - b.getAttribute('data-order');
    });
  }
  if(direction === 'desc'){
    arr.sort(function (a, b) { // 내림 차순
      return b.getAttribute('data-order') - a.getAttribute('data-order');
    });
  }
  if(direction === 'random'){
    arr.sort(function (){
      return Math.random() - 0.5;
    });
  }
  productList.innerHTML = ''; //기존 리스트 비우기
  for(let item of arr){
    productList.appendChild(item);
  }
}

