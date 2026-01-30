const selectCategoria = document.querySelector("#categoria");
const inputValor = document.querySelector("#valor");
const btnFiltrar = document.querySelector("#filtrar");
const btnMenu = document.querySelector("#btn-menu");
const menuLateral = document.querySelector("#menu-lateral");

btnMenu.addEventListener("click", () => {
    if (menuLateral.style.left === "" || menuLateral.style.left === "-200px") {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-200px";
    }
});

const produtos = [
    {
        imagem: "marrie.jpg",
        nome: "Pelúcia Marrie",
        valor: 389.43   ,
        categoria: 1
    },
    {
        imagem: "dumbo.jpg",
        nome: "Pelúcia Dumbo",
        valor: 436.65,
        categoria: 1
    },
    {
        imagem: "dama.jpg",
        nome: "Pelúcia Dama",
        valor: 254.87,
        categoria: 2
    },
    {
        imagem: "esven.jpg",
        nome: "Pelúcia Sven",
        valor: 389.90,
        categoria: 2
    },
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

var valorMax = 0;
produtos.forEach((produto) => {
    let NovoCard = card.cloneNode(true);

    NovoCard.querySelector("img").src = produto.imagem;
    NovoCard.querySelector(".nome").innerHTML = produto.nome;
    NovoCard.querySelector(".valor").innerHTML = "R$ " + produto.valor;
    NovoCard.querySelector(".categoria").innerHTML = produto.categoria;

    main.appendChild(NovoCard);

    if (produto.valor > valorMax) {
        valorMax = Math.round(produto.valor);
    }
});

inputValor.max = valorMax;

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", () => {
    main.childNodes.forEach((box) => {
        const conteudo = box.innerHTML;
        if (conteudo) {
            const nome = box.querySelector(".nome").innerHTML
            if (nome.toLowerCase().includes(busca.value.toLowerCase())) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    });
});

btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();
    
    const  categoriaSelecionada = selectCategoria.value;
    const valorSelecionado = Number(inputValor.value);


    main.childNodes.forEach ((box) => {
        if (box.innerHTML) {
            const boxCategoria = box.querySelector(".categoria").innerHTML;
            const boxValor = Number(box.querySelector(".valor").innerHTML.split(" ")[1]);

            if ((boxCategoria === categoriaSelecionada || categoriaSelecionada == 0) && (valorSelecionado == 0 || boxValor <= valorSelecionado)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    });
});

inputValor.addEventListener("change", () => {
    document.querySelector("#spVal").innerHTML = "R$ " + inputValor.value;
});
