document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.getElementsByClassName("inputParody");

    Array.from(inputs).forEach((input) => {
        input.setAttribute("contenteditable", "true");

        if (input.id === "1") {
            input.textContent = localStorage.getItem(input.id);

            input.addEventListener("input", (event) => {
                const value = input.textContent;
                localStorage.setItem(input.id, value);
            });
        } else if (input.id === "2") {
            input.textContent = document.cookie.split(":")[1];

            input.addEventListener("input", () => {
                const value = input.textContent;
                document.cookie = `${input.id}:${value}`;
            });
        } else if (input.id === "3") {
            input.textContent = sessionStorage.getItem(input.id);

            input.addEventListener("input", () => {
                const value = input.textContent;
                sessionStorage.setItem(input.id, value);
            });
        }
    });
});
