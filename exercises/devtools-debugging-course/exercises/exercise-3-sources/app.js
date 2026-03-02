// This JavaScript file contains code that users will debug in the third exercise, allowing them to set breakpoints and step through the code.

function calculateSum(a, b) {
    return a + b;
}

function displayResult() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    const result = calculateSum(num1, num2);
    document.getElementById('result').innerText = `The sum is: ${result}`;
}

document.getElementById('calculateButton').addEventListener('click', displayResult);