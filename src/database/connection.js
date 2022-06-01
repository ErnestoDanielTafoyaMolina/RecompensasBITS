import sql from 'mssql';
//import config from '../config'

const dbSettings = {
    login: "its-academy",
    password: "Infinity01?",
    server: "it-seekersdev.ddns.net,65535",
    database: "BITS_Recompensas",
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed cert
    }
};

async function getConnection(){

    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('SELECT 1');
    console.log(dbSettings)
}

getConnection();    

