const selectStatus = document.querySelector("#status");
const btnListar = document.querySelector("#listar");
const btnBuscar = document.querySelector("#buscar");

const consultas = [
  {
    "id": 1,
    "paciente_nome": "Ana Costa",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologista",
    "data": "2024-09-25",
    "hora": "14:00",
    "status": "agendada"
  },
  {
    "id": 2,
    "paciente_nome": "Jose Silva",
    "telefone": "(11) 98888-5678",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-26",
    "hora": "09:30",
    "status": "finalizada"
  },
  {
    "id": 3,
    "paciente_nome": "Maria Lima",
    "telefone": "(11) 97777-4321",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologista",
    "data": "2024-09-27",
    "hora": "10:15",
    "status": "em andamento"
  },
  {
    "id": 4,
    "paciente_nome": "Carlos Pereira",
    "telefone": "(11) 96666-1111",
    "medico_nome": "Dr. Rodrigo",
    "especialidade": "Clinico Geral",
    "data": "2024-09-28",
    "hora": "15:00",
    "status": "agendada"
  },
  {
    "id": 5,
    "paciente_nome": "Julia Souza",
    "telefone": "(11) 95555-8888",
    "medico_nome": "Dr. Bruno",
    "especialidade": "Ortopedia",
    "data": "2024-09-29",
    "hora": "13:45",
    "status": "agendada"
  }
];

const linha = document.querySelector("#linhaModelo");
const tbody = document.querySelector("tbody");

consultas.forEach((consultas) => {
  let novaLinha = linha.cloneNode(true);

  novaLinha.querySelector(".id").textContent = consultas.id;
  novaLinha.querySelector(".nome_Paciente").textContent = consultas.paciente_nome;
  novaLinha.querySelector(".telefone").textContent = consultas.telefone;
  novaLinha.querySelector(".medico").textContent = consultas.medico_nome;
  novaLinha.querySelector(".especialidade").textContent = consultas.especialidade;
  novaLinha.querySelector(".data").textContent = consultas.data;
  novaLinha.querySelector(".hora").textContent = consultas.hora;
  novaLinha.querySelector(".status").textContent = consultas.status;

  tbody.appendChild(novaLinha);
});

btnListar.addEventListener("click", (event) => {
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

const busca = document.querySelector("#busca");

btnBuscar.addEventListener("click", (element) => {
  const espec = document.querySelector("#espec");
  console.log(espec.value);
  tbody.childNodes.forEach((box) => {
    if (box.innerHTML) {
      if(box.querySelector(".especialidade").innerHTML == espec.value) {
        box.style.display = "table-row";
      }else {
        box.style.display = "none";
      }
    }
  });
});