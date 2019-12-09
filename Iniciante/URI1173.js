/* Preenchimento de Vetor I */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = parseInt(lines.shift());

const vetor = [];

for (let i = 0; i < 10; i++) {
  if (vetor.length === 0) {
    vetor.push(line);
    console.log(`N[${i}] = ${line}`);
  } else {
    let n = vetor[i - 1] * 2;
    vetor.push(n);
    console.log(`N[${i}] = ${n}`);
  }
}
