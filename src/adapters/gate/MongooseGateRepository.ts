// src/adapters/gate/MongooseGateRepository.ts
import GateModel, { GateDocument } from '../../models/GateModel';
import { GateRepository } from '../../ports/gate/GateRepository';

export class MongooseGateRepository implements GateRepository {
  async getGateState(): Promise<boolean> {
    const gate = await GateModel.findOne();
    if (!gate) {
      const newGate = new GateModel();
      await newGate.save();
      return newGate.isOpen;
    }
    return gate.isOpen;
  }

  async setGateState(isOpen: boolean): Promise<void> {
    const gate = await GateModel.findOne();
    if (gate) {
      gate.isOpen = isOpen;
      await gate.save();
    } else {
      const newGate = new GateModel({ isOpen });
      await newGate.save();
    }
  }
}
