// src/adapters/light/MongooseLightRepository.ts

import { Light } from '../../domain/light/Light';
import LightModel, { LightDocument } from '../../models/LightModel';
import { LightRepository } from '../../ports/light/LightRepository';

export class MongooseLightRepository implements LightRepository {
  async getLight(): Promise<Light | null> {
    const light = await LightModel.findOne();
    return light ? { isOn: light.isOn } : null;
  }

  async toggleLight(): Promise<void> {
    const light = await LightModel.findOne();
    if (light) {
      light.isOn = !light.isOn;
      await light.save();
    } else {
      await LightModel.create({ isOn: true });
    }
  }
}
