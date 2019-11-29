/* Médias Ponderadas */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 1; i <= contador; i++) {
  const line = lines.shift().split(' ');
  const valor1 = parseFloat(line[0]);
  const valor2 = parseFloat(line[1]);
  const valor3 = parseFloat(line[2]);
  const media = (valor1 * 2 + valor2 * 3 + valor3 * 5) / 10;
  console.log(media.toFixed(1));
}
