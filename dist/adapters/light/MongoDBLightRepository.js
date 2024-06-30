"use strict";
// MongoDBLightRepository.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBLightRepository = void 0;
const Light_1 = require("../../domain/light/Light");
const LightModel_1 = __importDefault(require("../../models/LightModel")); // Importa LightModel correctamente
class MongoDBLightRepository {
    async findById(id) {
        const lightDocument = await LightModel_1.default.findById(id).exec();
        if (!lightDocument) {
            return null;
        }
        return new Light_1.Light(lightDocument._id.toString(), lightDocument.name, lightDocument.isOn);
    }
    async save(light) {
        const existingLight = await LightModel_1.default.findById(light.id).exec();
        if (existingLight) {
            existingLight.name = light.name;
            existingLight.isOn = light.isOn;
            await existingLight.save();
            return new Light_1.Light(existingLight._id.toString(), existingLight.name, existingLight.isOn);
        }
        const newLightDocument = await LightModel_1.default.create({
            _id: light.id,
            name: light.name,
            isOn: light.isOn,
        });
        return new Light_1.Light(newLightDocument._id.toString(), newLightDocument.name, newLightDocument.isOn);
    }
}
exports.MongoDBLightRepository = MongoDBLightRepository;
//# sourceMappingURL=MongoDBLightRepository.js.map