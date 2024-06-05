function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function divide(a, b) {

    return a / b;
}

function multiply(a, b) {

    return a * b;
}


let firstNumber;
let operatorSymbol;
let secondNumber;


function operate(first, second, operator) {

    switch(operator) {

        case "+":
            add(first, second);
            break;

        case "-":
            subtract(first, second);
            break;

        case "%":
            divide(first, second);
            break;

        case "x":
            multiply(first, second);
            break;
    }
}