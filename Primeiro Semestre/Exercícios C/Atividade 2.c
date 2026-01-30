#include <stdio.h> // Declara a biblioteca

int main () { // Início
    
    int N[2], maior, i; // Declarando a váriavel inteira N, que será responsavel por guardar dois espaços na memória. A váriavel i que sera responsavel no for e a váriavel "maior", para obter o maio número
    
    for (i = 0; i < 2; i++){ // Estrutura de laço de repetição, para pedir ao usuário dois números
        printf ("Informe o número %d: \n", i + 1); 
        scanf ("%d", &N[i]); //Guarda os números na váriavel N
    }
    
    maior = N[0]; // Declaro que a váriavel maior vale o primeiro número inserido pelo usuário
    
    for (i = 1; i < 2; i ++) { // Estrutura de repetição, que roda por todos os números inseridos 
        if (N[i] > maior) { // Estrutura de condição, se o outro número for maior que o número "0"
            maior = N[i]; // O número passa a ser o maior
        }
    }
    
    printf ("O número maior é %d", maior); // Imprime ao usuário o número maior

return 0; //Fim

}
