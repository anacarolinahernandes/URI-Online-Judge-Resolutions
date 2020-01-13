/* Tomadas */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tomadas = lines.shift().split(' ').map(Number);

const total = tomadas.reduce((acc, current) => acc + current) - 3;

console.log(total);
