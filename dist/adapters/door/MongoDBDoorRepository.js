"use strict";
// src/adapters/door/MongoDBDoorRepository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBDoorRepository = void 0;
const DoorModel_1 = require("../../models/DoorModel");
class MongoDBDoorRepository {
    async findById(id) {
        const doorDocument = await DoorModel_1.DoorModel.findById(id).exec();
        if (!doorDocument) {
            return null;
        }
        return this.mapToDomain(doorDocument);
    }
    async save(door) {
        const existingDoor = await DoorModel_1.DoorModel.findById(door.id).exec();
        if (existingDoor) {
            existingDoor.name = door.name;
            existingDoor.isOpen = door.isOpen;
            const updatedDoorDocument = await existingDoor.save();
            return this.mapToDomain(updatedDoorDocument);
        }
        const newDoorDocument = await DoorModel_1.DoorModel.create(door);
        return this.mapToDomain(newDoorDocument);
    }
    mapToDomain(doorDocument) {
        return {
            id: doorDocument._id.toString(),
            name: doorDocument.name,
            isOpen: doorDocument.isOpen,
        };
    }
}
exports.MongoDBDoorRepository = MongoDBDoorRepository;
//# sourceMappingURL=MongoDBDoorRepository.js.map