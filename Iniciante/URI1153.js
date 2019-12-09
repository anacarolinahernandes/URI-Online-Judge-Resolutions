/* Fatorial Simples */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/* Resolução 1 - Recursividade */

const line = parseInt(lines.shift());

function fatorial(n) {
  if (n <= 1) return n;
  return n * fatorial(n - 1);
}

console.log(fatorial(line));

/* Resolução 2 - Simples */

const line = parseInt(lines.shift());

let fat = 1;

for (let i = 2; i <= line; i++) { // Colocando i = 2 e não i = 1 diminui uma iteração do loop
  fat *= i;
}

console.log(fat);

/* Resolução 3 - Simples */

const line = parseInt(lines.shift());

let fat = 1;

for (let i = line; i > 1; i--) {
  fat *= i;
}

console.log(fat);
