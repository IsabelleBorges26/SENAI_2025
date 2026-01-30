#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, opcao;

    do {
        printf("Informe um número: ");
        scanf("%d", &n);
        printf("--Tabuada do número %d--\n", n);

        for (i = 1; i <= 10; i++) {
            printf("%d x %d = %d\n", n, i, n * i);
        }

        printf("Deseja continuar?\n");
        printf("1 - Sim\n");
        printf("2 - Não\n");
        scanf("%d", &opcao);

        if (opcao == 1) {
            system("clear"); 
        } 
        else { 
            printf("Saindo...\n"); 
        }

    } while (opcao != 2);

    return 0;
}
