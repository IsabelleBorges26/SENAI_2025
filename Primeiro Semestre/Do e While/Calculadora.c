// Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

// Início
int main()
{
    setlocale(LC_ALL, "");
    float n1, n2, resultado;
    int opcao;

    do
    {
        printf("\n --Calculadora simples-- \n");
        printf("1 - Adição \n");
        printf("2 - Subtração \n");
        printf("3 - Multiplicação \n");
        printf("4 - Divisão \n");
        printf("0 - Sair \n");
        printf("Escolha uma opção: \n");
        scanf("%d", &opcao);

        switch (opcao)
        {
            case 1:
                printf("Digite dois números: \n");
                scanf("%f %f", &n1, &n2);
                resultado = n1 + n2;
                printf("Resultado: %.2f \n", resultado);
                break;
            case 2:
                printf("Digite dois números: \n");
                scanf("%f %f", &n1, &n2);
                resultado = n1 - n2;
                printf("Resultado: %.2f \n", resultado);
                break;
            case 3:
                printf("Digite dois números: \n");
                scanf("%f %f", &n1, &n2);
                resultado = n1 * n2;
                printf("Resultado: %.2f \n", resultado);
                break;
            case 4:
                printf("Digite dois números: \n");
                scanf("%f %f", &n1, &n2);
                if (n2 != 0)
                {
                    resultado = n1 / n2;
                    printf("Resultado: %.2f \n", resultado);
                }
                else
                {
                    printf("Erro: Divisão por zero! \n");
                }
                break;
            case 0:
                printf("Saindo... \n");
                break;
            default:
                printf("Opção inválida! Tente novamente. \n");
        }
    } while (opcao != 0);

    return 0;
}
