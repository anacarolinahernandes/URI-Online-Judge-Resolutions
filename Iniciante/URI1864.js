/* Nossos Dias Nunca Voltarão */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quote = 'LIFE IS NOT A PROBLEM TO BE SOLVED';

const number = parseInt(lines.shift());

console.log(quote.slice(0, number));
