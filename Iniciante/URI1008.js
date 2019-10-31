var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());
var horas = parseInt(lines.shift());
var salario = parseFloat(lines.shift());

console.log('NUMBER =', numero);
console.log('SALARY = U$', (horas * salario).toFixed(2));
