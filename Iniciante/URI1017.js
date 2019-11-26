/* Gasto de Combustível */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

var combustivel = (velocidade * tempo) / 12;

console.log(combustivel.toFixed(3));
