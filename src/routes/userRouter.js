import express from 'express';
//hacemos el enrutador 
const router = express.Router();

import {
     newUserController, 
     loginUserController,
     validateUserController,
     getUserProfileController,

     } from '../controllers/users/index.js';

     import authUserController from '../middlewares/authUserController.js';
     import userExistController from '../middlewares/userExistController.js';


//comprobamos que nos funciona users
//router.get('/users', authUserController, (req, res) => 
//res.send('Soy el userRouter, ruta válida'));
//router.get('/users', authUserController);

// endpoint que devuelve el detalle del usuario user_id
router.get('/users/:user_id', authUserController, userExistController, getUserProfileController);
router.get('/users/validate/:registrationCode', validateUserController)


router.post('/users/register', newUserController);
router.post('/users/login', loginUserController);


export default router;