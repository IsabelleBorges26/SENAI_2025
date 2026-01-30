#include <stdio.h>
#include <stdlib.h>

void finaliza_funcao ();

int main() {

int Prato_Principal, Bebida_Sobremesa;
float valor, Preco_Total;

    printf("---Sabor & Arte---\n");
    printf ("Esperamos que você tenha gostado! Vamos finalizar a sua compra: \n");
    
    printf ("Você pediu mais de 3 pratos principais? \n");
    printf ("1 - Sim \n");
    printf ("2 - Não \n");
    scanf ("%d", &Prato_Principal);
    finaliza_funcao ();
    
    printf ("Você pediu bebida e sobremesa? \n");
    printf ("1 - Sim \n");
    printf ("2 - Não \n");
    scanf ("%d", &Bebida_Sobremesa);
    finaliza_funcao ();
    
    printf ("Para calcular o seu desconto, informe o valor da sua compra: \n");
    scanf ("%f", &valor);
    
    if ((Prato_Principal == 1) && (Bebida_Sobremesa == 1)) {
    
        printf ("Voçê tera um desconto de 15%%!\n");

        Preco_Total = valor - (valor * 0.15);
        
        printf ("O valor final da sua compra é de: %.2f", Preco_Total);
    }
    
    else if (Prato_Principal == 1) {
        
        printf ("Voçê tera um desconto de 10%%!\n");

        Preco_Total = valor - (valor * 0.10);
        
        printf ("O valor final da sua compra é de: %.2f", Preco_Total);
        
    }
    
    else {
        
        printf ("Sinto muito, você não tera descontos, o valor final é de: %.2f", valor);
        
    }

    return 0;
}

void finaliza_funcao () {
    
    printf ("Clique 'enter' para continuar...");
    getchar ();
    getchar ();
    system ("clear");
}