/* Numeração Romana para Números de Página */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());

const arabicos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = ['CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let i = 0;
let resultado = '';

while (numero > 0) {
  if (numero >= arabicos[i]) {
    numero -= arabicos[i];
    resultado += romanos[i];
  } else {
    i++;
  }
}

console.log(resultado);

/* OUTRA SOLUÇÃO */

let numero = parseInt(lines.shift());

let romano = '';

while (numero > 0) {
  if (numero >= 900) {
    romano += 'CM';
    numero -= 900;
  } else if (numero >= 500) {
    romano += 'D';
    numero -= 500;
  } else if (numero >= 400) {
    romano += 'CD';
    numero -= 400;
  } else if (numero >= 100) {
    romano += 'C';
    numero -= 100;
  } else if (numero >= 90) {
    romano += 'XC';
    numero -= 90;
  } else if (numero >= 50) {
    romano += 'L';
    numero -= 50;
  } else if (numero >= 40) {
    romano += 'XL';
    numero -= 40;
  } else if (numero >= 10) {
    romano += 'X';
    numero -= 10;
  } else if (numero === 9) {
    romano += 'IX';
    numero -= 9;
  } else if (numero >= 5) {
    romano += 'V';
    numero -= 5;
  } else if (numero === 4) {
    romano += 'IV';
    numero -= 5;
  } else {
    romano += 'I';
    numero -= 1;
  }
}

console.log(romano);
