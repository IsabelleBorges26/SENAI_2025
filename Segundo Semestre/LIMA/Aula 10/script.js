const produtos = [
    {
        nome: "Mirella Brolezi",
        turma: "Turma: 2B",
        disciplina: "Disciplina: Biologia",
        media: 9.4
    },
    {
        nome: "Carlos Silva",
        turma: "Turma: 2B",
        disciplina: "Disciplina: Matemática",
        media: 4.7
    },
    {
        nome: "João Pereira",
        turma: "Turma: 2B",
        disciplina: "Disciplina: Física",
        media: 9.0
    },
    {
        nome: "Ana Souza",
        turma: "Turma: 2B",
        disciplina: "Disciplina: Química",
        media: 5.9
    }
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

produtos.forEach((produto) => {
    let NovoCard = card.cloneNode(true);

    NovoCard.querySelector("h2").innerHTML = produto.nome;
    NovoCard.querySelector("#turma").innerHTML = produto.turma;
    NovoCard.querySelector("#disciplina").innerHTML = produto.disciplina;
    NovoCard.querySelector("#media").innerHTML = produto.media;

    if (produto.media < 7) {
        NovoCard.style.backgroundColor = "rgb(255, 180, 180)"; 
    }

    main.appendChild(NovoCard);
});
