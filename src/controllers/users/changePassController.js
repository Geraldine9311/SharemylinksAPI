import getPool from '../../database/getPool.js';
import bcrypt from 'bcrypt';

const changePassController = async (req, res) => {
  try {
    const { code, newPassword, email } = req.body;
    const pool = await getPool();

    // Verificar que el código de recuperación sea válido
    const [user] = await pool.query(
      'SELECT * FROM users WHERE recoverPassCode = ? AND email = ?',
      [code, email]
    );

    if (!user) {
      console.log('Código de recuperación no válido');
      return res
        .status(400)
        .json({ error: 'Código de recuperación no válido' });
    }

    // Actualizar la contraseña del usuario en la base de datos
    //Traer el nuevo password encriptado
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query(
      'UPDATE users SET password = ? WHERE recoverPassCode = ? AND email = ?',
      [hashedPassword, code, email]
    );

    // Éxito al cambiar la contraseña
    console.log('Contraseña cambiada con éxito');
    res.status(200).json({ message: 'Contraseña cambiada con éxito' });
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default changePassController;
