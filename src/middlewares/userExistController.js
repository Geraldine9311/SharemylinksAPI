import getPool from '../database/getPool.js';
import { notFoundError } from '../services/errorService.js';

const userExistController = async (req, res, next) => {
  try {
    const pool = await getPool();

    const user_id = req.params.user_id || req.user?.id;
    console.log(user_id);
    const [user] = await pool.query(
      `
                SELECT id FROM users WHERE id = ? AND active=true;
            `,
      [user_id]
    );

    if (!user.length) {
      throw notFoundError('usuario');
      // anterior throw es prueba sino sería este:
      //notFoundError('usuario');
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default userExistController;
