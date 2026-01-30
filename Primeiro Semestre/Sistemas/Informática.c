#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, "");

    int opcao, quantidade;
    float total = 0, totalcompra = 0;
    char opcao1;
    
    do {
        // Apresentação
        printf("Bem-vindo à MARRIE INFORMÁTICA, onde a tecnologia e a inovação se encontram!\n");

        // Menu
        printf("O que você precisa?\n");
        printf("1 - Teclado: R$ 100,00  \n");
        printf("2 - Mouse: R$ 50,00  \n");
        printf("3 - Monitor: R$ 800,00  \n");
        printf("4 - Placa de Vídeo: R$ 2000,00 \n");
        printf("5 - Sair \n");
        scanf("%d", &opcao);

        // Estrutura de escolha
        switch (opcao) {
            case 1:
                printf("O produto escolhido foi o teclado!\n");
                printf("Informe a quantidade necessária: ");
                scanf("%d", &quantidade);
                total = quantidade * 100;
                break;

            case 2:
                printf("O produto escolhido foi o mouse!\n");
                printf("Informe a quantidade necessária: ");
                scanf("%d", &quantidade);
                total = quantidade * 50;
                break;
                   
            case 3:
                printf("O produto escolhido foi o monitor!\n");
                printf("Informe a quantidade necessária: ");
                scanf("%d", &quantidade);
                total = quantidade * 800;
                break;
                
            case 4:
                printf("O produto escolhido foi a placa de vídeo!\n");
                printf("Informe a quantidade necessária: ");
                scanf("%d", &quantidade);
                total = quantidade * 2000;
                break;
            
            case 5:
                printf("Volte sempre!\n");
                printf("Saindo... \n");
                break;
                
            default:
                printf("Opção inválida! Tente novamente. \n");
                total = 0;
                break;
        }
        
        totalcompra = totalcompra + total;
        
        if (opcao != 5) {
            printf("Você deseja continuar comprando? \n");
            printf ("S - Sim \n");
            printf ("N - Não \n");
            scanf(" %c", &opcao1);
            
            if (opcao1 == 'N') {
                printf("Total da compra: R$ %.2f\n", totalcompra);
                printf("Obrigado por comprar conosco!\n");
                break;
            }
            
            system("clear");
        }

    } while (opcao != 5);

    return 0;
}
