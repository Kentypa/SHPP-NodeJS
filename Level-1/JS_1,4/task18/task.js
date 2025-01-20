document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("fileInput");
    const dragAndDropSection = document.getElementById("drag-and-drop-section-content");
    const dragAndDropText = document.getElementById("drag-and-drop-text");

    function handleDragAnimationStart(event) {
        dragAndDropSection.classList.add("dragged");
        event.preventDefault();
    }

    function handleDragAnimationEnd(event) {
        dragAndDropSection.classList.remove("dragged");
        event.preventDefault();
    }

    function handleTextUpdate(text, element) {
        element.textContent = text;
    }

    dragAndDropSection.addEventListener("dragenter", (event) => {
        handleDragAnimationStart(event);
    });

    dragAndDropSection.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dragAndDropSection.addEventListener("dragleave", (event) => {
        handleDragAnimationEnd(event);
    });

    dragAndDropSection.addEventListener("drop", (event) => {
        event.preventDefault();
        handleDragAnimationEnd(event);

        const files = event.dataTransfer.files;
        handleTextUpdate(files[0].name, dragAndDropText);
        input.files = files;
    });

    input.addEventListener("change", (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            handleTextUpdate(files[0].name, dragAndDropText);
        }
    });
});
