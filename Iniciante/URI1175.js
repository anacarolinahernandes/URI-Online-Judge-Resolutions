/* Troca em Vetor I */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = [];

for (let i = 0, j = 19; i < 10; i++, j--) {
  numeros[i] = parseInt(lines[j]);
  numeros[j] = parseInt(lines[i]);
}

numeros.forEach((numero, index) => {
  console.log(`N[${index}] = ${numero}`);
});
