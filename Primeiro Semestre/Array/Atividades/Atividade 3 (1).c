#include <stdio.h>
#include <locale.h>

int main () {
    setlocale (LC_ALL,"");
    
    int n[5], i;
    
    printf ("Informe 5 números \n");
    for (i = 0; i < 5; i++) {
        printf ("Informe o número %d:", i + 1);
        scanf ("%d", &n[i]);
    }
    
    printf ("O sequencia inversa é: \n");
    for (int i = 4; i >= 0; i--) {
        printf("%d\n", n[i]);
    }
    
    return 0;
    
}
    
     