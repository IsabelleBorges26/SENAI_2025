#include <stdio.h>
#include <locale.h>

int main () {
    setlocale (LC_ALL, "");
    
    int n[8], pares = 0, impares = 0;
    int i;
    
    printf ("Informe 8 números inteiros \n");
    for ( i = 0; i < 8; i ++) {
        printf ("Informe o número %d:", i + 1);
        scanf ("%d", &n[i]);
    }
    
    printf ("--Números pares-- \n");
    for ( i = 0; i < 8; i ++) {
        if (n[i] % 2 == 0)
        printf ("%d \n", n[i]);
    }
    
    printf ("--Números ímpares-- \n");
    for ( i = 0; i < 8; i ++) {
        if (n[i] % 2 != 0)
        printf ("%d \n", n[i]);
    }
    
    return 0;
    
}