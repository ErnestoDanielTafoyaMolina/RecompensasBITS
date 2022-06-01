import sql from "mssql";
//import config from '../config'

const dbSettings = {// configuraciones para la conexion con la base de datos
    user: "its-academy",
    password: "Infinity01?",
    server: "it-seekersdev.ddns.net",
    port:65535,
    database: "BITS_Recompensas",
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed cert
    },
};

async function getConnection(){

  try {
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('SELECT TOP (1000) [Id_usuario], [Nombre], [Apellido], [Rol] FROM [BITS_Recompensas].[dbo].[Usuarios]');
    console.log("Conexion exitosa",result)
  } catch (error) {
    
  }
}

getConnection();    

