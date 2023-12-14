import bcrypt from 'bcrypt';
import getPool from '../../database/getPool.js';

import {emailAlReadyRegistratedError} from '../../services/errorService.js';

const insertUserModel = async (email, password, registrationCode) => {
    const pool = await getPool(); //con esto accede a la base de datos

    let  [user] = await pool.query(
        `
            SELECT id FROM users WHERE email = ?
        `,
        [email]
    );

    if(user.length){
        emailAlReadyRegistratedError();
    }
    const hashedPassword = await bcrypt.hash(password,10); 

    await pool.query(
        `
            INSERT INTO users (email, password, registrationCode)
            VALUES (?,?,?)
        `,
        [email, hashedPassword, registrationCode]
    );

    };

    export default insertUserModel; 