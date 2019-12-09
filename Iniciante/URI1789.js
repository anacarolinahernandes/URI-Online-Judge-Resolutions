/* A Corrida de Lesmas */

/* Observação: runtime error */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
  const contador = parseInt(lines.shift());

  const lesmas = lines.shift().split(' ').map(Number);

  const maior = Math.max(...lesmas);

  switch (true) {
    case (maior < 10):
      console.log('1');
      break;
    case (maior >= 10 && maior < 20):
      console.log('2');
      break;
    case (maior >= 20):
      console.log('3');
      break;
    default:
      break;
  }
}
