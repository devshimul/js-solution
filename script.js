/*
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
*/
const products = [
  { id: 1, name: "Smart Phone", Variant: "USA", price: 48000 },
  { id: 2, name: "Laptop PC", Variant: "USA", price: 65000 },
  { id: 3, name: "Desktop Computer", Variant: "USA", price: 35000 },
  { id: 4, name: "Tablet", Variant: "USA", price: 15000 },
  { id: 5, name: "Mackbook air", Variant: "USA", price: 148000 },
  { id: 6, name: "Lenovo Laptop", Variant: "USA", price: 67000 },
  { id: 7, name: "HP PC", Variant: "USA", price: 87000 },
  { id: 8, name: "Oppo Phone", Variant: "USA", price: 27000 },
];

// for (let i = 0; i < products.length; i++) {
//   let product = products[i];
//   console.log(product);
// }

function getPhone(products, productName) {
  const phone = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(productName.toLowerCase())) {
      phone.push(product);
    }
  }
  return phone;
}
const productName = getPhone(products, "smart");
console.log(productName);
