#include <stdio.h> // Declara a biblioteca

int main () { // Início

    int idade; // Declarando a variavel idade, para guardar a idade informada pelo usuário

        printf ("Informe sua idade:\n"); 
        scanf ("%d", &idade); // Guarda na variavel idade
    
    if (idade < 16) { // Estrutura de condição, se a idade for menor que 16
        printf ("Sua idade é de %d, é proibido votar!", idade); // Se for verdadeiro, não pode votar
    }
    else if ((idade >= 16 && idade < 18) || idade >= 70) { // se a idade for entre 16 e 18 anos e maior que 70 anos
        printf ("Sua idade é de %d, o voto é facultativo!", idade); // Se for verdadeiro, voto facultativo
    }
    else {
        printf ("Sua idade é de %d, é obrigatorio votar!", idade); // Se for falso, tem que votar
    }

return 0; //Fim

}
