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





function operate(first, second, operator) {

    switch(operator) {

        case "+":
            add(first, second);
            break;

        case "-":
            subtract(first, second);
            break;

        case "/":
            divide(first, second);
            break;

        case "x":
            multiply(first, second);
            break;
    }
}


let firstNumber;
let operatorSymbol;
let secondNumber;
let newNumber = true;

const numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener("click", (event) => {

    let target = event.target;

    if (target.tagName === "BUTTON" && !target.classList.contains("decimal")) {

        const display = document.querySelector(".currentDisplay");

        if (newNumber) {

            display.textContent = target.textContent;
            newNumber = false;
        } else {

            display.textContent += target.textContent;
        }
    }
});