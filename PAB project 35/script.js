// JavaScript to handle toggle functionality (optional as CSS handles most of it)
const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        // This will be executed when the checkbox is toggled
        if (toggle.checked) {
            console.log(`${toggle.id} is selected.`);
        } else {
            console.log(`${toggle.id} is unselected.`);
        }
    });
});
