
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const nav = document.querySelector('nav');

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    nav.style="position:fixed;";
});
