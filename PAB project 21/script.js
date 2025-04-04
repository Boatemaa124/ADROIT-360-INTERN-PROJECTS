// Get the button element
const button = document.querySelector('button');

// Add event listener for the click event
button.addEventListener('click', function(event) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Create a new div element for the ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append the ripple element to the button
    button.appendChild(ripple);

    // Remove the ripple element after the animation ends
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});



