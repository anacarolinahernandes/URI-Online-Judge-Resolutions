/* Sequencia IJ 3 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;
let j = 7;

while (i <= 9) {
  for (let k = 0; k < 3; k++) {
    console.log(`I=${i} J=${j}`);
    j--;
  }
  j += 5;
  i += 2;
}
