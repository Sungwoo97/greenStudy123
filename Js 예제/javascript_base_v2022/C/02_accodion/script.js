const panel_question = document.querySelectorAll('.panel-question');
const collapseBtn = document.querySelector('#btn-collapse');

/*

panel_question를 클릭하면 할일
  모든 panel_question에서 active를 제거한다.
  for 반복문으로
*/

// for(let i = 0; i<panel_question.length; i++){
//   panel_question[i].addEventListener('click', ()=>{
//     console.log(panel_question);
//     for(let i = 0; i< panel_question.length; i++){
//       panel_question[i].classList.remove('active');
//     }

//   });
// }
/*
panel_question.forEach(item =>{
  item.addEventListener('click', ()=>{
    for(let i = 0; i< panel_question.length; i++){
        item.classList.remove('active');
      }
  });
}); */
//e.target 제일 작은 요소를 선택한다
//for of 변수명 pq
for(let pq of panel_question){
  pq.addEventListener('click', (e)=>{
    pq.classList.toggle('active');
    let clickedQuestion = e.currentTarget;
    panel_question.forEach(item=>{
      console.log(item, clickedQuestion, pq);
      if(item !== pq){
        item.classList.remove('active');
      }
    })

    // for(let item of panel_question){
    //   item.classList.remove('active');
    // }
    //   pq.classList.add('active');
  });
}

//collapseBtn를 클릭하면 모두 접는다


  collapseBtn.addEventListener('click', ()=>{
    for(let item of panel_question){
      item.classList.remove('active');
    }
  })
