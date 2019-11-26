/* Cálculo Simples */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcula(array) {
  var qtd = parseInt(array[1]);
  var valor = parseFloat(array[2]);

  return qtd * valor;
}

var peca1 = calcula(lines.shift().split(' '));
var peca2 = calcula(lines.shift().split(' '));

console.log('VALOR A PAGAR: R$', (peca1 + peca2).toFixed(2));
