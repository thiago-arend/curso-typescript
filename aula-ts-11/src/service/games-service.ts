import { log } from "console";
import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  const gameExists = await gameAlreadyExists(game);
  
  if (gameExists) {
    return null;
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);

  console.log(result);
  
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;