#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main () {
    setlocale (LC_ALL,"");
    
    int n[11], i, numero;
    
    printf ("--Informe 10 números-- \n");
    for (i = 0; i < 10; i++) {
        printf ("Informe o número %d:", i + 1);
        scanf ("%d", &n[i]);
    }
    
    system("clear");
    
    printf ("--Informe outro número-- \n");
    scanf ("%d", &numero);
    
    for (i = 0; i < 10; i++) {
        if (n[i] == numero) {
            printf("O número %d está na posição %d \n", numero, i + 1);
            return 0; 
        }
    }

    printf("O número %d não está presente no array.\n", numero);

    return 0;
}

    
    
    
    
    
    
    
    
    
    