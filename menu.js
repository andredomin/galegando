const menu = document.querySelector(".menu").addEventListener("click", animateBars);
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menu2 = document.querySelector(".menu2");
function animateBars(){
    line1.classList.toggle("line1active");
    line2.classList.toggle("line2active");
    line3.classList.toggle("line3active");
    menu2.classList.toggle("despliegue");
}