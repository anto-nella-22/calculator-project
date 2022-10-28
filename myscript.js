const sum = function (accumulator, currentValue) {
    return accumulator + currentValue;
};

const subtract = function (accumulator, currentValue) {
    return accumulator - currentValue;
};

const multiply = function (accumulator, currentValue) {
    return accumulator * currentValue;
};

const divide = function (accumulator, currentValue) {
    return accumulator / currentValue;
};

const operate = function (operator, firstNumber, secondNumber) {
    if (operator === '+') {return sum(firstNumber, secondNumber);}
    else if (operator === '-') {return subtract(firstNumber, secondNumber);}
    else if (operator === '*') {return multiply(firstNumber, secondNumber);}
    else if (operator === '/') {
        if(secondNumber === 0){
            return 'ARE YOU SERIOUS?';
        } else {
            return divide(firstNumber, secondNumber);}}
};

//set initial values for calculator
const initialValues = {
    displayValue: '0',
    firstValue: null,
    secondValue: false,
    operator: null
};

//update calculator display
function updateDisplay() {
    let displayArea = document.querySelector('.display');
    displayArea.textContent = initialValues.displayValue;
}

//click buttons for digits
const digitBtn = document.querySelectorAll('#num');
 digitBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const newNumber = e.target.value;
        displayNumbers(newNumber);
        updateDisplay();
    });
});

//display numbers 
function displayNumbers(number) {
    const {displayValue, secondValue} = initialValues;
    if (secondValue === true) {
        initialValues.displayValue = number;
        initialValues.secondNumber = false;
    } else {
        initialValues.displayValue = displayValue === '0' ? number : displayValue + number;
    }
}

//click buttons for operators
const operateBtn = document.querySelectorAll('#operation');
 operateBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const newOperator = e.target.value;
        newOperation(newOperator);
        updateDisplay();
    });
});

//calculates operation 
function newOperation(operation) {
    const {firstValue, displayValue, operator} = initialValues;
    const newInput = parseFloat(displayValue);
    if (firstValue === null) {
        initialValues.firstValue = parseFloat(newInput);
    } else if (operator) {
        const solution = operate(operator, firstValue, newInput);
        if (solution === 'ARE YOU SERIOUS?') {
            initialValues.displayValue = 'ARE YOU SERIOUS?';
        } else {
        initialValues.displayValue = roundNumber(solution);
        initialValues.firstValue = solution;
        }
    }
    initialValues.secondValue = true;
    initialValues.operator = operation;
}

//round number
function roundNumber(num) {
    return Math.round(num * 100) / 100;
}

//clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    clearAll();
} );

//clear all values and display 
function clearAll() {
    initialValues.displayValue = '0';
    initialValues.firstValue = null;
    initialValues.secondValue = false;
    initialValues.operator = null;
    document.querySelector('.display').textContent = '';
}

//decimal button
const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', (e) => {
    const dotInput = e.target.value;
    decimalPoint(dotInput);
    updateDisplay();
} );

function decimalPoint(dot) {
    const {firstValue, secondValue, displayValue} = initialValues;
    if (initialValues.secondValue === true) {
        initialValues.displayValue += dot;
        initialValues.secondValue = false;
        return;
    }
    if (!initialValues.displayValue.includes(dot)) {
        initialValues.displayValue += dot;
    }
}