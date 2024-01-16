import selectUserByIdModel from '../../models/users/selectUserByIdModel.js';

const getUserProfileController = async (req, res, next) => {
  try {
    
    const user = await selectUserByIdModel(req.params.user_id);

    res.send({
      status: 'ok',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getUserProfileController;