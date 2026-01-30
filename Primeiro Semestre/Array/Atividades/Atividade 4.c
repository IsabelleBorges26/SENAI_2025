#include <stdio.h>
#include <locale.h>

int main () {
    setlocale (LC_ALL,"");
    
    int i;
    float media, soma = 0.0, nota[6];
    
    printf ("Informe as 6 notas \n");
    for (i = 0; i < 6; i++) {
        printf ("Informe a nota %d:", i + 1);
        scanf ("%f", &nota[i]);
        soma += nota [i];
    }
    
    media = soma / 6.0;
    
    printf ("Média: %.2f \n", media);
    printf ("Notas acima da media: \n");
    
    for (i = 0; i < 6; i++ ){
        if (nota[i] > media) {
            printf ("%.2f \n", nota[i]);
        }
    }
    
    return 0;
    
}
    
     