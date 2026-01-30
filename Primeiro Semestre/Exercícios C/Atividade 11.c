#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int i; // Variaveis inteira
    float media, soma = 0, n[10]; // Variaveis decimais
    
    for (i = 0; i < 10; i++) { // Estrutura de laço de repetição
    printf ("Informe o número %d: \n", i + 1); // Pede ao usuario 10 numeros
    scanf ("%f", &n[i]); // Guarda os números
    soma += n[i]; // Vai adicionando e somando na variavel
    }
    
    media = soma / 10; // Calculo de média
    
    printf ("A média é: %.2f", media); // Imprime o resultado
    
    return 0; // Fim
}
