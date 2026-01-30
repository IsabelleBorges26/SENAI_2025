//Definir bibliotecas
#include <stdio.h>
#include <locale.h>
//Início
int main (){
    setlocale (LC_ALL,"");
    int alqueires, caminhoes, toneladas_fazenda, toneladas_caminhao, viajens;
    printf ("Informe quantos alqueires sua fazendo possui:\n");
    scanf ("%d",&alqueires);
    printf ("Quando caminhões voce possue: \n");
    scanf ("%d",&caminhoes);
    toneladas_fazenda = alqueires * 250;
    toneladas_caminhao = caminhoes * 18;
    viajens = toneladas_fazenda/toneladas_caminhao;
    printf("As viajens necessarias é %d", viajens);
    return 0; 
}