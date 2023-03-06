let boxes = document.querySelectorAll('.box');
let boxesContainer = document.querySelector('.boxes');
let image = document.querySelector('.minion-image');
let button = document.querySelector('#magic-button');

let toggle = true;

arrangeImages();

function arrangeImages() {
    let column = 0;
    let row = 0;
    boxes.forEach((box) => {
        box.firstChild.style.top = `${-88 * row}px`;
        box.firstChild.style.left = `${-140 * column}px`;
        column++;
        if (column == 4) {
            row++;
            column = 0;
        }
    });
}

button.addEventListener('click', magic);

function magic(e) {
    if (toggle) {
        boxesContainer.classList.add('shrink');
        boxes.forEach((box) => {
            box.classList.remove('animate');
            void box.offsetWidth;
            box.classList.add('animate');
        });
        toggle = false;
    } else {
        boxes.forEach((box) => {
            box.classList.remove('animate');
            void box.offsetWidth;
            box.classList.add('animate');
        });
        boxesContainer.classList.remove('shrink');
        toggle = true;
    }
}
