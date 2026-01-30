#include <stdio.h> // Declarando as bibliotecas

int main() { //Início

    float N[2], resultado; // Variaveis decimais
    int opcao, i; // Variaveis inteiras

    do {
        printf("\n-- Calculadora Simples --\n"); // Menu
        printf("Escolha uma operação:\n");
        printf("1 - Adição\n");
        printf("2 - Subtração\n");
        printf("3 - Sair\n");
        printf("Opção escolhida: ");
        scanf("%d", &opcao); // Guarda a opção escolhida pelo usuario   

        if (opcao == 1 || opcao == 2) { // Estrutura de condição, se a escolha for 1 ou 2 ele pede os números, se não for ele nao pede
            for (i = 0; i < 2; i++) { // Estrutura de laço de repetição para pedir os números
                printf("Informe o número %d: ", i + 1); 
                scanf("%f", &N[i]);
            }
        }

        switch (opcao) { // Estrutura de escolha
            case 1:
                resultado = N[0] + N[1];
                printf("Resultado da adição: %.2f\n", resultado);
                break;

            case 2:
                resultado = N[0] - N[1];
                printf("Resultado da subtração: %.2f\n", resultado);
                break;

            case 3:
                printf("Saindo...\n");
                break;

            default:
                printf("Opção inválida! Tente novamente.\n");
        }

    } while (opcao != 3); 

    return 0; // Fim
}
