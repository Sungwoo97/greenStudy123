const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');

for(let link of links){
  const img = new Image(); // 빈 img 태그 생성 <img src="">
  img.src= link.dataset.bg; // link.getAttribute('data-bg');
  link.addEventListener('mouseover', ()=>{
    let url = link.getAttribute('data-bg');
    bg.style.backgroundImage = `url('${url}')`;
    bg.classList.add('active');
  });
  link.addEventListener('mouseout', ()=>{
    bg.classList.remove('active');
  });
}