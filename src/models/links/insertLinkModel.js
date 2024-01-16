import getPool from '../../database/getPool.js';

const insertLinkModel = async (user_id, url, title, description) => {
  
  const pool = await getPool();

  // Prepara y ejecuta la consulta SQL para insertar un nuevo link
  const [result] = await pool.query(
    `
            INSERT INTO links (user_id, url, title, description)
            VALUES (?, ?, ?, ?)
        `,
    [user_id, url, title, description]
  );

  // Registra el resultado de la inserción (opcional)
  console.log('Resultado de insertar el link:', result);

  // Devuelve el ID del link insertado
  const { insertId } = result;
  return insertId;
};

export default insertLinkModel;
