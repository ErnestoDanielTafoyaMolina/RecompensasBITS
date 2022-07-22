import { getConnection, sql } from "../database/connection";
//toma todas las peticiones
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
//crea la peticion (desde usuario)
  export const postPetition = async (req, res) => {
    const pool = await getConnection();
    const idProducto=req.body.idP;
    const idUsuario = req.body.idU;

    /* validacion para evitar que se den de alta valores nulos */
    if(idUsuario==null || idProducto==null){
      return res.status(400).json({ msg: 'Por favor llena los campos solicitados'});
    }
    await pool.request()
    .input("idU",sql.Int,idUsuario)
    .input('idP',sql.Int,idProducto)
    .query("INSERT INTO [BITS_Recompensas].[dbo].[Peticiones] (Id_Usuario,Id_Producto,Estado) VALUES (@idU,@idP,'Pendiente');")
    res.json({idUsuario,idProducto});
  };
//solo recupera las peticiones pendientes
  export const getPendientPetitions = async (req,res) => {
    const pool = await getConnection();
    const petitions = await pool.request().query("SELECT * FROM Peticiones WHERE Estado='Pendiente'");
   
    console.log(petitions)

   res.json(petitions.recordset);
  }
//acepta las peticiones
  export const setAceptedPetitions = async (req,res) => {
    const pool = await getConnection();
    const acept = await pool.request().query("UPDATE [BITS_Recompensas].[dbo].[Preticiones] SET Estado='Aceptada' WHERE Id_Usuario = @idU AND Id_Producto = @id")
    console.log(acept);
  }
//rechaza las peticiones
  export const setDeclinedPetitions = async (req,res) => {
    const pool = await getConnection();
    const decline = await pool.request().query("UPDATE [BITS_Recompensas].[dbo].[Preticiones] SET Estado='Rechazada' WHERE Id_Usuario = @idU AND Id_Producto = @id")
    console.log(decline);
  }

  //historial de peticiones

  export const getAllPetitionsHistorial = async (req,res) => {
    const pool = await getConnection();
    const historial = await pool.request()
    .query("SELECT * FROM RegistroCanjeo");
    console.log(historial.recordset);
    res.json(historial.recordset);
  }

  //historial por id

  export const getPetitionsById = async (req,res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query('SELECT * FROM RegistroCanjeo Where Id_usuario = @id');
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }