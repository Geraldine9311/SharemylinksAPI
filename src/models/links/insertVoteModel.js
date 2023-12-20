import getPool from "../../database/getPool.js";
import { voteAlreadyExistsError } from "../../services/errorService.js";

const insertVoteModel = async (value, link_id, user_id) => {
    const pool = await getPool();


    const [votes] = await pool.query(
        `
            SELECT id FROM links
            WHERE user_id = ? AND link_id=?
        `,
        [link_id, user_id]
    );

    if(votes.length) voteAlreadyExistsError();

    //insertamos el voto 
    await pool.query(
        `
            INSERT INTO linksVotes (value, link_id, user_id)
            VALUES (?,?,?)
        `,
        [value, link_id, user_id]
    );

    const [votesAvg] = await pool.query(
        `
            SELECT AVG(value) AS avg FROM linksVotes WHERE link_id = ${link_id}
        `
    );

    return Number(votesAvg[0].avg);
}

export default insertVoteModel;