// Lista de ejemplo
const listaTest = [100, 200, 500, 400000000];

//------------------------------------------------------
//------------------ Funciones Puras -------------------
//------------------------------------------------------

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//validar SI una ES PAR una LISTA
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//encontrar la mediana de una LISTA PAR
function elementoDeLaMitadListaImpar(lista) {
  const valor = parseInt(lista.length / 2);
  return valor;
}

//encontrar la mediana en una LISTA IMPAR
function elementoMitadListaPar(lista) {
  const mitadLista1 = parseInt(lista.length / 2);
  const mitadLista2 = parseInt(lista.length / 2 - 1);
  const elemento1 = lista[mitadLista1];
  const elemento2 = lista[mitadLista2];
  const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
  return promedioElementos;
}

//------------------------------------------------------
//----------- Funciones llamadas por botones -----------
//------------------------------------------------------

function calcularMediana(lista) {
  if (esPar(lista.length)) {
    return elementoMitadListaPar(lista);
  } else {
    return elementoDeLaMitadListaImpar(lista);
  }
}
//------------------------------------------------------
//----------------- Conectar HTML-----------------------
//------------------------------------------------------

function botonCalcularMediana() {}
