document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const todos = document.getElementById("todos");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== "") {
            const li = document.createElement("li");
            li.textContent = todoText;
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });
            todos.appendChild(li);
            input.value = "";
        }
    });
});