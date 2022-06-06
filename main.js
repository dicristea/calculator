let displayValue = "0";
console.log(displayValue);
let firstOperand
let secondOperand
const buttons = Array.from(document.getElementsByTagName('button'));
console.log(buttons);
const operator = Array.from(document.querySelectorAll('.operator'));

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('number')) {
                displayValue = buttons[i].value;
                updateDisplay(displayValue);
            } else if (buttons[i].classList.contains('clear')){
                displayValue = '0';
                updateDisplay(displayValue);
            }
        });
    };
};

clickButton();


function updateDisplay(displayValue) {
    const display = document.getElementById('display');
    display.innerText = displayValue;
};

updateDisplay(displayValue);

function roundDecimal(answer) {
    return Math.round((answer + Number.EPSILON) * 100) / 100;
};

function add(a, b) {
    let answer = a + b;
    return roundDecimal(answer);
};

function subtract(a, b) {
    let answer = a - b;
    return roundDecimal(answer);
};

function multiply(a, b) {
    let answer = a * b;
    return roundDecimal(answer)
};

function divide(a, b) {
    let answer = a/b;
    return roundDecimal(answer);
};

function power(a, b) {
    let answer = a;
    for (let i = 1; i < b; i++) {
        answer *= a;
    }
    return roundDecimal(answer);
};

function operate(operator, a, b) {
    
};