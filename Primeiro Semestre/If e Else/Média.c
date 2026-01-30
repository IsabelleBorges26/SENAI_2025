//Definir bibliotecas
#include <stdio.h>
#include <locale.h>
//Início
int main() {
    setlocale(LC_ALL, "");
    float n1, n2, n3, n4, media;
    char nome[20];
    printf ("Qual o nome do aluno(a)\n");
    scanf ("%s", nome);
    printf ("Digite as quatro notas do aluno(a):\n");
    scanf ("%f %f %f %f", &n1,  &n2,  &n3,  &n4);
//Processamento
    media = (n1 + n2 + n3 + n4) / 4;
    if (media > 5)
    {
        printf ("O aluno(a) %s foi aprovado, sua nota é %.2f", nome, media);
    }
    else if (media > 3)
    {
        printf ("O aluno(a) %s ficou em recuperação, sua nota é %.2f", nome, media);
    }
    else  
    {
        printf ("O aluno(a) %s foi reprovado, sua nota é %.2f", nome, media);
    }
//Fim
    return 0;
    }
