/* Número Primo */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const n = parseInt(lines.shift());
  let divisores = 0;

  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      divisores++;
      break;
    }
  }

  console.log(divisores > 0 ? `${n} nao eh primo` : `${n} eh primo`);
}
