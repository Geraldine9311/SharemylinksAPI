
DESCRIPCIÓN SHAREMYLINKS:

Api de compartición de links en la que los usuarios,una vez registrados podrán compartir links y votarlos.
Los no registrados sólo podrán acceder.


INSTRUCCIONES PARA ARRANCAR LA API:

-Clonar el Repositorio
 .git clone

-Instalar dependencias
 .npm install

-Instalar o borrar base de datos:
 .npm run deleteDb
 .npm run initDb


ENTIDADES:

-USERS

Registrarse
Acceder
Editar perfil (Nombre,Email,Biografia,Foto)

-LINKS
Crear un link
Borrar un enlace publicado por el usuario
Votar un enlace de otro usuario


ENDPOINTS:

 Usuarios

 -Registro de Usuario-  
  . router.post('/users/register', newUserController);
  . Método: `POST`
  . Ruta: `/users/register`
  . Descripción: Permite a los usuarios registrarse proporcionando su correo electrónico, contraseña y nombre.

 -Inicio de Sesión de Usuario-
  . router.post('/users/login', loginUserController);
  . Método: `POST`
  . Ruta: `/users/login`
  . Descripción: Permite a los usuarios iniciar sesión proporcionando su correo electrónico y contraseña.

 -Validación de Usuario-
  . router.get('/users/validate/:registrationCode', validateUserController)
  . Método: `GET`
  . Ruta: `/users/validate/:registrationCode`
  . Descripción: Valida un usuario utilizando el código de registro proporcionado.

 -Obtener Lista de Usuarios-
  . router.get('/users', authUserController);
  . Método: `GET`
  . Ruta: `/users`
  . Descripción: Obtiene una lista de todos los usuarios registrados. (Se requiere autenticación)

 -Obtener Perfil de Usuario-
  . router.get('/users/:user_id', userExistController, getUserProfileController);
  . Método: `GET`
  . Ruta: `/users/:user_id`
  . Descripción: Obtiene el perfil de un usuario específico. (Se requiere autenticación y verificación de existencia del usuario)

Enlaces

 -Listar Enlaces-
  . router.get('/links',authUserController, listLinksController);
  . Método: `GET`
  . Ruta: `/links`
  . Descripción: Obtiene una lista de todos los enlaces. (Se requiere autenticación)

 -Nuevo Enlace-
  . router.post('/links',authUserController,newLinkController);
  . Método: `POST`
  . Ruta: `/links`
  . Descripción: Agrega un nuevo enlace al sistema. (Se requiere autenticación)

 -Votar por Enlace-
  . router.post('/links/:link_id/votes', authUserController,voteLinkController);
  . Método: `POST`
  . Ruta: `/links/:link_id/votes`
  . Descripción: Permite a los usuarios votar por un enlace específico. (Se requiere autenticación)

 -Eliminar Enlace-
  . router.delete('/links/:link_id',authUserController,deleteLinkController);
  . Método: `DELETE`
  . Ruta: `/links/:link_id`
  . Descripción: Elimina un enlace específico. (Se requiere autenticación)




Tecnologia utilizada (Mysql, postman, Node.js, github)

Desarrollado por:
 .Nacho Rubio Iglesias
 .Geraldine Morales Herrera
 .María Amado
 .Pedro Guerrero Blanco







