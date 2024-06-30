"use strict";
// src/adapters/user/RegisterUserAdapter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserAdapter = void 0;
const User_1 = require("../../domain/user/User");
class RegisterUserAdapter {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, password, role = User_1.UserRole.FAMILIAR) {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already exists');
        }
        const newUser = { email, password, role, id: '' };
        await this.userRepository.save(newUser);
    }
}
exports.RegisterUserAdapter = RegisterUserAdapter;
//# sourceMappingURL=RegisterUserAdapter.js.map