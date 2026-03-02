// This file contains functionality related to web storage for the fifth exercise.
// Users will explore local storage and session storage using this code.

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    const clearButton = document.getElementById('clear');
    const inputField = document.getElementById('inputField');
    const outputField = document.getElementById('outputField');

    saveButton.addEventListener('click', function() {
        const inputValue = inputField.value;
        localStorage.setItem('savedData', inputValue);
        alert('Data saved to local storage!');
    });

    loadButton.addEventListener('click', function() {
        const savedData = localStorage.getItem('savedData');
        if (savedData) {
            outputField.textContent = `Loaded data: ${savedData}`;
        } else {
            outputField.textContent = 'No data found in local storage.';
        }
    });

    clearButton.addEventListener('click', function() {
        localStorage.removeItem('savedData');
        outputField.textContent = 'Data cleared from local storage.';
    });
});