import { db } from "../database/database.connection";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {

  try {

    const result = await db.query<Game>(`SELECT * FROM "games";`);
    return result.rows;
  } catch (err) {

    console.log(err.response.data);
  }
}

async function createGame(game: CreateGame) {

  try {
    
    await db.query<Game>(`INSERT INTO "games" ("title", "platform") VALUES ($1, $2);`, [game.title, game.platform]);
  } catch (err) {

    console.log(err.response.data);
  }
}

async function getGameByTitleAndPlatform(game: CreateGame) {

  try {

    const result = await db.query<Game>(`SELECT * FROM "games" WHERE "title"=$1 AND "platform"=$2;`, [game.title, game.platform]);
    return result.rows[0];
  } catch (err) {

    console.log(err.response.data);
  }
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;