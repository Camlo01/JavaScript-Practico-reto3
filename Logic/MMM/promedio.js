//Creamos una lista
// const lista1 = [100, 200, 300, 500];
// const lista2 = [10, 40, 250, 600];

//Funcion para calcular el promedio de una lista con un for
function calcularPromedio(lista) {
  let sumaElementos = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaElementos = sumaElementos + lista[i];
  }
  const promedio = sumaElementos / lista.length;

  return promedio;
  //   return "El promedio de la lista es: "+promedio;
}

//Funcion para calcular el promedio de una lista con un for con metodo .reduce()
function calcularMedia(lista) {
  const sumaElementos = lista.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  const media = sumaElementos / lista.length;

  return media;
  //   return "El promedio de la lista es: "+promedio;
}

//-------------------------------------------------------
//----------------- Conectar con HTML -------------------
//-------------------------------------------------------
