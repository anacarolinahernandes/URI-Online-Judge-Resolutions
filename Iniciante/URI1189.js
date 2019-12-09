/* Área Esquerda */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const operacao = lines.shift();

let soma = 0;

for (let i = 1; i < 11; i++) {
  for (let j = 0; j < 5; j++) {
    const n = parseFloat(lines[12 * i + j]); // Qtd de colunas * linha atual + coluna atual
    if (j < i && j < 11 - i) soma += n;
  }
}

const resultado = operacao === 'S' ? soma : soma / (144 - 24) / 4;

console.log(resultado.toFixed(1));
