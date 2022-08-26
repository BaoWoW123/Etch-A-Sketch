

for (i = 0; i < 256; i++) {
    const grid = document.querySelector('#grid')
    const gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');

 
    grid.appendChild(gridbox);

    gridbox.addEventListener('mouseover', () => {
        gridbox.style.backgroundColor = 'black';
    })
}
