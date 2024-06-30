// src/application/user/RegisterUserUseCase.ts

import { UserRepository } from '../../ports/user/UserRepository';
import { User, UserRole } from '../../domain/user/User';

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string, role: UserRole = UserRole.FAMILIAR): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser: User = {
      id: '',
      email,
      password,
      role,
    };

    await this.userRepository.save(newUser);
  }
}
