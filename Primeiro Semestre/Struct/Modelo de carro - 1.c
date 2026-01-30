#include <stdio.h> 
#include <stdlib.h>

typedef struct {
    char modelo[30];
    int ano;
    float preco;
} Carro;

int main () {
    
    Carro carro[3];
    float soma = 0.00;
    
    
    for (int i = 0; i < 3; i++){
        
    printf ("---Carro %d--- \n", i + 1);
    
    printf ("Digite o modelo do carro: ");
    scanf (" %[^\n]", carro[i].modelo); //Para ter espaço entre nomes
    
    printf ("Digite o ano do carro: ");
    scanf ("%d", &carro[i].ano);
    
    printf ("Digite o preço do carro:\n ");
    scanf ("%f", &carro[i].preco);
    
    soma += carro[i].preco;
    
    }
    
    for (int i = 0; i < 3; i++){
        
    printf ("---Carro %d--- \n", i + 1);
    
    printf ("Modelo: %s\n", carro[i].modelo);
    printf ("Ano: %d\n", carro[i].ano);
    printf ("Preço: %.2f\n", carro[i].preco);
  
    }
    
    printf ("Total gasto: %.2f", soma);
    
    return 0;
}