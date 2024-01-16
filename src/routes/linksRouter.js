import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

import authUserController from '../middlewares/authUserController.js'

import { newLinkController,
voteLinkController,
deleteLinkController,
listOrderedLinksController
} 
from '../controllers/links/index.js';
import linkExistsController from '../middlewares/linkExistsController.js';

//comprobamos que nos funciona links

//router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));
router.get('/links',listOrderedLinksController);
router.post('/links',authUserController,newLinkController);
router.post('/links/:link_id/votes', authUserController, linkExistsController, voteLinkController);
router.delete('/links/:link_id',authUserController,deleteLinkController);

export default router;
