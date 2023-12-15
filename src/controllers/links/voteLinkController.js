import selectLinkByIdModel from '../../models/entries/selectLinkByIdModel.js';

import { cannotVoteOwnEntryError } from '../../services/errorService.js';

import insertVoteModel from '../../models/Links/insertVoteModel.js';

const voteLinkController = async (req, res, next) => {
  try {
    const { linkId } = req.params;

    const { value } = req.body;

    const entry = await selectLinkByIdModel(linkId);

    //el dueño de la entrada no puede votarse a el mismo

    //cannotVoteOwnLinkError

    if (entry.userId === req.user.id) cannotVoteOwnLinkError();

    const votesAvg = await insertVoteModel(value, LinkId, req.user.id);

    res.send({
      status: 'ok',

      data: votesAvg,
    });
  } catch (error) {
    next(error);
  }
};

export default voteLinkController;
