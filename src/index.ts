import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import connectDB from './config/database';
import gateRoutes from './interfaces/gate/GateRoutes';
import lightRoutes from './interfaces/light/LightRoutes';
import { UserController } from './interfaces/user/UserController';
import { MongooseUserRepository } from './adapters/user/MongooseUserRepository';
import { RegisterUserUseCase } from './application/user/RegisterUserUseCase';
import { LoginUserUseCase } from './application/user/LoginUserUseCase';
import { MongooseLightRepository } from './adapters/light/MongooseLightRepository';

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
}));

const userRepository = new MongooseUserRepository();

const lightRepository = new MongooseLightRepository();
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase(userRepository);


const userController = new UserController(registerUserUseCase, loginUserUseCase);

app.post('/api/register', (req, res) => userController.register(req, res));
app.post('/api/login', (req, res) => userController.login(req, res));
app.use('/api', gateRoutes); 
app.use('/api', lightRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
