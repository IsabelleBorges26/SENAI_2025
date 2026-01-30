#include <stdio.h>
#include <stdlib.h>
#include "Alunos.h"
#include "Notas.h"
#include "Media.h"


void cadastrarMedia(Aluno alunos[], Nota notas[]) {
    int matricula, qntNotas = 0;
    float media = 0;
    printf ("Cadastrar Média\n");
    printf ("Informe a matricula do aluno: \n");
    scanf ("%d", &matricula);
   for (int i = 0; i < 10; i ++) {
       if (alunos[i].matricula == matricula) {
           printf ("Nome: %s\n", alunos[i].nome);
           break;
       }
   }
   for (int i = 0; i < 50; i ++) {
       if (notas[i].matricula ==matricula) {
           media += notas[i].nota;
           qntNotas++;
       }
   }
   printf ("Média: %.2f\n", (media / qntNotas));
   
}
