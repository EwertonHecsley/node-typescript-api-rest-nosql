import { Request, Response } from "express";
import { CreateUserService } from '../service/User.service';
import { loginSchema } from "../schemas/login.schema";
import { ZodError } from "zod";

export class UserController {
    async handle(req: Request, res: Response) {
        const user = new CreateUserService();

        const result = await user.execute(req.body);
        return res.status(201).json(result);
    };

    async findAllUserController(_req: Request, res: Response) {
        const user = new CreateUserService();

        const result = await user.findAllUserService();
        return res.json(result);
    };

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            loginSchema.parse(req.body);
        } catch (error) {
            if (error instanceof ZodError) return res.status(400).json({ mensagem: error.issues[0].message });
        }

        const user = new CreateUserService();
        const result = await user.login(email, password);
        return res.json(result);
    };

    async detailUserLogged(req: Request, res: Response) {
        const { authorization } = req.headers;

        const user = new CreateUserService();
        const result = await user.detailUserLogged(authorization as string);
        return res.json(result);
    }
};