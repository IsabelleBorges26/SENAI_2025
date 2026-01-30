// Exercício 1

console.log ("----------------");
var nome = "Isabelle";
console.log ("Olá," + nome);
console.log ("----------------");

// Exercício 2

var A = 50;
var B = 10;

console.log (A + B);
console.log (A - B);
console.log (A * B);
console.log (A / B);
console.log ("----------------");

// Exercício 3

var altura = 20;
var largura = 10;

console.log ("A área do retângulo é:" + (altura * largura));
console.log ("----------------");

// Exercício 4

var nascimento = 2008;

idade = (2025 - nascimento);

console.log ("A idade é: " + (idade));
if (idade >= 18) {
    console.log ("Você é maior de idade");
} else {
    console.log ("Você é menor de idade");
}
console.log ("----------------");

// Exercício 5

var numero = 11;

if (numero % 2 == 0) {
    console.log ("O número é par!");
} else {
    console.log ("O número é ímpar!");
}
console.log ("----------------");

// Exercício 6

var n1 = 10;
var n2 = 10;
var n3 = 10;

media = ((n1 + n2 + n3) / 3);

if (media == 10) {
    console.log ("Nota A!");
} else if (media >= 8) {
    console.log ("Nota B!");
} else if (media >= 2) {
    console.log ("Nota C!");
} else {
    console.log ("Reprovado!");
}
console.log ("----------------");

// Exercício 7

for (let i = 30; i > 0; i--) {
    console.log ("I - " + i);
}
console.log ("----------------");

// Exercício 8

for (let i = 0; i <= 500; i+=3) {
    console.log ("I - " + i);
}
console.log ("----------------");

// Exercício 9

for (let i = 1; i <= 300; i++) {
    if (i % 2 == 0) {
        console.log ("I - " + i);
    }
}
console.log ("----------------");

// Exercício 10

var c = 1

for (let i = 1; i <= 5; i++) {
    c *= i;
}
console.log ("O fatorial é:" + c);
console.log ("----------------");






