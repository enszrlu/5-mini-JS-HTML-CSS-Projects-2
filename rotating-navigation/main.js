let buttons = document.querySelectorAll('.button');
let menu = document.querySelector('.menu');
let content = document.querySelector('.container');
let nav = document.querySelector('.container-nav');

buttons.forEach((button) => {
    button.addEventListener('click', rotate);
});

function rotate(e) {
    if ([...e.target.classList].includes('fa-bars')) {
        menu.classList.add('rotated');
        nav.classList.add('rotated');
        content.classList.add('rotated');
    } else if ([...e.target.classList].includes('fa-x')) {
        menu.classList.remove('rotated');
        nav.classList.remove('rotated');
        content.classList.remove('rotated');
    }
}
