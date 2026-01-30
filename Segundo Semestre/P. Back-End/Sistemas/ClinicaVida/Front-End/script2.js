const consultas = [
  {
    "id": 1,
    "paciente_nome": "Ana Costa",
    "telefone": "(11) 99999-1234",
    "medico_nome": "Dra. Camila",
    "especialidade": "Cardiologia",
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
    "especialidade": "Cardiologia",
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

console.log(consultas.length);

var agendadas = 0;
var emandamento = 0;
var finalizada = 0;

consultas.forEach(consulta => {
  if (consulta.status === "agendada") {
    agendadas++;
  } else if (consulta.status === "em andamento") {
    emandamento++;
  } else if (consulta.status === "finalizada") {
    finalizada++;
  }
});

var Cardiologia = 0;
var Ortopedia = 0;
var Clinico  = 0;

consultas.forEach(consulta => {
    if(consulta.especialidade == "Cardiologia") {
        Cardiologia++;
    }
    else (consulta.especialidade == "Ortopedia"); {
        Ortopedia++;
    }
    if(consulta.especialidade == "Clinico Geral") {
        Clinico++;
    }
});

const totalConsultas = document.querySelector("#totalConsultas");
const totalCardio = document.querySelector("#totalCardio");
const totalOrto = document.querySelector("#totalOrto");
const totalCli = document.querySelector("#totalCli");
const totalAge = document.querySelector("#totalAge");
const totalMento = document.querySelector("#totalMento");
const totalFin = document.querySelector("#totalFin");

totalConsultas.innerHTML = consultas.length;
totalCardio.innerHTML = Cardiologia;
totalOrto.innerHTML = Ortopedia;
totalCli.innerHTML = Clinico;
totalAge.innerHTML = agendadas;
totalMento.innerHTML = emandamento;
totalFin.innerHTML = finalizada;
