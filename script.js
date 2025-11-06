const menuBurger = document.getElementById('menu-burger');
const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
menu.classList.toggle('hidden');
menu.default('hidden');
});



const swiper = new Swiper('.swiper', {
  speed: 800, // 
  spaceBetween: 30, 
  loop: true, 
  centeredSlides: true, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1, 


  breakpoints: {
    640: {  
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

console.log('matthias a rien fait')