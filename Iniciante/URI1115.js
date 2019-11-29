/* Quadrante */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = true;

while (i === true) {
  const line = lines.shift().split(' ').map(Number); 
  const x = line[0];
  const y = line[1];

  if (x === 0 || y === 0) {
    i = false;
  } else {
    if (x > 0 && y > 0) {
      console.log("primeiro");
    } else if (x < 0 && y > 0) {
      console.log("segundo");
    } else if (x < 0 && y < 0) {
      console.log("terceiro");
    } else if (x > 0 && y < 0) {
      console.log("quarto");
    }
  }
}
