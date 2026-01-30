#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, "");

    int n[5], i, opcao;

    do {
        printf("Informe cinco números inteiros:\n");
    for (i = 0; i < 5; i ++) {
        printf ("Digite o numero %d: ", i + 1);
        scanf ("%d", &n[i]);
    }
    
        printf("O que você deseja? \n");
        printf("1 - Vizualizar todos os números \n");
        printf("2 - Visualizar apenas os números pares \n");
        printf("3 - Visualizar apenas os números impares \n");
        scanf("%d", &opcao);

       
        switch (opcao) {
            case 1:
                printf("Você escolheu vizualizar todos os números!\n");
                for (i = 0; i < 5; i ++){
                    printf ("%d \n", n[i]);
                }
                break;
            
            case 2:
                printf("Você escolheu visualizar apenas os números pares!\n");
                for (i = 0; i < 5; i ++){
                    if (n[i] % 2 == 0){
                        printf ("%d \n", n[i]);
                    }
                }
                break;
                
            case 3:
                printf("Você escolheu visualizar apenas os números impares!\n");
                for (i = 0; i < 5; i ++){
                    if (n[i] % 2 != 0){
                        printf ("%d \n", n[i]);}
                }
                break;
                
            default:
                printf("Opção inválida! Tente novamente. \n");
                break;
        }
        
        printf("Pressione Enter para continuar...");
        getchar();
        getchar();
        system ("clear");
        
    } while (opcao != 3);

    return 0;
}
