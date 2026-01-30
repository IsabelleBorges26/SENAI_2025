const selectStatus = document.querySelector("#status");
const btnFiltrar = document.querySelector("#filtrar");

const chamados = [
 {
    id: 2,
    titulo: "Computador não liga após atualização",
    solicitante: "Carlos Lima",
    prioridade: "Média",
    status: "Em andamento",
    data: "2025-10-18"
  },
  {
    id: 3,
    titulo: "Problema na conexão Wi-Fi do escritório",
    solicitante: "Marina Dias",
    prioridade: "Baixa",
    status: "Resolvido",
    data: "2025-10-15"
  },
  {
    id: 4,
    titulo: "Sistema trava ao fazer login",
    solicitante: "Rafael Santos",
    prioridade: "Alta",
    status: "Aberto",
    data: "2025-10-22"
  },
  {
    id: 5,
    titulo: "Solicitação de novo e-mail corporativo",
    solicitante: "Beatriz Melo",
    prioridade: "Baixa",
    status: "Em andamento",
    data: "2025-10-19"
  },
  {
    id: 6,
    titulo: "Erro 404 ao acessar portal interno",
    solicitante: "João Ferreira",
    prioridade: "Média",
    status: "Resolvido",
    data: "2025-10-17"
  },
  {
    id: 7,
    titulo: "Impressora não aparece na rede",
    solicitante: "Larissa Costa",
    prioridade: "Média",
    status: "Aberto",
    data: "2025-10-23"
  },
  {
    id: 8,
    titulo: "Reset de senha de acesso ao sistema",
    solicitante: "Felipe Nogueira",
    prioridade: "Baixa",
    status: "Resolvido",
    data: "2025-10-14"
  }
];

const linha = document.querySelector("#linhaModelo");
const tbody = document.querySelector("tbody");

chamados.forEach((chamado) => {
    let novaLinha = linha.cloneNode(true);
    novaLinha.removeAttribute("id"); 

    novaLinha.querySelector(".id").textContent = chamado.id;
    novaLinha.querySelector(".titulo").textContent = chamado.titulo;
    novaLinha.querySelector(".solicitante").textContent = chamado.solicitante;
    novaLinha.querySelector(".prioridade").textContent = chamado.prioridade;
    novaLinha.querySelector(".status").textContent = chamado.status;
    novaLinha.querySelector(".data").textContent = chamado.data;

    tbody.appendChild(novaLinha);
});

btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();

    const statusSelecionada = selectStatus.value;
    
    tbody.querySelectorAll("tr").forEach((linhaModelo) => {
        const tbodyStatus = linhaModelo.querySelector(".status").textContent;

        if (tbodyStatus === statusSelecionada) {
            linhaModelo.style.display = "";
        } else {
            linhaModelo.style.display = "none";
        }
    });
});
