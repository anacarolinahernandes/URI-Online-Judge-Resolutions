/* Senha Fixa */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let acesso = false;

while (acesso === false) {
  const line = parseInt(lines.shift());

  if (line === 2002) {
    console.log('Acesso Permitido');
    acesso = true;
  } else {
    console.log('Senha Invalida');
  }
}
