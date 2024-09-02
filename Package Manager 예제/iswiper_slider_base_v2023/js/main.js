const swiper = new Swiper('.basic', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.control .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.control .mynext',
    prevEl: '.control .myprev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper3 = new Swiper('.pagination .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination .swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.pagination .mynext',
    prevEl: '.pagination .myprev',
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper4 = new Swiper('.options', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:'cube' ,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('#startAutoSlide').click(function(){
  console.log('start click');
  swiper4.autoplay.start();
})
$('#stopAutoSlide').click(function(){
  console.log('stop click');
  swiper4.autoplay.pause();
})


const swiper5 = new Swiper(".centered", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper6 = new Swiper('.activeSlide', {
  // Optional parameters
  direction: 'horizontal',
  //loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  //마지막에 도달하면 경고창
});
  swiper6.on('slideChange', () => {
    if(swiper6.isEnd){
      alert('last Slide');
    }
  });
  
  const swiper7 = new Swiper(".responsive", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
  
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });