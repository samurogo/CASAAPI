// src/application/user/LoginUserUseCase.ts

import { UserRepository } from '../../ports/user/UserRepository';
import { UserRole } from '../../domain/user/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class LoginUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = generateToken(user.id, user.email, user.role);
      return token;
    }
    return null;
  }
}

function generateToken(userId: string, email: string, role: string): string {
  const payload = { userId, email,role };
  const secret = 'your_secret_key';
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, secret, options);
}

