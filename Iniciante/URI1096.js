/* Sequencia IJ 2 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;

while (i <= 9) {
  for (let j = 7; j >= 5; j--) {
    console.log(`I=${i} J=${j}`);
  }
  i += 2;
}
