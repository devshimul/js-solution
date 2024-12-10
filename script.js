//Get user input
let firstNumber = prompt("Enter your first number : ");
firstNumber = Number(firstNumber);

let secondNumber = prompt("Enter your first number : ");
secondNumber = Number(secondNumber);

let operation = prompt(
  "Type your mathmatical operation type, between 'add, sub, multiply, devide...!'"
);
// Simple math operation using function declaration
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// Parent function for math calculation
function calculation(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "sub") {
    const result = sub(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operation === "devide") {
    const result = divide(a, b);
    return result;
  } else {
    console.log("Please type valid number or valid operation type..!");
    alert("Please type valid number or valid operation type..!");
  }
}

const mathOperation = calculation(firstNumber, secondNumber, operation);
console.log(mathOperation);
