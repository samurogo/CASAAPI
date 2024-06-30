import bcrypt from 'bcrypt';
import { User } from '../../domain/user/User';
import UserModel, { UserDocument } from '../../models/UserModel';
import { UserRepository } from '../../ports/user/UserRepository';

export class MongooseUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email }) as UserDocument;
    return user ? { id: user.id, email: user.email, password: user.password, role: user.role } : null;
  }

  async save(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await UserModel.create({ email: user.email, password: hashedPassword, role: user.role });
  }
}
