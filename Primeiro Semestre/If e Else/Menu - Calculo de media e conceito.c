//Definição das bibliotecas 
#include <stdio.h>
#include <locale.h>
// Inicio
int main() {
    setlocale(LC_ALL, "");
//Definição das variaveis
    float n1, n2, n3, n4, media;
    int opcao;
// Menu de opções   
    printf("Escolha uma matéria:\n");
    printf("1 - Matemática\n");
    printf("2 - Português\n");
    printf("3 - Inglês\n");
    printf("4 - História\n");
    printf("Digite a opção desejada: ");
    scanf("%d", &opcao);
 // Definir o nome da matéria com base na opção
    if (opcao == 1) 
    {
        printf("A opção escolhida foi Matemática!\n");
      
    } else if (opcao == 2) {
        printf("A opção escolhida foi Português!\n");
      
    } else if (opcao == 3) {
        printf("A opção escolhida foi Inglês!\n");
       
    } else if (opcao == 4) {
        printf("A opção escolhida foi História!\n");
       
    } else {
        printf("Opção inválida!\n");
        
    }

// Pedir as notas
    printf("Informe as suas quatro notas, de 0 a 10:\n");
    scanf("%f %f %f %f", &n1, &n2, &n3, &n4);

    // Calcular a média
    media = (n1 + n2 + n3 + n4) / 4;

    // Determinar conceito e aprovação/reprovação
    printf("\nRELATÓRIO FINAL\n");
    printf("Média Final: %.2f\n", media);

    if (media >= 9.0) {
        printf("Seu conceito é A e você foi aprovado!\n");
    } else if (media >= 7.5) {
        printf("Seu conceito é B e você foi aprovado!\n");
    } else if (media >= 6.0) {
        printf("Seu conceito é C e você foi aprovado!\n");
    } else if (media >= 4.0) {
        printf("Seu conceito é D e você foi reprovado!\n");
    } else {
        printf("Seu conceito é E e você foi reprovado!\n");
    }

    return 0;
}
