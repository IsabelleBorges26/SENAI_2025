var numeros = [10, 20, 30, 40, 50];

numeros.forEach( (numero, indice) => {
    if (numero === 30) {  
        console.log (indice);
        numeros[indice] = 80;
    }
});

console.log (numeros)
// function imprime(numero, indice) { // valor - indice (posição pré-definida)
//     console.log(indice + "-" + numero);
// }

