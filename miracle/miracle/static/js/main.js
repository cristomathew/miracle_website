// Header Menu

let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
let menuOpen = false;


menuBtn.addEventListener('click',()=>{
    if(menuOpen===false){
        menu.classList.add('active');
        menuBtn.querySelector('i').classList.replace("fa-bars","fa-times");
        menu.style.animation = "menu-open 0.7s ease-in-out both";
        menuOpen=true;
    }
    else
    {
        menuBtn.querySelector('i').classList.replace("fa-times","fa-bars");
        menu.style.animation = "menu-close 0.6s ease-in-out both";
        setTimeout(()=>{
            menu.classList.remove('active');
        }, 700);
        menuOpen=false;
    }
});


// Swiper.js

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 140,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
