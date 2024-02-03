import getPool from '../../database/getPool.js';

const deleteLinkModel = async (link_id) => {
  const pool = await getPool();
  await pool.query('DELETE FROM linksVotes WHERE link_id = ?', [link_id]);
  await pool.query('DELETE FROM links WHERE id = ?', [link_id]);
};

export default deleteLinkModel;
