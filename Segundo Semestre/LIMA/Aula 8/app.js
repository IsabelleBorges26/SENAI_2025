let count = 0;

const valor = document.querySelector("#valor");
const botoes = document.querySelectorAll(".botao");

const cores = [
  "#f8bbd0", 
  "#f48fb1", 
  "#f06292",
  "#ec407a", 
  "#e91e63", 
  "#c2185b"  
];

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("menos")) {
      if (count > 0) 
        count--;
    } 
    else if (styles.contains("mais")) {
      if (count < 50) 
        count++;
    } 
    else {
      count = 0;
    }

    const indiceCor = Math.floor(count / 10);

    document.body.style.backgroundColor = cores[indiceCor];
    document.body.style.transition = "background-color 0.5s ease"; 

    valor.textContent = count;
  });
});

// let count = 0;

// const valor = document.querySelector("#valor");
// const botaoes = document.querySelectorAll(".botao");

// botaoes.forEach(function (botao) {
//   botao.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;

//     if (styles.contains("menos")) {
//       count--;
//     } 
//     else if (styles.contains("mais")) {
//       count++;
//     } 
//     else {
//       count = 0;
//     }

//     if (count > 0) {
//       valor.style.color = "#f166b7cc";
//     } 
//     else if (count < 0) {
//       valor.style.color = "#9f055fff";
//     } 
//     else {
//       valor.style.color = "#e10786";
//     }
//     valor.textContent = count;
//   });
// });

