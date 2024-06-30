"use strict";
// src/application/door/ToggleDoorUseCase.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleDoorUseCase = void 0;
class ToggleDoorUseCase {
    constructor(doorRepository) {
        this.doorRepository = doorRepository;
    }
    async execute(doorId) {
        const door = await this.doorRepository.findById(doorId);
        if (!door) {
            throw new Error('Door not found');
        }
        door.isOpen = !door.isOpen;
        return await this.doorRepository.save(door);
    }
}
exports.ToggleDoorUseCase = ToggleDoorUseCase;
//# sourceMappingURL=ToggleDoorUseCase.js.map