#include <stdio.h> // Declarando a biblioteca

typedef struct { // Estrutura struct
    char nome[30]; // Variaveis que serao utilizadas
    int idade;
} Pessoas; // Nome da estrutura

int main() { // Início
    Pessoas pessoas[2]; // Quantidade de memórias
    int i, maior = 0; // Variaveis inteiras

    for (i = 0; i < 2; i++) { // Estrutura de laço de repetição
        printf("Digite o nome %d: ", i + 1); // Pede o nome e a idade para o usuario 
        scanf(" %[^\n]", pessoas[i].nome); // Guarda na variavel e na memoria denominada

        printf("Digite a idade %d: ", i + 1);
        scanf("%d", &pessoas[i].idade);
    }

    for (i = 1; i < 2; i++) { // Estrutura de laço de repetição, para verificar quem é mais velho
        if (pessoas[i].idade > pessoas[maior].idade) { // Estrutura de condição
            maior = i; // Atualiza pessoa mais velha
        }
    }

    printf("A pessoa mais velha é: %s\n", pessoas[maior].nome); // Imprime quem é o mais velho

    return 0; // Fim
}
