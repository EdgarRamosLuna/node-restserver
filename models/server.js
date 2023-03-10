const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Middlewares
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }
  routes() {
    this.app.use(this.usersPath, require("../routes/user"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
  middlewares() {
    //Cors
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }
}

module.exports = Server;
