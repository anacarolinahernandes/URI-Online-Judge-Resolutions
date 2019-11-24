var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const newLine = line.sort((a, b) => b - a);

const a = parseFloat(newLine[0]);
const b = parseFloat(newLine[1]);
const c = parseFloat(newLine[2]);
const a2 = Math.pow(a, 2);
const b2 = Math.pow(b, 2);
const c2 = Math.pow(c, 2);

const lineEquals = [...new Set(line)];

if (a >= (b + c)) {
  console.log('NAO FORMA TRIANGULO');
} else {
  if (a2 === (b2 + c2)) console.log('TRIANGULO RETANGULO');
  if (a2 > (b2 + c2)) console.log('TRIANGULO OBTUSANGULO');
  if (a2 < (b2 + c2)) console.log('TRIANGULO ACUTANGULO');
  if (lineEquals.length === 1) console.log('TRIANGULO EQUILATERO');
  if (lineEquals.length === 2) console.log('TRIANGULO ISOSCELES');
}
