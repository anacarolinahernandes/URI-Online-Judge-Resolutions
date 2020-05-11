/* Pula Sapo */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const primeiraLinha = lines.shift().split(' ').map(Number);
const canos = lines.shift().split(' ').map(Number);

const alturaSapo = primeiraLinha[0];
const qtdCanos = primeiraLinha[1];

let resultado = 'YOU WIN';

for (let i = 0; i < qtdCanos - 1; i++) {
  // Verifica a altura dos canos e organiza do menor pro maior, evitando nova validação
  const ordenado = [canos[i], canos[i + 1]].sort((a, b) => a - b);

  if (ordenado[0] + alturaSapo < ordenado[1]) {
    resultado = 'GAME OVER';
    break;
  }
}

console.log(resultado);

/* OUTRA SOLUÇÃO */

const primeiraLinha = lines.shift().split(' ').map(Number);
const canos = lines.shift().split(' ').map(Number);

const alturaSapo = primeiraLinha[0];
const qtdCanos = primeiraLinha[1];

let resultado = 'YOU WIN';

for (let i = 0; i < qtdCanos - 1; i++) {
  if (Math.abs(canos[i] - canos[i + 1]) > alturaSapo) {
    resultado = 'GAME OVER';
    break;
  }
}

console.log(resultado);
