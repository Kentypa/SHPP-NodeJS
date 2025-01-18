document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");

    button.classList.add("hidden");

    window.addEventListener("scroll", () => {
        const yOffset = window.scrollY;
        if (yOffset > 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
