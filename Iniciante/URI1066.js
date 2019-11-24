var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = [];

for (n = 1; n <= 5; n++) {
  valores.push(parseInt(lines.shift()));
}

const pares = valores.filter((e) => e % 2 === 0);

const semZero = valores.filter((e) => e !== 0);
const positivos = semZero.filter((e) => e > 0);

console.log(`${pares.length} valor(es) par(es)`);
console.log(`${valores.length - pares.length} valor(es) impar(es)`);
console.log(`${positivos.length} valor(es) positivo(s)`);
console.log(`${semZero.length - positivos.length} valor(es) negativo(s)`);

