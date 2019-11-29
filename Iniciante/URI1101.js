/* Sequência de Números e Soma */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = true;

while (i === true) {
  let soma = 0;
  let numeros = [];
  vetor = lines.shift().split(' ');
  novoVetor = vetor.sort((a, b) => a - b);

  if (novoVetor[0] <= 0 || novoVetor[1] <= 0) {
    i = false;
  } else {
    for (n = parseInt(novoVetor[0]); n <= novoVetor[1]; n++) {
      numeros.push(n);
      soma += n;
    }
    console.log(`${numeros.join(' ')} Sum=${soma}`);
  }
}
