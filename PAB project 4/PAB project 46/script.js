document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");

    openBtn.addEventListener("click", () => {
        sidebar.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("show");
    });

    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
            sidebar.classList.remove("show");
        }
    });
});
