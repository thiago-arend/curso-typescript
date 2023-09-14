import { db } from "../database/database.connection";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {
    const result = await db.query<Game>(`SELECT * FROM "games";`);
    return result.rows;
}

async function createGame(game: CreateGame) {
    await db.query<Game>(`INSERT INTO "games" ("title", "platform") VALUES ($1, $2);`, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: CreateGame) {
    const result = await db.query<Game>(`SELECT * FROM "games" WHERE "title"=$1 AND "platform"=$2;`, [game.title, game.platform]);
    return result.rows[0];
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;