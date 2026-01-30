#include <stdio.h> // Declarando a biblioteca

typedef struct { // Estrutura de struct, com as variaveis que serao usadas
    char nome[30];
    int quantidade;
    float preco;
} Produto; // Nome da estrutura

int main () { // Início
    
    Produto produto[5]; // Quantidade de espaços na memoria
    float soma = 0.00; // Variaveis decimais
    
    
    for (int i = 0; i < 5; i++){ // Estrutura de laço de repetição, pede os dados 5 vezes
        
    printf ("---Produto %d--- \n", i + 1);
    
    printf ("Digite o nome: ");
    scanf (" %[^\n]", produto[i].nome); 
    
    printf ("Digite a quantidade: ");
    scanf ("%d", &produto[i].quantidade);
    
    printf ("Digite o preço:\n ");
    scanf ("%f", &produto[i].preco);
    
    }
    
    for (int i = 0; i < 5; i++){ // Estrutura de laço de repetição, imprime os valores
        
    printf ("---Produto %d--- \n", i + 1);
    
    printf ("Nome: %s\n",  produto[i].nome);
    printf ("Quantidade: %d\n", produto[i].quantidade);
    printf ("Preço total: %.2f\n", produto[i].preco * produto[i].quantidade ); // Faz o calculo do preço totol de cada produto
  
    }
    
    return 0; // Fim
}


