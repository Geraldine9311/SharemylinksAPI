import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';
import { notFoundController, errorController } from './middlewares/index.js';

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
server.use(cors()); //acepta pedidos desde cualquier IP
server.use(routes); //implementa los routers, linksrouter y userRouter

//middlewares ruta no encontrada y manejo de errores
server.use(notFoundController);
server.use(errorController);

export default server;
