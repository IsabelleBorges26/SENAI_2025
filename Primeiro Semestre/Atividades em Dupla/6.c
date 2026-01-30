#include <stdio.h> 

typedef struct {
    char nome[30];
    int idade;
    float IMC;
} Aluno;

Aluno aluno; 

void cadastro();
void classificacoes();

int main() {
    
    cadastro();
    classificacoes();

    return 0;
}

void cadastro() {
    printf("---Cadastro: Corpo em Movimento--- \n");
    printf("Informe seu nome: \n");
    scanf(" %[^\n]", aluno.nome); 
    printf("Informe sua idade: \n");
    scanf("%d", &aluno.idade);
    printf("Informe seu IMC: \n");
    scanf("%f", &aluno.IMC);
}

void classificacoes() {
    if (aluno.IMC > 30) {
        printf("Você está obeso!\n");
    }
    else if ((aluno.IMC < 30) && (aluno.IMC > 25)) {
        printf("Você está com sobrepeso!\n");
    }
    else if (aluno.IMC <= 25) {
        printf("Você está saudável!\n");
    }
}
