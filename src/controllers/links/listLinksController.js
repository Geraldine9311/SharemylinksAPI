import selectLinksModel from '../../models/links/selectLinksModel.js';

const listLinksController = async (req, res) => {
    try {
        const { orderBy, orderDirection } = req.query;

        const links = await selectLinksModel(req.user.id, orderBy, orderDirection);
        res.json({ status: 'ok', data: links });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

export default listLinksController;