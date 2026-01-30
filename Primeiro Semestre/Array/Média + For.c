#include <stdio.h>

int main () {
    float nota [4], media;
    int i;
    
    for (i = 0; i < 4; i ++) {
        printf ("Digite quatro notas \n");
        printf ("Digite a nota %d: ", i + 1);
        scanf ("%f", &nota [i]);
    }
    
    media = (nota[0] + nota[1] + nota[2] +  nota[3]) / 4;
    
    printf ("A média é: %.2f\n", media);
    
return 0;
    
}

