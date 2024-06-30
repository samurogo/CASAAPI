"use strict";
// src/application/light/ToggleLightUseCase.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleLightUseCase = void 0;
class ToggleLightUseCase {
    constructor(lightRepository) {
        this.lightRepository = lightRepository;
    }
    async execute(lightId) {
        const light = await this.lightRepository.findById(lightId);
        if (!light) {
            throw new Error('Light not found');
        }
        light.isOn = !light.isOn;
        return await this.lightRepository.save(light);
    }
}
exports.ToggleLightUseCase = ToggleLightUseCase;
//# sourceMappingURL=ToggleLightUseCase.js.map