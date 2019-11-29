/* Sequência Lógica 2 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(' ').map(Number);

let numeros = [];

for (let i = 1; i <= line[1]; i++) {
  numeros.push(i);
  if (numeros.length === line[0]) {
    console.log(`${numeros.join(' ')}`);
    numeros = [];
  }
}

if (numeros.length > 0) {
  console.log(numeros.join(' '));
}
