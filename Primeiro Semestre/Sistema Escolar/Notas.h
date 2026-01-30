#ifndef NOTAS_H
#define NOTAS_H

typedef struct {
    int matricula;
    float nota;
} Nota;

void cadastrarNota (Nota *nota, int *conta);

#endif