#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int i, soma = 0; // Declarando a variavel i, que sera usada no for e soma para guardar e somar os números, foi iniciada com 0 para evitar lixo na memoria 
    
    for (i = 1; i <= 200; i++) { // Estrutura de laço de repetição
        if (i % 2 == 0) { // Estrutura de condição, os números que forem pares de 1 a 200
            soma += i; // Serao somados e adicionados a variavel soma
        }
    }
    
    printf ("O resultado é: %d", soma); // Informe o usuario o resultado
    
return 0; //Fim

}
