/* Sequência S II */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/* Resolução 1 */

let S = 1;
let cont = 2;

for (let i = 3; i <= 39; i++) {
  if (i % 2 === 1) {
    S += i / cont;
    cont *= 2;
  }
}

console.log(S.toFixed(2));

/* Resolução 2 */

let soma = 1;

for (let i = 1, j = 1; i <= 39; i += 2, j++) {
  soma += (i + 2) / Math.pow(2, j);
}

console.log(soma.toFixed(2));

/* Resolução 3 */

let soma = 1;

for (let i = 1, j = 1; i <= 39; i += 2, j *= 2) {
  soma += (i + 2) / (j * 2);
}

console.log(soma.toFixed(2));
