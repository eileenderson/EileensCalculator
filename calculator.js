const add = function(num1, num2) {
    return num1 + num2;
};
const divide = function(num1, num2) {
    return num1 / num2;
};


const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(num1) {
    let total = 0;
    for (let i = 0; i < num1.length; i++) {
        total = total + num1[i];
    }
    return total;
};

const multiply = function(num1, num2) {
   // let total = 1;
   // for (let i = 0; i < num1.length; i++) {
   //     total = total * num1[i];
   // }
    return num1*num2;
};

const power = function(num1, num2) {
    return Math.pow(num1, num2);
};

const factorial = function(n) {
    var f = [];

    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;

};

function doMath(type) {
    previousValue = currentNum.value;
    operand = type;


}
let operand = '';
let previousValue = 0;
let currentNum = document.getElementById('txtEntry');

function getTotal() {
    console.log(operand);
    console.log(previousValue);
    switch (operand) {
        case "Add":
            currentNum.value = add(previousValue, currentNum.value);
            clearOperand();
            break;
        case "Subtract":
            currentNum.value = subtract(previousValue, currentNum.value);
            clearOperand();
            break;
        case "Divide":
            currentNum.value = divide(previousValue, currentNum.value);
            clearOperand();
            break;
        case "Multiply":
            currentNum.value = multiply(previousValue, currentNum.value);
            clearOperand();
            break;
        default:
            currentNum.innerText = 0;
            clearOperand();
            break;
    }
    console.log(currentNum.value);

}

function clearOperand() {
    operand = '';
}

function Clear() {
    currentNum.value = '';
}

function WriteNumber(number) {

    if (operand !== '') {
        currentNum.value = '';
    }
    if (currentNum.value > 0) {
        currentNum.value = currentNum.value + number;
    } else
        currentNum.value = number;
        
}


// Do not edit below this line
//module.exports = {
//add,
//subtract,
//sum,
//multiply,
//power,
//factorial
//};