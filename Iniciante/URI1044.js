/* Múltiplos */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const a = parseInt(line[0]);
const b = parseInt(line[1]);

if ( a % b === 0 || b % a === 0) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}
