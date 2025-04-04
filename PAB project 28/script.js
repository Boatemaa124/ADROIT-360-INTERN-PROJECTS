// Select the button and toast container
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

// Function to show toast notifications
function showToast() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = 'New notification here!'; // Change this to dynamic messages if needed

    // Append the toast to the container
    toasts.appendChild(toast);

    // Trigger the toast to show
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Remove the toast after it fades out
    setTimeout(() => {
        toast.classList.remove('show');
        // After the animation, remove the toast from the DOM
        setTimeout(() => toast.remove(), 500);
    }, 4000); // Toast stays for 4 seconds
}

// Event listener for the button to trigger the toast
button.addEventListener('click', showToast);
