
const title = document.querySelector('.title');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Etch: Off';
title.appendChild(button);

let slider = document.getElementById('gridSize');
let output = document.getElementById('output');
output.textContent = slider.value;
makeGrid(24)
slider.oninput = function() {
    output.textContent = this.value;
    size = this.value;
    clearGrid()
    makeGrid(size)
}

function clearGrid() {
    document.getElementById('grid').innerHTML = ''
}
button.addEventListener('click', (etch) => {
    if (button.textContent === 'Etch: Off') {
        return button.textContent = 'Etch: On';
    }
    else if (button.textContent === 'Etch: On') {
        return button.textContent = 'Erase';
    }
    else {
        return button.textContent = 'Etch: Off';
    }
})

function makeGrid(size) {
    for (i = 0; i < size * size; i++) {
    const grid = document.querySelector('#grid')
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    grid.appendChild(gridbox);
    let etchBlack = (() => gridbox.style.backgroundColor = 'black');
    let erase = (() => gridbox.style.backgroundColor = 'white');

    button.addEventListener('click', () => {
    if (button.textContent == 'Etch: On') {
            gridbox.addEventListener('mouseover', (etchBlack))
        }
    if (button.textContent == 'Etch: Off') {
            gridbox.removeEventListener('mouseover', (etchBlack))
            gridbox.removeEventListener('mouseover', (erase))
        }
    if (button.textContent == 'Erase') {
        gridbox.addEventListener('mouseover', (erase))
        }
    })
}
}