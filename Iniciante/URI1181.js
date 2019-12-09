/* Linha na Matriz */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

const operacao = lines.shift();

let vetor = [];

for (let i = 0; i <= contador; i++) {
  vetor = [];
  for (let j = 0; j < 12; j++) {
    const n = parseInt(lines.shift());
    vetor.push(n);
  }
}

let resultado = 0;

const somaVetor = vetor.reduce((acc, current) => acc + current);

if (operacao === 'S') {
  resultado = somaVetor;
} else {
  resultado = somaVetor / 12;
}

console.log(resultado.toFixed(1));

/* Outra Resolução */

const contador = parseInt(lines.shift());

const operacao = lines.shift();

const valores = lines.slice((12 * contador), 12 * (contador + 1));

let soma = 0;

for (let i = 0; i < 12; i++) {
  soma += parseFloat(valores[i]);
}

console.log(operacao === 'S' ? soma.toFixed(1) : (soma / 12).toFixed(1));
