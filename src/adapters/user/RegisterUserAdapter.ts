// src/adapters/user/RegisterUserAdapter.ts

import { UserRepository } from '../../ports/user/UserRepository';
import { RegisterUserUseCase } from '../../application/user/RegisterUserUseCase';
import { UserRole } from '../../domain/user/User';

export class RegisterUserAdapter {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string, role: UserRole = UserRole.FAMILIAR): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const newUser = { email, password, role, id: '' };
    await this.userRepository.save(newUser);
  }
}
