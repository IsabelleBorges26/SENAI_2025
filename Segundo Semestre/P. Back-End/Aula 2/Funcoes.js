// function soma (a, b) {
//     let res = a + b;
//     return res;
// }

// console.log ("Soma = " + soma (2,10));

// const subtrai = (a, b) => {
//     console.log (a - b);
// };

// subtrai (5, 7);

// var carros = ["Celta", "Gol", "Kzin", "Uno Escada", "147", "Fusca"];

// carros.forEach ( (carro) => {
//     if ( carro === "Uno Escada") {
//         console.log ("Encontrei");
//     } else {
//         console.log ("Não Encontrado");
//     }
// } );

var usuarios = [

    {
        "Nome": "Isabelle",
        "Sobrenome": " Borges",
        "Ano": 2008,
        "Matricula": 2300,
        "Telefone": "(19) 99938-6950"
    },

    {
        "Nome": "Guilherme",
        "Sobrenome": " Stafocher",
        "Ano": 2007,
        "Matricula": 3421,
        "Telefone": "(19) 99367-5432"
    },

    {
        "Nome": "Monique",
        "Sobrenome": " Babler",
        "Ano": 2008,
        "Matricula": 4356,
        "Telefone": "(19) 92345-6578"
    }
    
];

usuarios.forEach ( (usuario) => {
    if (usuario.Matricula === 2300) {
        let idade = 2025 - usuario.Ano;
        console.log ("Nome: " + usuario.Nome + usuario.Sobrenome);
        console.log ("Idade: " + idade);
    }
});

