let initialDisplay = "0";
let firstOperand
let secondOperand
const numberBtn = Array.from(document.querySelectorAll('.number'));
const operator = Array.from(document.querySelectorAll('.operator'));


numberBtn.addEventListener('click', function(e) {
    numberBtn.forEach(num => num.addEventListener('keydown', function(e) {
        
    }))
});




function updateDisplay() {
    const display = document.getElementById('display');
    
};

function roundDecimal(answer) {
    // round number to 8 decimal places
    return answer;
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