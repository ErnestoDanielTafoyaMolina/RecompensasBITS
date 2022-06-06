// import { getConnection } from "../database/connection";

export const getUsers = /*async*/ (req,res) => {
    
    // const pool = await getConnection();
    // const usuario = await pool.request().query("SELECT * FROM Usuarios WHERE Rol='Administrador'");
    const usuarios=
            {
                "id":1,
                "Nombre":"Alvaro Emmanuel",
                "Apellido":"Herrera Anda",
                "Rol":"Administrador"
            }
    console.log(usuarios)
    res.json(usuarios);
};