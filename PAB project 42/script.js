
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (event) => {
            if (event.target.value.length > 1) {
                event.target.value = event.target.value.slice(0, 1);
            }

            if (event.target.value !== "" && index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

        code.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && index > 0 && event.target.value === "") {
                codes[index - 1].focus();
            }
        });
    });

