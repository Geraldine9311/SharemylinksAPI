import selectOrderedLinksModel from '../../models/links/selectOrderedLinksModel.js';

const listOrderedLinksController = async (req, res) => {
    try {
        const { orderBy, orderDirection } = req.query;

        const links = await selectOrderedLinksModel(orderBy, orderDirection);
        res.json({ status: 'ok', data: links });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

export default listOrderedLinksController;