#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char produto[30];
    float valor;
    int quantidade;
} Venda; 

int Num_Vendas = 0; // Várivel global
Venda vendas [10];

void cadastrar_vendas ();
void listas_vendas ();
void calcular_faturamento ();
void media_quantidade_vendas ();
void finaliza_funcao ();

int main () {
    
    int opcao;
    
    do {
    
    printf ("--- Mercado SENAI ---\n");
    printf ("1 - Registrar venda\n");
    printf ("2 - Relatório de vendas\n");
    printf ("3 - Calcular faturamento\n");
    printf ("4 - Média de quantidade de vendas\n");
    printf ("5 - Sair\n");
    printf ("Selecione uma opção: \n");
    scanf ("%d", &opcao);
    
    switch (opcao) {
        case 1:
            cadastrar_vendas();
            break;
        case 2:
            listas_vendas();
            break;
        case 3:
            calcular_faturamento();
            break;
        case 4:
            media_quantidade_vendas();
            break;
        case 5:
            printf ("Obrigado pela preferencia! \n");
            break;
        default:
            printf ("Opção inválida!\n");
            break;
        
    }
    
    } while (opcao != 5);
    
    return 0;
    
}

void finaliza_funcao () {
    
    printf ("Clique 'enter' para continuar...");
    getchar ();
    getchar ();
    system ("clear");
}

void cadastrar_vendas () {
    
    system ("clear");
    printf ("- Nova venda - \n");
    printf ("Produto: ");
    scanf ("%s", vendas [Num_Vendas].produto);
    printf ("Valor unitário: ");
    scanf ("%f", &vendas [Num_Vendas].valor);
    printf ("Quantidade: ");
    scanf ("%d", &vendas [Num_Vendas].quantidade);
    Num_Vendas++;
    finaliza_funcao ();
    
}

void listas_vendas () {

    system ("clear");
    printf ("- Minhas vendas - \n");
    for (int i = 0; i < Num_Vendas; i++) {
        printf ("Número da venda: %d\n", i + 1);
        printf ("Produto: %s\n", vendas[i].produto);
        printf ("Valor unitário: R$ %.2f\n", vendas[i].valor);
        printf ("Quantidade: %d\n", vendas[i].quantidade);
        printf ("-----------------------\n");
    }
    finaliza_funcao ();
    
}

void calcular_faturamento() {

    system ("clear");
    printf ("- Meu faturamento - \n");
    float faturamento = 0;
    for (int i = 0; i < Num_Vendas; i++) {
        faturamento += (vendas[i].valor * vendas[i].quantidade);
    }
    printf ("Faturamento R$ %.2f\n", faturamento);
    finaliza_funcao ();
    
}

void media_quantidade_vendas() {

    system ("clear");
    printf ("- Quantidade média de vendas - \n");
    float media = 0;
    int contagem = 0;
    for (int i = 0; i < Num_Vendas; i++) {
        contagem += vendas[i].quantidade;
    }
    media = contagem / Num_Vendas;
    printf ("Quantidade média de vendas: %.2f\n", media);
    finaliza_funcao ();
    
}



    

    








// Cadastrar vendas
// Faturamento total
//Media de quantidade
