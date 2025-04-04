document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const boxes = document.getElementById("boxes");

    btn.addEventListener("click", () => {
        boxes.classList.toggle("magic");
    });
});
