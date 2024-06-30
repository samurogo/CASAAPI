
import { Request, Response } from 'express';
import { Gate } from '../../domain/gate/Gate';
import { Resend } from 'resend';

const resend = new Resend('re_aL2G4RSy_BGE7vKuzYmG7oKpQmf7oGZ4K');

export class GateController {
  private gateState: Gate = {
    isOpen: false,
  };

  async toggleGate(req: Request, res: Response): Promise<void> {
    const userRole = req.user?.role;
    if (userRole === 'thief') {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'kk746084@gmail.com',
          subject: 'Intento de Apertura del Portón',
          html: `<p>Un usuario con rol de ladrón ha intentado abrir el portón.</p>`
        });
        res.status(403).json({ message: 'Access forbidden. Alert sent.' });
      } catch (error: any) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: 'Failed to send alert email', error: errorMessage });
      }
      return;
    }

    this.gateState.isOpen = !this.gateState.isOpen;
    const status = this.gateState.isOpen ? 'open' : 'closed';
    res.status(200).json({ message: `Gate ${status} successfully` });
  }

  getGateStatus(req: Request, res: Response): void {
    const status = this.gateState.isOpen ? 'open' : 'closed';
    res.status(200).json({ status });
  }
}
