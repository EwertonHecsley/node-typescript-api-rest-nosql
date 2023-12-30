import 'dotenv/config';
import { PassworService } from "../service/Password.service";
import { CreateUser } from "../model/User.model";
import { HttpException } from "../middleware/Http.exception";
import jwt, { Secret } from 'jsonwebtoken';

export class AuthUser {
    private passwordService: PassworService
    private UserService: CreateUser

    constructor() {
        this.passwordService = new PassworService()
        this.UserService = new CreateUser();
    };

    async createToken(email: string, password: string) {
        const emailExist = await this.UserService.findUserEmail(email);
        if (!emailExist) throw new HttpException(401, 'Email inválido.');

        const compareHash = await this.passwordService.comparePassword(password, emailExist.password);
        if (!compareHash) throw new HttpException(401, 'Senha inválida.');

        const token = jwt.sign({ id: emailExist.id, email: emailExist.email }, process.env.SECRET_KEY_JWT as Secret);
        return {
            id: emailExist.id,
            name: emailExist.name,
            token
        }
    };

    async verifyLogin(token: string) {
        return await jwt.verify(token, process.env.SECRET_KEY_JWT as Secret);
    }
};