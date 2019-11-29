/* Tipo de Combustível */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let alcool = 0;
let gasolina = 0;
let diesel = 0;

let i = 1;

while (i !== 4) {
  i = parseInt(lines.shift());
  switch (i) {
    case 1:
      alcool++;
      break;
    case 2:
      gasolina++;
      break;
    case 3:
      diesel++;
      break;
    case 4:
      i = 4;
      break;
    default:
      break;
  }
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
