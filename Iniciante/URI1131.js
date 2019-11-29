/* Grenais */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let gols = [];
let vitoriaInter = 0;
let vitoriaGremio = 0;

let i = 1;

while (i !== 2) {
  const line = lines.shift().split(' ');
  gols = gols.concat(line).map(Number);
  console.log(`Novo grenal (1-sim 2-nao)`);
  i = parseInt(lines.shift());
}

for (let j = 0; j < gols.length; j += 2) {
  if (gols[j] > gols[j + 1]) {
    vitoriaInter += 1;
  } else if (gols[j + 1] > gols[j]) {
    vitoriaGremio += 1;
  }
}

const totalJogos = gols.length / 2;
const empate = totalJogos - (vitoriaInter + vitoriaGremio);

console.log(`${totalJogos} grenais`);
console.log(`Inter:${vitoriaInter}`);
console.log(`Gremio:${vitoriaGremio}`);
console.log(`Empates:${empate}`);
if (empate < totalJogos) {
  console.log(`${vitoriaInter > vitoriaGremio ? 'Inter venceu mais' : 'Gremio venceu mais'}`);
} else {
  console.log('Nao houve vencedor');
}
