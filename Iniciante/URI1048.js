/* Aumento de Salário */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salario = parseFloat(lines.shift());

let novoSalario = 0;
let reajuste = 0;
let percentual = 0;

if (salario > 0 && salario <= 400) {
  percentual = 15;
  reajuste = salario * percentual / 100;
  novoSalario = salario + reajuste;
} else if (salario > 400 && salario <= 800) {
  percentual = 12;
  reajuste = salario * percentual / 100;
  novoSalario = salario + reajuste;
} else if (salario > 800 && salario <= 1200) {
  percentual = 10;
  reajuste = salario * percentual / 100;
  novoSalario = salario + reajuste;
} else if (salario > 1200 && salario <= 2000) {
  percentual = 7;
  reajuste = salario * percentual / 100;
  novoSalario = salario + reajuste;
} else {
  percentual = 4;
  reajuste = salario * percentual / 100;
  novoSalario = salario + reajuste;
}

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);
