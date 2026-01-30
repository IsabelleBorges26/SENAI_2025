#include <stdio.h>

int main() {
    
    int i;
    float precos[10], maior, menor;
  
    for(i = 0; i < 10; i++) {
        printf("Informe o valor do produto %d: \n", i + 1);
        scanf("%f", &precos[i]);
    }

    maior = precos[0];
    menor = precos[0];

    for(i = 1; i < 10; i++) {
        
        if (precos[i] > maior) {
            maior = precos[i];
        }
        
        if (precos[i] < menor) {
            menor = precos[i];
        }
    }

    printf("O produto mais caro é o de %.2f reais, é o mais barato é o de %.2f reais.  \n", maior, menor);

    return 0;
}
