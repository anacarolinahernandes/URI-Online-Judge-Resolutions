var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(' ');
var A = parseInt(line[0]);
var B = parseInt(line[1]);
var C = parseInt(line[2]);

var maior = Math.max(A, B, C);

console.log(`${maior} eh o maior`);
