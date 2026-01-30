#include <stdio.h> // Declara a biblioteca

int main () { // Início
    
    int N; // Declarando a váriavel N, que será responsavel por guardar o número inteiro pedido
    
    printf ("Informe um número: \n"); // Pede ao usuário um número inteiro
    scanf ("%d", &N); // Quarda o número informado pelo usuário
    
    if (N % 2 == 0){ // Estrutura de se e se não, se o resto do número informado for igual a zero
        printf ("O número %d é par!", N); // Se for verdadeiro, informa ao usuário que é par
    }
    else { 
        printf ("O número %d é ímpar!", N); // Se for falso, informa ao usuário que é ímpar 
    }

return 0; //Fim

}
