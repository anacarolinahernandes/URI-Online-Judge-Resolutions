/* Preenchimento de Vetor II */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/* Com while */

const n = parseInt(lines.shift());

let i = 0;

while (i < 1000) {
  for (let j = 0; j < n; j++) {
    if (i > 999) break;
    console.log(`N[${i}] = ${j}`);
    i++;
  }
}

/* Sem while */

const n = parseInt(lines.shift());

for (let i = 0; i < 1000; i++) {
  if (i > 999) break;
  // if (j < 1) j = n;
  console.log(`N[${i}] = ${i % n}`);
}

/* "Sprite" */

const n = parseInt(lines.shift());

for (let i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${i % n}`);
}
