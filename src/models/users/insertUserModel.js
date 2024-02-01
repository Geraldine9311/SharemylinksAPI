import bcrypt from 'bcrypt';
import getPool from '../../database/getPool.js';
import sendMailUtil from '../../util/sendMailUtil.js';

import { emailAlReadyRegistratedError } from '../../services/errorService.js';

const insertUserModel = async (email, password, registrationCode) => {
  const pool = await getPool(); //con esto accede a la base de datos

  let [user] = await pool.query(
    `
            SELECT id FROM users WHERE email = ?
        `,
    [email]
  );

  if (user.length) {
    emailAlReadyRegistratedError();
  }

  const emailSubject = 'Activa tu usuario SHARE MY LINKS🔗';

  const emailBody = `
            !Bienvenid@!

            Gracias por registrarte en Share my links. Para activar tu cuenta haz click en el siguiente enlace:

            <a href="${process.env.URL_FRONT}/activate/${registrationCode}">Activar mi cuenta</a> 
    `; //insertamos html

  await sendMailUtil(email, emailSubject, emailBody);

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    `
            INSERT INTO users (email, password, registrationCode)
            VALUES (?,?,?)
        `,
    [email, hashedPassword, registrationCode]
  );
};

export default insertUserModel;
