window.onload = () => {
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

  //ANIMACION BARRA-BUSCAR
  const barraBuscar = document.querySelector(".barra-buscar");
  const btnBuscar = document.querySelector(".buscador");
  const btnBuscar2 = document.querySelector(".buscador2");
  const btnCerrarBuscador = document.querySelector(".btn-cerrar-buscador");

  const abrirBarraBuscar = () => {
    if (barraBuscar.style.opacity == "1") {
      gsap.to(barraBuscar, {
        right: "-5px",
        opacity: "0",
        duration: 0.2,
      });
      gsap.to(barraBuscar, {
        display: "none",
        delay: 0.3,
      });
    } else {
      gsap.to(barraBuscar, {
        display: "flex",
        duration: 0.1,
      });
      gsap.to(barraBuscar, {
        right: "0px",
        opacity: "1",
        delay: 0.1,
        duration: 0.2,
      });
    }
  };

  btnBuscar.addEventListener("click", abrirBarraBuscar);
  btnBuscar2.addEventListener("click", abrirBarraBuscar);
  btnCerrarBuscador.addEventListener("click", abrirBarraBuscar);

  //API INTESERCTION OBSERVER
  const crearObservador = (animacion, nuevaClase) => {
    const secciones = document.querySelectorAll(animacion);

    const options = {
      root: null, //es el default, todo el viewport
      threshold: 0.26, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } //si no esta en la pantalla, termina la funcion
        entry.target.classList.add(nuevaClase);

        observer.unobserve(entry.target); //para que las animaciones solo se ejecuten la primera vez que se entra en la seccion.
      });
    }, options);
    secciones.forEach((section) => {
      observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
    });
  };
  crearObservador(".animacion-uno", "final-uno");
  crearObservador(".animacion-dos", "final-dos");
  crearObservador(".animacion-tres", "final-tres");
  crearObservador(".animacion-cuatro", "final-cuatro");

  //MAPA LEAFLET
  let map = L.map("map-leaflet").setView([-34.638434, -68.297539], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 17,
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);

  L.marker([-34.638434, -68.297539])
    .addTo(map)
    .bindPopup("ArcoirisKids<br>Jardin de Infantes")
    .openPopup();
};
