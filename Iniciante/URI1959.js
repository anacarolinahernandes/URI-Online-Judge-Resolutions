/* Polígonos Regulares Simples */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.shift().split(' ').map(Number);

const resultado = numeros.reduce((acc, current) => acc * current);

console.log(resultado);
