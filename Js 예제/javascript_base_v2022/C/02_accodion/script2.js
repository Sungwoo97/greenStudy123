/*
대샹.parentNode
대상의 부모

자식요소 찾기
대상.children // 모든 자식요소를 배열로 출력
*/


let panel_question = document.querySelectorAll('.panel-heading');

for(let pq of panel_question){
  pq.addEventListener('click', (e)=>{
    let parent = pq.parentNode;
    let grandParent = parent.parentNode;
    let parentSiblings = [...grandParent.children]; // htmlCollection -< array
    console.log(parentSiblings);
    parent.classList.toggle('active');

    parentSiblings.forEach(item=>{

      if(parent !== item){
        item.classList.remove('active');
      }
    })
  });
}

