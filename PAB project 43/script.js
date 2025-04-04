const ratings = document.querySelectorAll('.ratings');
const panel = document.getElementById('panel');
const sendBtn = document.getElementById('send');
let selectedRating = '';

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        removeActive();
        rating.classList.add('active');
        selectedRating = rating.querySelector('small').innerText;
    });
});

sendBtn.addEventListener('click', () => {
    if (selectedRating) {
        panel.innerHTML = `
            <strong>Thank You!</strong>
            <br/><br/>
            <p>You selected: <strong>${selectedRating}</strong></p>
            <br/>
            <p>We appreciate your feedback.</p>
        `;
    } else {
        alert("Please select a rating before submitting.");
    }
});

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active');
    });
}
