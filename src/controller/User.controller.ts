import { Request, Response } from "express";
import { CreateUserService } from '../service/User.service';

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
};