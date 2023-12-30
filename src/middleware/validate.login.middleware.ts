import { NextFunction, Request, Response } from "express";
import { HttpException } from "./Http.exception";
import { AuthUser } from "../auth/User.auth";

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) throw new HttpException(401, 'Para ter acesso, um token válido deve ser enviado.');

    const token = authorization.split(' ')[1];

    const auth = new AuthUser();
    const user = await auth.verifyLogin(token);
    if (!user) throw new HttpException(401, 'Usuário não autorizado.');

    next();
};