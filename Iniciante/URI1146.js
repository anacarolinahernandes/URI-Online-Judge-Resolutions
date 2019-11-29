/* Sequências Crescentes */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = parseInt(lines.shift()); i !== 0; i = parseInt(lines.shift())) {
  const numeros = [];
  for (let j = 1; j <= i; j++) {
    numeros.push(j);
  }
  console.log(numeros.join(' '));
}
