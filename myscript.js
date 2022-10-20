const sum = function (array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
};

const subtract = function (array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator - currentValue
    );
};

const multiply = function (array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    );
};

const divide = function (array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator / currentValue
    );
};

const operate = function (operator, array) {

    const operators = {
        "+": sum(array),
        "-": subtract(array),
        "*": multiply(array),
        "/": divide(array)
    };
    return Object.values(operators).find(value => operators[operator] === value);
}

//Dsiplay numbers by clicking number btns
let displayValue;
let displayArea = document.querySelector('.display');

const digitBtn = document.querySelectorAll('#num');
 digitBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const numTarget = e.target.value;
        displayValue = numTarget;
        display();
    });
});

function display (number) {
    number = displayValue;
    displayArea.textContent += displayValue;
}