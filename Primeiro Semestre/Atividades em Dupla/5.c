#include <stdio.h> 
#include <stdlib.h>

typedef struct {
    char nome[30];
    int codigo;
    float preco;
} Produto;

int main () {
    
    Produto produto[2];
    
    for (int i = 0; i < 2; i++){
        
    printf ("---Produto %d--- \n", i + 1);
    printf ("Digite o nome do produto: \n");
    scanf (" %[^\n]", produto[i].nome); 
    printf ("Digite o código do produto: \n");
    scanf ("%d", &produto[i].codigo);
    printf ("Digite o preço do produto: \n");
    scanf ("%f", &produto[i].preco);
    
    }
    
     for(int i = 1; i < 2; i++) {
        
        if (produto[i].preco = 10) {
            printf ("---Produto %d--- \n", i + 1);
            printf ("Nome do produto: %s \n", produto[i].nome);
            printf ("Código do produto:%d \n", produto[i].codigo);
            printf ("Preço do produto: %.2f \n",produto[i].preco );
        }
    }
    
    return 0;
}