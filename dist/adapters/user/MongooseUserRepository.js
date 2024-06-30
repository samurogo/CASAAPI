"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseUserRepository = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserModel_1 = __importDefault(require("../../models/UserModel"));
class MongooseUserRepository {
    async findByEmail(email) {
        const user = await UserModel_1.default.findOne({ email });
        return user ? { id: user.id, email: user.email, password: user.password, role: user.role } : null;
    }
    async save(user) {
        const hashedPassword = await bcrypt_1.default.hash(user.password, 10);
        await UserModel_1.default.create({ email: user.email, password: hashedPassword, role: user.role });
    }
}
exports.MongooseUserRepository = MongooseUserRepository;
//# sourceMappingURL=MongooseUserRepository.js.map