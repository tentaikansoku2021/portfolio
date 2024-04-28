// To_Top
const returnTop = document.querySelector('.return_top');
window.addEventListener('scroll', ()=> {
    let scroll_Y = window.scrollY;
    if(scroll_Y >= 120) {
        returnTop.classList.add('active');
    }
    else {
        returnTop.classList.remove('active');
    }
})
/* hamburger　menu */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const half = document.querySelector(".half");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    half.classList.toggle("nav-active")

    navLinks.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/5+0.5}s`;
        } 
    });
    burger.classList.toggle("toggle");
});

nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    half.classList.toggle("nav-active");

    navLinks.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/5+0.5}s`;
        }
    });  
    burger.classList.toggle("toggle");  
});

half.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    half.classList.toggle("nav-active");

    navLinks.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/5+0.5}s`;
        }
    });  
    burger.classList.toggle("toggle");  
});

