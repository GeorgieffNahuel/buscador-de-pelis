const fs = require("fs");

function getAll() {
  const origen = fs.readFileSync(__dirname + "/pelis.json");
  const archivo = JSON.parse(origen);
  return archivo;
}

function searchBy(titulo, ArrayDePelis) {
  const resultado = ArrayDePelis.filter(function (item) {
    const propiedad = "title";
    return item[propiedad].includes(titulo);
  });
  return resultado;
}

function sortBy(propiedad, ArrayDePelis) {
  const ordenaAlfabe = ArrayDePelis.sort(function (a, b) {
    if (a[propiedad] > b[propiedad]) {
      return 1;
    }
    if (a[propiedad] < b[propiedad]) {
      return -1;
    }
    return 0;
  });
  return ordenaAlfabe;
}

function noFormat(ArrayDePelis) {
  const sinFormato = JSON.stringify(ArrayDePelis);
  return sinFormato;
}

function tagBy(texto, ArrayDePelis) {
  const tageado = ArrayDePelis.filter(function (item) {
    return item.tags.includes(texto);
  });
  return tageado;
}

exports.searchCriteria = function (objetoArgumento) {
  let pelicula = getAll();

  if (objetoArgumento.search) {
    pelicula = searchBy(objetoArgumento.search, pelicula);
  }
  if (objetoArgumento.sort) {
    pelicula = sortBy(objetoArgumento.sort, pelicula);
  }
  if (objetoArgumento.tag) {
    pelicula = tagBy(objetoArgumento.tag, pelicula);
  }
  if (objetoArgumento.hasOwnProperty("no-format")) {
    pelicula = noFormat(pelicula);
  }
  return pelicula;
};