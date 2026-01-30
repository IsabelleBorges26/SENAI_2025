#include <stdio.h>

int main() {
    int numero;

    printf("---- FashionMix ----\n");
    printf("Digite o Numero da peça:\n");
    printf("1 - Camisa\n");
    printf("2 - Calça\n");
    printf("3 - Casaco\n");
    printf("numero: ");
    scanf("%d", &numero);

    switch(numero) {
        case 1:
            printf("Peça: Camisa\n");
            printf("Preço: R$ 79.90\n");
            break;
        case 2:
            printf("Peça: Calça\n");
            printf("Preço: R$ 139.90\n");
            break;
        case 3:
            printf("Peça: Casaco\n");
            printf("Preço: R$ 199.90\n");
            break;
        default:
            printf("numero inválido! Por favor, escolha 1, 2 ou 3.\n");
            break;
    }

    return 0;
}
