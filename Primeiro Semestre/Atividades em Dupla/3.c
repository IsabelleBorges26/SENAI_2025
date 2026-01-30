#include <stdio.h>
#include <stdlib.h>

void finaliza_funcao ();

int main() {
    
    int opcao, litrosG, litrosE, litrosD;
    
do {
    
    printf ("--Bem-vindo ao FuelMax-- \n");
    
    printf("Informe o combustível: \n");
    printf("1 - Gasolina \n");
    printf("2 - Etanol \n");
    printf("3 - Diesel \n");
    printf("4 - Sair \n");
    scanf ("%d", &opcao);
    
     switch (opcao) {
         
        case 1:
        printf ("Você escolheu Gasolina, o litro esta 6,24!\n");
        printf ("Digite a quantidade abastecida: ");
        scanf ("%d", &litrosG);
        printf ("Total: %.2f\n", litrosG * 6.24);
        finaliza_funcao ();
        break;
        
        case 2:
        printf ("Você escolheu Etanol, o litro esta 4,21!\n");
        printf ("Digite a quantidade abastecida: ");
        scanf ("%d", &litrosE);
        printf ("Total: %.2f\n", litrosE * 4.21);
        finaliza_funcao ();
        break;
        
        case 3:
        printf ("Você escolheu Diesel, o litro esta 6,06!\n");
        printf ("Digite a quantidade abastecida: ");
        scanf ("%d", &litrosD);
        printf ("Total: %.2f\n", litrosD * 6.06);
        finaliza_funcao ();
        break;
        
        case 4:
        printf ("Saindo...\n");
        break;
        
        default: 
        printf ("Opção invalida!Programa encerrado");
        return 1; 
    } 
    
} while (opcao != 4);

    return 0;
}

void finaliza_funcao () {
    
    printf ("Clique 'enter' para continuar...");
    getchar ();
    getchar ();
    system ("clear");
}