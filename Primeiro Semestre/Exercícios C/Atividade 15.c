#include <stdio.h> // Declarando a biblioteca

typedef struct { // Estrutura de struct, quais variaveis serão utilizadas
    char nome[30];
    int idade;
    float nota;
} Aluno; // Nome da estrutura

int main() { // Início 
    Aluno alunos; 
    int opcao; // Declarando as variaveis inteiras
    
    printf("--- Cadastro do aluno(a) ---\n"); // Perguntando ao usuario as informações
    printf("Digite o nome: ");
    scanf(" %[^\n]", alunos.nome);c // Guardando na variavel direcionado
    printf("Digite a idade: ");
    scanf("%d", &alunos.idade);
    printf("Digite a nota: ");
    scanf("%f", &alunos.nota);

    printf ("Nome: %s\n", alunos.nome); // Imprime o Cadastro
    printf ("Idade: %d\n", alunos.idade);
    printf ("Nota: %.2f\n", alunos.nota);
    
    return 0; // Fim
}
