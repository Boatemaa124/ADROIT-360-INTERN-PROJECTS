const range = document.getElementById("range");
const label = document.querySelector("label");

// Function to update label position dynamically
range.addEventListener("input", (event) => {
    const value = +event.target.value;
    label.innerText = value;
  
    // Adjust label position
    const rangeWidth = range.clientWidth;
    const labelWidth = label.clientWidth;
    const min = +range.min;
    const max = +range.max;
  
    const percent = (value - min) / (max - min);
    const labelPosition = percent * (rangeWidth - labelWidth);
  
    label.style.transform = `translateX(${labelPosition}px)`;
});
