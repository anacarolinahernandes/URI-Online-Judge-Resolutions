var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
const A = parseFloat(line[0]);
const B = parseFloat(line[1]);
const C = parseFloat(line[2]);

const delta = B * B - 4 * A * C;

const resultado1 = (-B + Math.sqrt(delta)) / (2 * A);
const resultado2 = (-B - Math.sqrt(delta)) / (2 * A);

if (delta < 0 || A == 0) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${resultado1.toFixed(5)}`);
  console.log(`R2 = ${resultado2.toFixed(5)}`);
}
