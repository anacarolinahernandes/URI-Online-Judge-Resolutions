/* Converter para Hexadecimal */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numero = parseInt(lines.shift());

const hexadecimal = numero.toString(16);

console.log(hexadecimal.toUpperCase());
