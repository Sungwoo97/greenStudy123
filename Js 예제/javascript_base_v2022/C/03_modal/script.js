const images = document.querySelectorAll('.gallery img');
const lightbox_overlay = document.querySelector('#lightbox-overlay');
const lightbox_image = document.querySelector('#lightbox-image');

/*
대상.getAttribute('속성명');
let c = a.getAttribute('b'); // a의 속성명 b의 값을 c에 할당

대상.setAttribute('속성명', 새값);
a.setAttribute('b', 'c'); // a의 속성명 b 값을 c로 변경
*/
// images.forEach(function (item, idx, all){ })
images.forEach( item => {
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    let largeImg = item.getAttribute('data-lightbox');
    lightbox_image.setAttribute('src', largeImg);
    lightbox_overlay.classList.add('visible');
  });
});
lightbox_overlay.addEventListener('click', ()=>{
  lightbox_overlay.classList.remove('visible');
});