var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

const pesos = [2, 3, 4, 1];

const pesoTotal = pesos.reduce((acc, current) => acc + current);

let notasComPesos = 0;

pesos.forEach((peso, index) => {
  notasComPesos += peso * line[index];
});

const media = notasComPesos / pesoTotal;

let mensagem = "";

let exame = 0;

let mediaFinal = 0;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7 || media < 5) {
  if (media >= 7) {
    mensagem = "Aluno aprovado.";
  } else {
    mensagem = "Aluno reprovado.";
  }
  console.log(mensagem);
} else {
  mensagem = "Aluno em exame.";
  console.log(mensagem);
  exame = parseFloat(lines.shift());
  console.log(`Nota do exame: ${exame.toFixed(1)}`);
  mediaFinal = (exame + media) / 2;
  if (mediaFinal > 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}
