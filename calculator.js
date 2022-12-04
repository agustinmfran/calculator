
let number1 = 0;
let number2 = 0;
let result = 0;


function sum(num1, num2) {
  return Number(num1) + Number(num2);
}


function subtract(num1, num2) {
  return num1 - num2;
}


function multiply(num1, num2) {
  return num1 * num2;
}


function divide(num1, num2) {
  return num1 / num2;
}


number1 = prompt("Ingresa el primer número: ");


number2 = prompt("Ingresa el segundo número: ");


let operation = prompt("Ingresa el tipo de operación que deseas realizar (sumar, restar, multiplicar o divir): ");


if (operation == "sumar") {
  result = sum(number1, number2);
} else if (operation == "restar") {
  result = subtract(number1, number2);
} else if (operation == "multiplicar") {
  result = multiply(number1, number2);
} else if (operation == "dividir") {
  result = divide(number1, number2);
}


alert("El resultado de la operación es: " + result);