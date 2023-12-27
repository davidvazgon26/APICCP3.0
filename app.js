const { leerPestanaExcel, obtenerListaCatalogos } = require("./utils.js");

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

const app = express();
const port = 3000;

const rutaArchivo1 = "./assets/CatalogosCartaPorte30.xls";

// Agrega la documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /documentacion:
 *   get:
 *     summary: Ruta demo solo para hacer test de funcionamiento de end points
 *     description: Sin descripcion
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.get("/documentacion", (req, res) => {
  res.send("¡Hola desde la ruta de documentacion!");
});

/**
 * @swagger
 * /catalogos:
 *   get:
 *     summary: Muestra el listado de los catalogos para CCP 3.0
 *     description: Muestra en formato de lista todos los catalogos a los que puedes acceder desde esta API
 *     responses:
 *       200:
 *         description: Arreglo con los nombres de los catalogos disponibles
 */
app.get("/catalogos", (req, res) => {
  try {
    let result = obtenerListaCatalogos(rutaArchivo1);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /catalogo/{nombre}:
 *   get:
 *     summary: Indica el nombre del catalogo a obtener
 *     description: Muestra la informacion contenida en el catalogo pasado (solo nombre, no incluyas c_ )
 
*     parameters:
 *       - in: path
 *         name: nombre
 *         description: Nombre del catálogo a obtener (NO olvides incluir el prefijo c_ )
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.get("/catalogo/:nombre", (req, res) => {
  try {
    const catalogo = req.params.nombre;
    let result = leerPestanaExcel(catalogo, rutaArchivo1);
    if (!result) res.status(400).send("El catalogo ingresado NO existe");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /catalogo_errores:
 *   get:
 *     summary: Muestra el listado de errores para CCP 3.0 y algunos de CFDI 4.0
 *     description: Muestra el valor con el problema y sus posibles soluciones
 *     responses:
 *       200:
 *         description: Pendiente
 */
app.get("/catalogo_errores", (req, res) => {
  try {
    console.log("Aqui ira el catalogo de errores");
    res.send("Pendiente agregar el catalogo de errores");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(
    `El servidor esta escuchando en el puerto: http://localhost:${port}`
  );
});
