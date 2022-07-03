import { getConnection } from "../database/connection";

export const getProducts = async (req,res) => {
    try {
        const pool = await getConnection();
        const products = await pool.request().query("SELECT * FROM Productos WHERE Estado='Alta'");
   
        console.log(products)
   
       res.json(products.recordset);
    } catch (error) {
        console.log(error)
    }
};

export const getProductById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query('SELECT * FROM Productos Where Id_Producto = @id');
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const createNewProduct = async (req, res) => {
    const { name, description, price, image  } = req.body;
    let { quantity } = req.body;
  
    // validating
    if (description == null || name == null || price == null) {
      return res.status(400).json({ msg: "Por favor llena los campos solicitados" });
    }
  
    if (quantity == null) quantity = 0;
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("desc", sql.Text, description)
        .input("price",sql.Int,price)
        .input("stock", sql.VarChar, quantity)
        .input("image", sql.Image, image)
        .query("INSERT INTO [BITS_Recompensas].[dbo].[Productos] (Nombre_Producto, Descripcion, Precio, Existencia, Imagen) VALUES (@name,@desc,@price,@stock,@image);");
  
      res.json({ name, description, price, quantity, image});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  
  export const deleteProductById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query("UPDATE [BITS_Recompensas].[dbo].[Productos] SET Estado='Baja' WHERE Id_Producto= @Id");
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const updateProductById = async (req, res) => {
    const { description, name, price, quantity, image } = req.body;
  
    // validating
    if (description == null || name == null || price == null || quantity == null || image == null) {
      return res.status(400).json({ msg: "Por favor llena los campos solicitados" });
    }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("desc", sql.Text, description)
        .input("price",sql.Int,price)
        .input("stock", sql.Int, quantity)
        .input("image", sql.Image, image)
        .input("id", sql.Int, req.params.id)
        .query("UPDATE [BITS_Recompensas].[dbo].[Productos] SET Nombre_Producto = @Name Descripcion = @desc Precio = @price Existencia = @quantity Imagen = @image",);
      res.json({ name, description, price, quantity, image });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };