/* Ultrapassando Z */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const x = parseInt(lines.shift());
let z = parseInt(lines.shift());
let qtd = 0;
let soma = 0;

while (z <= x) {
  z = parseInt(lines.shift());
}

for (let i = x; soma < z; i++) {
  soma += i;
  qtd++;
}

console.log(qtd);
