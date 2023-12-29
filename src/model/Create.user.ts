import user from '../database/schema/user.schema';
import { IUser } from '../interfaces/User.interface';


export class CreateUser {
    async create(data: IUser) {
        const newUser = (await user.create(data)).save()
        return newUser
    }

    async findUserEmail(email: string) {
        return await user.findOne({ email });
    }
}