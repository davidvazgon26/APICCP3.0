// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Catalogos del SAT ",
      version: "1.0.0",
      description: "Descripción de tu API",
    },
  },
  apis: ["./*.js"], // Ruta donde se encuentran tus archivos con las rutas
};

const specs = swaggerJsdoc(options);

module.exports = specs;
