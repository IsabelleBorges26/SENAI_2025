//Definir bibliotecas
#include <stdio.h>
#include <locale.h>
//Início
int main (){
    setlocale (LC_ALL,"");
    int vitoria, empate, pontos;
    char  nome [10];
    vitoria = 3;
    empate = 1;
    printf ("Qual o nome do seu time? \n");
    scanf ("%s", nome);
    printf ("Quantas vitórias o seu time possui? \n");
    scanf ("%d",&vitoria);
    printf ("Quantos empates o seu time possui? \n");
    scanf ("%d", &empate);
    pontos = (vitoria * 3) + empate;
    printf ("O seu time %s ficou com %d pontos", nome,pontos);
    return 0;
}