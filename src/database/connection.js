import sql from "mssql";
import config from '../config'

const dbSettings = {// configuraciones para la conexion con la base de datos
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    port:65535,
    database: config.dbDatabase,
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed cert
    },
};

export async function getConnection(){

  try {
    const pool = await sql.connect(dbSettings);
    console.log("Conexion Exitosa con la base de datos");
    return pool;
  } catch (error) {
    console.log("La conexion no ha sido exitosa debido a..." , error)
  }
};

export { sql }

