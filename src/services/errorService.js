export const notFoundError = (resource) => {
  throw {
    httpStatus: 404,
    code: 'RESOURCE_NOT_FOUND',
    message: `Este recurso solicitado '${resource}' no se encuentra.`,
  };
};

export const emailAlReadyRegistratedError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: 'EMAIL_ALREADY_REGISTERED',
    message: `El email ya se encuentra registrado, pendiente de activación`,
  };
};

export const invalidCredentialsError = () => {
  throw {
    httpStatus: 401, //no autorizado
    code: 'INVALID_CREDENTIALS',
    message: `Credenciales no válidas`,
  };
};

export const sendMailError = () => {
  //error interno del envio del mail
  throw {
    httpStatus: 500, //no autorizado
    code: 'SEND_MAIL_FAILED',
    message: `Error en el envio del email`,
  };
};

export const pendignActivationError = () => {
  //error si no se ha activado el usuario
  throw {
    httpStatus: 403,
    code: 'PENDING_ACTIVATION',
    message: `Usuario pendiente de activación.`,
  };
};

export const notAuthenticatedError = () => {
  //error de autentificacion
  throw {
    httpStatus: 401, // autenticacion
    code: 'NOT_AUTHENTICATED',
    message: 'Hace falta token por el header "Authorization" ',
  };
};

export const cannotVoteOwnEntryError = () => {
  throw {
    httpStatus: 403,
    code: 'CANNOT_VOTE_OWN_ERROR',
    message: 'No puedes votar tu propio link',
  };
};

export const voteAlreadyExistsError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: 'VOTE_ALLREADY_ERROR',
    message: 'No se puede votar más de una vez',
  };
};

export const recoveryCodeError = () => {
  throw new Error({
    httpStatus: 401, // Unauthorized
    code: 'INVALID_RECOVERY_CODE',
    message: 'Código de recuperación incorrecto',
  });
};
