import insertLinkModel from '../../models/links/insertLinkModel.js';

const newLinkController = async (req, res, next) => {
  try {
    
    const { url, title, description } = req.body;

    // Comprueba que todos los campos necesarios estén presentes
    if (!url || !title || !description) {
      return res
        .status(400)
        .send({
          error: 'Por favor, rellena todos los datos requeridos para el link.',
        });
    }

    // Inserta el link en la base de datos
    const link_id = await insertLinkModel(req.user.id, url, title, description);

    // Envía respuesta con el ID del link insertado
    res.send({
      status: 'ok',
      message: 'Link añadido correctamente',
      data: {
        link: {
          id: link_id,
          url,
          title,
          description,
          created_at: new Date(),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export default newLinkController;