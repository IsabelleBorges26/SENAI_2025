#include <stdio.h>

int somar(int v1, int v2);
float dividir (float v1, float v2);
int subtrair (int v1, int v2);
void multiplicar (int v1, int v2);
int menu ();
void media (int v1, int v2);

int main()
{
    int a, b, opcao;
    
    opcao = menu();
    
    if (opcao <= 5) {
    printf ("Informe dois valores:\n");
    scanf("%d", &a);
    scanf("%d", &b);
    }
   
    switch (opcao) {
        
        case 1:
            printf ("Resultado da soma = %d\n", somar (a,b));
            break;
        case 2:
            printf ("Resultado da subtração = %d\n", subtrair (a,b));
            break;
        case 3:
            printf ("Resultado da divisão = %.2f\n", dividir (a,b));
            break;
        case 4:
            multiplicar (a,b);
            break;
        case 5:
            media (a,b);
            break;
        case 6:
            printf ("Saindo...");
            break;
        default:
            break;
    }
    
    return 0;
}

int somar(int v1, int v2) {
    int res = v1 + v2;
    return res;
}

int subtrair (int v1, int v2) {
    int res = v1 - v2;
    return res;
}

float dividir (float v1, float v2) {
    float res = v1 / v2;
    return res;
}

void multiplicar (int v1, int v2) {
    int res = v1 * v2;
    printf ("Resultado da multiplicação = %d\n", res);
}

void media (int v1, int v2) {
    int res = (v1 + v2) / 2;
    printf ("Resultado da média = %d\n", res);
}

int menu () {
    
int opcao;
    
    printf ("Informe a operação: \n");
    printf ("1 - Somar\n");
    printf ("2 - Subtrair\n");
    printf ("3 - Dividir\n");
    printf ("4 - multiplicar\n");
    printf ("5 - Média\n");
    printf ("6 - Sair\n");
    
    scanf ("%d", &opcao);
    return opcao;
}


















