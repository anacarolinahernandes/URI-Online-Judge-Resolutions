/* Quadrado e ao Cubo */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let n = 1; n <= contador; n++) {
  console.log(`${n} ${Math.pow(n, 2)} ${Math.pow(n, 3)}`);
}
