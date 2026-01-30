#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
int n[5], i; // Declarando variaveis inteiras
    
    printf ("Informe 5 números \n"); 
    for (i = 0; i < 5; i++) { // Estrutura de laço de repetição
        printf ("Informe o número %d:", i + 1); // Pede ao usuario 5 números
        scanf ("%d", &n[i]); // Guarda os números na variavel
    }
    
    printf ("O sequencia inversa é: \n"); 
    for (int i = 4; i >= 0; i--) { // Estrutura de laço de repetição, inverte os números informados
        printf("%d\n", n[i]); // informa a sequencia 
    }
    
    return 0; // Fim
    
}
