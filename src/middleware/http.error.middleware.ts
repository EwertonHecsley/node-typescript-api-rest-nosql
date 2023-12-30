import { NextFunction, Request, Response } from "express";
import { HttpException } from "./Http.exception";

export const httpErrorExecption = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const { statusCode, message } = err as HttpException;
    return res.status(statusCode || 500).json({ mensagem: message });
};