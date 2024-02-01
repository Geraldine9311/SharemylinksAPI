import getPool from '../../database/getPool.js';

const selectUserByEmailModel = async (email) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `
            SELECT id, password, recoverPassCode, active
            FROM users
            WHERE email = ?
        `,
    [email]
  );

  return users[0];
};

export default selectUserByEmailModel;
