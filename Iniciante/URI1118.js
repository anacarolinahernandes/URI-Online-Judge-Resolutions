/* Várias Notas Com Validação */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = [];

let i = 1;

while (i !== 2) {
  if (i !== 1) {
    console.log(`novo calculo (1-sim 2-nao)`);
    i = parseInt(lines.shift());
  } else {
    const line = parseFloat(lines.shift());

    if (notas.length === 2) {
      console.log(`media = ${((notas[0] + notas[1]) / 2).toFixed(2)}`);
      console.log(`novo calculo (1-sim 2-nao)`);
      i = line;
      notas = [];
    } else if (line >= 0 && line <= 10) {
      notas.push(line);
    } else {
      console.log('nota invalida');
    }
  }
}
