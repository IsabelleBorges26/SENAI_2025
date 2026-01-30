#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char marca[30];
    int ano;
    int km;
} Carro;

Carro carros[5]; // máximo de 5 carros
int numCarros = 0;

void cadastrarCarro();
void listarCarrosAltaKm();
void finalizarfuncao();

int main() {
    int opcao;

    do {
        printf("---- Oficina AutoCheck ----\n");
        printf("1 - Cadastrar Carro para Revisão\n");
        printf("2 - Listar Carros com mais de 100.000 km\n");
        printf("0 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch(opcao) {
            case 1:
                cadastrarCarro();
                break;
            case 2:
                listarCarrosAltaKm();
                break;
            case 0:
                printf("Encerrando o sistema...\n");
                break;
            default:
                printf("Opção inválida! Tente novamente.\n");
        }

    } while(opcao != 0);

    return 0;
}

void cadastrarCarro() {
    system("clear"); // ou "cls" no Windows
    if (numCarros >= 5) { // limite fixo sem MAX_CARROS
        printf("Limite de 5 carros atingido!\n");
    } else {
        printf("---- Cadastro de Carro ----\n");
        printf("Marca: ");
        scanf(" %29[^\n]", carros[numCarros].marca);

        printf("Ano: ");
        scanf("%d", &carros[numCarros].ano);

        printf("Quilometragem: ");
        scanf("%d", &carros[numCarros].km);

        numCarros++;
        printf("Carro cadastrado com sucesso!\n");
    }

    finalizarfuncao();
}

void listarCarrosAltaKm() {
    system("clear");
    int encontrados = 0;

    printf("---- Carros com mais de 100.000 km ----\n");

    for (int i = 0; i < numCarros; i++) {
        if (carros[i].km > 100000) {
            printf("Marca: %s\n", carros[i].marca);
            printf("Ano: %d\n", carros[i].ano);
            printf("Quilometragem: %d km\n", carros[i].km);
            printf("-------------------------\n");
            encontrados++;
        }
    }

    if (encontrados == 0) {
        printf("Nenhum carro com mais de 100.000 km cadastrado.\n");
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
