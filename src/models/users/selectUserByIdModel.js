import getPool from '../../database/getPool.js';

const selectUserByIdModel = async (user_id) => {
  const pool = await getPool();
  //Buscamos el usuario por su id
  const [user] = await pool.query(
    `
            SELECT id, email, created_at
            FROM users
            WHERE id = ?
        `,

    [user_id]
  );

  return user[0];
};

export default selectUserByIdModel;
