function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function divide(a, b) {

    if (b === 0) {
        alert("Do not divide by 0");
        clear();
    } else {
        return a / b;
    }
}

function multiply(a, b) {

    return a * b;
}





function operate(first, second, operator) {

    switch(operator) {

        case "+":
            return add(first, second);

        case "-":
            return subtract(first, second);

        case "/":
            return divide(first, second);

        case "x":
            return multiply(first, second);
    }
}

function clear() {

    firstNumber = undefined;
    operatorSymbol = undefined;
    secondNumber = undefined;
    newNumber = true;
    replaceOperator = false;

    const display = document.querySelector(".currentDisplay");
    display.textContent = "";

}




let firstNumber;
let operatorSymbol;
let secondNumber;
let newNumber = true;
let replaceOperator = false;

const numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener("click", (event) => {

    let target = event.target;
    const display = document.querySelector(".currentDisplay");

    if (target.tagName === "BUTTON" && !target.classList.contains("decimal")) {


        if (newNumber) {

            display.textContent = target.textContent;
            newNumber = false;
            replaceOperator = false;
        } else {

            display.textContent += target.textContent;
        }
    }

    if (target.classList.contains("decimal")) {

        if (display.textContent.includes(".")) {

            return;

        } else if (display.textContent) {

            display.textContent += target.textContent;
        }


    }
});

const operations = document.querySelector(".operators");

operations.addEventListener("click", (event) => {

    let target = event.target;
    const display = document.querySelector(".currentDisplay");

    if (target.tagName === "BUTTON" && !target.classList.contains("operate")) {

        
        if (replaceOperator) {

            operatorSymbol = target.textContent;
        } else if (!Number(firstNumber)) {

            firstNumber = display.textContent;
            operatorSymbol = target.textContent;
            newNumber = true;
            replaceOperator = true;
        } else if (!Number(secondNumber)) {

            let first = Number(firstNumber);
            let second = Number(display.textContent);

            let result = operate(first, second, operatorSymbol);

            firstNumber = result;

            display.textContent = result;

            second = undefined;

            operatorSymbol = target.textContent;

            newNumber = true;
            
            replaceOperator = true;

        }


    }

    if (target.classList.contains("operate")) {

        if(!Number(firstNumber)) {

            return;
        } else if (newNumber) {

            return;
        } else {
        
            let first = Number(firstNumber);
            let second = Number(display.textContent);

            let result = operate(first, second, operatorSymbol);

            firstNumber = undefined;
            operatorSymbol = undefined;
            secondNumber = undefined;

            display.textContent = result;

            newNumber = true;
        }
    }
});

let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clear);