const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItem = imageList.querySelectorAll('li');
const rangeInput = document.querySelector('input[type="range"]');
const searchInput = document.querySelector('input[type="search"]');
const zoom = document.querySelector('.zoom');
const captions = imageList.querySelectorAll('figcaption p:first-child');
const count = document.querySelector('.counter span');
// 클래스 이름 변수
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dnone = 'd-none';



rangeInput.addEventListener('input', (e)=>{
  let userValue = e.target.value;
  document.documentElement.style.setProperty('--minRangeValue', `${userValue}px`);
});

for(let btn of btns){
  btn.addEventListener('click', ()=>{
    const parent = btn.parentNode; 
    document.querySelector('.view-options .active').classList.remove(active);
    parent.classList.add(active);
    console.log(btn.parentNode.classList.contains('show-list'));
    if(parent.classList.contains('show-list')){
      imageList.classList.remove(gridView);
      imageList.classList.add(listView);
      zoom.classList.add(dnone);
    }
    else{
      imageList.classList.remove(listView);
      imageList.classList.add(gridView);
      zoom.classList.remove(dnone);
    }
  });
}

const captionsArr = [];
let counter = 0;
for(let caption of captions){
  captionsArr.push({
    id:counter++,
    text:caption.textContent
  });
}

//검색 함수
searchInput.addEventListener('input', (e)=>{
  let keywords = e.target.value;
  for(let img of imageListItem){
    img.classList.add(dnone);
  }
  // search.value와 같은 arr값을 저장
  let filteredArr = captionsArr.filter(caption => caption.text.includes(keywords));
  for(let item of filteredArr){
    imageListItem[item.id].classList.remove(dnone);
  }

  count.innerText = filteredArr.length;
})