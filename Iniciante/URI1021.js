var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valor = parseFloat(lines.shift());

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

let n = valor;

console.log("NOTAS:");

notas.forEach(nota => {
  console.log(`${parseInt(n / nota)} nota(s) de R$ ${nota.toFixed(2)}`);
  n %= nota;
});

console.log("MOEDAS:");

moedas.forEach(moeda => {
  console.log(`${parseInt(n / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
  n %= moeda;
});
