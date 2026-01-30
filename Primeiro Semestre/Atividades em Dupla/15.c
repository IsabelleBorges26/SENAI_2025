#include <stdio.h>

int main() {
    float notas[7];
    float soma = 0, media;

 
    for (int i = 0; i < 7; i++) {
        do {
            printf("\n----= Café com Letras =----\n");
            printf("Digite a nota do cliente %d (0 a 10): ", i + 1);
            scanf("%f", &notas[i]);
            if (notas[i] < 0 || notas[i] > 10) {
                printf("Nota inválida! Digite um valor entre 0 e 10.\n");
            }
        } while (notas[i] < 0 || notas[i] > 10);
        soma += notas[i];
    }

    media = soma / 7;

    printf("\nMédia das notas: %.2f\n", media);

    if (media >= 8.0) {
        printf("Classificação: Boa\n");
    } else if (media >= 5.0) {
        printf("Classificação: Razoável\n");
    } else {
        printf("Classificação: Ruim\n");
    }

    return 0;
}