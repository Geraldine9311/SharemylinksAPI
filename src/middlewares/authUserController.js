import jwt from 'jsonwebtoken';
import {
  invalidCredentialsError,
  notAuthenticatedError,
} from '../services/errorService.js';

const authUserController = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return notAuthenticatedError(res); // Asegúrate de enviar una respuesta y terminar la ejecución aquí
    }

    const token = authHeader.split(' ')[1];

    try {
      const tokenInfo = jwt.verify(token, process.env.SECRET);
      req.user = tokenInfo;
      next();
    } catch (error) {
      return invalidCredentialsError(res); // Asegúrate de enviar una respuesta y terminar la ejecución aquí
    }
  } catch (error) {
    next(error);
  }
};

export default authUserController;
