#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int n[3], i, maior, menor;  // Variaveis inteiras
    
    for (i = 0; i < 3; i ++) { // Estrutura de laço de repetição
        printf ("Digite o numero %d: ", i + 1); // Pede ao usuario tres numeros
        scanf ("%d", &n[i]); // Guarda na variavel 
    }
    
    maior = n[0]; // Inicia o primeiro número informado como o maior
    menor = n[0]; // Inicia o primeiro número informado como o menor
    
    for (i = 1; i < 3; i ++) { // Estrutura de laço de repetição, passa por todos os números informados
        if (n[i] > maior) { // Estrutura de condição, verifica se o primeiro número continua sendo o maior
            maior = n [i]; // Se for maior, ele adiciona na variavel
        }
        if (n[i] < menor){ // Estrutura de condição, verifica se o primeiro número continua sendo o menor
            menor = n[i]; // Se for menor, ele adiciona na variavel
        }
    }

    printf ("O maior número é %d e o menor número é %d", maior, menor); // Informa o resultado

return 0; // Fim 
    
}

