/* Conta */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const numero = parseInt(lines.shift());

  console.log(numero % 2 === 0 ? 0 : 1);
}
