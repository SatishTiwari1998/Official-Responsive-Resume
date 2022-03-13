const responsiveMenu = document.getElementById('menu-tab');
const navBar = document.querySelector('.header');
navBar.addEventListener('click',navMenu);
responsiveMenu.addEventListener('click',navMenu);
function navMenu(){
    navBar.classList.toggle('responsive-nav');
}
