"use strict";
// src/application/user/RegisterUserUseCase.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const User_1 = require("../../domain/user/User");
class RegisterUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, password, role = User_1.UserRole.FAMILIAR) {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already exists');
        }
        const newUser = {
            id: '',
            email,
            password,
            role,
        };
        await this.userRepository.save(newUser);
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=RegisterUserUseCase.js.map