// src/interfaces/light/LightController.ts

import { Request, Response } from 'express';
import { Light } from '../../domain/light/Light';

export class LightController {
  private lightState: Light = {
    isOn: false, // Inicialmente el foco está apagado
  };

  toggleLight(req: Request, res: Response): void {
    this.lightState.isOn = !this.lightState.isOn;
    const status = this.lightState.isOn ? 'on' : 'off';
    res.status(200).json({ message: `Light turned ${status} successfully` });
  }

  getLightStatus(req: Request, res: Response): void {
    const status = this.lightState.isOn ? 'on' : 'off';
    res.status(200).json({ status });
  }
}
