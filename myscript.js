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
    if (operator === '+') {
        return sum(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
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
    currOperator: null
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
        initialValues.secondValue = false;
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
    const {firstValue, displayValue, currOperator} = initialValues;
    const newInput = parseFloat(displayValue);

    if (firstValue === null && !isNaN(newInput)) {
        initialValues.firstValue = newInput;
    } else if (currOperator) {
        const solution = operate(currOperator, firstValue, newInput);

        if (solution === 'ARE YOU SERIOUS?') {
            initialValues.displayValue = 'ARE YOU SERIOUS?';
        } else {
            initialValues.displayValue = roundNumber(solution);
            initialValues.firstValue = solution; 
        }

    }
    initialValues.secondValue = true;
    initialValues.currOperator = operation;
}

//round number
function roundNumber(num) {
    return Math.round(num * 100) / 100;
}

//backspace button
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click',() => {
    backSpace();
    updateDisplay();
});

function backSpace() {
    initialValues.displayValue = initialValues.displayValue.toString().slice(0,-1);
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
    initialValues.currOperator = null;
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
    if (initialValues.secondValue === true) {
        initialValues.displayValue += dot;
        initialValues.secondValue = false;
        return;
    }
    if (!initialValues.displayValue.includes(dot)) {
        initialValues.displayValue += dot;
    }
}

//keyboard support
document.addEventListener('keydown', (event) => {
    if (event.key == 0) {
        displayNumbers(event.key);
        updateDisplay();   
    }
    if (event.key == 1) {
        displayNumbers(event.key);
        updateDisplay();
    }
    if (event.key == 2) {
        displayNumbers(event.key);
        updateDisplay();    
    }
    if (event.key == 3) {
        displayNumbers(event.key);
        updateDisplay();    
    }
    if (event.key == 4) {
        displayNumbers(event.key);
        updateDisplay();    
    }    
    if (event.key == 5) {
        displayNumbers(event.key);
        updateDisplay();    
    }   
    if (event.key == 6) {
        displayNumbers(event.key);
        updateDisplay();    
    }    
    if (event.key == 7) {
        displayNumbers(event.key);
        updateDisplay();    
    }    
    if (event.key == 8) {
        displayNumbers(event.key);
        updateDisplay();    
    }    
    if (event.key == 9) {
        displayNumbers(event.key);
        updateDisplay();    
    }
    if (event.key == 'Delete') {
        clearAll(event.key);
        updateDisplay();    
    }
    if (event.key == 'Backspace') {
        backSpace(event.key);
        updateDisplay();
    }
    if (event.key == '.') {
        decimalPoint(event.key);
        updateDisplay();
    }
    if (event.key == '=') {
        newOperation(event.key);
        updateDisplay();
    }
    if (event.key == '-') {
        newOperation(event.key);
        updateDisplay();
    }
    if (event.key == '/') {
        newOperation(event.key);
        updateDisplay();
    }

});

document.addEventListener('keypress', (event) => {
    if (event.shiftKey == true && event.key == '+') {
        newOperation(event.key);
        updateDisplay();
    }
    if (event.shiftKey == true && event.key == '*') {
        newOperation(event.key);
        updateDisplay();
    }
})