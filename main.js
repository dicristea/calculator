let displayValue = '0';
let firstOperand = null;
let operator = null;
let secondOperand = null;
let secondDisplayValue = '';

const buttons = Array.from(document.getElementsByTagName('button'));
const secondDisplay = document.querySelector('.show-operation');


function updateDisplay(displayValue) {
    const display = document.getElementById('display');
    display.innerText = displayValue;
};

updateDisplay(displayValue);

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('number')) {
                if (displayValue === '0') {
                    displayValue = buttons[i].value;
                } else {
                    displayValue += buttons[i].value;
                };
            updateDisplay(displayValue);

            } else if (buttons[i].classList.contains('clear')) {
                displayValue = '0';
                firstOperand = null;
                operator = null;
                secondOperand = null;
                updateDisplay(displayValue);
                secondDisplayValue = '';
                updateSecondDisplay(secondDisplayValue);

            } else if (buttons[i].classList.contains('sign')) {
                displayValue *= -1;
                updateDisplay(displayValue);

            } else if (buttons[i].classList.contains('operator')) {
                if (firstOperand !== null && operator !== null) {
                    compute();
                }
                firstOperand = displayValue;
                operator = buttons[i].textContent;
                displayValue = '';
                updateDisplay(displayValue);
                if (operator === 'xʸ') {
                    secondDisplayValue = firstOperand + ' ^';
                } else {
                    secondDisplayValue = firstOperand + ' ' + operator;
                }
                updateSecondDisplay(secondDisplayValue);

            } else if (buttons[i].classList.contains('equals')) {
                if (firstOperand !== null && operator !== null) {
                    compute();
                }
            } else if (buttons[i].classList.contains('decimal')) {
                if (displayValue.includes('.')) {

                } else {
                    displayValue += '.';
                };
                updateDisplay(displayValue);
            }
        });
    };
};

clickButton();


function compute() {    
    secondOperand = displayValue;
    if (operator === 'xʸ') {  
        secondDisplayValue = firstOperand + ' ^ ' + secondOperand + ' =';
    } else {
        secondDisplayValue = firstOperand + ' ' + operator + ' ' + secondOperand + ' =';
    }
    updateSecondDisplay(secondDisplayValue);
    runOperation(operator, firstOperand, secondOperand);
    firstOperand = displayValue;
    operator = null;
    secondOperand = null;
};


function runOperation(operator, firstOperand, secondOperand) {    
    if (displayValue !== '0' || displayValue !== 'undefined') {
        if (operator === 'xʸ') {
            power(firstOperand, secondOperand);
        } else if (operator === '÷') {
            divide(firstOperand, secondOperand);
        } else if (operator === 'x') {
            multiply(firstOperand, secondOperand);
        } else if (operator === '+') {
            add(firstOperand, secondOperand);
        } else if (operator === '-') {
            subtract(firstOperand, secondOperand);
        };
    };
};

function updateSecondDisplay(secondDisplayValue) {
    secondDisplay.textContent = secondDisplayValue;
};



function roundDecimal(answer) {
    return Math.round((answer + Number.EPSILON) * 100) / 100;
};

function add(a, b) {
    let answer = Number(a) + Number(b);
    
    displayValue = roundDecimal(answer).toString();
    firstOperand = displayValue;
    updateDisplay(displayValue);
};

function subtract(a, b) {
    let answer = a - b;
    displayValue = roundDecimal(answer);
    firstOperand = displayValue;
    updateDisplay(displayValue);
};

function multiply(a, b) {
    let answer = a * b;
    displayValue = roundDecimal(answer);
    firstOperand = displayValue;
    updateDisplay(displayValue);};

function divide(a, b) {
    if (b === '0') {
        displayValue = "undefined";
        updateDisplay(displayValue);
    } else {
    let answer = a/b;
    displayValue = roundDecimal(answer);
    firstOperand = displayValue;
    updateDisplay(displayValue);    
    }
};

function power(a, b) {
    let answer = a;
    for (let i = 1; i < b; i++) {
        answer *= a;
    }
    displayValue = roundDecimal(answer);
    firstOperand = displayValue;
    updateDisplay(displayValue);
};