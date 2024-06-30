// src/ports/gate/GateRepository.ts
export interface GateRepository {
    getGateState(): Promise<boolean>;
    setGateState(isOpen: boolean): Promise<void>;
  }
  