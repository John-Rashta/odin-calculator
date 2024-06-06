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

        case "*":
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

function numbersInput(content) {

    const display = document.querySelector(".currentDisplay");
    

    if (content === ".") {

        if (display.textContent.includes(".")) {

            return;

        } else if (display.textContent) {

            display.textContent += content;
        }
    } else if (content.match(/\d/g)) {


        if (newNumber) {

            display.textContent = content;
            newNumber = false;
            replaceOperator = false;
        } else {

            display.textContent += content;
        }
    }
}

function operatorInput(content) {


    const display = document.querySelector(".currentDisplay");
    const extra = document.querySelector(".history");

    

    if (content === "=") {

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
    } else if (content.match(/[x+*/-]/g)) {

        if (replaceOperator) {

            operatorSymbol = content;
            extra.textContent = extra.textContent.slice(0, -1) + content;

        } else if (!display.textContent) {

            return;


        } else if (!Number(firstNumber)) {

            firstNumber = display.textContent;
            operatorSymbol = content;
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

            operatorSymbol = content;

            newNumber = true;
            
            replaceOperator = true;

            extra.textContent = firstNumber + operatorSymbol;

        }
    }
}

let firstNumber;
let operatorSymbol;
let secondNumber;
let newNumber = true;
let replaceOperator = false;

const numberButtons = document.querySelector(".numbers");

numberButtons.addEventListener("click", (event) => numbersInput(event.target.textContent));

const operations = document.querySelector(".operators");

operations.addEventListener("click", (event) => operatorInput(event.target.textContent));

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clear);

document.addEventListener("mousedown", (event) => event.preventDefault());

const backButton = document.querySelector(".back");

backButton.addEventListener("click", backspace);


document.addEventListener("keydown", (event) => {

    if (event.key.match(/[\d.]/g)) {


        numbersInput(event.key);

    } else if (event.key.match(/[x+*/=-]/g)) {


        operatorInput(event.key);


    } else if (event.key === "Backspace") {


        backspace();

    } else if (event.key === "Enter") {


        operatorInput("=");


    }
});

