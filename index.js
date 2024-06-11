
const datos = require("./pelis");

function parseaArgumento(argv) {
    const objeto = {};
    
    argv.forEach(function (a, b) {
      if (a.startsWith("--")) {
        const sinGuiones = a.slice(2);
        objeto[sinGuiones] = argv[b + 1];
      }
    });
    return objeto;
  }
  
  function main() {
    const argumento = process.argv.slice(2);
    const parseado = parseaArgumento(argumento);
    const resultado = pelis.searchCriteria(parseado);
    console.log(resultado);
  }
  main();