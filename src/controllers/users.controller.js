import { getConnection } from "../database/connection";

export const getUsers = async (req,res) => {
    
    try {
        const pool = await getConnection();
        const users = await pool.request().query('SELECT * FROM Usuarios');
   
        console.log(users)
   
       res.json(users.recordset);
    } catch (error) {
        console.log(error)
    }
};

export const getUserById = async (req,res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool
          .request()
          .input("id", req.params.id)
          .query('SELECT * FROM Usuarios Where Id_usuario = @id');
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}