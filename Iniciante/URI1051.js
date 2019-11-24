var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salario = parseFloat(lines.shift());

if (salario > 0 && salario <= 2000) {
  console.log('Isento');
} else if (salario > 2000 && salario <= 3000) {
  resto = salario - 2000;
  resultado = resto * 0.08;
  console.log(`R$ ${resultado.toFixed(2)}`);
} else if (salario > 3000 && salario <= 4500) {
  resto = salario - 3000;
  resultado = resto * 0.18 + 1000 * 0.08;
  console.log(`R$ ${resultado.toFixed(2)}`);
} else {
  resto = salario - 4500;
  resultado = resto * 0.28 + 1500 * 0.18 + 1000 * 0.08;
  console.log(`R$ ${resultado.toFixed(2)}`);
}
