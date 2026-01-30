#include <stdio.h>
#include <stdlib.h>

int main() {
    
    int ingresso, cliente = 1, pontos;
    
    printf ("--Bem-vindo ao CinePonto-- \n");

    do {
        
        printf ("OBS: Caso queira sair, digite 0 \n");
        printf("Cliente %d - Informe quantos ingressos você comprou: \n", cliente);
        scanf("%d", &ingresso);

        pontos = ingresso * 10;
        printf("Cliente %d: Você acumulou %d pontos. \n", cliente, pontos);
        cliente++;
            
        printf ("Clique 'enter' para continuar...");
        getchar ();
        getchar ();
        system ("clear");

    } while (ingresso != 0);

    printf("Saindo...\n");

    return 0;
}
