#include <stdio.h> // Declara a biblioteca

int main () { // Início
    
    float nota[2], media; // Declarando a váriavel decimal nota, que será responsavel por guardar dois espaços na memória. E a variável media para fazer o calculo
    int i; // A váriavel i que sera responsavel no for
    
    for (i = 0; i < 2; i++){ // Estrutura de laço de repetição, para pedir ao usuário duas notas
        printf ("Informe sua nota %d: \n", i + 1); 
        scanf ("%f", &nota[i]); //Guarda as notas na váriavel nota
    }
    
    media = (nota[0] + nota [1]) / 2.00; // Faz o calculo da média entre as duas notas informadas
    
    if (media >= 7) { // Estrutura de condição, se a media for maior ou igual a 7
        printf ("Sua média foi de %.2f, você foi aprovado!", media); // Se for verdadeiro, o aluno foi aprovado
    }
    else {
        printf ("Sua média foi de %.2f, você foi reprovado!", media); // Se for falso, o aluno foi reprovado
    }

return 0; //Fim

}
