var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var notaA = A * 3.5;
var notaB = B * 7.5;
var media = (notaA + notaB) / 11;

console.log('MEDIA =', media.toFixed(5));
