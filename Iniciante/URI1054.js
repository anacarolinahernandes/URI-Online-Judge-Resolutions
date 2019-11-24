var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = [];

for (n = 1; n <= 6; n++) {
  valores.push(lines.shift());
}

/* OUTRA FORMA
let positivos = 0;

valores.forEach(valor => {
  if (valor > 0) {
    positivos++;
  }
});

console.log(`${positivos} valores positivos`);

*/

const positivos = valores.filter((e) => e > 0);

console.log(`${positivos.length} valores positivos`);
