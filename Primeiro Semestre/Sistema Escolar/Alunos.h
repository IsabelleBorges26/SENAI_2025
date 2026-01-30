#ifndef ALUNOS_H
#define ALUNOS_H

typedef struct {
    int matricula;
    char nome[100];
} Aluno;

void cadastrarAluno(Aluno *aluno, int *conta);

#endif

