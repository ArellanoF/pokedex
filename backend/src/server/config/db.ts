import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const db = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    port: Number(process.env.DB_PORT as string),
    logging: false,
    pool: { max: 100, min: 0, idle: 10000 },
  }
);

const connectToDatabase = async () => {
  try {    
    await db.authenticate();
    await db.sync();
    console.log("Conexión correcta a la base de datos");
  } catch (error) {
    console.log(error);
  }
};

export { db, connectToDatabase };
