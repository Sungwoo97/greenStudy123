let menu = document.querySelectorAll('#top_menu ul a');
let sections = document.querySelectorAll('#contents > section');
/*
아이디 section2가 화면상단에서 얼마나 떨어져 있는지 변수 section2OST에 담고, 콘솔에 출력
*/



/*
window.scrollTo{
left:0,
top:1110,
behavior: 'smooth'
}
메뉴를 클릭하면 모든 메뉴에서 on을 제거하고, 클릭한 그 메뉴만 on 추가
*/



menu.forEach(item=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    /*for(let m of menu){
      m.classList.remove('on');
    }
    item.classList.add('on');
    */
    let sectionId = item.getAttribute('href');
    let targetOST = document.querySelector(sectionId).offsetTop;
    window.scrollTo({
      left:0,
      top:targetOST,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', ()=>{

  /*
  sections의 각 원소마다 할일 
    각 원소의 화면 상단에서의 거리보다 스크롤양이 많으면 할일
      모든 메뉴에서 on을 제거한다
      그 원소의 인덱스 번호에 해당하는 a 태그에 on 추가
  */
 sections.forEach((item, idx) => {
    if(item.offsetTop <= window.scrollY){
      for(let x of menu){
      x.classList.remove('on');
      }
      menu[idx].classList.add('on');
    }
  });
});