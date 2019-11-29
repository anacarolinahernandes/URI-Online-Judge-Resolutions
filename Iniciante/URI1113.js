/* Crescente e Decrescente */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = true;

while (i === true) {
  const line = lines.shift().split(' '); 
  const vetor = line.map(Number); // Transforma o array de strings em inteiros

  if (vetor[0] === vetor[1]) {
    i = false;
  } else {
    const mensagem = vetor[0] < vetor[1] ? 'Crescente' : 'Decrescente';
    console.log(mensagem);
  }
}
