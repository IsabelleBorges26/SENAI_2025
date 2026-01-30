#include<stdio.h>
#include"Alunos.h"
#include "Notas.h"
#include "Media.h"

int main() {
    
    int opcao;
    Aluno alunos[100];
    Nota notas[50];
    int contAluno = 0, contNota = 0;
    
    do {
    
    printf("\nSistema Escolar\n");
    printf("1 - Cadastrar Aluno\n");
    printf("2 - Cadastrar Nota\n");
    printf("3 - Cadastrar Media\n");
    printf("0 - Sair\n");
    printf("Selecione uma opcao: ");
    scanf("%d", &opcao);
    
    switch (opcao) {
    case 1:
        cadastrarAluno(&alunos[contAluno], &contAluno);
        break;
    case 2:
        cadastrarNota (&notas[contNota], &contNota);
        break;
    case 3:
        cadastrarMedia (alunos, notas);
        break;
    case 0:
        break;
    }
    
    }while(opcao != 0);
    
    return 0;
}








