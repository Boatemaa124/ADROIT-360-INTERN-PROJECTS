// Get references to DOM elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const sizeDisplay = document.getElementById('size');
const colorInput = document.getElementById('color');
const clearButton = document.getElementById('clear');

let brushSize = 20;
let drawing = false;
let brushColor = '#000000';

// Set initial canvas size
canvas.width = 800;
canvas.height = 800;

// Event listener for mouse down to start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e); // Start drawing immediately
});

// Event listener for mouse up to stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // Stop the current path
});

// Event listener for mouse move to draw
canvas.addEventListener('mousemove', draw);

// Function to draw on canvas
function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath(); // Start a new path to avoid connecting lines when moving the mouse
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listener for decrease button to reduce brush size
decreaseButton.addEventListener('click', () => {
    if (brushSize > 1) {
        brushSize -= 1;
        sizeDisplay.textContent = brushSize;
    }
});

// Event listener for increase button to increase brush size
increaseButton.addEventListener('click', () => {
    brushSize += 1;
    sizeDisplay.textContent = brushSize;
});

// Event listener for color input to change brush color
colorInput.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

// Event listener for clear button to reset the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
});
