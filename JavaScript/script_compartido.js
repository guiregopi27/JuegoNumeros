window.addEventListener("load", generaNumero);

function generaNumero() {
  numero_generado = Math.trunc(Math.random() * 10000).toString().padStart(4, "0");
}