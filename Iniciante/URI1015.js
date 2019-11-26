/* Distância Entre Dois Pontos */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ponto1 = lines.shift().split(" "); // [x1, y1]
var ponto2 = lines.shift().split(" "); // [x2, y2]

var difX = Math.pow(parseFloat(ponto2[0]) - parseFloat(ponto1[0]), 2);
var difY = Math.pow(parseFloat(ponto2[1]) - parseFloat(ponto1[1]), 2);

var distancia = Math.sqrt(difX + difY);

console.log(distancia.toFixed(4));
