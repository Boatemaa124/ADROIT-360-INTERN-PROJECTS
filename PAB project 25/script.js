document.addEventListener('DOMContentLoaded', () => {
    // Simulate content loading
    setTimeout(() => {
        // Replace the animated backgrounds with actual content after 3 seconds
        document.getElementById('header').style.backgroundImage = 'url("https://img.freepik.com/free-photo/market-trends-concept-with-laptop_23-2150372404.jpg?uid=R177736722&ga=GA1.1.435248090.1741688389&semt=ais_hybrid")';
        document.getElementById('title').textContent = "Real Content Loaded: Welcome to the New World!";
        document.getElementById('excerpt').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at venenatis purus, sit amet tristique magna.";
        document.getElementById('profile_img').innerHTML = '<img src="https://img.freepik.com/free-psd/modern-simple-template-curriculum_1435-1589.jpg?uid=R177736722&ga=GA1.1.435248090.1741688389&semt=ais_hybrid" alt="Profile Image">';
        document.getElementById('name').textContent = 'Laura Anderson';
        document.getElementById('date').textContent = 'Oct 08, 2025';
    }, 3000); // Wait for 3 seconds to simulate loading
});
