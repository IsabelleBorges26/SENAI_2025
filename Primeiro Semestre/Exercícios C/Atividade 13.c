#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int N[10], i, pares = 0; // Variaveis inteiras
    
    for (i = 0; i < 3; i++) { // Estruta de laço de repetiçaõ
        printf ("Informe o número %d: \n", i + 1); // Pede ao usuario tres números
        scanf ("%d", &N[i]); // Guarda na variavel
    }
    
    printf ("Os números pares são: \n"); 
    
    for ( i = 0; i < 3; i ++) { // Estrutura de laço de repetição
        if (N[i] % 2 == 0) // Se os números informados tiverem resto 0 ao dividir por 2
        printf ("%d \n", N[i]); // Informa ao usuario quais são os numeros pares 
    }

return 0; // Fim 
    
}
