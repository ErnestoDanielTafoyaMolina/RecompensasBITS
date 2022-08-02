import { Router } from 'express';
import { getPetitions,
         getPendientPetitions,
         postPetition,
         setAceptedPetitions,
         setDeclinedPetitions,
         getAllPetitionsHistorial,
         getPetitionsById,
         sendMail,
         getSP_Petition,
         getHistorialById


} from '../controllers/petitions.controllers';

const router = Router();
//endpoint para tener todas las peticiones
router.get('/petitions', getPetitions);
//endpoint para tener las peticiones pendientes
router.get('/petition/pendient',getPendientPetitions);
//endpoint para tener peticiones por id
router.get('/petition/pendient/:id',getPetitionsById)
//endpoint para hacer post de la peticion
router.post('/petition/pendient',postPetition)
//endpoint para aceptar peticion
router.put('/petition/acepted/:id'),setAceptedPetitions;
//endpoint para rechazar la peticion
router.put('/petition/declined/:id',setDeclinedPetitions);
//endpoint para historial general
router.get('/historial',getAllPetitionsHistorial);
//endpoint para el historial individual
router.get('/historial/:id',getHistorialById);
// enpoint para envio del mail
router.get('/petition/mail',sendMail)
//enpont para peticion con nombres
router.get('/petition/complete',getSP_Petition)

export default router;