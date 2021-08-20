//SCRIPTS NAV MOVIL
const btnAbrirDesplegable = document.querySelector(".menu-hamburguesa");
const desplegable = document.querySelector(".flotante-movil");
const btnCerrarDesplegable = document.querySelector(".btn-cerrar-flotante");
const contenidoMain = document.querySelector(".contenedor-main");
const flotanteDark = document.querySelector(".flotante-dark");

let cerrarDesplegable = () => {
  gsap.to(flotanteDark, {
    display: "none",
    delay: 0.2,
  });
  gsap.to(contenidoMain, {
    left: "0px",
    duration: 0.5,
  });
  gsap.to(flotanteDark, {
    opacity: "0",
    width: "100%",
    duration: 0.2,
  });
};
let abrirDesplegable = () => {
  gsap.to(flotanteDark, {
    display: "block",
    width: "calc(100% - 250px)",
  });
  gsap.to(flotanteDark, {
    opacity: "1",
    delay: 0.4,
    duration: 0.2,
  });
  if (screen.width >= 550) {
    gsap.to(flotanteDark, {
      width: "calc(100% - 350px)",
    });
    gsap.to(contenidoMain, {
      left: "-350px",
      duration: 0.5,
    });
  } else {
    gsap.to(contenidoMain, {
      left: "-250px",
      duration: 0.5,
    });
  }
};

btnAbrirDesplegable.addEventListener("click", abrirDesplegable);
btnCerrarDesplegable.addEventListener("click", cerrarDesplegable);
flotanteDark.addEventListener("click", cerrarDesplegable);

//BACKGROUND HEADER PRINCIPAL
const headerPrincipal = document.querySelector(".header-principal");

setInterval(() => {
  if (
    headerPrincipal.style.background ==
    'url("../images/slider-uno.jpg") center center / cover'
  ) {
    headerPrincipal.style.background =
      'url("../images/slider-dos.jpg") center center / cover';
  } else {
    headerPrincipal.style.background =
      'url("../images/slider-uno.jpg") center / cover';
  }
}, 5000);
