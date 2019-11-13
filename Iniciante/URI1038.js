var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

const codigo = parseInt(line[0]);
const qtd = parseInt(line[1]);

let valor = "";

switch (codigo) {
  case 1:
    valor = 4.0;
    break;
  case 2:
    valor = 4.5;
    break;
  case 3:
    valor = 5.0;
    break;
  case 4:
    valor = 2.0;
    break;
  case 5:
    valor = 1.5;
    break;
}

console.log(`Total: R$ ${(valor * qtd).toFixed(2)}`);
