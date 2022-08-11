import { getConnection, sql } from "../database/connection";
import nodemailer from "nodemailer";
import { request } from "express";
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
    try {
      const pool = await getConnection();
  
      const acept = await pool
        .request()
        .input("id", req.params.id)
        .query("UPDATE [BITS_Recompensas].[dbo].[Peticiones] SET Estado = 'Aceptada' WHERE id_Peticiones = @id");
  
      if (acept.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
//rechaza las peticiones
  export const setDeclinedPetitions = async (req,res) => {
    try {
      const pool = await getConnection();
  
      const decline = await pool
        .request()
        .input("id", req.params.id)
        .query("UPDATE [BITS_Recompensas].[dbo].[Peticiones] SET Estado='Rechazada' WHERE id_Peticiones = @id");
  
      if (decline.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
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

  export const getHistorialById = async (req,res) => {
    try {
      const pool = await getConnection();

      const historialById = await pool
      .request()
      .input("id", req.params.id)
      .query("SELECT * FROM Peticiones WHERE Id_Usuario = @id")
      
      return res.json(historialById.recordset);
    } catch (error) {
      console.log(error.message)
    } 
  }

  //peticion por id

  export const getPetitionsById = async (req,res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query('SELECT * FROM Peticiones Where id_Peticiones = @id');
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  //peticion de resta de puntos
  export const getSP_UpdateBits = async (req,res) => {
    try {
      const pool = await getConnection();

      const idUsuario= req.body.idUsuario;
      const idProducto= req.body.idProducto;
      const bitsProducto = req.body.bitsPrducto;
      
      const SPUpdate = await pool
      .request()
      .input("idUsuario",idUsuario)
      .input("idProducto",idProducto)
      .input("bitsProducto",bitsProducto)
      .query("EXEC SP_RestaPuntos @idUsuario, @idProducto,@bitsProducto")
      return res.json(SPUpdate.recordset[0]);
    } catch (error) {
      res.send(error.message)
    }
  }

  //preparacion del mail para el envio del mail de respuesta
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:465 ,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'ernesto.tafoyaits@gmail.com', // generated ethereal user
      pass: 'dkpimjdafgpxcfcd', // generated ethereal password
    },
  });
    // send mail with defined transport object
  export  const sendMail = async (req,res)=>{
    try {
      const peticion = req.body.peticion;
      const mensaje = req.body.mensaje;
      const email = req.body.email;
      console.log(req.body)
      //si el mensaje o la peticion son vacios, no deja que se envíe el mensaje
      if(peticion==null || mensaje==null || email==null){
        return res.status(400).json({ msg: `Por favor llena los campos solicitados  ${peticion}, ${email}, ${mensaje}`});
      }
      const mailSend= await transporter.sendMail({
        from: '"RecompensasBits" ernesto.tafoyaits@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "Estatus de peticion respondido", // Subject line
        html: `
        <p>
          Estimado usuario, se le informa que la peticion que ha realizado sobre su producto ha 
          sido <b>${peticion}</b> se le anexa(n) el(los) motivo(s) a continuación.
          <ul>
            <li>${mensaje}</li>
          </ul>
          Gracias por su comprención, que tenga un buen día.
        </p>
        `, // html body
      });
      console.log("aver",mailSend);
      return res.json("Mensaje enviado correctamente al correo: "+email);
    } catch (error) {
      console.log("falló", error)
      res.send(error)
    }
  }

  //peticiones con nombre de usuario y nombre de productos

  export const getSP_Petition = async (req,res) => {
    try {
      const pool = await getConnection();
  
      const idUsuario= req.body.idUsuario;
      const idProducto= req.body.idProducto;
  
      const SP_Peticion = await pool
      .request()
      .input("idUsuario",idUsuario)
      .input("idProducto",idProducto)
      .query("EXEC [SP_peticion] 1, 15");
      return res.json(SP_Peticion.recordset);
    } catch (error) {
      res.send(error.message)
    }
  }