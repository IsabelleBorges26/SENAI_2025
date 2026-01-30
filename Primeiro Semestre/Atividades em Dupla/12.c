#include <stdio.h>

int main() {
    float notas[20]; 
    float soma, media;
    
    printf("\n---- Língua Viva ----\n");
    
    for (int aluno = 0; aluno < 5; aluno++) {
        printf("Digite as notas do aluno %d:\n", aluno + 1);
        for (int prova = 0; prova < 4; prova++) {
            printf("Nota da prova %d: ", prova + 1);
            scanf("%f", &notas[aluno * 4 + prova]);
        }
    }

    printf("\n---- Resultados ----\n");
    
    for (int aluno = 0; aluno < 5; aluno++) {
        soma = 0;
        
        for (int prova = 0; prova < 4; prova++) {
            soma += notas[aluno * 4 + prova];
        }
        
        media = soma / 4.0;
        
        printf("Aluno %d - Media: %.2f - ", aluno + 1, media);
        
        if (media >= 6.0) {
            printf("Aprovado\n");
        } else {
            printf("Reprovado\n");
        }
    }

    return 0;
}
