/* Múltiplos de 13 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n1 = parseInt(lines.shift());
const n2 = parseInt(lines.shift());

const vetor = [n1, n2];

const novoVetor = vetor.sort((a, b) => a - b);

let soma = 0;

for (let n = novoVetor[0]; n <= novoVetor[1]; n++) {
  if (n % 13 !== 0) soma += n;
}

console.log(soma);
