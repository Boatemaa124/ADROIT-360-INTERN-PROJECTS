// Select elements from the DOM
const textElement = document.getElementById('text');
const speedInput = document.getElementById('speed');

// Set the text to be typed
const textToType = "I love programming!";

// Function to type the text with a given speed
function typeText(speed) {
    let index = 0;
    textElement.textContent = ""; // Clear initiale text

    const interval = setInterval(() => {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000 / speed); // Adjust speed based on input value
}

// Set the initial typing speed from the input
let typingSpeed = parseInt(speedInput.value);
typeText(typingSpeed);

// Listen for changes in the speed input
speedInput.addEventListener('input', () => {
    typingSpeed = parseInt(speedInput.value);
    typeText(typingSpeed);
});


