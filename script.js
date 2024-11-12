const container = document.getElementById('container');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '400px'; // Set your preferred width
container.style.height = '400px'; // Set your preferred height


for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.style.flex = '0 0 6.25%'; // Adjusts each div to fit the grid
    square.style.border = '0.5px solid rgb(224, 64, 112, 0.31)'; // Optional for visualization
    square.style.height = '6.25%';
    container.appendChild(square);
}


let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

container.addEventListener('mouseover', (e) => {
    if (isMouseDown && e.target !== container) {
        e.target.style["backgroundColor"] = "#fb6f92";
    }
});