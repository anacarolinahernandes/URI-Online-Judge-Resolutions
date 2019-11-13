var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var tempo = distancia * 2;

console.log(`${tempo} minutos`);
