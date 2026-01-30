#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[30];
    int matricula;
    float media;
} Aluno;

int main() {
    Aluno alunos[3];
    int opcao;

    // Cadastro de alunos
    for (int i = 0; i < 3; i++) {
        printf("--- Cadastro do aluno(a) %d ---\n", i + 1);
        printf("Digite o nome: ");
        scanf(" %[^\n]", alunos[i].nome); // permite nomes com espaço
        printf("Digite a matrícula: ");
        scanf("%d", &alunos[i].matricula);
        printf("Digite a média: ");
        scanf("%f", &alunos[i].media);
    }

    // Menu
    do {
        printf("\nSelecione uma opção:\n");
        printf("1 - Listar todos os alunos\n");
        printf("2 - Aluno com maior média\n");
        printf("3 - Buscar aluno por matrícula\n");
        printf("4 - Sair\n");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("\n--- Lista de Alunos ---\n");
                for (int i = 0; i < 3; i++) {
                    printf("Nome: %s | Mátricula: %d | Média: %.2f\n", alunos[i].nome, alunos[i].matricula, alunos[i].media);
                }
                break;

            case 2: {
                int maior = 0;
                for (int i = 1; i < 3; i++) {
                    if (alunos[i].media > alunos[maior].media) {
                        maior = i;
                    }
                }
                printf("\nAluno com maior média:\n");
                printf("Nome: %s | Mátricula: %d | Média: %.2f\n",  alunos[maior].nome, alunos[maior].matricula, alunos[maior].media);
                break;
            }

            case 3: {
                int matriculaBusca;
                int encontrada = 0;
                printf("Digite a matrícula para busca: ");
                scanf("%d", &matriculaBusca);
                for (int i = 0; i < 3; i++) {
                    if (alunos[i].matricula == matriculaBusca) {
                        printf("Aluno encontrado:Nome: %s | Mátricula: %d | Média: %.2f\n", alunos[i].nome, alunos[i].matricula, alunos[i].media);
                        encontrada = 1;
                        break;
                    }
                }
                if (!encontrada) {
                    printf("Matrícula não encontrada.\n");
                }
                break;
            }

            case 4:
                printf("Encerrando o programa.\n");
                break;

            default:
                printf("Opção inválida. Tente novamente.\n");
        }
    } while (opcao != 4);

    return 0;
}
