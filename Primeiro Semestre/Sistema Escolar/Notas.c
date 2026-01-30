#include <stdio.h>
#include <stdlib.h>
#include "Notas.h"

void cadastrarNota (Nota *nota, int *conta) {
    printf ("Cadastrar Nota\n");
    printf ("Informe a matricula do aluno: \n");
    scanf ("%d", &nota ->matricula);
    printf ("Informe a nota: \n");
    scanf ("%f", &nota ->nota); 
    *conta = *conta + 1;
}