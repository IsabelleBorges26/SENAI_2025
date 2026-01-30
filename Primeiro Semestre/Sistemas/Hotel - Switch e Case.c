//Bibliotecas
#include <stdio.h>
#include <locale.h>

//Início
int main () {
    setlocale (LC_ALL, "");

// Variaveis
    int opcao, servico, pedido, refeicao, bebida;
    char primeiro_nome[10], CPF[15], telefone[10], ultimo_nome[10];
    
// Opções 
    printf ("Sejam bem vindos ao hotel *--MARRIE--*, vamos começar o seu checkin! Prencha as seguintes informações:\n");
    printf ("1 - Informe seu primeiro nome:\n");
    scanf ("%s", primeiro_nome);
    printf ("2 - Informe seu último nome:\n");
    scanf ("%s", ultimo_nome);
    printf ("3 - Informe o seu CPF:\n");
    scanf ("%s", CPF);
    printf ("4 - Informe o seu número de celular:\n");
    scanf ("%s", telefone);
    printf ("Checkin finalizado, aproveite nossa estadia!\n");
    printf ("Caso necessario, digite: \n");
    printf ("1 - Serviço de quarto \n");
    printf ("2 - Fazer um pedido \n");
    scanf ("%d", &opcao);

// Estrutura de escolha
    switch (opcao) 
    {
        case 1:
            printf ("Você escolheu o serviço de quarto!\n");
            printf ("Informe o serviço necessário: \n");
            printf ("1 - Trocar roupas de cama \n");
            printf ("2 - Limpeza do quarto \n");
            printf ("3 - Reposição de itens \n");
            scanf ("%d", &servico);
            switch (servico)  
            {
                case 1:
                printf ("Aguarde alguns minutos, as camareiras levarão roupas limpinhas e cheirosas!\n");
                break;
                case 2:
                printf ("Aguarde alguns minutos, as camareiras jajá deixarão o seu quarto um brinco!\n");
                break;
                case 3:
                printf ("Aguarde alguns minutos, as camareiras recolocarão os itens que você precisa!\n");
                break;
            }
            break;
    
        case 2:
            printf ("Você quer fazer um pedido! O que você deseja?\n");
            printf ("1 - Comidas \n");
            printf ("2 - Bebidas \n");
            scanf ("%d", &pedido);
            switch (pedido)  
            {
                case 1:
                printf ("Qual refeição você gostaria de fazer?\n");
                printf ("1 - Café da Manhã \n");
                printf ("2 - Almoço \n");
                printf ("3 - Janta \n");
                scanf ("%d", &refeicao);
                switch (refeicao)
                {
                    case 1:
                    printf ("Aguarde alguns minutos, os cozinheiros estão na missão de preparar o melhor café da manhã de sua vida!\n");
                    break;
                    case 2:
                    printf ("Aguarde alguns minutos, os cozinheiros estão na missão de preparar o melhor almoço de sua vida!\n");
                    break;
                    case 3:
                    printf ("Aguarde alguns minutos, os cozinheiros estão na missão de preparar a melhor janta de sua vida!\n");
                    break;
                }
                break;
            
                case 2: 
                printf ("Qual bebida você gostaria de tomar?\n");
                printf ("1 - Com álcool, quero aproveitar! \n");
                printf ("2 - Sem álcool, quero ficar tranquila! \n");
                printf ("3 - Refrigerante, gosto do básico! \n");
                scanf ("%d", &bebida);
                switch (bebida) 
                {
                    case 1:
                    printf ("Aguarde alguns minutos, o barman está fazendo um drink para você ficar maluca(o)!\n");
                    break;
                    case 2:
                    printf ("Aguarde alguns minutos, o barman está fazendo um suco ou um drink sem álcool para você relaxar!\n");
                    break;
                    case 3:
                    printf ("Aguarde alguns minutos, o garçom já está indo levar seu refrigerante!\n");
                    break;
                }
                break;
            }
            break;
        }
    
//Saída
    return 0; 
}