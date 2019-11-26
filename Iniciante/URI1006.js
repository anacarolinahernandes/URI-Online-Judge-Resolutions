/* Média 2 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

function calculaNota(valor, peso) {
  return valor * peso;
}

var notaA = calculaNota(A, 2);
var notaB = calculaNota(B, 3);
var notaC = calculaNota(C, 5);

var media = (notaA + notaB + notaC) / 10;

console.log('MEDIA =', media.toFixed(1));
