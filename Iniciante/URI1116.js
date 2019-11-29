/* Dividindo X por Y */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 1; i <= contador; i++) {
  const line = lines.shift().split(' ');
  const vetor = line.map(Number);

  if (vetor[1] === 0) {
    console.log('divisao impossivel');
  } else {
    console.log((vetor[0] / vetor[1]).toFixed(1));
  }
}
