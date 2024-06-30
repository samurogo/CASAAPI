"use strict";
// src/interfaces/light/LightController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightController = void 0;
class LightController {
    constructor() {
        this.lightState = {
            isOn: false, // Inicialmente el foco está apagado
        };
    }
    toggleLight(req, res) {
        this.lightState.isOn = !this.lightState.isOn;
        const status = this.lightState.isOn ? 'on' : 'off';
        res.status(200).json({ message: `Light turned ${status} successfully` });
    }
    getLightStatus(req, res) {
        const status = this.lightState.isOn ? 'on' : 'off';
        res.status(200).json({ status });
    }
}
exports.LightController = LightController;
//# sourceMappingURL=LightController.js.map