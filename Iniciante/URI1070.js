/* Seis Números Ímpares */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valor = parseInt(lines.shift());

for (n = valor; n <= valor + 11; n += 1) {
  if (n % 2 !== 0) console.log(n);
}
