/* Números Pares */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (n = 2; n <= 100; n += 2) {
  console.log(n);
}
