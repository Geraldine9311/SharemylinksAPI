import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

import { newUserController } from '../controllers/users/index.js';

//comprobamos que nos funciona users
router.get('/users', (req, res) => res.send('Soy el userRouter, ruta válida'));
router.post('/users/register', newUserController);

export default router;
