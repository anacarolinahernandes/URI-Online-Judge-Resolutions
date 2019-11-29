/* Sequencia IJ 4 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;

while (i <= 2) {
  for (let j = 1; j <= 3; j++) {
    if (i.toFixed(1).endsWith('0')) {
      console.log(`I=${i.toFixed(0)} J=${(j + i).toFixed(0)}`);
    } else {
      console.log(`I=${i.toFixed(1)} J=${(j + i).toFixed(1)}`);
    }
  }
  i += 0.2;
}
