import joi from "joi";
import { CreateGame } from "protocols/game-protocol";

export const gameSchema = joi.object<CreateGame>({
    title: joi.string().required(),
    platform: joi.string().required()
});

