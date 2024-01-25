import insertVoteModel from '../../models/links/insertVoteModel.js';

const voteLinkController = async (req, res, next) => {
    try {
        const id = req.user.id;
        const { link_id } = req.params;
        const { value } = req.body;

        if (value < 1 || value > 5) {
            return res.status(400).json({ message: `Por favor, vota del 1 al 5.` });
        }

        const voteresult = await insertVoteModel(id, link_id, value);

        res.status(200).json({ 
            message: `Gracias!! Tu voto se ha registrado con éxito`,
            data: voteresult
        });
    } catch (error) {
        next(error);
    }
};

export default voteLinkController;


