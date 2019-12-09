/* Crescimento Populacional */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const vetor = lines.shift().split(' ');
  let PA = parseInt(vetor[0]);
  let PB = parseInt(vetor[1]);
  const GA = parseFloat(vetor[2]) / 100;
  const GB = parseFloat(vetor[3]) / 100;

  let soma = 1;

  for (let j = 0; j < 100; j++, soma++) {
    PA += parseInt(PA * GA);
    PB += parseInt(PB * GB);

    if (PA > PB) break;
  }

  console.log(soma > 100 ? 'Mais de 1 seculo.' : `${soma} anos.`);
}
