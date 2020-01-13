/* Tri-du */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const cartas = lines.shift().split(' ').map(Number);

const proxima = Math.max(...cartas);

console.log(proxima);
