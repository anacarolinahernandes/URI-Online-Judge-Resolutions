/* Área Superior */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const operacao = lines.shift();

let soma = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 12; j++) {
    const n = parseFloat(lines.shift());
    if (j > i && j < 11 - i) soma += n;
  }
}

const resultado = operacao === 'S' ? soma : soma / (60 / 2);

console.log(resultado.toFixed(1));
