/* Positivos e Média */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = [];

for (n = 1; n <= 6; n++) {
  valores.push(parseFloat(lines.shift()));
}

const positivos = valores.filter((e) => e > 0);
const somaTotal = positivos.reduce((acc, current) => acc + current);

console.log(`${positivos.length} valores positivos`);
console.log(`${(somaTotal / positivos.length).toFixed(1)}`);
