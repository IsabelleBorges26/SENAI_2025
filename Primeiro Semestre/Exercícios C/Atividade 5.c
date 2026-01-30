#include <stdio.h>

int main () { // Início

    float N[2], adicao, subtracao, divisao, multiplicacao; // Declarando as variaveis decimais
    int operacao, i; // Declarando as variaveis inteiras

    printf("Escolha a operação desejada:\n"); // Menu para o usuario escolher
    printf("1 - +\n");
    printf("2 - -\n");
    printf("3 - /\n");
    printf("4 - x\n");
    scanf ("%d", &operacao); // Guarda a opcão na variavel operação
    
    for (i = 0; i < 2; i++) { // Estrutura de repetição
    printf ("Informe o número %d para fazer a operação: \n", i + 1); // Pede dois números para o usuario 
    scanf ("%f",&N[i]); // Guarda os dois números
    }

    switch (operacao) // Estrutura de escolha
    {
        case 1: // Estrutua para a adição
        adicao = N[0] + N[1];
        printf ("A operação escolhida foi adição, o resultado é: %.2f \n", adicao);
        break;
        
        case 2: // Estrutua para a subtração
        subtracao = N[0] - N[1];
        printf ("A operação escolhida foi subtração  o resultado é: %.2f \n", subtracao);
        break;
        
        case 3: // Estrutua para a divisão
        divisao = N[0] / N[1];
        printf ("A operação escolhida foi divisão, o resultado é: %.2f \n", divisao);
        break;
        
        case 4: // Estrutua para a multiplicação
        multiplicacao = N[0] * N[1];
        printf ("A operação escolhida foi multiplicação  o resultado é: %.2f \n", multiplicacao);
        break;
    
        default: // Caso o usuario digite uma opção diferente das anteriores
        printf ("Opção invalida!Programa encerrado");
        return 1; 
    }

    return 0; // Fim
        
}
