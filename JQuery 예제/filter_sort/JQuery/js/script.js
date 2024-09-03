const productList = $('.product_list');
const items = $('.item');
const filterBtns = $('.filters button');
const sortBtns = $('.sorts button');
const filterSelect = $('#filter');
const sortSelect = $('#sort');

filterBtns.click(function(){
  let targetClass = $(this).attr('data-filter');
  console.log(targetClass);
  doFliter(targetClass);
});

filterSelect.on('change', ()=>{
  let targetClass = filterSelect.val();
  doFliter(targetClass);
  });

sortBtns.click(function(){
  let itemsArr = [...items];
  console.log(itemsArr);
  let targetList = itemsArr.filter(item=> {
    if(!$(item).attr('style') || $(item).attr('style') === 'display:block'){
      return item;
    }
  });
  let direction = $(this).attr('data-sort');
  doSort(targetList, direction);
})

sortSelect.on('change', (e)=>{
  let itemsArr = [...items];
  let targetList = itemsArr.filter(item=> {
    if(!$(item).attr('style') || $(item).attr('style') === 'display:block'){
      return item;
    }
  });
  let direction = sortSelect.val();
  doSort(targetList, direction);
});

function doFliter(targetClass){
  productList.html(''); //기존 리스트 비우기
  //원본 리스트를 재 생성
  productList.html(items);
  //아이템 모두 안보인다
  items.hide();
  
  if(targetClass === '*'){
    items.show();
  }else{
    const targets = productList.find(targetClass);
    targets.show();
  }
}

function doSort(arr, direction){
  if(direction === 'asc'){
    arr.sort(function (a, b) { // 내림 차순
      return $(a).attr('data-order') - $(b).attr('data-order');
    });
  }
  if(direction === 'desc'){
    arr.sort(function (a, b) { // 내림 차순
      return $(b).attr('data-order') - $(a).attr('data-order');
    });
  }
  if(direction === 'random'){
    arr.sort(function (){
      return Math.random() - 0.5;
    });
  }
  productList.html(''); //기존 리스트 비우기
  productList.html(arr); 
}

/* 
const productList = document.querySelector('.product_list');
const items = productList.querySelectorAll('.item');
const filterBtns = document.querySelectorAll('.filters button');
const sortBtns = document.querySelectorAll('.sorts button');
const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

//필터링
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
*/
