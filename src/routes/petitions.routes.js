import { Router } from 'express';
import { getPetitions,
         getPendientPetitions,
         postPetition


} from '../controllers/petitions.controllers';

const router = Router();

router.get('/petitions', getPetitions);

router.get('/pendientes',getPendientPetitions);

router.post('/pendientes',postPetition)

export default router;