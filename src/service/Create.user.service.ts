import { IUser } from '../interfaces/User.interface';
import { CreateUser } from '../model/Create.user';

export class CreateUserService {
    async execute({ name, email, password }: IUser) {
        const user = new CreateUser();

        const emailExist = await user.findUserEmail(email);
        if (emailExist) throw new Error('Email já existe');

        const result = await user.create({ name, email, password });
        return result;
    }
}