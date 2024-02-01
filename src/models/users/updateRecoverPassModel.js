// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../database/getPool.js';
import sendMailUtil from '../../util/sendMailUtil.js';

const updateRecoverPassModel = async (email, recoverPassCode) => {
  const pool = await getPool();

  // Actualizamos el código de recuperación de contraseña del usuario.
  await pool.query(`UPDATE users SET recoverPassCode = ? WHERE email = ?`, [
    recoverPassCode,
    email,
  ]);

  // Creamos el asunto del email de recuperación de contraseña.
  const emailSubject = 'Recuperación de contraseña SHARE MY LINKS🔗';

  // Creamos el contenido del email
  const emailBody = `
            Se ha solicitado la recuperación de contraseña para este email en Share My links:
            <a href="${process.env.URL_FRONT}/chgpassw/">Cambiar contraseña</a> 
           
            Utiliza el siguiente código para crear tu nueva contraseña: ${recoverPassCode}
           


            Por favor, si no has sido tú ignora este email.
        `;

  // Enviamos el email de verificación al usuario.
  await sendMailUtil(email, emailSubject, emailBody);
};

export default updateRecoverPassModel;
