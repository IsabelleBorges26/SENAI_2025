const imagens = [
    "url('img1.jpg')",
    "url('img2.jpg')",
    "url('img3.jpg')"
];

const botao = document.getElementById("botao");
const img = document.querySelector(".img"); 

botao.addEventListener("click", function () {
    const randomimg = getRandomimg();
    document.body.style.backgroundImage = imagens[randomimg]; 
});

function getRandomimg() {
    return Math.floor(Math.random() * imagens.length);
}
