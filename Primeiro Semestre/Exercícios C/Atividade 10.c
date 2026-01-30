#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int n, i, f = 1; // Declarando as variaveis inteiras
        
    printf ("Informe um número \n"); // Pede ao usuario um número
    scanf ("%d", &n); // Guarda o número
        
    for (i = 1; i <= n; i++) { // Estrutura de laço de repetição
        f *= i; // Adiciona a multiplicação na variavel fatorial
    }
    
    printf ("O fatorial é: %d",f); // Informe o resultado
        
return 0; // Fim

}
    
