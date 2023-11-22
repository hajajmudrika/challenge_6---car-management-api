/**
 * @file server index.js
 * @author Rizky Adji Pangestu
 */

const Express = require("express");
const BodyParser = require("body-parser");
const cors = require("cors");
const config = require("../config/appconfig");
const app = Express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.set("config", config);
app.set("view engine", "ejs");
app.use(Express.static(__dirname + "/../public"));
app.use(BodyParser.json({ limit: "50mb" }));
app.use(BodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.2',
    info: {
      title: 'Car Management API Docs',
      description: 'API Service Documentation for Car Management App',
      // contact: {
      //   name: "Rizky Adji",
      //   email: "rizkyadji21@gmail.com",
      //   url: "https://github.com/Tsucie"
      // },
      version: "1.0.0"
    },
    servers: [
      {
        url: `http://${process.env.SERVER || config.app.server}:${process.env.PORT || config.app.port}`,
        description: 'Application Server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          name: "Authorization",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },
  },
  apis: [
    './router/userRoutes.js',
    './router/carRoutes.js',
    './router/carSizeRoutes.js',
    './router/userTypeRoutes.js',
  ]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.set("port", config.app.port);
app.use(require("../router"));

app.listen(process.env.PORT || config.app.port, () => {
  console.log(
    `Service online at http://${process.env.SERVER || config.app.server}:${process.env.PORT || config.app.port}`
  );
  console.log(
    `Swagger docs ui at http://${process.env.SERVER || config.app.server}:${process.env.PORT || config.app.port}/api-docs`
  );
});
