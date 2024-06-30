"use strict";
// src/adapters/light/MongooseLightRepository.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseLightRepository = void 0;
const LightModel_1 = __importDefault(require("../../models/LightModel"));
class MongooseLightRepository {
    async getLight() {
        const light = await LightModel_1.default.findOne();
        return light ? { isOn: light.isOn } : null;
    }
    async toggleLight() {
        const light = await LightModel_1.default.findOne();
        if (light) {
            light.isOn = !light.isOn;
            await light.save();
        }
        else {
            await LightModel_1.default.create({ isOn: true });
        }
    }
}
exports.MongooseLightRepository = MongooseLightRepository;
//# sourceMappingURL=MongooseLightRepository.js.map