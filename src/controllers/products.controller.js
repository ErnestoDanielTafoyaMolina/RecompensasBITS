import { getConnection, sql } from "../database/connection";
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
    const name = req.body.name;
    const description = req.body.desc;
    const price = req.body.price;
    const image = req.body.image;
    let   quantity  = req.body.stock;
    
    console.log(req.body)
    //validating
    if (name == null || description == null || price == null) {
      return res.status(400).json({ msg: `Por favor llena los campos solicitados, ${name}, ${description} ${price}`  });
    }
  
    if (quantity == null) quantity = "NO";
  
    try {
      const pool = await getConnection();
  
      await pool.request()
        .input('name', sql.VarChar, name)
        .input('desc', sql.Text, description)
        .input('price',sql.Int, price)
        .input('stock',sql.VarChar, quantity)
        .input('image',sql.Image, image)
        .query("INSERT INTO [BITS_Recompensas].[dbo].[Productos] (Nombre_Producto, Descripcion, Precio, Existencia, Imagen, Estado) VALUES (@name,@desc,@price,@stock,@image,'Alta');");
  
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
    const name = req.body.name;
    const description = req.body.desc;
    const price = req.body.price;
    const image = req.body.image;
    let   quantity  = req.body.stock;
    
    console.log(req.body)
    //validating
    if (name == null || description == null || price == null) {
      return res.status(400).json({ msg: `Por favor llena los campos solicitados, ${name}, ${description} ${price}`  });
    }
  
    if (quantity == null) quantity = "NO";
  
    try {
      const pool = await getConnection();
  
      await pool.request()
        .input('id',req.params.id)
        .input('name', sql.VarChar, name)
        .input('desc', sql.Text, description)
        .input('price',sql.Int, price)
        .input('stock',sql.VarChar, quantity)
        .input('image',sql.Image, image)
        .query("UPDATE [BITS_Recompensas].[dbo].[Productos] SET Nombre_Producto = @Name, Descripcion = @desc, Precio = @price, Existencia = @stock, Imagen = @image WHERE Id_Producto= @Id");
  
      res.json({ name, description, price, quantity, image});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  