import { Router } from 'express';
import { getProducts } from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);

// router.post('/products',);

// router.get('/products', getProducts);

// router.delete('/products',);

// router.put('/products',);

export default router;  