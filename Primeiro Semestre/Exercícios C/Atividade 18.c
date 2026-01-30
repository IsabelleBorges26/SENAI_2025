#include <stdio.h> // Declarando a biblioteca

struct Aluno { // Estrutura struct
    char nome[30]; // Variaveis necessárias
    float nota1;
    float nota2;
    float nota3;
};

int main() { // Início
    struct Aluno aluno; // Nome da estrutura
    float media; // Variavel tipo decimal

    printf("Informe o nome do aluno:\n"); // Pede ao usuario as informações
    scanf(" %[^\n]", aluno.nome); // Guarda as informações na Variavel

    printf("Informe a primeira nota: ");
    scanf("%f", &aluno.nota1);

    printf("Informe a segunda nota: ");
    scanf("%f", &aluno.nota2);

    printf("Informe a terceira nota: ");
    scanf("%f", &aluno.nota3);

    media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3.0; // Calculo de média

    if (media >= 7.0) { // Estrutura de condição, se a nota for maior ou igual a 7 o aluno é aprovado, se não, não
        printf("O aluno %s foi aprovado, com a média de %.2f\n", aluno.nome, media); // Imprime o resultado
    } else {
        printf("O aluno %s foi reprovado, com a média de %.2f\n", aluno.nome, media);
    }

    return 0; // Fim
}
