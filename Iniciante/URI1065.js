/* Pares entre Cinco Números */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = [];

for (n = 1; n <= 5; n++) {
  valores.push(parseInt(lines.shift()));
}

const pares = valores.filter((e) => e % 2 === 0);

console.log(`${pares.length} valores pares`);
