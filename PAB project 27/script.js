// Get the button elements
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

// Get the left and right slide elements
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');

// The current index for the slides
let leftSlideIndex = 0;
let rightSlideIndex = 0;

// Slide data for both the left and right sides
const leftSlides = [
    { backgroundColor: 'darksalmon', title: 'Nature Flower', description: 'all in red' },
    { backgroundColor: 'lightblue', title: 'Blue sky', description: 'with its mountains' },
    { backgroundColor: 'azure', title: 'Lonely castle', description: 'on a hill' },
    { backgroundColor: 'orange', title: 'Flying eagle', description: 'in the sunset' }
];

const rightSlides = [
    { backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-frozen-rose-outdoors_23-2150851159.jpg?uid=R177736722&ga=GA1.1.435248090.1741688389&semt=ais_hybrid)' },
    { backgroundImage: 'url(https://img.freepik.com/free-photo/topaz-lake-nevada_1232-3558.jpg?uid=R177736722&ga=GA1.1.435248090.1741688389&semt=ais_hybrid)' },
    { backgroundImage: 'url(https://img.freepik.com/free-photo/le-mont-saint-michel-normandy-france_53876-94786.jpg?uid=R177736722&ga=GA1.1.435248090.1741688389&semt=ais_hybrid)' },
    { backgroundImage: 'url(https://img.freepik.com/free-photo/3d-sunset-landscape-with-birds-flying-sky_1048-18910.jpg?t=st=1742287075~exp=1742290675~hmac=3a0fa6b5690202ae53c894dc5c79ed7e51d0455e663645031e93965aa8e38d06&w=996)' }
];

// Function to update the left slide content based on index
function updateLeftSlide() {
    const slide = leftSlides[leftSlideIndex];
    leftSlide.innerHTML = `
        <div style="background-color: ${slide.backgroundColor}"></div>
        <h1>${slide.title}</h1>
        <p>${slide.description}</p>
    `;
}

// Function to update the right slide content based on index
function updateRightSlide() {
    const slide = rightSlides[rightSlideIndex];
    rightSlide.style.backgroundImage = slide.backgroundImage;
}

// Event listener for the down button
downButton.addEventListener('click', () => {
    // Move down in the slides
    leftSlideIndex = (leftSlideIndex + 1) % leftSlides.length;
    rightSlideIndex = (rightSlideIndex + 1) % rightSlides.length;
    
    // Update both slides
    updateLeftSlide();
    updateRightSlide();
});

// Event listener for the up button
upButton.addEventListener('click', () => {
    // Move up in the slides
    leftSlideIndex = (leftSlideIndex - 1 + leftSlides.length) % leftSlides.length;
    rightSlideIndex = (rightSlideIndex - 1 + rightSlides.length) % rightSlides.length;
    
    // Update both slides
    updateLeftSlide();
    updateRightSlide();
});

// Initialize the slides on page load
updateLeftSlide();
updateRightSlide();
