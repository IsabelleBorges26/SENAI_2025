#include <stdio.h>

void somar (float a, float b);
void subtrair (float a, float b);
void multiplicar (float a, float b);
void dividir (float a, float b);

int main () {
    
    int opcao;
    float v1, v2;
    
    printf ("1 - Somar\n");
    printf ("2 - Subtrair\n");
    printf ("3 - Multiplicar\n");
    printf ("4 - Dividir\n");
    scanf ("%d", &opcao);
    
    printf ("Informe um valor: \n");
    scanf ("%f", &v1);
    printf ("Informe um valor: \n");
    scanf ("%f", &v2);
    

    switch (opcao) {
        
        case 1:
            somar (v1, v2);
            break;
        case 2:
            subtrair (v1, v2);
            break;
        case 3:
            multiplicar(v1, v2);
            break;
        case 4:
            dividir (v1, v2);
            break;
        default:
            break;
    }
    
    return 0;
    
}

void somar (float a, float b) { // Não armazena
    
    float resultado = a + b;
    
    printf ("\nResultado - %.2f", resultado);
}


void subtrair (float a, float b) { // Não armazena
    
    float resultado = a - b;
    
    printf ("\nResultado - %.2f", resultado);
}

void multiplicar (float a, float b) { // Não armazena
    
    float resultado = a * b;
    
    printf ("\nResultado - %.2f", resultado);
}

void dividir (float a, float b) { // Não armazena
    
    float resultado = a / b;
    
    printf ("\nResultado - %.2f", resultado);
}

