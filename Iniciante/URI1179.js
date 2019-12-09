/* Preenchimento de Vetor IV */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = [];
let impares = [];

for (let i = 0; i < 15; i++) {
  const n = parseInt(lines.shift());
  if (n === 2 || n % 2 === 0) {
    pares.push(n);
    if (pares.length === 5) {
      pares.forEach((par, index) => {
        console.log(`par[${index}] = ${par}`);
      });
      pares = [];
    }
  } else {
    impares.push(n);
    if (impares.length === 5) {
      impares.forEach((impar, index) => {
        console.log(`impar[${index}] = ${impar}`);
      });
      impares = [];
    }
  }
}

impares.forEach((impar, index) => {
  console.log(`impar[${index}] = ${impar}`);
});

pares.forEach((par, index) => {
  console.log(`par[${index}] = ${par}`);
});
