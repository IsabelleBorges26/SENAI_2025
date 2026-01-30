#include <stdio.h> // Declaranda a biblioteca

typedef struct { // Estrutura do struct
    char nome[30]; // Variaveis que serão utilizadas
    int matricula;
} Aluno; // Nome da Estrutura

int main() { // Início 
    Aluno alunos[3]; // Quantidade de espaços na memória
    int opcao; // Variavel inteira

    for (int i = 0; i < 3; i++) { // Estrutura de laço de repetição para pedir as informações por tres vezes
        printf("--- Cadastro do aluno(a) %d ---\n", i + 1);
        printf("Digite o nome: "); // Pede a informação
        scanf(" %[^\n]", alunos[i].nome); // Guarda a informação
        printf("Digite a matrícula: ");
        scanf("%d", &alunos[i].matricula);
    }
    
    do { // Estrutura de repetição
        printf("\nSelecione uma opção:\n"); // Menu 
        printf("1 - Buscar aluno por matrícula\n");
        printf("2 - Sair\n");
        scanf("%d", &opcao); // Guarda a opção escolhida pelo usuario

        switch (opcao) { // Estrutura de escolha 

            case 1: { 
                int matriculaBusca, encontrada = 0; // Variaveis que serão usadas
                printf("Digite a matrícula para busca: "); // Pede a matricula para buscar
                scanf("%d", &matriculaBusca); // Guarda a informação
                for (int i = 0; i < 3; i++) { // Estrutura de laço de repetição
                    if (alunos[i].matricula == matriculaBusca) { // Estrutura de condição, Procura nas resposta se a matricula é igual ao nome
                        printf("Aluno encontrado:Nome: %s | Mátricula: %d", alunos[i].nome, alunos[i].matricula); // Informa ao usuario
                        encontrada = 1;
                        break;
                    }
                }
                if (!encontrada) { // Estrutura de condição, se não for encontrado
                    printf("Matrícula não encontrada.\n"); // Imprime para o usuario 
                }
                break;
            }

            case 2: // Caso o usuario queira sair do programa
                printf("Encerrando o programa.\n");
                break;

            default: // Caso o usuario digite uma opção que não tenha
                printf("Opção inválida. Tente novamente.\n");
        }
    } while (opcao != 2); // Encerra a repetição

    return 0; // Fim
}
