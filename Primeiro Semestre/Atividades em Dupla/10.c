#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char tipo[30];
    int idade;
    char nome[30];
} Animal;

Animal animais[50];
int numAnimais = 0;

void cadastrarAnimal();
void listarAnimais();
void AnimaisMaisVelhos();
void finalizarfuncao();

int main() {
    int opcao;

    do {
        printf("---- Amigo Fiel ----\n");
        printf("1 - Cadastrar Animal\n");
        printf("2 - Listar Animais\n");
        printf("3 - Exibir Animais com mais de 5 anos\n");
        printf("0 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch(opcao) {
            case 1:
                cadastrarAnimal();
                break;
            case 2:
                listarAnimais();
                break;
            case 3:
               AnimaisMaisVelhos();
                break;
            case 0:
                printf("Saindo...\n");
                break;
            default:
                printf("Opção inválida! Tente novamente.\n");
                break;
        }

    } while(opcao != 0);

    return 0;
}

void cadastrarAnimal() {
    system("clear");
    printf("---- Cadastrar Novo Animal ----\n");

    if (numAnimais >= 6) {
        printf("Limite de 6 animais atingido!\n");
        finalizarfuncao();
        return;
    }

    printf("Tipo do animal: ");
    scanf(" %[^\n]", animais[numAnimais].tipo);

    printf("Nome do animal: ");
    scanf(" %[^\n]", animais[numAnimais].nome);

    printf("Idade do animal: ");
    scanf("%d", &animais[numAnimais].idade);

    numAnimais++;

    finalizarfuncao();
}

void listarAnimais() {
    system("clear");
    printf("---- Lista de Animais ----\n");

    if (numAnimais == 0) {
        printf("Nenhum animal cadastrado ainda.\n");
    }

    for (int i = 0; i < numAnimais; i++) {
        printf("Tipo: %s\n", animais[i].tipo);
        printf("Nome: %s\n", animais[i].nome);
        printf("Idade: %d anos\n", animais[i].idade);
        printf("-------------------------\n");
    }

    finalizarfuncao();
}

void AnimaisMaisVelhos() {
    system("clear");
    printf("---- Animais com mais de 5 anos ----\n");

    int achou = 0;

    for (int i = 0; i < numAnimais; i++) {
        if (animais[i].idade > 5) {
            printf("Nome: %s | Tipo: %s | Idade: %d anos\n", animais[i].nome, animais[i].tipo, animais[i].idade);
            achou = 1;
        }
    }

    if (!achou) {
        printf("Nenhum animal com mais de 5 anos encontrado.\n");
    }

    finalizarfuncao();
}

void finalizarfuncao() {
    printf("\n------------------------------\n");
    printf("Pressione Enter para continuar...");
    getchar(); 
    getchar(); 
    system("clear");
}
