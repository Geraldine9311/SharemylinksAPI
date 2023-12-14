import randomstring from 'randomstring';

import insertUserModel from '../../models/users/insertUserModel.js';

const newUserController = async (req,res,next) => {
    try {

        const {email, password } = req.body;
        
        const registrationCode = randomstring.generate(10);

        await insertUserModel(email, password, registrationCode);

        res.send({
            status: 'ok',
            message: 'Genial te has registrado correctamente🥳, verifica tu cuenta en el email enviado✅.'
        });
        
    } catch (error) {
        next(error);
    }
}

export default newUserController;