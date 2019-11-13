var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const a = parseFloat(line[0]);
const b = parseFloat(line[1]);
const c = parseFloat(line[2]);

const perimetro = a + b + c;
const area = (a + b) / 2 * c;

if ((Math.abs(b - c )) < a  && a < (b + c)) {
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  console.log(`Area = ${area.toFixed(1)}`);
}
