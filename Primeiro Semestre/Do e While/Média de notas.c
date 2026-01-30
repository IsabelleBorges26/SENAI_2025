//Biblioteca
#include <stdio.h> 
#include <locale.h> 
#include <stdlib.h> //Biblioteca para limpar o codigo 

//Inicio 
int main (){ 
    setlocale (LC_ALL,""); 
    float n1, n2, media;
    int  resposta; 
     
    do //Início da estrutura de repetição
    {
        
    printf ("Informe a primeira nota: \n");
    scanf ("%f", &n1);
    printf ("Informe a segunda nota: \n");
    scanf ("%f", &n2);
    
    media = (n1 + n2) / 2;
    printf ("A média do aluno(a) é: %.2f\n", media);

    printf ("Digite 1 para continuar ou 2 para sair \n");
    scanf ("%d", &resposta);
    
    system ("clear"); //Complemento para limpar o codigo
    
    }
    
    while (resposta==1); // Final da estrutura de repetição
    
//Fim
     return 0;
}

 