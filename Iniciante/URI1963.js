/* O Filme */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(' ').map(Number);

const diferenca = line[1] - line[0];

const conta = (diferenca * 100) / line[0];

console.log(`${conta.toFixed(2)}%`);
