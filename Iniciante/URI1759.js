/* Ho Ho Ho */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

let texto = [];

for (let i = 0; i < contador; i++) {
  texto.push('Ho');
}

console.log(`${texto.join(' ')}!`);
