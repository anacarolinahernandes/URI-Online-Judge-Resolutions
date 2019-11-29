/* Soma de Ímpares Consecutivos II */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

let vetor = [];
let novoVetor = [];

for (i = 1; i <= contador; i++) {
  let soma = 0;
  vetor = lines.shift().split(' ');
  novoVetor = vetor.sort((a, b) => a - b);

  for (n = parseInt(novoVetor[0]) + 1; n < novoVetor[1]; n++) {
    if (n % 2 !== 0) soma += n;
  }
  console.log(soma);
}
