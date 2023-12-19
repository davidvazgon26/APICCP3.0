const XLSX = require("xlsx");

function leerExcel(ruta) {
  const libroExcel = XLSX.readFile(ruta);

  const libroExcelHoja = libroExcel.SheetNames;

  console.log(libroExcelHoja);
  console.log(libroExcelHoja.length);
  const hoja = libroExcelHoja[0];
  const dataExcel = XLSX.utils.sheet_to_json(libroExcel.Sheets[hoja]);

  console.log(dataExcel);
}

leerExcel("./assets/CatalogosCartaPorte30.xls");
