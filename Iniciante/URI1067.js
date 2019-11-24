var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valor = parseInt(lines.shift());

for (n = 1; n <= valor; n += 2) {
  console.log(n);
}
