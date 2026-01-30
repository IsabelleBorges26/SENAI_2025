const btnListar = document.querySelector("#btnListar");
const listaClientes = document.querySelector("#listaClientes");
const listaTatuadores = document.querySelector("#listaTatuadores");

const clientes = ["Lucas Silva", "Ana Pereira", "João Costa", "Maria Oliveira"];
const tatuadores = ["Rafael Tattoo", "Camila Ink", "Bruno Art", "Larissa Black"];

btnListar.addEventListener("click", () => {

    listaClientes.innerHTML = "";
    listaTatuadores.innerHTML = "";

    clientes.forEach(cliente => {
        const li = document.createElement("li");
        li.textContent = cliente;
        listaClientes.appendChild(li);
    });

    tatuadores.forEach(tatuador => {
        const li = document.createElement("li");
        li.textContent = tatuador;
        listaTatuadores.appendChild(li);
    });
});
