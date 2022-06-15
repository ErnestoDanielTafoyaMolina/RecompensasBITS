import { Router } from 'express';
import { getProducts,
         getProductById,
         createNewProduct,
         deleteProductById } from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);

router.get("/products/:id", getProductById);

router.post("/products", createNewProduct);

router.delete("/products/:id", deleteProductById);

// router.put("/products/:id", updateProductById);

export default router;  