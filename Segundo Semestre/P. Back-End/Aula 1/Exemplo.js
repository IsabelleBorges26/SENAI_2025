/*
Tipo de variáveis: 
const - escopo global e o valor não muda
var - escopo global e o valor alterado
let - escopo local e o valor alterado
typeof() - Indica o tipo da variável
*/

const  numero = 100;
var nome = "Isabelle";
var idade = 50;
var altura = 1.80;
var cnh = true;

console.log ("Número = " + numero);
console.log ("Nome - " + nome);

nome = "Guilherme";

console.log ("Nome - " + nome + "(" + typeof(nome) + ")" ); 
console.log ("Idade - " + idade + "(" + typeof(idade) + ")" );
console.log ("Altura - " + altura + "(" + typeof(altura) + ")" );
console.log ("CNH - " + cnh + "(" + typeof(cnh) + ")" );

/*
Operadores:
Soma: +
Subtração: -
Divisão: /
Multiplicação: *
Modulo: %
*/

var a = "10";
var b = 10;

console.log (a * b);

/*
Operadores lógicos:
Igual: ==
Diferente: !=
Maior: >
Maior ou Igual: >=
Menor: < 
Menor ou Igual: <=
Estritamente Igual: ===
Estritamente Diferente !==
*/

if (a === b) {
    console.log ("São Iguais!");
} else {
    console.log ("São Diferentes!");
}

//Switch e Case

switch (a) {
    case "1":
        break;
    case "2":
        break;
    default:
        break;
}

// Laço de repetição

for (let i = 0; i < 10; i++) {
    console.log ("I - " + i);
}