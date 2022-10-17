const display_menu = document.querySelector('.h-menu');
const menu = document.querySelector('.responsive-menu');
const button = document.querySelector('.responsive-menu .header button');

display_menu.addEventListener('click', ()=>{
    menu.classList.add('responsive-menu-show');
});

button.addEventListener('click', ()=>{
    menu.classList.remove('responsive-menu-show');
});