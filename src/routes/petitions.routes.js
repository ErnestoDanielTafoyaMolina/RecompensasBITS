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

import { getConnection, sql } from '../database/connection';

import path from 'path';
import { fs } from 'fs';
import multer from 'multer';

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
router.put('/petition/acepted/:id',setAceptedPetitions);
//endpoint para rechazar la peticion
router.put('/petition/declined/:id',setDeclinedPetitions);
//endpoint para historial general
router.get('/historial',getAllPetitionsHistorial);
//endpoint para el historial individual
router.get('/historial/:id',getHistorialById);
// enpoint para envio del mail
router.post('/petition/mail',sendMail)
//enpont para peticion con nombres
router.get('/petition/complete',getSP_Petition)


//peticiones para las imagenes
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-monkeywit-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')


//endpoint 
router.post('/images/post', fileUpload,(req, res) => {

    req.getConnection((err, conn) => {
        if(err) return res.status(500).send('server error')

        const type = req.file.mimetype
        const name = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))

        conn.query('INSERT INTO image set ?', [{type, name, data}], (err, rows) => {
            if(err) return res.status(500).send('server error')

            res.send('image saved!')
        })
    })
    
})


export default router;