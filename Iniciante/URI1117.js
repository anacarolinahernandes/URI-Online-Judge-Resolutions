/* Validação de Nota */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = [];

while (notas.length < 2) {
  const line = parseFloat(lines.shift());

  if (line >= 0 && line <= 10) {
    notas.push(line);
  } else {
    console.log('nota invalida');
  }
}

console.log(`media = ${((notas[0] + notas[1]) / 2).toFixed(2)}`);
