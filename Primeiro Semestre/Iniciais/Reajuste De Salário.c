//biblioteca
#include <stdio.h>
#include <locale.h>
//inicio
int main (){
    setlocale(LC_ALL,"");//passar localização
    char nome [20];//char é para veriavel texto e definir quanto caracteres podem 
    float sal, reajuste, novoSal; //float é para variavel real
    printf ("digite o seu nome:\n");
    scanf ("%s", nome); //%s é para a variavel texto quardar
    printf ("digite o seu salário:\n");
    scanf ("%f", &sal); // %f é para a variavel real
    printf("digite o percentual de reajuste:\n");
    scanf ("%f", &reajuste);
    novoSal = sal+sal * reajuste / 100;
    printf("%s seu salário reajustado é de %.2f",nome, novoSal);
    return 0;
}