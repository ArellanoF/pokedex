//import init from "../controllers/initController";
//import { db } from "../config/db";

const { db } = require("../config/db.js");
const { init } = require("../controllers/initController");
const importarDatos = async () => {
  try {
    //Autenticar
    await db.authenticate(); //Generar columnas
    await db.sync();
    await init();
    console.log("Datos importados correctamente");
    process.exit();
  } catch (error) {
    console.log("··········");
    console.log(error);
    process.exit(1);
  }
};
const eliminarDatos = async () => {
  try {
    await db.sync({ force: true });
    console.log("Datos eliminados correctamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}

if (process.argv[2] === "-e") {
  eliminarDatos();
}
