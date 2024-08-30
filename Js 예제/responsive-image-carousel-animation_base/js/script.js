const slider = document.querySelector('.slider');


//문서의 클릭 이벤트가 일어났을 때
//클릭 이벤트가 일어난 요소가 next와 일치하면
document.addEventListener('click', (e)=>{
  const items = slider.querySelectorAll('li');
  /*
  if(e.target.matches('.next')){  
    slider.append(items[0]);
  }
  if(e.target.matches('.prev')){  
    slider.prepend(items[items.length - 1]);
  }*/
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length-1]);
});