"use strict";
// src/interfaces/light/LightRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LightController_1 = require("./LightController");
const auth_1 = require("../../middlewares/auth");
const User_1 = require("../../domain/user/User");
const router = express_1.default.Router();
const lightController = new LightController_1.LightController();
router.get('/light/status', auth_1.authMiddleware, (req, res) => lightController.getLightStatus(req, res));
router.post('/light/toggle', auth_1.authMiddleware, (0, auth_1.roleMiddleware)([User_1.UserRole.ADMIN]), (req, res) => lightController.toggleLight(req, res));
exports.default = router;
//# sourceMappingURL=LightRoutes.js.map