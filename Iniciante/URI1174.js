/* Seleçao em Vetor I */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < 100; i++) {
  const n = parseFloat(lines.shift());

  if (n <= 10) {
    console.log(`A[${i}] = ${n.toFixed(1)}`);
  }
}
