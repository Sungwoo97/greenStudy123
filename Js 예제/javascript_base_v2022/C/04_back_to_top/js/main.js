document.addEventListener('DOMContentLoaded', ()=>{
  const goTop = document.querySelector('#go-top');

  window.addEventListener('scroll', ()=>{
    let scrollAmt = window.scrollY;
    console.log(scrollAmt);
    if(scrollAmt > 300){
      goTop.classList.add('active');
    }else{
      goTop.classList.remove('active');
    }
  })
  goTop.addEventListener('click', (e)=>{
    e.preventDefault();
    // window.scrollTo(0,100);
    //  window.scrollBy(0,-100);
     window.scrollTo({
    left: 0,
    top: 0,
    behavior:'smooth'});
  })
})


