const firstNum = document.getElementById("first-operand");
const secondNum = document.getElementById("second-operand");

function operationAdd(firstOperand, secondOperand) {
    let sum = parseFloat(firstOperand) + parseFloat(secondOperand);
    document.getElementById("total").value = sum;
}

function operationSubtract(firstOperand, secondOperand) {
    let difference = parseFloat(firstOperand) - parseFloat(secondOperand);
    document.getElementById("total").value = difference;
}

function operationMultiply(firstOperand, secondOperand) {
    let product = parseFloat(firstOperand) * parseFloat(secondOperand);
    document.getElementById("total").value = product;
}

function operationDivide(firstOperand, secondOperand) {
    let quotient = parseFloat(firstOperand) / parseFloat(secondOperand);
    document.getElementById("total").value = quotient;
}