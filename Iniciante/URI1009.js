var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

console.log('TOTAL = R$', (salario + vendas * 0.15).toFixed(2));
