document.addEventListener("DOMContentLoaded", () => {
    const block1 = document.getElementById("block1")
    block1.addEventListener("click", () => {
        alert("block1 pressed");
    })
    const block2 = document.getElementById("block2")
    block2.addEventListener("click", (event) => {
        alert("block2 pressed");
        event.stopPropagation()
    })
});
