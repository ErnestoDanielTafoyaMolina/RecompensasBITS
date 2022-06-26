import { Router } from 'express';
import { getProducts,
         getProductById,
         createNewProduct,
         deleteProductById,
         updateProductById }
        from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);// obtiene todos los productos

router.get("/products/:id", getProductById);// obtiene un solo producto por el id

router.post("/products", createNewProduct); // crea un nuevo producto

router.put("/products/:id", deleteProductById);// elimina el producto por el id

router.put("/products/:id", updateProductById);// actualiza un producto por su id

export default router;  