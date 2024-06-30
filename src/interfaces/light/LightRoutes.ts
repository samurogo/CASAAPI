// src/interfaces/light/LightRoutes.ts

import express from 'express';
import { LightController } from './LightController';
import { authMiddleware, roleMiddleware } from '../../middlewares/auth';
import { UserRole } from '../../domain/user/User';

const router = express.Router();
const lightController = new LightController();

router.get('/light/status', authMiddleware, (req, res) => lightController.getLightStatus(req, res));
router.post('/light/toggle', authMiddleware, roleMiddleware([UserRole.ADMIN]), (req, res) => lightController.toggleLight(req, res));

export default router;
