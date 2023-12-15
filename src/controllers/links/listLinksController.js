import selectAllLinksModel from '../../models/Links/selectAllLinksModel.js';

const listLinksController = async (req, res, next) => {
  try {
    const links = await selectAllLinksModel();

    res.send({
      data: links,
    });
  } catch (error) {
    next(error);
  }
};

export default listLinksController;
