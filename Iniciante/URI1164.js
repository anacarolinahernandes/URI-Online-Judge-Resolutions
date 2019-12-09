/* Número Perfeito */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const n = parseInt(lines.shift());

  let soma = 0;

  for (let j = 1; j <= n / 2; j++) {
    if (n % j === 0) {
      soma += j;
    }
  }
  console.log(soma === n ? `${n} eh perfeito` : `${n} nao eh perfeito`);
}
