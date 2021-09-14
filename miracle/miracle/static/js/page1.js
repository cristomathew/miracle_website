// Header Menu

let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
let menuOpen = false;


menuBtn.addEventListener('click',()=>{
    if(menuOpen===false){
        document.body.style.overflow = "hidden";
        menu.classList.add('active');
        menuBtn.querySelector('i').classList.replace("fa-bars","fa-times");
        menu.style.animation = "menu-open 0.7s ease-in-out both";
        menuOpen=true;
    }
    else
    {
        document.body.style.overflow = "initial";
        menuBtn.querySelector('i').classList.replace("fa-times","fa-bars");
        menu.style.animation = "menu-close 0.6s ease-in-out both";
        setTimeout(()=>{
            menu.classList.remove('active');
        }, 700);
        menuOpen=false;
    }
});

// footer

let designCard = document.querySelectorAll("footer .container .design");


for(let i=0; i<designCard.length; i++){

  let current = designCard[i].querySelector(".expand-btn");
  let toggle = false;
  let designItems = designCard[i].querySelectorAll(".items");
  current.addEventListener('click',()=>{
    if(!toggle){
      designItems.forEach(item => item.style.display="block");
      current.style.transform = "translate(-50%,10%) rotate(180deg)";
    }
    else{
      designItems.forEach(item => item.style.display="none");
      current.style.transform = "translate(-50%,10%) rotate(0deg)";
    }
    toggle=!toggle;
  });
}
