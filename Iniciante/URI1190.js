/* Área Direita */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const operacao = lines.shift();

let soma = 0;

for (let i = 1; i < 12; i++) {
  for (let j = 7; j < 12; j++) {
    const n = parseFloat(lines[12 * i + j]);
    if (j > i && j > 11 - i) soma += n;
  }
}

const resultado = operacao === 'S' ? soma : soma / (60 / 2);

console.log(resultado.toFixed(1));
