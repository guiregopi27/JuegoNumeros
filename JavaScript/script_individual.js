var numero_generado = "1234";
var historial = "";
var limpar_historial_bool = true;

function comprobarNumero() {
  let numeros = [];
  numeros.push(document.getElementById("numero1").value);
  numeros.push(document.getElementById("numero2").value);
  numeros.push(document.getElementById("numero3").value);
  numeros.push(document.getElementById("numero4").value);
  console.log(numero_generado);
  let numero_introducido = numeros.join('');
  let aciertos = 0;
  /*if(numero_introducido == numero_generado) {

  }*/

  for(let i = 0; i < numero_generado.length; i++) {
    let posicion = numeros.indexOf(numero_generado[i]);
    if(posicion == -1) continue;
    aciertos++;
    numeros[posicion] = "a";
  }

  if(aciertos == 4) {
    actualizarIntentos("intentos-lista", numero_introducido);
    actualizarAciertos("aciertos-lista", aciertos);
    
    document.getElementById("boton_comprobar").onclick = comprobarPosicion;
    document.getElementById("intentos-div").style.borderColor = "yellow";
    document.getElementById("aciertos-div").style.borderColor = "yellow";
  } else {

    actualizarIntentos("intentos-lista", numero_introducido);
    actualizarAciertos("aciertos-lista", aciertos);
  }

  /*function separadorHistorial(contenedorId) {
    let contenedor = document.getElementById(contenedorId);
    let nuevoElemento = document.createElement("div");
    nuevoElemento.className = "separador-item";
  }*/

  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("numero3").value = "";
  document.getElementById("numero4").value = "";
  document.getElementById("numero1").focus();
}

function actualizarIntentos(contenedorId, texto) {
  let contenedor = document.getElementById(contenedorId);
  let nuevoElemento = document.createElement("div");
  nuevoElemento.className = "historial-item";
  nuevoElemento.textContent = texto;
  contenedor.prepend(nuevoElemento); // Añade el nuevo intento al principio del contenedor
}

function actualizarAciertos(contenedorId, texto) {
  let contenedor = document.getElementById(contenedorId);
  let nuevoElemento = document.createElement("div");
  nuevoElemento.className = "historial-item";
  nuevoElemento.textContent = texto + "/4";
  contenedor.prepend(nuevoElemento); // Añade el nuevo intento al principio del contenedor
}

function comprobarPosicion() {
  if(limpar_historial_bool == true) {
    limpiarHistorial();

    function limpiarHistorial() {
      let intentosLista = document.getElementById("intentos-lista");
      let aciertosLista = document.getElementById("aciertos-lista");

      intentosLista.innerHTML = "";
      aciertosLista.innerHTML = "";
    }

    limpar_historial_bool = false;
  }

  let numeros = [];
  numeros.push(document.getElementById("numero1").value);
  numeros.push(document.getElementById("numero2").value);
  numeros.push(document.getElementById("numero3").value);
  numeros.push(document.getElementById("numero4").value);
  console.log(numero_generado);
  let numero_introducido = numeros.join('');
  let cont_posicion = 0;
  
  let aciertos_div = document.getElementById("aciertos-div");
  aciertos_div.textContent = "posición"

  for(let i = 0; i < numero_generado.length; i++) {
    if(numero_introducido[i] === numero_generado[i]) {
      cont_posicion++;
    }
  }

  actualizarIntentos("intentos-lista", numero_introducido);
  actualizarAciertos("aciertos-lista", cont_posicion);

  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("numero3").value = "";
  document.getElementById("numero4").value = "";
  document.getElementById("numero1").focus();
}

function digito(event) {
  let valor = event.charCode >= 48 && event.charCode <= 57;
  setTimeout(() => {
    let siguiente_elemento = event.target.nextElementSibling;
    if(siguiente_elemento != null) {
      document.getElementById(siguiente_elemento.id).focus();
    } else {
      document.getElementById("boton_comprobar").focus();
      document.getElementById("boton_comprobar").style.cursor = "pointer";
      document.getElementById("boton_comprobar").style.color = "rgb(53, 53, 53)";
      document.getElementById("boton_comprobar").style.backgroundColor = "orange";
    }
  }, 100);
  return valor;
}