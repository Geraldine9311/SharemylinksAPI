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
    message: `El email ya se encuentra registrado`,
  };
};

export const invalidCredentialsError = () => {
  throw {
    httpStatus: 401, //no autorizado
    code: 'INVALID_CREDENTIALS',
    message: `Credenciales no validas`,
  };
};

export const cannotVoteOwnEntryError = () => {
  throw {
    httpStatus: 403,
    code: 'CANNOT_VOTE_OWN_ERROR',
    message: 'No puedes votar tu propia entrada',
  };
};

export const voteAlreadyExistsError = () => {
  throw {
    httpStatus: 409, //conflicto
    code: 'VOTE_ALLREADY_ERROR',
    message: 'No se puede votar mas de una vez la entrada',
  };
};
