/* Bob Conduite */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const line = lines.shift().split(' ');

  console.log(line)
}

