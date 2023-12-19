const express = require("express");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

const app = express();
const port = 3000;

// Agrega la documentación Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /documentacion:
 *   get:
 *     summary: Descripción corta de la ruta
 *     description: Descripción más detallada de la ruta
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.get("/documentacion", (req, res) => {
  res.send("¡Hola desde la ruta de documentacion!");
});

app.get("/", (req, res) => {
  res.send("Aqui la respuesta al request");
});

app.listen(port, () => {
  console.log(
    `El servidor esta escuchando en el puerto: http://localhost:${port}`
  );
});
