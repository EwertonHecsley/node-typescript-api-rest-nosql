import { Request, Response } from "express";
import { CreateUserService } from '../service/User.service';

export class UserController {
    async handle(req: Request, res: Response) {
        const user = new CreateUserService();

        try {
            const result = await user.execute(req.body);
            return res.status(201).json(result);
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ mensagem: error.message });
        }
    };

    async findAllUserController(_req: Request, res: Response) {
        const user = new CreateUserService();
        try {
            const result = await user.findAllUserService();
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ mensagem: error.message });
        }
    }
};