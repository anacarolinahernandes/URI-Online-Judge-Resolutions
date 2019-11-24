var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ");

const horaInicio = parseInt(line[0]);
const minutoInicio = parseInt(line[1]);
const horaFinal = parseInt(line[2]);
const minutoFinal = parseInt(line[3]);

const inicio = (horaInicio * 60) + minutoInicio;
const fim = (horaFinal * 60) + minutoFinal;

const diff = fim - inicio;

if (diff <= 0) {
  const aux = ((24 * 60) + diff);
  console.log(`O JOGO DUROU ${parseInt(aux / 60)} HORA(S) E ${aux % 60} MINUTO(S)`);
} else {
  console.log(`O JOGO DUROU ${parseInt(diff / 60)} HORA(S) E ${diff % 60} MINUTO(S)`);
}
