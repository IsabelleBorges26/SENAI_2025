// Definir bibliotecas
#include <stdio.h>
#include <locale.h>

// Início
int main()
{
    setlocale(LC_ALL, "");
    int n;
    printf("\n--Jogo Da Adivinhação--\n");
    
    do
    {
        printf("Eu estou pensando em um número, qual é?\n");
        scanf("%d", &n);

        if (n == 7)
        {
            printf("Você acertou!\n");
        }
        else
        {
            printf("Você errou! Tente novamente.\n");
        }

    } while (n != 7);

    return 0;
}
