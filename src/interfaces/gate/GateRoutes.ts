// src/interfaces/gate/GateRoutes.ts

import express from 'express';
import { GateController } from './GateController';
import { authMiddleware, roleMiddleware } from '../../middlewares/auth';
import { UserRole } from '../../domain/user/User';

const router = express.Router();
const gateController = new GateController();

router.get('/gate/status', authMiddleware, (req, res) => gateController.getGateStatus(req, res));
router.post('/gate/toggle', authMiddleware, roleMiddleware([UserRole.ADMIN, UserRole.FAMILIAR, UserRole.THIEF]), (req, res) => gateController.toggleGate(req, res));

export default router;
