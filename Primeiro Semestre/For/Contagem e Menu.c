//Biblioteca
#include <stdio.h> 
#include <locale.h> 
#include <stdlib.h> //Biblioteca para limpar o codigo 

//Inicio 
int main (){ 
    setlocale (LC_ALL,""); 
    int  n, i, opcao; 
     
    do //Início da estrutura de repetição
    {
        
    printf ("Informe um número: \n");
    scanf ("%d", &n);
   
    for(i = 1; i <= n; i++){
        printf ("%d\n", i);
    }
    
    printf ("Você deseja continuar?\n");
    printf ("1 - Não\n");
    printf ("2 - Sim\n");
    scanf ("%d", &opcao ); 

    if (opcao == 1)
    {
        printf ("Programa encerrado");
    }
    else 
    {
        system ("clear"); 
    }
    
    } while (opcao==2); 
    
//Fim
     return 0;
}
