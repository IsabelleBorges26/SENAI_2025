//Definir bibliotecas
#include <stdio.h>
#include <locale.h>
//Início
int main() {
    setlocale(LC_ALL, "");
    float n1, n2, n3, n4, media;
    printf ("Informe as suas quatro notas, de 0 a 10:\n");
    scanf ("%f %f %f %f", &n1, &n2, &n3, &n4);
//Processamento
    media = (n1 + n2 + n3 + n4) / 4;
    if (media >= 9.0)
    {
        printf ("Seu conceito é A e você foi aprovado com a sua média de %.2f!", media);
    }
    else if ((media >= 7.5) && (media <= 8.9))
    {
        printf ("Seu conceito é B e você foi aprovado com a sua média de %.2f!", media);
    }
    else if ((media >= 6.0) && (media <= 7.4))
    {
        printf ("Seu conceito é C e você foi aprovado com a sua média de %.2f!", media);
    }
    else if ((media >= 4.0) && (media <= 5.9))
    {
        printf ("Seu conceito é D e você foi reprovado com a sua média de %.2f!", media);
    }
    else  
    {
        printf ("Seu conceito é E e você foi reprovado com a sua média de %.2f!", media);
    }
//Fim
    return 0;
    }

