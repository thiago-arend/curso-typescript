import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error);

    if (error.type === "joiError") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "conflictError" || error.type === "originDestinationConflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "unmatchedDatasError") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.type === "tooManyResults") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong!");
}