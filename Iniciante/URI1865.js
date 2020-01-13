/* Mjölnir */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const teste = lines.shift().split(' ');

  const pessoa = teste[0];

  console.log(pessoa === 'Thor' ? 'Y' : 'N');
}
