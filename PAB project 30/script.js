const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times'); //selects its html element and displays the number of hearts clicked

let clickTime = 0; //stores timestamp of the last click
let timesClicked = 0; //updates the number of hearts on the page

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) { //first click
        clickTime = new Date().getTime(); //stores the current timestamp of the first click
    } else {
        if((new Date().getTime() - clickTime) < 800) { // checks if the 2nd click happens within 800ms of the 1st click
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime(); //a new click cycle is started if the clicktime is greater than 800ms
        }
    }
});

const createHeart = (e) => { //creates a heart element after double-click
    const heart = document.createElement('div'); //creates a new div element which represents the heart
    heart.classList.add('fas'); //used for solid icon style from font Awesome
    heart.classList.add('fa-heart'); //adds the heart shape

    //mouse positions relative to the browser window
    const x = e.clientX;
    const y = e.clientY;

     //gets the position and size of the loveMe element(its bounding rectangle)
    const loveMeRect = loveMe.getBoundingClientRect();

    //calculates the position of the click relative to the loveme element itself.
    const xInside = x - loveMeRect.left;
    const yInside = y - loveMeRect.top;

    //places the heart at the calculated positions, exactly where the ,mouse pointer is placed.
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart); // it makes the heart appear inside the loveMe at the calculated position.

    times.innerHTML = ++timesClicked; //keeps track of the total number of hearts created.

    setTimeout(() => heart.remove(), 1000); //sets a timeout to remove element from the DOM after 1s.

};