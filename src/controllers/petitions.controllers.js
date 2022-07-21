import { getConnection, sql } from "../database/connection";

export const getPetitions = async (req,res) => {
    
    try {
        const pool = await getConnection();
        const petitions = await pool.request().query("SELECT * FROM Peticiones");
   
        console.log(petitions)
   
       res.json(petitions.recordset);
    } catch (error) {
        console.log(error)
    }

};

  export const postPetition = async (req, res) => {
    const pool = await getConnection();
    const idProducto=req.body.idP;
    const result = await pool
    .request()
    // .input("idU",sql.Int,idUsuario)
    .input('idP',sql.Int,idProducto)
    .query("INSERT INTO [BITS_Recompensas].[dbo].[Peticiones] (Id_Usuario,Id_Producto,Estado) VALUES (2,@idP,'Pendiente');")
    res.json(idProducto);
  };

  export const getPendientPetitions = async (req,res) => {
    const pool = await getConnection();
    const petitions = await pool.request().query("SELECT * FROM Peticiones WHERE Estado='Pendiente'");
   
    console.log(petitions)

   res.json(petitions.recordset);
  }
  