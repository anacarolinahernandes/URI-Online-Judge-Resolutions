/* Quadrado de Pares */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valor = parseInt(lines.shift());

for (n = 2; n <= valor; n++) {
  if (n % 2 === 0) console.log(`${n}ˆ2 = ${Math.pow(n, 2)}`);
}
