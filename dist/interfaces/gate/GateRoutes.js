"use strict";
// src/interfaces/gate/GateRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GateController_1 = require("./GateController");
const auth_1 = require("../../middlewares/auth");
const User_1 = require("../../domain/user/User");
const router = express_1.default.Router();
const gateController = new GateController_1.GateController();
router.get('/gate/status', auth_1.authMiddleware, (req, res) => gateController.getGateStatus(req, res));
router.post('/gate/toggle', auth_1.authMiddleware, (0, auth_1.roleMiddleware)([User_1.UserRole.ADMIN, User_1.UserRole.FAMILIAR, User_1.UserRole.THIEF]), (req, res) => gateController.toggleGate(req, res));
exports.default = router;
//# sourceMappingURL=GateRoutes.js.map