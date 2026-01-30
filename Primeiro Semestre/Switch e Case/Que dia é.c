//Bibliotecas
#include <stdio.h>
#include <locale.h>

//Início
int main () {
    setlocale (LC_ALL, "");

// Variaveis
    int dia;
   

// Opções 
    printf ("Selecione um dia da semana (1-7): \n");
    scanf ( "%d", &dia);

// Estrutura de escolha
    switch (dia) 
    {
        case 1:
        printf ("Hoje é domingo!\n");
        break;
        
        case 2:
        printf ("Hoje é segunda!\n");
        break;
        
        case 3:
        printf ("Hoje é terça!\n");
        break;
        
        case 4:
        printf ("Hoje é quarta!\n");
        break;
        
        case 5:
        printf ("Hoje é quinta!\n");
        break;
        
        case 6:
        printf ("Sextou!\n");
        break;
        
        case 7:
        printf ("Hoje é sábado!\n");
        break;
        
        default: 
        printf ("Opção invalida!Programa encerrado");
        return 1; 
    }

//Saída
    return 0; 
        
}