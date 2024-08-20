function cambiarModo(event) {
  const boton_pulsado = event.target.id
  if(boton_pulsado == "boton-individual") {
    //document.getElementById("enlace-jugar").href = "index_individual.html"
    document.getElementById("enlace-jugar").href = "/HTML/index_individual.html"
    document.getElementById("imagen_jugador").src = "IMAGENES/MarioSolo.png"
    document.getElementById("imagen_jugador").style.width = "180px"
  } else {
    //document.getElementById("enlace-jugar").href = "index_online.html"
    document.getElementById("enlace-jugar").href = "/HTML/index_online.html"
    document.getElementById("imagen_jugador").src = "IMAGENES/PersonajesOnlineV5.png"
    document.getElementById("imagen_jugador").style.width = "250px"
  }
}

function aparecerPersonaje() {
  const contenedorImagen = document.getElementById("contenedor-imagen");
  const imagenJugador = document.getElementById("imagen_jugador");

  contenedorImagen.style.transform = "perspective(400px) rotateX(10deg) translateY(-7.5%) translateZ(0)";
  imagenJugador.style.opacity = "1";
  imagenJugador.style.transform = "translateY(10%)";

  modificarBefore("#contenedor-imagen", { opacity: "1" });
}

function desaparecerPersonaje() {
  const contenedorImagen = document.getElementById("contenedor-imagen");
  const imagenJugador = document.getElementById("imagen_jugador");

  contenedorImagen.style.transform = "";
  imagenJugador.style.opacity = "0";
  imagenJugador.style.transform = "translateY(25%)";

  modificarBefore("#contenedor-imagen", { opacity: "0" });
}

function modificarBefore(selector, nuevosEstilos) {
  const hojaEstilos = document.styleSheets[0];
  const reglas = hojaEstilos.cssRules;

  for(let i = 0; i < reglas.length; i++) {
    const regla = reglas[i];
    if(regla.selectorText === selector + '::before') {
      for(const propiedad in nuevosEstilos) {
        regla.style[propiedad] = nuevosEstilos[propiedad];
      }
      break;
    }
  }
}

// Agregar el evento mouseover y mouseout al botón y al contenedor-imagen
const buttonElement = document.getElementById("boton-jugar");
const contenedorImagen = document.getElementById("contenedor-imagen");

buttonElement.addEventListener('mouseover', aparecerPersonaje);
buttonElement.addEventListener('mouseout', desaparecerPersonaje);

contenedorImagen.addEventListener('mouseover', aparecerPersonaje);
contenedorImagen.addEventListener('mouseout', desaparecerPersonaje);
