/*
function displayCode(code) {
    let displayContent = document.getElementById('demo-id');
    displayContent.innerHTML = `The result is ${code}`;
}

function calculationFunc(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = calculationFunc(10, 20);
displayCode(result);
// console.log(result);
// console.log(displayCode('Hello'));
*/

/* ==== With Callback Function ===== */

function displayCode(code) {
    let displayContent = document.getElementById('demo-id');
    displayContent.innerHTML = `The result is ${code}`;
}

function calculationFunc(num1, num2) {
    let sum = num1 + num2;
    displayCode(sum);
}

calculationFunc(100, 200);
