import bcypt from 'bcrypt';

export class PassworService {
    async hashPassword(password: string): Promise<string> {
        const hashedPassword = await bcypt.hash(password, 8);
        return hashedPassword
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcypt.compare(password, hashedPassword);
    }
};