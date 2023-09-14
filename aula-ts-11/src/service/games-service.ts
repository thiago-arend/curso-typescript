import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  const jogos = await gamesRepository.getGames();
  return jogos;
}

async function createGame(game: CreateGame): Promise<void> {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;