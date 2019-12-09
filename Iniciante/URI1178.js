/* Preenchimento de Vetor III */

/* Observação: wrong answer 5% */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = lines.shift();

for (let i = 0, j = n; i < 100; i++, j = j / 2.0) {
  console.log(`N[${i}] = ${(j - 0.000001).toFixed(4)}`);
}
