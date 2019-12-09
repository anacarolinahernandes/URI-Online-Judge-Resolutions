/* Fibonacci Fácil */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = parseInt(lines.shift());
const numeros = [0, 1];

for (let i = 0; i < line - 2; i++) {
  numeros.push(numeros[numeros.length - 1] + numeros[numeros.length - 2]);
}

console.log(numeros.join(' '));
