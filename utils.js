const XLSX = require("xlsx");
let libroExcel;
let libroExcelPestanas;

function obtenerListaCatalogos(rutaArchivo) {
  console.log("Recibo la ruta del archivo: ", rutaArchivo);
  // Ruta al archivo Excel
  libroExcel = XLSX.readFile(rutaArchivo);
  //Obtener listado de pestanas
  libroExcelPestanas = libroExcel.SheetNames;
  console.log("Listado de pestanas: ", libroExcelPestanas);
  return libroExcelPestanas;
}

function leerPestanaExcel(catalogoBuscado, archivo) {
  // Ruta al archivo Excel
  const Libro = XLSX.readFile(archivo);

  // Obtén la referencia a la hoja
  const pestana = Libro.Sheets[catalogoBuscado];

  if (!pestana) return false;

  // Encuentra los límites de la hoja
  const rango = XLSX.utils.decode_range(pestana["!ref"]);

  // Define el rango a partir del renglón 5
  const renglonInicia = 4; // Renglón 5
  const renglonFinaliza = rango.e.r; // Último renglón con datos

  // Configura el rango
  const rangoPorLeer = {
    s: { c: rango.s.c, r: renglonInicia },
    e: { c: rango.e.c, r: renglonFinaliza },
  };

  // Convierte el rango en un array de objetos
  const data = XLSX.utils.sheet_to_json(pestana, { range: rangoPorLeer });

  // Retorna los datos leídos
  return data;
}

module.exports = { leerPestanaExcel, obtenerListaCatalogos };
