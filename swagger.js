// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Catalogos del SAT ",
      version: "1.0.0",
      description:
        "Esta API muestra los catalogos del SAT para la generacion de Carta porte version 3.0, se pretende seguir agregando endpoints para CFDI 4.0 y catalogo de errores",
    },
  },
  apis: ["./*.js"], // Ruta donde se encuentran tus archivos con las rutas
};

const specs = swaggerJsdoc(options);

module.exports = specs;
