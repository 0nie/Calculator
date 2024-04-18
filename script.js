// Initialize variables
let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let memory = 0;

// Function to update the display with current and previous operands
function updateDisplay() {
    const previousOperandElement = document.querySelector('[data-previous-operand]');
    const currentOperandElement = document.querySelector('[data-current-operand]');
    currentOperandElement.innerText = currentOperand;
    previousOperandElement.innerText = previousOperand + (operation ? ' ' + operation : ''); // Append operation if it exists
}

// Function to append a number to the current operand
function appendNumber(number) {
    // Prevent appending multiple decimal points
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number.toString();
    updateDisplay();
}

// Function to choose an operation and compute if necessary
function chooseOperation(op) {
    // If no current operand, return
    if (currentOperand === '') return;
    // If previous operand exists, compute the result
    if (previousOperand !== '') {
        compute();
    }
    // Set operation, move current operand to previous, reset current operand
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

// Function to perform the computation based on the chosen operation
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    // If either operand is not a number, return
    if (isNaN(prev) || isNaN(current)) return;
    // Perform computation based on the operation
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    // Update current operand with the result, reset operation and previous operand
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// Function to compute the square root of the current operand
function sqrt() {
    currentOperand = Math.sqrt(parseFloat(currentOperand));
    updateDisplay();
}

// Function to compute the percentage of the current operand
function percentage() {
    currentOperand = parseFloat(currentOperand) / 100;
    updateDisplay();
}

// Function to clear the memory
function memoryClear() {
    memory = 0;
    updateDisplay();
}

// Function to add the current operand to memory
function memoryAdd() {
    memory += parseFloat(currentOperand) || 0;
    updateDisplay();
}

// Function to subtract the current operand from memory
function memorySubtract() {
    memory -= parseFloat(currentOperand) || 0;
    updateDisplay();
}

// Function to recall the value from memory and set it as the current operand
function memoryRecall() {
    currentOperand = memory.toString();
    updateDisplay();
}

// Function to clear the display and reset all variables
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Function to delete the last character from the current operand
function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

// Function to toggle the sign of the current operand
function toggleSign() {
    currentOperand = -parseFloat(currentOperand);
    updateDisplay();
}
