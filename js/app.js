const menu = document.querySelector(".menu-hamburguesa");
const navegacion = document.querySelector(".navegacion");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
};
