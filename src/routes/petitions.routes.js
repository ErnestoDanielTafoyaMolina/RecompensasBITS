import { Router } from 'express';
import { getPetitions,
         getPendientPetitions,
         postPetition,
         setAceptedPetitions,
         setDeclinedPetitions


} from '../controllers/petitions.controllers';

const router = Router();
//endpoint para tener todas las peticiones
router.get('/petitions', getPetitions);
//endpoint para tener las peticiones pendientes
router.get('/petition/pendient',getPendientPetitions);
//endpoint para hacer post de la peticion
router.post('/petition/pendient',postPetition)
//endpoint para aceptar peticion
router.put('/petition/acepted'),setAceptedPetitions;
//endpoint para rechazar la peticion
router.put('/petition/declined',setDeclinedPetitions)

export default router;