#include <stdio.h> // Declarando a biblioteca

int main () { // Início
    
    int i, N; // Declarando a variavel i, que sera usada no for e N para guardar o número que o usuario informar 
    
    printf ("Informe um número que deseja fazer a tabauda: \n"); // Pede ao usuario um número
    scanf ("%d", &N); // Guarda na variavel
    
    for (i = 1; i <= 10; i++) { // Estrutura de laço de repetição
        printf ("%d x %d = %d \n", N, i, N*i); // Imprime a tabuada do número de 1 a 100
    }
    
return 0; //Fim

}
