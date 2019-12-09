/* Vai Ter Copa? */

/* Observação: wrong answer 5% */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
  const line = parseInt(lines.shift());

  if (line === 0) console.log('vai ter copa!');
  else console.log('vai ter duas!');
}
