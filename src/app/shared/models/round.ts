import { Result } from '../enums/result';
import { Choice } from '../enums/choice';

export interface Round {
  player: {
    choice: Choice,
    result: Result
  };
  computer: {
    choice: Choice,
    result: Result
  };
}
