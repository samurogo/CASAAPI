"use strict";
// src/application/user/LoginUserUseCase.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (user && await bcrypt_1.default.compare(password, user.password)) {
            const token = generateToken(user.id, user.email, user.role);
            return token;
        }
        return null;
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
function generateToken(userId, email, role) {
    const payload = { userId, email, role };
    const secret = 'your_secret_key';
    const options = { expiresIn: '1h' };
    return jsonwebtoken_1.default.sign(payload, secret, options);
}
//# sourceMappingURL=LoginUserUseCase.js.map