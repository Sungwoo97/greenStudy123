const links = document.querySelectorAll('.mynav a');
const target = document.querySelector('.target');
const colors= ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];


for(let link of links){
  link.addEventListener('mouseover', ()=>{
    if(!link.classList.contains('active')){

      let color = colors[Math.floor(Math.random()*colors.length)];
      console.log(color);
      for(let item of links){
        item.classList.remove('active');
      }
      link.classList.add('active');

      target.style.width = `${link.getBoundingClientRect().width}px`;
      target.style.left =`${link.getBoundingClientRect().left}px`;
      target.style.top =`${link.getBoundingClientRect().top}px`;
      target.style.borderColor = color;
    }

  })
}