// src/ports/light/LightRepository.ts

import { Light } from '../../domain/light/Light';

export interface LightRepository {
  getLight(): Promise<Light | null>;
  toggleLight(): Promise<void>;
}
