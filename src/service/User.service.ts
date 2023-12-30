import { JwtPayload } from 'jsonwebtoken';
import { AuthUser } from '../auth/User.auth';
import { IUser } from '../interfaces/User.interface';
import { HttpException } from '../middleware/Http.exception';
import { CreateUser } from '../model/User.model';
import { PassworService } from './Password.service';


export class CreateUserService {
    private passwordService: PassworService;

    constructor() {
        this.passwordService = new PassworService();
    }

    async execute({ name, email, password }: IUser) {
        const user = new CreateUser();

        const emailExist = await user.findUserEmail(email);
        if (emailExist) throw new HttpException(400, 'Email já cadastrado.');

        const passwordHash = await this.passwordService.hashPassword(password);

        const result = await user.create({ name, email, password: passwordHash });
        const resultFormated = {
            id: result.id,
            name: result.name,
            email: result.email
        };

        return resultFormated;
    };

    async findAllUserService() {
        const user = new CreateUser();
        return user.findAllUser();
    };

    async detailUserLogged(authorization: string) {
        const userAuth = new AuthUser();
        const userLogged = await userAuth.verifyLogin(authorization.split(' ')[1]) as JwtPayload;

        const user = new CreateUser();
        const result = await user.findUserEmail(userLogged['email']);
        return {
            id: result?.id,
            name: result?.name,
            email: result?.email
        }
    };

    async login(email: string, password: string) {
        const login = new AuthUser();
        return await login.createToken(email, password);
    };

};