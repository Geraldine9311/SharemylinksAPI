import getPool from '../database/getPool.js';
import { notFoundError } from '../services/errorService.js';

const linkExistsController = async (req, res, next) => {
  try {
    const pool = await getPool();

    const link_id = req.params.link_id
    
    const [link] = await pool.query(
      `
                SELECT id FROM links WHERE id = ?;
            `,
      [link_id]
    );

    if (!link.length) {
      throw notFoundError('link');
      
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default linkExistsController;
