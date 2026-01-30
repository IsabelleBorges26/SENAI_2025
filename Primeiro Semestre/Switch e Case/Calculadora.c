//Bibliotecas
#include <stdio.h>
#include <locale.h>

//Início
int main () {
    setlocale (LC_ALL, "");

// Variaveis
    float N1, N2, adicao, subtracao, divisao, multiplicacao;
    int operacao;
   
// Opções 
    printf("Escolha a operação desejada:\n");
    printf("1 - Adição\n");
    printf("2 - Subtração\n");
    printf("3 - Divisão\n");
    printf("4 - Multiplicação\n");
    scanf ("%d", &operacao);
    printf ("Informe os dois números para fazer a operação: \n");
    scanf ( "%f %f", &N1, &N2);

// Estrutura de escolha
    switch (operacao) 
    {
        case 1:
        adicao = N1 + N2;
        printf ("A operação escolhida foi adição, o resultado é: %.2f \n", adicao);
        break;
        
        case 2:
        subtracao = N1 - N2;
        printf ("A operação escolhida foi subtração  o resultado é: %.2f \n", subtracao);
        break;
        
        case 3:
        divisao = N1 / N2;
        printf ("A operação escolhida foi divisão, o resultado é: %.2f \n", divisao);
        break;
        
        case 4:
        multiplicacao = N1 * N2;
        printf ("A operação escolhida foi multiplicação  o resultado é: %.2f \n", multiplicacao);
        break;
    
        default: 
        printf ("Opção invalida!Programa encerrado");
        return 1; 
    }

//Saída
    return 0; 
        
}