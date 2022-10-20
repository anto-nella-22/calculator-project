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