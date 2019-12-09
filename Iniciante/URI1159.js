/* Soma de Pares Consecutivos */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = parseInt(lines.shift());

while (line !== 0) {
  let soma = 0;

  for (let i = line; i < line + 10; i++) {
    if (i % 2 === 0) soma += i;
  }

  console.log(soma);
  line = parseInt(lines.shift());
}
