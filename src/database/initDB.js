import getPool from './getPool.js'; // Importa los módulos/funciones necesarios

const initDB = async () => {
  try {
    let pool = await getPool();

    console.log('Iniciando initDB...');

    console.log('initDB completado.');

    await pool.query('USE Sharemylinks');
   // await pool.query(
   //   'ALTER TABLE linksVotes DROP FOREIGN KEY linksVotes_ibfk_2'
   // );
   // await pool.query(
   //   'ALTER TABLE linksVotes ADD FOREIGN KEY (link_id) REFERENCES links(id) ON DELETE CASCADE'
   // );

    //Verificar si el orden de borrado de tablas es correcto

    console.log('Creando tablas');
    //  Declara la variable de conexión

    try {
      pool = await getPool(); //  getPool para obtener la conexión

      console.log('Borrando tablas existentes');

      await pool.query('DROP TABLE IF EXISTS linksVotes');
      await pool.query('DROP TABLE IF EXISTS links');
      await pool.query('DROP TABLE IF EXISTS users');

      await pool.query(`
        CREATE TABLE users (
            id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            active BOOLEAN DEFAULT false,
            registrationCode CHAR(30),
            recoverPassCode CHAR(10),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )
    `);

      await pool.query(`
        CREATE TABLE links (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            user_id INTEGER NOT NULL,
            url VARCHAR(500) UNIQUE NOT NULL,
            title VARCHAR(100) NOT NULL,
            description VARCHAR(250) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
             `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS linksVotes (
            id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            value TINYINT UNSIGNED NOT NULL,
            user_id INT NOT NULL,
            link_id INT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (link_id) REFERENCES links(id)
        )
             `);
    } catch (error) {
      console.error('Error al crear las tablas:', error);
    }
  } catch (error) {
    console.error('Error en initDB:', error);
  } finally {
    // No uses pool.release() aquí, ya que no es necesario con mysql2/promise
    process.exit();
  }
};

initDB();
