var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line1 = lines.shift();
const line2 = lines.shift().split(" : ");
const line3 = lines.shift();
const line4 = lines.shift().split(" : ");

const diaInicio = parseInt(line1.slice(4)); // Para receber apenas o número
const horaInicio = parseInt(line2[0]);
const minutoInicio = parseInt(line2[1]);
const segundoInicio = parseInt(line2[2]);

const diaFim = parseInt(line3.slice(4)); // Para receber apenas o número
const horaFim = parseInt(line4[0]);
const minutoFim = parseInt(line4[1]);
const segundoFim = parseInt(line4[2]);

// Transforma tudo em segundos para trabalhar na mesma base;
const inicio = diaInicio * 86400 + horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
const fim = diaFim * 86400 + horaFim * 3600 + minutoFim * 60 + segundoFim;

// O tempo do evento será a diferença de segundos do fim com o começo;
const diff = fim - inicio;

const dia = diff / 86400; // Variável que receberá a diferença dividida pela quantia de segundos em um dia
const hora = diff % 86400; // Daqui pra frente, as variáveis recebem o resto da divisão anterior
const minuto =  hora % 3600;
const segundo = minuto % 60;

// Conversão dos tempos para as bases iniciais
console.log(`${parseInt(dia)} dia(s)`);
console.log(`${parseInt(hora / 3600)} hora(s)`);
console.log(`${parseInt(minuto / 60)} minuto(s)`);
console.log(`${parseInt(segundo)} segundo(s)`);
