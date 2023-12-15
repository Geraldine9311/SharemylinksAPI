import selectLinkByIdModel from '../../models/links/selectLinkByIdModel.js';

import { cannotVoteOwnEntryError } from '../../services/errorService.js';

import insertVoteModel from '../../models/links/insertVoteModel.js';

const voteLinkController = async (req, res, next) => {
  try {
    const { linkId } = req.params;

    const { value } = req.body;

    const entry = await selectLinkByIdModel(linkId);

    //el dueño de la entrada no puede votarse a el mismo

    //cannotVoteOwnEntryError

    if (entry.userId === req.user.id) cannotVoteOwnEntryError();

    const votesAvg = await insertVoteModel(value, linkId, req.user.id);

    res.send({
      status: 'ok',

      data: votesAvg,
    });
  } catch (error) {
    next(error);
  }
};

export default voteLinkController;
