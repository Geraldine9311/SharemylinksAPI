import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import { notFoundController, errorController } from './middlewares/index.js';
import routes from './routes/index.js';
const server = express();

dotenv.config();
server.get('/', (req, res) => {
  res.send(
    `🎉Bienvenido 🎉 a Sharemylinks🔗.
    Comparte y guarda tus links favoritos.`
  );
});
server.use(morgan('dev'));
server.use(express.json()); // todo lo que viene como json lo tranforma como objeto
server.use(cors()); //acepta peticiones desde cualquier IP

//middleware de rutas 
server.use(routes); //enrutador de enrutadores links y users

//middlewares manejo de errores
server.use(notFoundController);
server.use(errorController);


export default server;
