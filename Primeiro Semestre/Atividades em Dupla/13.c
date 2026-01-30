#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char nome[30];   
    int quantidade;  
    float preco;     
} Produto;

Produto produtos[10]; 
int numProdutos = 0;


void cadastrarProduto();
void listarProdutos();
void calcularValortotal();
void finalizarfuncao();

int main() {
    int opcao;

    do {
        printf("---- Mercado SuperCompra ----\n");
        printf("1 - Cadastrar Produto\n");
        printf("2 - Listar Produtos\n");
        printf("3 - Calcular Valor Total no Estoque\n");
        printf("0 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch(opcao) {
            case 1:
                cadastrarProduto();
                break;
            case 2:
                listarProdutos();
                break;
            case 3:
                calcularValortotal();
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

void cadastrarProduto() {
    system("clear"); 
    if (numProdutos >= 10) {
        printf("Limite de 10 produtos atingido!\n");
    } else {
        printf("---- Cadastrar Novo Produto ----\n");
        printf("Nome do produto: ");
        scanf(" %[^\n]", produtos[numProdutos].nome);

        printf("Quantidade em estoque: ");
        scanf("%d", &produtos[numProdutos].quantidade);

        printf("Preço unitário (R$): ");
        scanf("%f", &produtos[numProdutos].preco);

        numProdutos++;
        printf("Produto cadastrado com sucesso!\n");
    }

    finalizarfuncao();
}

void listarProdutos() {
    system("clear");
    printf("---- Lista de Produtos ----\n");

    if (numProdutos == 0) {
        printf("Nenhum produto cadastrado ainda.\n");
    } else {
        for (int i = 0; i < numProdutos; i++) {
            printf("Produto %d:\n", i + 1);
            printf("Nome: %s\n", produtos[i].nome);
            printf("Quantidade: %d\n", produtos[i].quantidade);
            printf("Preço unitário: R$ %.2f\n", produtos[i].preco);
            printf("-------------------------\n");
        }
    }

    finalizarfuncao();
}

void calcularValortotal() {
    system("clear");
    printf("---- Valor Total no Estoque ----\n");

    float valortotal = 0.0;

    for (int i = 0; i < numProdutos; i++) {
        valortotal += produtos[i].quantidade * produtos[i].preco;
    }

    printf("Valor total no estoque: R$ %.2f\n", valortotal);

    finalizarfuncao();
}

void finalizarfuncao() {
    printf("\n------------------------------\n");
    printf("Pressione Enter para continuar...");
    getchar();
    getchar();
    system("clear"); 
}

