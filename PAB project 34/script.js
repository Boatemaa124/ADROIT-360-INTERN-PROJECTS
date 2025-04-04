document.addEventListener('DOMContentLoaded', function () {
    const counter = document.querySelector('.counter');
    const finalMessage = document.querySelector('.final');
    const numElements = document.querySelectorAll('.num span');
    const replayButton = document.getElementById('replay');

    let countdownStarted = false;
    
    // Function to animate countdown
    function startCountdown() {
        counter.style.display = 'flex';  // Show counter

        // Set initial opacity for countdown numbers
        numElements.forEach((num, index) => {
            num.style.opacity = 0;
            num.style.animation = `countDown 1s ease ${index * 0.5}s forwards`;
        });

        // After countdown, show final message
        setTimeout(() => {
            counter.style.display = 'none';
            finalMessage.style.display = 'block';
        }, 4000);  // Wait for all the numbers to disappear before showing "GO"
    }

    // Replay functionality
    replayButton.addEventListener('click', function () {
        finalMessage.style.display = 'none';
        startCountdown();
    });

    // Start countdown if not started yet
    if (!countdownStarted) {
        startCountdown();
        countdownStarted = true;
    }
});
