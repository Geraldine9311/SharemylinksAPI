# Sharemylinks

COMPARTIR ENLACES WEB.

Este ejercicio consiste en crear una API que permita a los usuarios registrarse y compartir enlaces web que consideren interesantes e interactuar con los que les gusten.

ENTIDADES

-USERS

Registrarse
Acceder
Editar perfil (Nombre,Email,Biografia,Foto)

-LINKS
Crear un link
Borrar un enlace publicado por el usuario
Votar un enlace de otro usuario

ENDPOINTS

users
router.post('/users/register', newUserController);
router.get('/users/validate/:registrationCode', validateUserController)
router.get('/users', authUserController);
router.get('/users/:user_id', userExistController, getUserProfileController);
router.post('/users/login', loginUserController);


links
router.get('/links',authUserController, listLinksController);
router.post('/links',authUserController,newLinkController);
router.post('/links/:link_id/votes', authUserController,voteLinkController);
router.delete('/links/:link_id',authUserController,deleteLinkController);



Tecnologia utilizada (Mysql, postman, Node.js, github)

Algo a destacar
Hasta ahora tenemos el registro,el acceso,posteo de link y borrado,además el voto.
En versiones futuras querríamos implementar la interfaz de usuario y la modificación del perfil






