/* Idades */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const idades = [];

let i = parseInt(lines.shift());

while (i >= 0) {
  idades.push(i);
  i = parseInt(lines.shift());
}

const totalIdades = idades.reduce((acc, current) => acc + current);

const media = totalIdades / idades.length;

console.log(media.toFixed(2));
