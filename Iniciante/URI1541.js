/* Construindo Casas */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
  const line = lines.shift().split(' ');
  const vetor = line.map(Number);

  if (vetor[0] === 0) break;

  const area = vetor[0] * vetor[1];

  const total = Math.sqrt((area * 100) / vetor[2]);

  console.log(parseInt(total));
}
