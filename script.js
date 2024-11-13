const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '400px';
container.style.height = '400px';

const sizeBtn = document.getElementById('size');
const resetBtn = document.getElementById('reset');

let gridSize = 16;
fillGrid();

function fillGrid() {
    container.innerHTML = ''; // Clears all existing grid squares
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.style.flex = `0 0 ${100 / gridSize}%`; // Adjusts each div to fit the grid
        square.style.border = '0.5px solid rgba(224, 64, 112, 0.31)'; // Optional for visualization
        square.style.height = `${100 / gridSize}%`;
        container.appendChild(square);
    }
}

sizeBtn.addEventListener('click', () => {
    gridSize = prompt(`Enter grid size: (e.g. 24, 30).
Max size is 100.
Default is 16.`);
    if (gridSize > 100) gridSize = prompt(`Enter grid size: (e.g. 24, 30).
Max size is 100.
Default is 16.`);
    if (gridSize == null || gridSize == '') gridSize = 16;
    fillGrid();
});

resetBtn.addEventListener('click', () => {
    container.innerHTML = '';
    fillGrid();
});

let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

container.addEventListener('mouseover', (e) => {
    if (isMouseDown && e.target !== container) {
        e.target.style["background-color"] = "#fb6f92";
        e.target.style.border = '0.5px solid #fb6f92';
        e.target.style.padding = '1px';
    }
});

container.addEventListener('click', (e) => {
    if (e.target !== container) {
        e.target.style["background-color"] = "#fb6f92";
        e.target.style.border = '0.5px solid #fb6f92';
        e.target.style.padding = '1px';
    }
});
