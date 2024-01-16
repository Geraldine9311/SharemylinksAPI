import getPool from '../../database/getPool.js';

const selectOrderedLinksModel = async (orderBy, orderDirection = 'DESC') => {
    const pool = await getPool();

    let query = 
    `SELECT l.*, COALESCE(AVG(v.value), 0) AS average_vote, u.email
     FROM links l 
     LEFT JOIN linksVotes v ON l.id = v.link_id 
     LEFT JOIN users u ON l.user_id = u.id
     GROUP BY l.id`;

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

    const [links] = await pool.query(query);
    return links;
};

export default selectOrderedLinksModel;