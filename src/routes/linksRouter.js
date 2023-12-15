import express from 'express';
//hacemos el enrutador para express, esto no es una ruta
const router = express.Router();

import {
  newLinkController,
  voteLinkController,
} from '../controllers/links/index.js';

import linkExistsController from '../middlewares/linkExistsController.js';
//comprobamos que nos funciona links
router.get('/links', (req, res) => res.send('Soy el linksRouter, ruta válida'));
router.get('/links/:linkId', linkExistsController);

router.post('/links', newLinkController);
router.post('links/:linkId/votes', linkExistsController, voteLinkController);

export default router;
