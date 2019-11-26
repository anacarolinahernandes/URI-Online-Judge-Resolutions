/* Cédulas */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

const notas = [100, 50, 20, 10, 5, 2, 1];

let n = valor;

console.log(valor);

notas.forEach(nota => {
  console.log(`${parseInt(n / nota)} nota(s) de R$ ${nota},00`);
  n %= nota;
});
