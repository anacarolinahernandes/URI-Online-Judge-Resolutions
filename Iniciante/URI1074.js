/* Par ou Ímpar */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let numero = 1; numero <= contador; numero++) {
  let e = parseInt(lines.shift());
  if (e === 0) {
    console.log('NULL');
  } else {
    console.log(`${e % 2 !== 0 ? 'ODD' : 'EVEN'} ${e > 0 ? 'POSITIVE' : 'NEGATIVE'}`);
  }
}
