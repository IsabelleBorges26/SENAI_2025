#include <stdio.h>
#include <locale.h>

int main () {
    setlocale (LC_ALL, "");
    
    int n[6], soma = 0;
    int i;
    
    printf ("Quais números você deseja somar? \n");
    for ( i = 0; i < 6; i ++) {
        printf ("Informe o número %d:", i + 1);
        scanf ("%d", &n[i]);
        soma += n[i];
    }
    
    printf ("A soma dos números é de: %d", soma);
    
    return 0;
}