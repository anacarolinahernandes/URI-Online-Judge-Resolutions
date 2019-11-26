/* Sort Simples */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const newLine = [...line].sort((a, b) => a - b);

console.log(newLine.join('\n'));
console.log('');
console.log(line.join('\n'));
