import { getConnection } from "../database/connection";

export const getPayroll = async (req,res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Usuarios');

    console.log(result)
    res.json('hola');
};