const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const botao = document.getElementById ("botao");
const color = document.querySelector (".color");

botao.addEventListener ("click", function () {
    const randomNunber = getRandomNumber ();
    document.body.style.backgroundColor = colors [randomNunber];
    color.textContent = colors[randomNunber];
});

function getRandomNumber () {
    return Math.floor (Math.random() * colors.length);
};



