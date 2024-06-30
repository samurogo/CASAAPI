"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const GateRoutes_1 = __importDefault(require("./interfaces/gate/GateRoutes"));
const LightRoutes_1 = __importDefault(require("./interfaces/light/LightRoutes"));
const UserController_1 = require("./interfaces/user/UserController");
const MongooseUserRepository_1 = require("./adapters/user/MongooseUserRepository");
const RegisterUserUseCase_1 = require("./application/user/RegisterUserUseCase");
const LoginUserUseCase_1 = require("./application/user/LoginUserUseCase");
const MongooseLightRepository_1 = require("./adapters/light/MongooseLightRepository");
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
}));
const userRepository = new MongooseUserRepository_1.MongooseUserRepository();
const lightRepository = new MongooseLightRepository_1.MongooseLightRepository();
const registerUserUseCase = new RegisterUserUseCase_1.RegisterUserUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase_1.LoginUserUseCase(userRepository);
const userController = new UserController_1.UserController(registerUserUseCase, loginUserUseCase);
app.post('/api/register', (req, res) => userController.register(req, res));
app.post('/api/login', (req, res) => userController.login(req, res));
app.use('/api', GateRoutes_1.default);
app.use('/api', LightRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map