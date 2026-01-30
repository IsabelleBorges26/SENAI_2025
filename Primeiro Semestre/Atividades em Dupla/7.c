#include <stdio.h>

int main() {
    
    int i, ocupados = 0, status;
    float porcentagem;

    for (i = 0; i <= 10; i++) {
        printf("Informe se o quarto %d está ocupado: \n", i + 1);
        printf ("1 = Sim\n");
        printf ("2 = Não\n");
        scanf("%d", &status);

        if (status == 1) {
            ocupados++;
        }
    }

    porcentagem = (ocupados / 10.0) * 100;
    printf("%.2f%% do hotel esta ocupado!\n", porcentagem);

    return 0;
}
