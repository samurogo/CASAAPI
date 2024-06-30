"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseGateRepository = void 0;
// src/adapters/gate/MongooseGateRepository.ts
const GateModel_1 = __importDefault(require("../../models/GateModel"));
class MongooseGateRepository {
    async getGateState() {
        const gate = await GateModel_1.default.findOne();
        if (!gate) {
            const newGate = new GateModel_1.default();
            await newGate.save();
            return newGate.isOpen;
        }
        return gate.isOpen;
    }
    async setGateState(isOpen) {
        const gate = await GateModel_1.default.findOne();
        if (gate) {
            gate.isOpen = isOpen;
            await gate.save();
        }
        else {
            const newGate = new GateModel_1.default({ isOpen });
            await newGate.save();
        }
    }
}
exports.MongooseGateRepository = MongooseGateRepository;
//# sourceMappingURL=MongooseGateRepository.js.map