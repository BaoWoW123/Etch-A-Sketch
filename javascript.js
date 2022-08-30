
const title = document.querySelector('.title');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Etch: Off';
title.appendChild(button);

button.addEventListener('click', (etch) => {
    if (button.textContent === 'Etch: Off') {
        return button.textContent = 'Etch: On';
    }
    else {
        return button.textContent = 'Etch: Off';
    }
})


for (i = 0; i < 256; i++) {
    const grid = document.querySelector('#grid')
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    grid.appendChild(gridbox);

    button.addEventListener('click', () => {
    if (button.textContent === 'Etch: On') {
            gridbox.addEventListener('mouseover', () => {
            gridbox.style.backgroundColor = 'black';
        })
        }
    })   
}