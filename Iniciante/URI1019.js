var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tempo = parseInt(lines.shift());

const divisores = [3600, 60, 1];

let n = tempo;
const toLog = [];

divisores.forEach(divisor => {
  toLog.push(parseInt(n / divisor, 10));
  n %= divisor;
});

console.log(toLog.join(':'));

// O que está acontecendo:
// 556 / 3600 = 0 => resta 556;
// 556 / 60 = 9 => resta 16;
// 16 / 1 = 16;

// OUTRO JEITO:
// var hora = parseInt(tempo / 3600);
// var minutos = parseInt((tempo % 3600) / 60);
// var segundos = parseInt((tempo % 3600) % 60);
// console.log(`${hora}:${minutos}:${segundos}`);
