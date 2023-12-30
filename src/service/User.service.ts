import { IUser } from '../interfaces/User.interface';
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
        if (emailExist) throw new Error('Email já existe');

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
};