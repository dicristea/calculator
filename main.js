let displayValue = '0';
let firstOperand = null;
let operator = null;
let secondOperand = null;

const buttons = Array.from(document.getElementsByTagName('button'));

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
                    // inputOperand(buttons[i].value);
                };
                updateDisplay(displayValue);

            } else if (buttons[i].classList.contains('clear')) {
                displayValue = '0';
                firstOperand = null;
                operator = null;
                secondOperand = null;
                updateDisplay(displayValue);

            } else if (buttons[i].classList.contains('sign')) {
                if (displayValue < '0') {
                    displayValue = displayValue * -1;
                    updateDisplay(displayValue);
                } else if (displayValue > '0') {
                    displayValue = '-' + displayValue;
                    updateDisplay(displayValue);
                };

            } else if (buttons[i].classList.contains('operator')) {
                
                inputOperator(buttons[i].value, firstOperand, secondOperand)
            };
        });
    };
};

clickButton();


function inputOperator(operator, firstOperand, secondOperand) {    
    
    if (displayValue === '0') {
        displayValue = '0';
        updateDisplay(displayValue);

    } else if (displayValue === 'undefined') {
        displayValue = 'undefined';
        updateDisplay(displayValue);

    } else if (displayValue !== '0' || displayValue !== 'undefined') {
        // secondOperand = clickButton();
        if (operator == 'power') {
            power(firstOperand, secondOperand);
        } else if (operator == 'divide') {
            divide(firstOperand, secondOperand);
        } else if (operator == 'multiply') {
            multiply(firstOperand, secondOperand);
        } else if (operator == 'add') {
            add(firstOperand, secondOperand);
        } else if (operator == 'subtract') {
            subtract(firstOperand, secondOperand);
        };
    
    };
};




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
    if (b == 0) {
        displayValue = "undefined";
        updateDisplay(displayValue);
    } else {
    let answer = a/b;
    return roundDecimal(answer);
    }
};

function power(a, b) {
    let answer = a;
    for (let i = 1; i < b; i++) {
        answer *= a;
    }
    return roundDecimal(answer);
};