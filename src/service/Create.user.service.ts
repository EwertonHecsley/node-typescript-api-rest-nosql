import { IUser } from '../interfaces/User.interface';
import { CreateUser } from '../model/Create.user';
import bcrypt from 'bcrypt';

export class CreateUserService {
    async execute({ name, email, password }: IUser) {
        const user = new CreateUser();

        const emailExist = await user.findUserEmail(email);
        if (emailExist) throw new Error('Email já existe');

        const passwordHash = await bcrypt.hash(password, 8);

        const result = await user.create({ name, email, password: passwordHash });
        const resultFormated = {
            id: result.id,
            name: result.name,
            email: result.email
        };

        return resultFormated;
    }
};