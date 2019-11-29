/* PUM */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let n = 0; n < 4 * contador; n += 4) {
  console.log(`${n + 1} ${n + 2} ${n + 3} PUM`);
}
