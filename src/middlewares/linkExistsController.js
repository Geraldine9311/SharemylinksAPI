import getPool from '../database/getPool.js';
import { notFoundError } from '../services/errorService.js';

const linkExistsController = async (req, res, next) => {
  try {
    const pool = await getPool();

    const { linkId } = req.params;

    const [link] = await pool.query(
      `
                SELECT id FROM links WHERE id = ${linkId}
            `
    );

    if (link.length < 1) notFoundError('link');

    next();
  } catch (error) {
    next(error);
  }
};

export default linkExistsController;
