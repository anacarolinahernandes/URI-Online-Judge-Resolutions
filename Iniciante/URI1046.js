var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const inicio = parseInt(line[0]);
const fim = parseInt(line[1]);

if (inicio > fim) { 
  console.log(`O JOGO DUROU ${24 - (inicio - fim)} HORA(S)`);
} else if (fim > inicio) {
  console.log(`O JOGO DUROU ${fim - inicio} HORA(S)`);
} else {
  console.log('O JOGO DUROU 24 HORA(S)');
}
