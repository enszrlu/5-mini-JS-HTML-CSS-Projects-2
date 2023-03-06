let contentBoxes = document.getElementsByClassName('content');
let direction = true;

updateVisibility();
window.onresize = updateVisibility;
document.addEventListener('scroll', updateVisibility);

function updateVisibility(e) {
    [...contentBoxes].forEach((box) => {
        let boxBottomEdgePos = box.offsetHeight + box.offsetTop;
        if (boxBottomEdgePos < window.innerHeight + window.pageYOffset) {
            if (box.offsetLeft < 0 || box.offsetLeft > window.innerWidth) {
                box.style.left = '0';
            }
        } else {
            if (box.style.left == '0px' || box.style.left == null || box.style.left == '') {
                if (direction) {
                    box.style.left = `${-window.innerWidth - 500}px`;
                    direction = false;
                } else {
                    box.style.left = `${window.innerWidth + 500}px`;
                    direction = true;
                }
            }
        }
    });
}

//NOTES
// Also box.getBoundingClientRect().top could be used.
// Also could use css classes instead.
