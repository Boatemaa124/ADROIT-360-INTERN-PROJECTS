document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");
    
    function startProgress() {
        progressBar.style.width = "100%";
        setTimeout(() => {
            progressBar.style.width = "0%";
        }, 5000);
    }
    
    startProgress();
    setInterval(startProgress, 6000);
});
