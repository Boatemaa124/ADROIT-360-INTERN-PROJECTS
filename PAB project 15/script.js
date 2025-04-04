const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const increment = target / 200; // Adjust speed

    function updateCounter() {
        const currentValue = +counter.innerText;
        if (currentValue < target) {
            counter.innerText = `${Math.ceil(currentValue + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target; // Ensure exact target value
        }
    }

    updateCounter();
});
