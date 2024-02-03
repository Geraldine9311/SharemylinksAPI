import getPool from '../../database/getPool.js';
import bcrypt from 'bcrypt';

const changePassController = async (req, res) => {
  try {
    const { email, newPassword, code } = req.body;
    const pool = await getPool();

    console.log('Código de recuperación:', code);
    console.log('Nueva contraseña:', newPassword);

    // Verificar que el código de recuperación sea válido
    const [user] = await pool.query(
      'SELECT * FROM users WHERE recoverPassCode = ? AND email = ?',
      [code, email]
    );

    console.log('Usuario encontrado:', user);

    if (!user) {
      console.log('Código de recuperación no válido');
      return res
        .status(400)
        .json({ error: 'Código de recuperación no válido' });
    }

    // Actualizar la contraseña del usuario en la base de datos
    // Traer el nuevo password encriptado
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    console.log('Contraseña encriptada:', hashedPassword);

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
