import User from '../database/schema/user.schema';
import { IUser } from '../interfaces/User.interface';


export class CreateUser {
    async create(data: IUser) {
        const user = new User(data);
        const result = await user.save();
        return result;

    }

    async findUserEmail(email: string) {
        return await User.findOne({ email });
    }

    async findAllUser() {
        return await User.find({}, 'id name email');
    }
};