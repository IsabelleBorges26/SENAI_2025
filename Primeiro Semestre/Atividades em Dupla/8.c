#include <stdio.h>

typedef struct {
    char nome[100];
    int ano;
} Livro;

Livro livros[50];  
int numLivro = 8; 

int main() {

printf ("---===Letras Vivas===---\n");
    for (int i = 0; i < numLivro; i++) {
        printf("Cadastro do livro %d:\n", i + 1);

        printf("Nome: ");
        scanf(" %99[^\n]", livros[i].nome);

        printf("Ano de publicacao: ");
        scanf("%d", &livros[i].ano);

        printf("\n");
    }

    printf("Livros publicados antes de 2000:\n");
    for (int i = 0; i < numLivro; i++) {
        if (livros[i].ano < 2000) {
            printf(" %s %d\n", livros[i].nome, livros[i].ano);
        }
    }

    return 0;
}
