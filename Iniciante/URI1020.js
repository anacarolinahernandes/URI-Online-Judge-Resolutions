var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const idade = parseInt(lines.shift());

const divisores = [
  {
    numero: 365,
    texto: 'ano(s)'
  },
  {
    numero: 30,
    texto: 'mes(es)'
  },
  {
    numero: 1,
    texto: 'dia(s)'
  }
];

let n = idade;

divisores.forEach(divisor => {
  console.log(`${parseInt(n / divisor.numero, 10)} ${divisor.texto}`);
  n %= divisor.numero;
});