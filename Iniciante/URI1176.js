/* Fibonacci em Vetor */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const fib = [0, 1];

for (let i = 0; i < 59; i++) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]); // Criando a sequência de Fibonacci
}

const contador = parseInt(lines.shift());

for (let j = 0; j < contador; j++) {
  const n = parseInt(lines.shift());

  console.log(`Fib(${n}) = ${fib[n]}`);
}

/* Solução Simplificada */

const contador = parseInt(lines.shift());

for (let i = 0; i < contador; i++) {
  const numero = parseInt(lines.shift());
  let anterior = 0;
  let atual = 1;

  for (let j = 0; j < numero; j++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  console.log(`Fib(${numero}) = ${anterior}`);
}
