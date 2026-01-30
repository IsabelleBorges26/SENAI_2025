#include <stdio.h> //Blibioteca para o codigo enteder as informações
#include <locale.h> //Blibioteca para enteder os caracteres do nosso pais 

//Inicio 
int main (){ 
     setlocale (LC_ALL,""); //Localizar o idioma do computador
     int  a,b,c,d; //Declarando as variaveis 
     printf("Informe o primeiro número:\n"); // \N é para dar espaço 
     scanf("%d",&a); //Ler, % é para mostrar que ele guardara um numero e o & é para a variavel ver um numero        
     printf ("Informe o segundo número:\n");
     scanf("%d",&b);
     printf ("Informe o terceiro número:\n");
     scanf("%d",&c);
//Processamento
     d = (a+b)/c;
//Saída das informações
     printf ("O resultado é:%d", d);
//Fim
     return 0;
}

 