/* Animal */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const classificacao = lines.shift();
const categoria = lines.shift();
const alimentacao = lines.shift();

const opcoes = {
  vertebrado: {
    ave: {
      carnivoro: 'aguia',
      onivoro: 'pomba'
    },
    mamifero: {
      onivoro: 'homem',
      herbivoro: 'vaca'
    }
  },
  invertebrado: {
    inseto: {
      hematofago: 'pulga',
      herbivoro: 'lagarta'
    },
    anelideo: {
      hematofago: 'sanguessuga',
      onivoro: 'minhoca'
    }
  }
};

console.log(opcoes[classificacao][categoria][alimentacao]);
