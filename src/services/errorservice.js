
export const notFoundError = (resource) => {
  throw {
      httpStatus: 404,
      code: 'RESOURCE_NOT_FOUND',
      message: `Este recurso solicitado '${ resource }' no se encuentra.`
  }
}

export const emailAlReadyRegistratedError = () => {
  throw {
      httpStatus: 409,//conflicto
      code: 'EMAIL_ALREADY_REGISTERED',
      message: 'El email ya se encuentra registrado'
  }
}

