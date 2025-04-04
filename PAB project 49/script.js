document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    
    function fetchRandomImages() {
        container.innerHTML = ""; 
        for (let i = 0; i < 6; i++) {
            const img = document.createElement("img");
            img.src = `https://picsum.photos/150?random=${Math.floor(Math.random() * 1000)}`;
            container.appendChild(img);
        }
    }
    
    fetchRandomImages();
    setInterval(fetchRandomImages, 5000);
});