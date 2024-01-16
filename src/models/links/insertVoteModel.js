import getPool from "../../database/getPool.js";
import { voteAlreadyExistsError } from "../../services/errorService.js";

const insertVoteModel = async (user_id, link_id, value) => {
    const pool = await getPool();


    const [votes] = await pool.query(
        `
            SELECT id FROM linksVotes
            WHERE user_id = ? AND link_id=?
        `,
        [user_id, link_id]
    );

    if(votes.length>=1) voteAlreadyExistsError();

    //insertamos el voto 
    await pool.query(
        `
            INSERT INTO linksVotes (user_id, link_id, value)
            VALUES (?,?,?)
        `,
        [user_id, link_id, value]
    );

    const [votesAvg] = await pool.query(
        `
            SELECT AVG(value) AS avg FROM linksVotes WHERE link_id = ${link_id}
        `
    );

    return Number(votesAvg[0].avg);
}

export default insertVoteModel;
