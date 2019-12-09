/* Soma de Ímpares Consecutivos III */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

let vetor = [];

for (let i = 1; i <= contador; i++) {
  let soma = 0;
  vetor = lines.shift().split(' ').map(Number);
  const x = vetor[0];
  const y = vetor[1];

  for (let n = 0; n < y * 2; n++) {
    if ((x + n) % 2 !== 0) soma += n + x;
  }
  console.log(soma);
}
