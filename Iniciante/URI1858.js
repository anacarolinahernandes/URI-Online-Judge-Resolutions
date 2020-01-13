/* A Resposta de Theon */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());
const vetor = lines.shift().split(' ').map(Number);

const menor = Math.min(...vetor);

console.log(vetor.indexOf(menor) + 1);
