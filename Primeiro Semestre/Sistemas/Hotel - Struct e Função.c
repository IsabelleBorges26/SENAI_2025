#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

typedef struct {
    char primeiro_nome[10], ultimo_nome[10], CPF[15], telefone[10];
} Checkin;

int Num_checkin = 0;
int opcao, servico, pedido, refeicao, bebida;
Checkin checkin[10];

void Checkin_Clientes();
void Escolha_de_Servicos();
void servico_de_quarto();
void Escolher_Pedidos();
void Escolher_Refeição();
void Escolher_Bebida ();

int main() {
    setlocale(LC_ALL, "");

    Checkin_Clientes();
    printf("Pressione Enter para continuar...");
    getchar();
    getchar();
    system("clear");

    do {
        
        Escolha_de_Servicos();

        switch (opcao) {
            case 1:
                servico_de_quarto();
                switch (opcao) {
                    case 1:
                        printf("Aguarde alguns minutos, as camareiras levarão roupas limpinhas e cheirosas!\n");
                        break;
                    case 2:
                        printf("Aguarde alguns minutos, as camareiras jajá deixarão o seu quarto um brinco!\n");
                        break;
                    case 3:
                        printf("Aguarde alguns minutos, as camareiras recolocarão os itens que você precisa!\n");
                        break;
                    default:
                        printf("Opção inválida!\n");
                        break;
                }
                break;

            case 2:
                Escolher_Pedidos();
                switch (pedido) {
                    case 1:
                        Escolher_Refeição();
                        switch (refeicao) {
                            case 1:
                                printf("Aguarde alguns minutos, os cozinheiros estão na missão de preparar o melhor café da manhã de sua vida!\n");
                                break;
                            case 2:
                                printf("Aguarde alguns minutos, os cozinheiros estão na missão de preparar o melhor almoço de sua vida!\n");
                                break;
                            case 3:
                                printf("Aguarde alguns minutos, os cozinheiros estão na missão de preparar a melhor janta de sua vida!\n");
                                break;
                            default:
                                printf("Opção inválida!\n");
                                break;
                        }
                        break;

                    case 2:
                        Escolher_Bebida();
                        switch (bebida) {
                            case 1:
                                printf("Aguarde alguns minutos, o barman está fazendo um drink para você ficar maluca(o)!\n");
                                break;
                            case 2:
                                printf("Aguarde alguns minutos, o barman está fazendo um suco ou um drink sem álcool para você relaxar!\n");
                                break;
                            case 3:
                                printf("Aguarde alguns minutos, o garçom já está indo levar seu refrigerante!\n");
                                break;
                            default:
                                printf("Opção inválida!\n");
                                break;
                        }
                        break;

                    default:
                        printf("Opção inválida!\n");
                        break;
                }
                break;

            case 3:
                printf("Saindo... \n");
                break;

            default:
                printf("Opção inválida! Tente novamente. \n");
                break;
        }

        printf("Pressione Enter para continuar...");
        getchar();
        getchar();
        system("clear");

    } while (opcao != 3);

    return 0;
}

void Checkin_Clientes() {
    printf("Sejam bem-vindos ao hotel MARRIE!\n");
    printf ("Vamos começar o seu checkin! Preencha as seguintes informações:\n");
    printf("1 - Informe seu primeiro nome:\n");
    scanf("%s", checkin[Num_checkin].primeiro_nome);
    printf("2 - Informe seu último nome:\n");
    scanf("%s", checkin[Num_checkin].ultimo_nome);
    printf("3 - Informe o seu CPF:\n");
    scanf("%s", checkin[Num_checkin].CPF);
    printf("4 - Informe o seu número de celular:\n");
    scanf("%s", checkin[Num_checkin].telefone);
    printf("Checkin finalizado, aproveite nossa estadia!\n");
    Num_checkin++; 
}

void Escolha_de_Servicos() {
    printf("Você gostaria de fazer algum pedido? \n");
    printf("1 - Serviço de quarto \n");
    printf("2 - Fazer um pedido \n");
    printf("3 - Não \n");
    scanf("%d", &opcao);
}

void servico_de_quarto() {
    int op = 0;
    printf("Você escolheu o serviço de quarto!\n");
    printf("Informe o serviço necessário: \n");
    printf("1 - Trocar roupas de cama \n");
    printf("2 - Limpeza do quarto \n");
    printf("3 - Reposição de itens \n");
    scanf("%d", &op);
}

void Escolher_Pedidos() {
    printf("Você quer fazer um pedido! O que você deseja?\n");
    printf("1 - Comidas \n");
    printf("2 - Bebidas \n");
    scanf("%d", &pedido);
}

void Escolher_Refeição() {
    printf("Qual refeição você gostaria de fazer?\n");
    printf("1 - Café da Manhã \n");
    printf("2 - Almoço \n");
    printf("3 - Janta \n");
    scanf("%d", &refeicao);
}

void Escolher_Bebida() {
    printf("Qual bebida você gostaria de tomar?\n");
    printf("1 - Com álcool, quero aproveitar! \n");
    printf("2 - Sem álcool, quero ficar tranquila! \n");
    printf("3 - Refrigerante, gosto do básico! \n");
    scanf("%d", &bebida);
}







