import getPool from '../../database/getPool.js';

const selectLinksModel = async (userId, orderBy, orderDirection = 'DESC') => {
  const pool = await getPool();

  let query = `
        SELECT
        l.id,
        l.user_id AS owner,
        u.email,
        l.url,
        l.title,
        l.description,
        BIT_OR(v.user_id = ?) AS votedByMe,
        AVG(IFNULL(v.value, 0)) AS average_vote,
        l.created_at
        FROM links l
        LEFT JOIN linksVotes v ON v.link_id = l.id
        INNER JOIN users u ON u.id = l.user_id
        GROUP BY l.id
    `;

  // Verificar y construir la cláusula ORDER BY
  if (orderBy === 'votes') {
    query += ' ORDER BY average_vote';
  } else {
    query += ' ORDER BY l.created_at';
  }

  // Validar orderDirection
  if (orderDirection !== 'ASC' && orderDirection !== 'DESC') {
    orderDirection = 'DESC'; // Si no es válido, usa DESC por defecto
  }

  query += ` ${orderDirection}`;

  const [links] = await pool.query(query, [userId]);
  return links;
};

export default selectLinksModel;
