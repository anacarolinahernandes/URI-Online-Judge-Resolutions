/* Somando Inteiros Consecutivos */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(' ').map(Number);

const novoVetor = [line[0], line[line.length - 1]];

let soma = 0;

for (let i = 0; i < novoVetor[1]; i++) {
  soma += novoVetor[0] + i;
}

console.log(soma);
