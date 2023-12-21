const XLSX = require("xlsx");

function leerPestanaExcel(catalogoBuscado) {
  const hoja = libroExcelHoja[0];
  const dataExcel = XLSX.utils.sheet_to_json(libroExcel.Sheets[hoja]);

  // console.log(dataExcel);

  return libroExcelHoja;
}

function obtenerListaCatalogos(rutaArchivo) {
  const libroExcel = XLSX.readFile(rutaArchivo);
  const libroExcelHoja = libroExcel.SheetNames;
  return libroExcelHoja;
}

// leerExcel("./assets/CatalogosCartaPorte30.xls");

module.exports = { leerPestanaExcel, obtenerListaCatalogos };
