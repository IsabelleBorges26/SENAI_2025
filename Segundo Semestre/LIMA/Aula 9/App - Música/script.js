const btnMenu = document.querySelector ("#btn-menu");
const menuLateral = document.querySelector ("#menu-lateral");

btnMenu.addEventListener ("click", () => {
    if (menuLateral.style.left === ""|| menuLateral.style.left === "-200px") {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-200px";
    }
});