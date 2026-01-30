#include <stdio.h>
#include <stdlib.h>
#include "Alunos.h"

void cadastrarAluno (Aluno *aluno, int *conta) {
    printf("\n----CADASTRAR ALUNO----\n");
    printf("Informe a matricula: ");
    scanf ("%d", &aluno ->matricula);
    printf("Informe o nome: ");
    scanf(" %[^\n]", aluno->nome);
    *conta = *conta + 1;
}