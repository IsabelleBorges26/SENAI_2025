//Bibliotecas
#include <stdio.h>
#include <locale.h>

//Início
int main () {
    setlocale (LC_ALL, "");

// Variaveis
    int opcao;
    float n1, n2, n3, n4, media;

// Opções 
    printf ("Selecione a matéria (1-4): \n");
    printf ("1 - Português\n");
    printf ("2 - Matemática\n");
    printf ("3 - Biologia\n");
    printf ("4 - História\n");
    scanf ( "%d", &opcao);

// Estrutura de escolha
    switch (opcao) 
    {
        case 1:
        printf ("Você escolheu português!\n");
        printf ("Digite as quatro notas: ");
        scanf ("%f %f %f %f", &n1,  &n2,  &n3,  &n4);
        break;
        
        case 2:
        printf ("Você escolheu matemática!\n");
        printf ("Digite as quatro notas: ");
        scanf ("%f %f %f %f", &n1,  &n2,  &n3,  &n4);
        break;
        
        case 3:
        printf ("Você escolheu biologia!\n");
        printf ("Digite as quatro notas: ");
        scanf ("%f %f %f %f", &n1,  &n2,  &n3,  &n4);
        break;
        
        case 4:
        printf ("Você escolheu história!\n");
        printf ("Digite as quatro notas: ");
        scanf ("%f %f %f %f", &n1,  &n2,  &n3,  &n4);
        break;
        
        default: 
        printf ("Opção invalida!Programa encerrado");
        return 1; 
    }

// Processamento
    media = (n1 + n2 + n3 + n4) / 4.0;  

// Saída 1 
    printf ("Média final: %.2f \n", media);
    
// Estrutura de decisão
    if (media >= 9.0)
    {
        printf ("Conceito: A\n");
        printf ("Status: Aprovado");
    }
    else if (media >= 7.5)
    {
        printf ("Conceito: B\n");
        printf ("Status: Aprovado");
    }
    else if (media >= 6.0)
    {
        printf ("Conceito: C\n");
        printf ("Status: Aprovado");
    }
    else if (media >= 4.0)
    {
        printf ("Conceito: D\n");
        printf ("Status: Reprovado");
    }
    else 
    {
        printf ("Conceito: E\n");
        printf ("Status: Reprovado");
    }

//Saída
    return 0; 
        
}