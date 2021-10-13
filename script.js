class Calculator {
    // Where to place display text in calculator
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    // Clears the content of the screen
    clear() {

    }
    // Deletes a character on the screen
    delete() {

    }
    // When you clcik a number it will be added to a screen
    appendNumber(number) {

    }
    // When the suer chooses an operation
    chooseOperation(operation) {

    }
    // For when the calculator has to do the math for what the user entered
    compute() {

    }
    // To update the screen when an operation has been done
    updateDisplay() {
        
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


