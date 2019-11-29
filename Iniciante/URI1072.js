/* Intervalo 2 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

const numeros = [];

for (n = 1; n <= contador; n++) {
  numeros.push(parseInt(lines.shift()));
}

const intervalo = numeros.filter(e => e >= 10 && e <= 20);

console.log(`${intervalo.length} in`);
console.log(`${contador - intervalo.length} out`);
