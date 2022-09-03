
const title = document.querySelector('.title');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Etch: Off';
title.appendChild(button);

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

for (i = 0; i < 256; i++) {
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