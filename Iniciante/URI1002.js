/* Área do Círculo */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());

console.log('A=' + (3.14159 * Math.pow(r, 2)).toFixed(4));
