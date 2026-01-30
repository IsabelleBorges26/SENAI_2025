#include <stdio.h>

int main() {
    int Filmes;

printf("---==Vídeo Boom==---\n");

    do {
        printf("Quantos filmes voce deseja alugar? (1 a 5): ");
        scanf("%d", &Filmes);

        if (Filmes < 1 || Filmes > 5) {
            printf("Numero invalido! Por favor, escolha entre 1 e 5 filmes.\n");
        }

    } while (Filmes < 1 || Filmes > 5);

    printf("Voce Alugou %d filme(s). Boa Maratona!\n", Filmes);

    return 0;
}
