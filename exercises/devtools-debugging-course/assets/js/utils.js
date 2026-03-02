function logMessage(message) {
    console.log(message);
}

function showAlert(message) {
    alert(message);
}

function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
}

function setElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = text;
    }
}

function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    return element ? element.value : null;
}