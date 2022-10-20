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