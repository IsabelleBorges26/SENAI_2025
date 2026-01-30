#include <stdio.h> // Declaranda a biblioteca

typedef struct { // Estrutura do struct
    char nome[30]; // Variaveis que serão utilizadas
    float media;
} Aluno; // Nome da Estrutura

int main() { // Início 
    Aluno alunos[5]; // Quantidade de espaços na memória
    float soma, mediageral; // Variavel inteira

    for (int i = 0; i < 5; i++) { // Estrutura de laço de repetição para pedir as informações por cinco vezes
        printf("--- Cadastro do aluno(a) %d ---\n", i + 1);
        printf("Digite o nome: "); // Pede a informação
        scanf(" %[^\n]", alunos[i].nome); // Guarda a informação
        printf("Digite a sua média final: ");
        scanf("%f", &alunos[i].media);
        soma += alunos[i].media; // Vai somando as medias e adicionando na variavel
    }
    
    mediageral = soma / 5; // Calculo de média
    
    printf ("A média geral é de %.2f", mediageral); // Imprime o resultado
    
    return 0; // Fim
}
