/* Há Muito, Muito Tempo Atrás */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const qtd = parseInt(lines.shift());

for (i = 0; i < qtd; i++) {
  const anos = parseInt(lines.shift());

  const conta = 2015 - anos;

  if (conta > 0) {
    console.log(`${conta} D.C.`);
  } else {
    console.log(`${Math.abs(conta - 1)} A.C.`);
  }
}
