import { NextFunction, Request, Response } from "express";
import DatabaseError from "../models/errors/database_error_model";
import ForbiddenError from "../models/errors/forbidden.error.model";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof DatabaseError) {
        res.sendStatus(401);
    } else if (error instanceof ForbiddenError) {
        res.sendStatus(403);
    } else {
        res.sendStatus(501);
    }
}

export default errorHandler;