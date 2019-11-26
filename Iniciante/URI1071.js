/* Soma de Impares Consecutivos I */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const v1 = parseInt(lines.shift());
const v2 = parseInt(lines.shift());

const vetor = [v1, v2];

const novoVetor = vetor.sort((a, b) => a - b);

let soma = 0;

if (Math.abs(novoVetor[0]) - Math.abs(novoVetor[1]) !== 0) {
  for(n = novoVetor[0] + 1; n < novoVetor[1]; n++ ) {
    if (n % 2 !== 0) soma += n;
  }
}

console.log(soma);
