const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (operator && currentInput) {
                if (operator === '/' && currentInput == '0') {
                    display.textContent = 'Error';
                    currentInput = '';
                } else {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
