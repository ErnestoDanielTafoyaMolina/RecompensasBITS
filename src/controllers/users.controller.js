 import { getConnection } from "../database/connection";

export const getUsers = async (req,res) => {
    
    const pool = await getConnection();
    const usuario = await pool.request().query("SELECT * FROM Usuarios ");

    /*const usuarios=[
        {
            "id":1,
            "Nombre":"Alvaro Emmanuel",
            "Apellido":"Herrera Anda",
            "Rol":"Administrador"
        },
        {
            "id":2,
            "Nombre":"Ernesto Daniel",
            "Apellido":"Tafoya Molina",
            "Rol":"Usuario"
        },
        {
            "id":3,
            "Nombre":"Jose Emmanuel",
            "Apellido":"Mauricio Arteaga",
            "Rol":"Usuario"
        },
        {
            "id":4,
            "Nombre":"Emmanuel",
            "Apellido":"Guzman Salas",
            "Rol":"Usuario"
        },
        {
            "id":5,
            "Nombre":"Emilio",
            "Apellido":"Saldaña Salinas",
            "Rol":"Usuario"
        },
        {
            "id":6,
            "Nombre":"Rafael",
            "Apellido":"Ramirez",
            "Rol":"Usuario"
        }
    ]
    */  
    console.log(usuario)
    res.json(usuario.recordset);
};