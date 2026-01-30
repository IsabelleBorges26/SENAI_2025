#include <stdio.h>
#include <stdlib.h>

int main () {
    int numero [3];
    int i, maior, menor;
    
    printf ("Digite três números inteiros: \n");
    for (i = 0; i < 3; i ++) {
        printf ("Digite o numero %d: ", i + 1);
        scanf ("%d", &numero [i]);
    }
    
    maior = numero[0];
    menor = numero[0];
    
    for (i = 1; i < 3; i ++) {
        if (numero[i] > maior) {
            maior = numero [i];
        }
        if (numero[i] < menor){
            menor = numero[i];
        }
    }

    printf ("O maior número é %d e o menor número é %d", maior, menor);

return 0;
    
}

