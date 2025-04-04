//DOM Elements
const boxes = document.querySelectorAll('.box');
image = document.querySelector('.image');

//loop through each boxes element
boxes.forEach((box) => {
    //when a draggable element is dragged over a box element
    box.addEventListener("dragover", e => {
        e.preventDefault() //prevent default behaviour
        box.classList.add("hovered");

});

//when a draggable element leaves the box element
box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
});

//when a draggable element is dropped on a box element
box.addEventListener("drop", () => {
box.appendChild(image)
box.classList.remove("hovered");
});
});

