/* Experiências */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for (let i = 1; i <= contador; i++) {
  const line = lines.shift();
  if (line.includes('C')) {
    totalCoelhos += parseInt(line.slice(0, 2));
  } else if (line.includes('R')) {
    totalRatos += parseInt(line.slice(0, 2));
  } else {
    totalSapos += parseInt(line.slice(0, 2));
  }
}

let totalCobaias = totalCoelhos + totalRatos + totalSapos;

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${(totalCoelhos * 100 / totalCobaias).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(totalRatos * 100 / totalCobaias).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(totalSapos * 100 / totalCobaias).toFixed(2)} %`);
