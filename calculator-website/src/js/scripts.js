function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateFactorial() {
    const display = document.getElementById('display');
    try {
        const num = eval(display.value);
        if (num < 0) {
            display.value = 'Error';
            return;
        }
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        display.value = factorial;
    } catch (e) {
        display.value = 'Error';
    }
}

function calculatePower() {
    const display = document.getElementById('display');
    try {
        const [base, exponent] = display.value.split('^');
        display.value = Math.pow(eval(base), eval(exponent));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sin(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    try {
        display.value = Math.cos(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateTan() {
    const display = document.getElementById('display');
    try {
        display.value = Math.tan(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}