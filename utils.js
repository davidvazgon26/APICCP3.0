const XLSX = require("xlsx");
const libroExcel = {};
const libroExcelHoja = [];

function leerPestanaExcel(catalogoBuscado) {
  if (libroExcelHoja == null) return "No has obtenido el listado aun";

  const hoja = libroExcelHoja[0];
  const dataExcel = XLSX.utils.sheet_to_json(libroExcel.Sheets[hoja]);

  // console.log(dataExcel);

  return libroExcelHoja;
}

function obtenerListaCatalogos(rutaArchivo) {
  // Ruta al archivo Excel
  libroExcel = XLSX.readFile(rutaArchivo);
  //Obtener listado de pestanas
  libroExcelHoja = libroExcel.SheetNames;
  return libroExcelHoja;
}

module.exports = { leerPestanaExcel, obtenerListaCatalogos };
