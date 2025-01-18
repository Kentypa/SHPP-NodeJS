function trackMouse(event) {
    const text = document.getElementById("task10");

    const x = event.clientX;
    const y = event.clientY;

    text.innerText = `X: ${x}, Y: ${y}`;
}

function showLanguage() {
    const text = document.getElementById("task11")

    text.innerText = `User language: ${navigator.language}`;
}

function showPosition() {
    const text = document.getElementById("task12")

    navigator.geolocation.getCurrentPosition((position) => {
        text.innerText = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`;
    })
}

document.addEventListener("mousemove", trackMouse);
document.addEventListener("DOMContentLoaded", () =>{
    showLanguage();
    showPosition();
})