// Objetos JSON
var livros = [
{
        "Titulo": "Morro Dos Ventos Uivantes",
        "Autor": "Emily Brontë",
        "Paginas": 240
},
{
        "Titulo": "Corte de Espinhos e Rosas",
        "Autor": "Sarah J. Maas",
        "Paginas": 434
}
];


// Buscar livro por título
console.log("-----------------------------------------");
livros.forEach((livro, indice) => {
    if (livro.Titulo === "Morro Dos Ventos Uivantes") {
        console.log("Livro encontrado: " + livro.Titulo);
    }
});
console.log("-----------------------------------------");


// Excluir o livro "Morro Dos Ventos Uivantes" da lista
livros.forEach((livro, indice) => {
    if (livro.Titulo === "Morro Dos Ventos Uivantes") {
        livros.splice(indice, 1);
    }
});
console.log(livros);
console.log("-----------------------------------------");


// Adicionar um novo livro na lista
var novo = 
    {   "Titulo": "A rainha Vermelha",
        "Autor": "Victoria Aveyard",
        "Paginas": 424
    }
livros.push(novo);
console.log (livros);
console.log("-----------------------------------------");


// Localizar livro por título e editar o autor
livros.forEach((livro) => {
    if (livro.Titulo === "Corte de Espinhos e Rosas") {
        livro.Autor = "Isabelle Borges";
    }
});
console.log(livros);

