"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorController = void 0;
class DoorController {
    constructor(toggleDoorUseCase) {
        this.toggleDoorUseCase = toggleDoorUseCase;
    }
    async toggleDoor(req, res) {
        const { doorId } = req.params;
        try {
            const door = await this.toggleDoorUseCase.execute(doorId);
            res.status(200).json(door);
        }
        catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
            res.status(500).json({ message: 'Failed to toggle door', error: errorMessage });
        }
    }
}
exports.DoorController = DoorController;
//# sourceMappingURL=DoorController.js.map