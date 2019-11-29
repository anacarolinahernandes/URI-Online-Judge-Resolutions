/* Maior e Posição */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = [];

for (let i = 1; i <= 100; i++) {
  numeros.push(parseInt(lines.shift()));
}

const maior = Math.max(...numeros);

console.log(maior);
console.log(numeros.indexOf(maior) + 1);
