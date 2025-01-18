document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const square = document.getElementById("square");

    button.addEventListener("click", () => {
        square.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    square.addEventListener("click", () => {
        square.style.display = "none";
        document.body.style.overflow = "auto";
    });
});