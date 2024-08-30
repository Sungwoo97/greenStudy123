const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('.slidecontainer');
const slides = slideWrapper.querySelectorAll('.slide');
const pager = slideWrapper.querySelector('.pager');
const slideCount = slides.length;
let currentIdx = 0;
let timer;

//pager 생성
let pagerHTML = '';
/*for(let i = 0; i < slideCount; i++){
  pagerHTML+= `<a href="">${i}</a>`;
}*/
slides.forEach((item, idx) =>{
  pagerHTML += `<a href="">${idx}</a>`;
  item.style.top = `${idx*100}%`;
})
pager.innerHTML = pagerHTML;
const pagerBtn = pager.querySelectorAll('a');

pagerBtn.forEach((pager,idx)=>{
  pager.addEventListener('click', (e)=>{
    e.preventDefault();
    showSlide(idx);
  });
});

showSlide(0);
//슬라이드 함수
function showSlide(num){
  if(currentIdx === num) return;
  let currentSlide = slides[currentIdx];
  let nextSlide = slides[num];
  currentSlide.animate(
    [
      {
        // from
        top: '0%'
        
      },
      {
        // to
        top: '-100%'
      },
    ],
    {duration:500, fill:"forwards"}
  );
  nextSlide.animate([{
    top: '100%'
    },
    {
      top: '0%'
    }],
    {duration:500, fill:"forwards"}
  );
  currentIdx = num;
  updatePager();
}
function updatePager(){
  for(let pager of pagerBtn){
    pager.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');
}
updatePager();

function autoSlide(){
  /*
  3초마다 다음 슬라이드 보이도록 
  let nextIdx = ???;
  showSlide(nextIdx);
  */
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1) % slideCount;
    showSlide(nextIdx);
    console.log(nextIdx);
  },3000);
  
  
}
autoSlide();
//마우스가 슬라이드 위로 올라오면 
slideWrapper.addEventListener('mouseenter', ()=>{
  clearInterval(timer);
});
//마우스가 슬라이드 위에서 떠나면
slideWrapper.addEventListener('mouseleave', ()=>{
  autoSlide();
});