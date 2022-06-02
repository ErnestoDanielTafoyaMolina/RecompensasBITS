import { Router } from 'express';
import { getPayroll } from '../controllers/payroll.controllers';

const router = Router();

router.get('/payroll', getPayroll);

export default router;