/* Resto da Divisão */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n1 = parseInt(lines.shift());
const n2 = parseInt(lines.shift());

const vetor = [n1, n2];

const novoVetor = vetor.sort((a, b) => a - b);

for (let n = novoVetor[0] + 1; n < novoVetor[1]; n++) {
  if (n % 5 === 2 || n % 5 === 3) console.log(n);
}
