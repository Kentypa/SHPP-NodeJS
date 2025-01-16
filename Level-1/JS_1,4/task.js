function task1method1(id) {
    document.getElementById(id).style.display = 'none';
}

function task1method2(id) {
    document.getElementById(id).remove();
}

function task1method3(id) {
    document.getElementById(id).classList.add('hidden');
}

function task2(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function task3(nameOfClass) {
    const elements = document.getElementsByClassName(nameOfClass);
    Array.from(elements).map(element => {element.classList.toggle('hidden');});
}

function task4(id) {
    const valueFromSelector = document.getElementById(id).value;
    Array.from(document.getElementsByClassName(valueFromSelector)).map(element => {element.classList.toggle('hidden');});
}

function task5(id) {
    const element = document.getElementById(id);

    function hideElement() {
        element.style.display = 'none';
    }

    function alertToUser() {
        element.removeEventListener('click', alertToUser);
        element.addEventListener('click', hideElement);
        alert("Привіт")
    }

    element.addEventListener("click", alertToUser);
}

function task6(id, blockId) {
    const button = document.getElementById(id);
    const block = document.getElementById(blockId);

    function hideElement() {
        block.classList.add('hidden');
    }

    function showElement() {
        block.classList.remove('hidden');
    }

    button.addEventListener("mouseover", showElement);
    button.addEventListener("mouseout", hideElement);
}

function task7(inputID, boxID) {
    const inputElement = document.getElementById(inputID);
    const boxElement = document.getElementById(boxID);

    function showElement() {
        boxElement.classList.remove('hidden');
    }

    function hideElement() {
        boxElement.classList.add('hidden');
    }

    inputElement.addEventListener("focus", showElement);
    inputElement.addEventListener("input", hideElement);
}

function task8(inputID, buttonID, imageID) {
    const inputElement = document.getElementById(inputID);
    const buttonElement = document.getElementById(buttonID);
    const imageElement = document.getElementById(imageID);

    function showImage() {
        imageElement.src = inputElement.value;
    }

    buttonElement.addEventListener("click", showImage);
}

function task9(textareaID, buttonID, containerID) {
    const textArea = document.getElementById(textareaID);
    const button = document.getElementById(buttonID);
    const boxElement = document.getElementById(containerID);

    function addElementsToContainer() {
        const elements = textArea.value.split('\n');

        boxElement.innerHTML = '';

        elements.forEach(element => {
            if (element.trim() !== '') {
                const image = document.createElement("img");
                image.src = element.trim();
                image.alt = "Image";
                boxElement.appendChild(image);
            }
        });
    }

    button.addEventListener("click", addElementsToContainer);
}

document.addEventListener("DOMContentLoaded", () => {
    task5("task5");
    task6("task6button", "task6");
    task7("task7", "task7box");
    task8("task8input", "task8button", "task8image");
    task9("task9", "task9button", "task9elementsContainer");
});