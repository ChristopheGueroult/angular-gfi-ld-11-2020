import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  tva: number;
  state: StateClient;
  name: string;
  totalCaHt: number;
  comment: string;
  id: number;
}
