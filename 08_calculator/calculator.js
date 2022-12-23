const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (numero1, numero2) {

  return numero1 - numero2;

};

const sum = function (array) {

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;

};

const multiply = function (array) {

  let multiplicacion = 1;
  for (let i = 0; i < array.length; i++) {
    multiplicacion = multiplicacion * array[i];
  }
  return multiplicacion;
};

const power = function (num1, num2) {

  return Math.pow(num1, num2);

};

const factorial = function (numero) {

  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }
  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
