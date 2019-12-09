/* Substituição em Vetor I */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const newLines = lines.map(Number);

newLines.forEach((newLine, index) => {
  if (newLine <= 0) {
    newLine = 1;
  }
  console.log(`X[${index}] = ${newLine}`);
});
