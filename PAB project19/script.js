// Get the slider elements and the navigation buttons
const sliders = document.querySelectorAll('.slider');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

// Set the current slider index
let currentIndex = 0;

// Function to update the slider
function updateSlider() {
  // Remove the 'slider-active' class from all sliders
  sliders.forEach(slider => {
    slider.classList.remove('slider-active');
  });

  // Add the 'slider-active' class to the current slider
  sliders[currentIndex].classList.add('slider-active');
}

// Event listener for the left arrow button
leftArrow.addEventListener('click', () => {
  // Decrement the index to go to the previous slide
  currentIndex = (currentIndex === 0) ? sliders.length - 1 : currentIndex - 1;
  updateSlider();
});

// Event listener for the right arrow button
rightArrow.addEventListener('click', () => {
  // Increment the index to go to the next slide
  currentIndex = (currentIndex === sliders.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

// Initial call to set the first active slider
updateSlider();
