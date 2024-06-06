function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function divide(a, b) {


        if (b === 0) {


            alert("Can't divide by 0");
            return "NO";

        }

        return a / b;
    
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
    const extra = document.querySelector(".history");
    display.textContent = "";
    extra.textContent = "";


}

function backspace() {

    const display = document.querySelector(".currentDisplay");

    if (display.textContent) {

        display.textContent = display.textContent.slice(0,-1);
    }

    
}

function round(number) {

    let stringNumber = number.toString();

    if (!stringNumber.includes(".")) {

        return number;
    }

    numberArray = stringNumber.split(".");
    
    if (numberArray[1].length < 5) {

        return number;
    } else {

        return number.toFixed(4);
    }


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
    const extra = document.querySelector(".history");

    if (target.tagName === "BUTTON" && !target.classList.contains("operate")) {

        
        if (replaceOperator) {

            operatorSymbol = target.textContent;
            extra.textContent = extra.textContent.slice(0, -1) + target.textContent;

        } else if (!display.textContent) {

            return;


        } else if (!Number(firstNumber)) {

            firstNumber = display.textContent;
            operatorSymbol = target.textContent;
            newNumber = true;
            replaceOperator = true;
            
            extra.textContent = firstNumber + operatorSymbol;

        } else if (!Number(secondNumber)) {

            let first = Number(firstNumber);
            let second = Number(display.textContent);

            let result = operate(first, second, operatorSymbol);

            if (result === "NO") {

                clear();
                return;
            }

            result = round(result);

            firstNumber = result;

            display.textContent = result;

            second = undefined;

            operatorSymbol = target.textContent;

            newNumber = true;
            
            replaceOperator = true;

            extra.textContent = firstNumber + operatorSymbol;

        }


    }

    if (target.classList.contains("operate")) {

        if(!Number(firstNumber)) {

            return;
        }  else {
        
            let first = Number(firstNumber);
            let second = Number(display.textContent);

            let result = operate(first, second, operatorSymbol);

            if (result === "NO") {

                return;
            }

            result = round(result);

            extra.textContent = first + operatorSymbol + second + "=";

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

let backButton = document.querySelector(".back");

backButton.addEventListener("click", backspace);

/*
document.addEventListener("keydown", (event) => {

    if (event.key.match(/[\d*+-/=.]/g)) {


    } else if (event.key === "Backspace") {

    } else if (event.key === "Enter") {


    }
})

*/