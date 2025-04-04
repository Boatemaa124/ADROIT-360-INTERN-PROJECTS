document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("filter");
    const listItems = document.querySelectorAll(".user-list li");

    filter.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        
        listItems.forEach(item => {
            const userName = item.querySelector("h4");
            const userLocation = item.querySelector("p");
            
            if (userName && userLocation) {
                const nameText = userName.textContent.toLowerCase();
                const locationText = userLocation.textContent.toLowerCase();
                
                if (nameText.includes(searchTerm) || locationText.includes(searchTerm)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
});
