let boxes = document.getElementsByClassName('box');

[...boxes].forEach((box) => {
    box.addEventListener('mouseover', randomBackground);
    box.addEventListener('mouseout', removeBackground);
});

function randomBackground(e) {
    let color = Math.floor(Math.random() * 16777215).toString(16);

    e.target.style.backgroundColor = '#' + color;
    e.target.style.boxShadow = `0px 0px 10px 0px #${color}`;
    e.target.style.opacity = 0.7;
}

function removeBackground(e) {
    setTimeout(() => {
        e.target.style.backgroundColor = '#1d1d1d';
        e.target.style.boxShadow = `none`;
        e.target.style.opacity = 1;
    }, 500);
}
