#include <stdio.h>

int main () {
    float nota [4];
    float media;

    printf ("Digite a primeira nota: ");
    scanf ("%f", &nota [0]);
    
    printf ("Digite a seguunda nota: ");
    scanf ("%f", &nota [1]);
    
    printf ("Digite a terceiro nota: ");
    scanf ("%f", &nota [2]);
    
    printf ("Digite a quarta nota: ");
    scanf ("%f", &nota [3]);
    
    media = (nota[0] + nota[1] + nota[2] +  nota[3]) / 4;
    
    printf ("A média é: %.2f\n", media);
    
return 0;
    
}

