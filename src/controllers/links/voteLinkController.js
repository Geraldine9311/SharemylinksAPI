import insertVoteModel from '../../models/links/insertVoteModel.js';

const voteLinkController = async (req, res, next) => {
    try {
        const id = req.user.id;
        const { link_id } = req.params;
        const { value } = req.body;

        if (value < 1 || value > 5) {
            return res.status(400).json({ message: 'El voto debe estar entre 1 y 5.' });
        }

        await insertVoteModel(id, link_id, value);

        res.status(200).json({ message: 'Voto registrado con éxito' });
    } catch (error) {
        next(error);
    }
};

export default voteLinkController;


