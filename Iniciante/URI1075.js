/* Resto 2 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = parseInt(lines.shift());

for (let i = 0; i <= 10000; i++) {
  if (i % line === 2) {
    console.log(i);
  }
}
