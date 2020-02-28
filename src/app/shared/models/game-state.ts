import { Round } from './round';
import { GameStatus } from '../enums/status';

export interface GameState {
  status: GameStatus;
  player_name: string;
  past_rounds: Round[];
}
